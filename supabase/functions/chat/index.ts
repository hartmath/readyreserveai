import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    
    // Get chatbot service URL from environment or use default
    const CHATBOT_SERVICE_URL = Deno.env.get("CHATBOT_SERVICE_URL") || "http://localhost:8001";
    
    // Forward request to Python chatbot service
    const response = await fetch(`${CHATBOT_SERVICE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages,
        user_id: "supabase_user"
      }),
    });

    if (!response.ok) {
      console.error("Chatbot service error:", response.status);
      return new Response(JSON.stringify({ error: "Chatbot service unavailable" }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const chatbotResponse = await response.json();
    
    // Return the response in the expected format
    return new Response(JSON.stringify({ 
      content: chatbotResponse.content,
      sources: chatbotResponse.sources,
      faq_matches: chatbotResponse.faq_matches
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
    
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});