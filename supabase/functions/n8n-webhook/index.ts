import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const automationId = pathParts[pathParts.length - 1];

    if (!automationId) {
      return new Response(
        JSON.stringify({ error: 'Automation ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get request body
    const body = await req.json();
    
    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get automation details
    const { data: automation, error: automationError } = await supabase
      .from('automations')
      .select('*')
      .eq('id', automationId)
      .single();

    if (automationError || !automation) {
      return new Response(
        JSON.stringify({ error: 'Automation not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Log the webhook trigger
    const { error: logError } = await supabase
      .from('automation_logs')
      .insert({
        automation_id: automationId,
        trigger_type: 'n8n_webhook',
        input_data: body,
        status: 'triggered',
        message: 'Automation triggered by n8n webhook'
      });

    if (logError) {
      console.error('Error logging webhook trigger:', logError);
    }

    // Get AI API key
    const AI_API_KEY = Deno.env.get('AI_API_KEY');
    if (!AI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'AI_API_KEY not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Prepare the AI request
    const systemPrompt = `You are a Ready Assistant for the "${automation.title}" automation. 
${automation.description}

Your task is to process the incoming data from n8n and provide a helpful response.

Automation features: ${automation.features ? JSON.parse(automation.features).join(", ") : "general assistance"}

Process the following data and provide a structured response:`;

    const userPrompt = `Process this n8n webhook data:
${JSON.stringify(body, null, 2)}

Provide a JSON response with:
- status: "success" or "error"
- message: Brief description of what was processed
- data: Processed/transformed data
- next_steps: Suggested next actions (optional)`;

    // Call OpenAI API
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`OpenAI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const aiContent = aiData.choices[0].message.content;

    // Try to parse the AI response as JSON
    let processedResponse;
    try {
      processedResponse = JSON.parse(aiContent);
    } catch {
      // If not JSON, wrap in a standard response
      processedResponse = {
        status: 'success',
        message: 'Data processed successfully',
        data: aiContent,
        original_data: body
      };
    }

    // Log the successful execution
    const { error: executionLogError } = await supabase
      .from('automation_logs')
      .insert({
        automation_id: automationId,
        trigger_type: 'n8n_webhook',
        input_data: body,
        output_data: processedResponse,
        status: 'success',
        message: 'Automation executed successfully via n8n webhook',
        duration_ms: Date.now() - Date.now() // This would be calculated properly in a real implementation
      });

    if (executionLogError) {
      console.error('Error logging execution:', executionLogError);
    }

    // Return the processed response
    return new Response(
      JSON.stringify({
        success: true,
        automation: {
          id: automation.id,
          title: automation.title,
          description: automation.description
        },
        processed_data: processedResponse,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('n8n webhook error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
