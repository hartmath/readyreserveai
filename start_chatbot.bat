@echo off
echo 🤖 Starting ReadyReserve AI Ready Assistant Service...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo Please install Python 3.8+ from https://python.org
    pause
    exit /b 1
)

REM Change to chatbot directory
cd chatbot

REM Install dependencies
echo 📦 Installing dependencies...
pip install -r requirements.txt

REM Start the chatbot service
echo 🔥 Starting FastAPI chatbot service...
python run.py

pause
