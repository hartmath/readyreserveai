import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { automationId, messages } = await req.json();
    
    console.log("Agent chat request:", { automationId, messageCount: messages.length });

    // Get automation details
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: automation } = await supabase
      .from("automations")
      .select("*")
      .eq("id", automationId)
      .single();

    if (!automation) {
      throw new Error("Automation not found");
    }

    // Create system prompt based on automation
    const systemPrompt = `You are a Ready Assistant for "${automation.title}". 
${automation.description}

Your capabilities include: ${automation.features ? JSON.parse(automation.features).join(", ") : "general assistance"}.

Be helpful, concise, and demonstrate the unique value of this automation. 
Show users what makes this agent special and how it can solve their specific needs.
Keep responses engaging and highlight practical examples.`;

    // Get chatbot service URL from environment or use default
    const CHATBOT_SERVICE_URL = Deno.env.get("CHATBOT_SERVICE_URL") || "http://localhost:8001";
    
    // Forward request to Python chatbot service with automation context
    const aiResponse = await fetch(`${CHATBOT_SERVICE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((m: any) => ({ role: m.role, content: m.content }))
        ],
        user_id: "supabase_user"
      }),
    });

    if (!aiResponse.ok) {
      console.error("Chatbot service error:", aiResponse.status);
      return new Response(
        JSON.stringify({ error: "Chatbot service unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await aiResponse.json();
    const content = data.content;

    console.log("Agent response generated successfully");

    return new Response(
      JSON.stringify({ content }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Agent chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment."
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
