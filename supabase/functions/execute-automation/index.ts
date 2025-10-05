import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('Unauthorized');
    }

    const { automationId, inputData } = await req.json();
    const startTime = Date.now();

    // Get automation details
    const { data: automation } = await supabase
      .from('automations')
      .select('*')
      .eq('id', automationId)
      .single();

    if (!automation) {
      throw new Error('Automation not found');
    }

    // Get user's config for this automation
    const { data: config } = await supabase
      .from('automation_configs')
      .select('*')
      .eq('user_id', user.id)
      .eq('automation_id', automationId)
      .maybeSingle();

    // Execute automation using AI service
    const AI_API_KEY = Deno.env.get('AI_API_KEY');
    if (!AI_API_KEY) {
      throw new Error('AI_API_KEY not configured');
    }

    const systemPrompt = config?.custom_prompt || 
      `You are a Ready Assistant helping with the "${automation.title}" automation. ${automation.description}`;

    const userPrompt = inputData?.prompt || 
      `Execute the automation task. Input data: ${JSON.stringify(inputData || {})}`;

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
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      throw new Error('AI execution failed');
    }

    const aiData = await aiResponse.json();
    const result = aiData.choices[0].message.content;
    const duration = Date.now() - startTime;

    // Log the execution
    const { error: logError } = await supabase
      .from('automation_logs')
      .insert({
        user_id: user.id,
        automation_id: automationId,
        status: 'success',
        message: 'Automation executed successfully',
        input_data: inputData,
        output_data: { result },
        duration_ms: duration,
      });

    if (logError) {
      console.error('Error logging execution:', logError);
    }

    // Send webhook if configured
    if (config?.webhook_url) {
      try {
        await fetch(config.webhook_url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            automation: automation.title,
            status: 'success',
            result,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }
    }

    return new Response(
      JSON.stringify({ success: true, result, duration }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error executing automation:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});