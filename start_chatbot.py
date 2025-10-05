#!/usr/bin/env python3
"""
Startup script for ReadyReserve AI Ready Assistant Service
Run this from the project root directory
"""
import subprocess
import sys
import os
from pathlib import Path

def main():
    # Check if we're in the right directory
    if not Path("chatbot").exists():
        print("Error: chatbot directory not found. Please run this script from the project root.")
        sys.exit(1)
    
    # Change to chatbot directory
    os.chdir("chatbot")
    
    print("🤖 Starting ReadyReserve AI Ready Assistant Service...")
    print("📁 Working directory:", os.getcwd())
    
    try:
        # Check if Python is available
        subprocess.run([sys.executable, "--version"], check=True)
        
        # Install dependencies if requirements.txt exists
        if Path("requirements.txt").exists():
            print("📦 Installing dependencies...")
            subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"], check=True)
        
        # Run the chatbot service
        print("🔥 Starting FastAPI chatbot service...")
        subprocess.run([sys.executable, "run.py"], check=True)
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n👋 Shutting down chatbot service...")
        sys.exit(0)

if __name__ == "__main__":
    main()
