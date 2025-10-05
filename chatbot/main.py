"""
ReadyReserve AI Chatbot Service
A Python FastAPI service that knows everything about the website and can answer user questions
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import openai
import os
from dotenv import load_dotenv
import json

from website_knowledge import get_website_knowledge, search_faq, get_service_info

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="ReadyReserve AI Chatbot",
    description="Ready Assistant that knows everything about ReadyReserve AI website",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://localhost:3000", "http://127.0.0.1:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

# Pydantic models
class ChatMessage(BaseModel):
    role: str  # "user", "assistant", "system"
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    user_id: Optional[str] = None

class ChatResponse(BaseModel):
    content: str
    sources: Optional[List[str]] = None
    faq_matches: Optional[List[dict]] = None

class FAQSearchRequest(BaseModel):
    question: str
    category: Optional[str] = None

class FAQSearchResponse(BaseModel):
    results: List[dict]

# Get website knowledge
WEBSITE_KNOWLEDGE = get_website_knowledge()

def create_system_prompt():
    """Create a comprehensive system prompt with all website knowledge"""
    knowledge = WEBSITE_KNOWLEDGE
    
    system_prompt = f"""You are a Ready Assistant for ReadyReserve AI, a company that provides AI-driven digital transformation services for medium-sized businesses.

COMPANY INFORMATION:
- Name: {knowledge['website_info']['name']}
- Tagline: {knowledge['website_info']['tagline']}
- Description: {knowledge['website_info']['description']}
- Mission: {knowledge['website_info']['mission']}

SERVICE CATEGORIES:
"""
    
    for category_key, category_data in knowledge['service_categories'].items():
        system_prompt += f"\n{category_data['name']}: {category_data['description']}\n"
        for service in category_data['services']:
            system_prompt += f"  - {service['name']}: {service['description']}\n"
            system_prompt += f"    Features: {', '.join(service['features'])}\n"
            system_prompt += f"    Use Cases: {', '.join(service['use_cases'])}\n"
    
    system_prompt += f"""

HOW IT WORKS:
1. {knowledge['how_it_works']['step_1']['title']}: {knowledge['how_it_works']['step_1']['description']}
2. {knowledge['how_it_works']['step_2']['title']}: {knowledge['how_it_works']['step_2']['description']}
3. {knowledge['how_it_works']['step_3']['title']}: {knowledge['how_it_works']['step_3']['description']}

INTEGRATIONS:
- AI Platforms: {', '.join(knowledge['integrations']['ai_platforms'])}
- Workflow Tools: {', '.join(knowledge['integrations']['workflow_tools'])}
- Business Tools: {', '.join(knowledge['integrations']['business_tools'])}

PRICING PLANS:
"""
    
    for plan_key, plan_data in knowledge['pricing'].items():
        system_prompt += f"- {plan_data['name']} ({plan_data['price']}): {plan_data['description']}\n"
        system_prompt += f"  Features: {', '.join(plan_data['features'])}\n"
    
    system_prompt += f"""

CONTACT INFORMATION:
- Email: {knowledge['contact_info']['email']}
- Phone: {knowledge['contact_info']['phone']}
- Support: {knowledge['contact_info']['support_email']}
- Sales: {knowledge['contact_info']['sales_email']}
- Hours: {knowledge['contact_info']['hours']}

SOCIAL MEDIA:
- Twitter: {knowledge['social_media']['twitter']}
- LinkedIn: {knowledge['social_media']['linkedin']}

INSTRUCTIONS:
1. Be helpful, friendly, and professional
2. Provide accurate information based on the knowledge above
3. If asked about specific services, provide detailed information including features and use cases
4. If asked about pricing, explain the different plans and their benefits
5. If asked about how it works, explain the 3-step process
6. Always encourage users to book a consultation for personalized solutions
7. If you don't know something specific, offer to connect them with our team
8. Use the FAQ data to provide comprehensive answers to common questions
9. Be conversational but informative
10. Focus on the value and benefits for the user's business

Remember: You are representing ReadyReserve AI and should always maintain a professional, helpful tone while being enthusiastic about how AI can transform their business."""
    
    return system_prompt

@app.get("/")
async def root():
    return {
        "message": "ReadyReserve AI Ready Assistant Service",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ReadyReserve AI Ready Assistant"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Main chat endpoint that knows everything about the website"""
    try:
        # Search FAQ for relevant information
        user_message = request.messages[-1].content if request.messages else ""
        faq_matches = search_faq(user_message)
        
        # Create system prompt with website knowledge
        system_prompt = create_system_prompt()
        
        # Add FAQ context if matches found
        if faq_matches:
            system_prompt += "\n\nRELEVANT FAQ INFORMATION:\n"
            for match in faq_matches[:3]:  # Limit to top 3 matches
                system_prompt += f"Q: {match['question']}\nA: {match['answer']}\n\n"
        
        # Prepare messages for OpenAI
        messages = [
            {"role": "system", "content": system_prompt}
        ]
        
        # Add conversation history
        for msg in request.messages:
            messages.append({"role": msg.role, "content": msg.content})
        
        # Call OpenAI API
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=1000,
            temperature=0.7
        )
        
        content = response.choices[0].message.content
        
        # Prepare sources
        sources = []
        if faq_matches:
            sources.extend([f"FAQ: {match['question']}" for match in faq_matches[:3]])
        
        return ChatResponse(
            content=content,
            sources=sources,
            faq_matches=faq_matches[:3] if faq_matches else None
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")

@app.post("/search-faq", response_model=FAQSearchResponse)
async def search_faq_endpoint(request: FAQSearchRequest):
    """Search FAQ for specific questions"""
    try:
        results = search_faq(request.question, request.category)
        return FAQSearchResponse(results=results)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"FAQ search error: {str(e)}")

@app.get("/faq-categories")
async def get_faq_categories():
    """Get all FAQ categories"""
    categories = list(set([faq["category"] for faq in WEBSITE_KNOWLEDGE["faq"]]))
    return {"categories": categories}

@app.get("/faq/{category}")
async def get_faq_by_category(category: str):
    """Get FAQ by category"""
    category_faq = []
    for faq_item in WEBSITE_KNOWLEDGE["faq"]:
        if faq_item["category"].lower() == category.lower():
            category_faq.extend(faq_item["questions"])
    
    if not category_faq:
        raise HTTPException(status_code=404, detail="Category not found")
    
    return {"category": category, "questions": category_faq}

@app.get("/services")
async def get_services():
    """Get all available services"""
    return {"services": WEBSITE_KNOWLEDGE["service_categories"]}

@app.get("/services/{service_name}")
async def get_service_details(service_name: str):
    """Get detailed information about a specific service"""
    service_info = get_service_info(service_name)
    if not service_info:
        raise HTTPException(status_code=404, detail="Service not found")
    return service_info

@app.get("/pricing")
async def get_pricing():
    """Get pricing information"""
    return {"pricing": WEBSITE_KNOWLEDGE["pricing"]}

@app.get("/contact")
async def get_contact_info():
    """Get contact information"""
    return {"contact": WEBSITE_KNOWLEDGE["contact_info"]}

@app.get("/how-it-works")
async def get_how_it_works():
    """Get how it works information"""
    return {"how_it_works": WEBSITE_KNOWLEDGE["how_it_works"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
