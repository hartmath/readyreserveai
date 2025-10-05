#!/usr/bin/env python3
"""
Startup script for ReadyReserve AI Chatbot Service
"""
import uvicorn
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

if __name__ == "__main__":
    print("🤖 Starting ReadyReserve AI Ready Assistant Service...")
    print("📚 Loaded comprehensive website knowledge base")
    print("🔗 API Documentation: http://localhost:8001/docs")
    print("💬 Chat endpoint: http://localhost:8001/chat")
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8001,
        reload=True,
        log_level="info"
    )
