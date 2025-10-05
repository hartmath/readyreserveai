# ReadyReserve AI Chatbot Service

A Python FastAPI service that knows everything about the ReadyReserve AI website and can answer user questions with comprehensive FAQ integration.

## 🚀 Features

- **📚 Complete Website Knowledge**: Knows all about services, pricing, features, and processes
- **❓ FAQ Integration**: Comprehensive FAQ database with smart search
- **🤖 AI-Powered**: Uses OpenAI GPT models for intelligent responses
- **🔍 Smart Search**: Finds relevant FAQ answers based on user questions
- **📊 Service Details**: Detailed information about all automation services
- **💰 Pricing Info**: Complete pricing plans and features
- **📞 Contact Info**: All contact details and support information

## 🏗️ Architecture

```
Frontend (React) → Supabase Edge Functions → Python Chatbot Service → OpenAI API
```

The chatbot service acts as a knowledge base that:
1. Receives chat requests from Supabase Edge Functions
2. Searches its comprehensive FAQ database
3. Uses OpenAI to generate intelligent responses
4. Returns responses with sources and FAQ matches

## 📋 Knowledge Base Contents

### Service Categories
- **Customer Engagement**: AI Chatbots, Lead Qualification, WhatsApp/SMS Automation
- **Marketing & Sales**: Social Media Posting, Campaign Optimization, CRM Integration
- **Operations**: Appointment Scheduling, Document Automation, Workflow Approvals
- **Data & Insights**: Analytics Dashboards, Automated Reports, Predictive Forecasting
- **Compliance & Security**: GDPR Compliance, HIPAA Alerts, Security Monitoring

### FAQ Categories
- **General**: Company info, how it works, target audience
- **Services**: Service details, customization, integrations
- **Pricing**: Plans, trials, setup fees, plan changes
- **Support**: Support types, training, documentation
- **Security**: Data security, compliance, data export

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd chatbot
pip install -r requirements.txt
```

### 2. Set Up Environment
```bash
# Copy the example file
cp env_example.txt .env

# Edit .env with your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Run the Service
```bash
# Option 1: Using the startup script (from project root)
python start_chatbot.py

# Option 2: Direct run (from chatbot directory)
python run.py
```

The service will be available at: http://localhost:8001

## 📚 API Endpoints

### Chat
- `POST /chat` - Main chat endpoint with website knowledge
- `POST /search-faq` - Search FAQ for specific questions

### Information
- `GET /services` - Get all available services
- `GET /services/{service_name}` - Get specific service details
- `GET /pricing` - Get pricing information
- `GET /contact` - Get contact information
- `GET /how-it-works` - Get process information

### FAQ
- `GET /faq-categories` - Get all FAQ categories
- `GET /faq/{category}` - Get FAQ by category

### Health
- `GET /health` - Health check endpoint

## 🔧 Configuration

### Environment Variables
```env
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional
CHATBOT_TEMPERATURE=0.7
CHATBOT_MAX_TOKENS=1000
CHATBOT_MODEL=gpt-3.5-turbo
```

### API Documentation
Once running, visit: http://localhost:8001/docs

## 🔄 Integration with Supabase

The chatbot service integrates with Supabase Edge Functions:

1. **Frontend** sends chat request to Supabase Edge Function
2. **Edge Function** forwards request to Python chatbot service
3. **Chatbot Service** processes with website knowledge and FAQ
4. **Response** sent back through Edge Function to Frontend

### Supabase Configuration
Set environment variable in Supabase Edge Functions:
```env
CHATBOT_SERVICE_URL=http://localhost:8001
```

## 📊 Knowledge Base Structure

The knowledge base is organized in `website_knowledge.py`:

```python
# Main categories
WEBSITE_INFO = {...}           # Company information
SERVICE_CATEGORIES = {...}     # All services by category
HOW_IT_WORKS = {...}          # Process information
INTEGRATIONS = {...}          # Supported integrations
PRICING = {...}               # Pricing plans
FAQ_DATA = [...]              # Comprehensive FAQ
CONTACT_INFO = {...}          # Contact details
```

## 🎯 Usage Examples

### Basic Chat
```python
from chatbot_client import chatbotClient

response = await chatbotClient.chat({
    "messages": [
        {"role": "user", "content": "What services do you offer?"}
    ]
})
print(response.content)
```

### FAQ Search
```python
faq_results = await chatbotClient.searchFAQ({
    "question": "What are your pricing plans?",
    "category": "Pricing"
})
```

### Service Information
```python
services = await chatbotClient.getServices()
pricing = await chatbotClient.getPricing()
contact = await chatbotClient.getContactInfo()
```

## 🔍 FAQ Search Features

The chatbot includes intelligent FAQ search that:
- Matches questions to relevant FAQ entries
- Provides context-aware answers
- Shows source information
- Categorizes results by topic

### FAQ Categories
- **General**: Company overview and basic information
- **Services**: Detailed service information and capabilities
- **Pricing**: Pricing plans, trials, and billing
- **Support**: Support options and training
- **Security**: Security, compliance, and data protection

## 🚀 Deployment

### Local Development
```bash
python run.py
```

### Production Deployment
```bash
# Using uvicorn directly
uvicorn main:app --host 0.0.0.0 --port 8001

# Using Docker
docker build -t readyreserve-chatbot .
docker run -p 8001:8001 readyreserve-chatbot
```

### Environment Setup
Make sure to set the `OPENAI_API_KEY` environment variable in production.

## 🔧 Customization

### Adding New FAQ Entries
Edit `website_knowledge.py` and add to the `FAQ_DATA` list:

```python
{
    "category": "New Category",
    "questions": [
        {
            "question": "Your question?",
            "answer": "Your detailed answer."
        }
    ]
}
```

### Adding New Services
Add to the `SERVICE_CATEGORIES` in `website_knowledge.py`:

```python
"new_service": {
    "name": "Service Name",
    "description": "Service description",
    "features": ["Feature 1", "Feature 2"],
    "use_cases": ["Use case 1", "Use case 2"]
}
```

### Modifying System Prompt
Edit the `create_system_prompt()` function in `main.py` to customize how the AI responds.

## 🆘 Troubleshooting

### Common Issues

1. **OpenAI API Key Error**
   - Ensure `OPENAI_API_KEY` is set correctly
   - Check API key has sufficient credits

2. **Service Not Starting**
   - Check Python version (3.8+ required)
   - Install all dependencies: `pip install -r requirements.txt`

3. **Supabase Integration Issues**
   - Verify `CHATBOT_SERVICE_URL` is set in Supabase
   - Check chatbot service is running on correct port

### Logs
The service logs all requests and responses. Check the console output for debugging information.

## 📈 Performance

- **Response Time**: Typically 1-3 seconds
- **Concurrent Users**: Supports multiple simultaneous requests
- **Knowledge Base**: Pre-loaded for fast responses
- **FAQ Search**: Optimized for quick matching

## 🔒 Security

- **API Key**: Stored securely in environment variables
- **CORS**: Configured for specific origins
- **Input Validation**: All inputs validated with Pydantic
- **Error Handling**: Comprehensive error handling and logging

## 📝 License

This chatbot service is part of the ReadyReserve AI Automation Platform.
