# ReadyReserve AI Automation Platform

A modern AI-powered automation platform built with React, TypeScript, and Supabase.

## 🚀 Quick Start

### Frontend (React + Vite)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at: http://localhost:8080

### Backend (Supabase)

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your Project URL and API key

2. **Set Up Environment Variables**
   ```bash
   # Copy the template
   cp env-template.txt .env.local
   
   # Edit .env.local with your Supabase credentials
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

3. **Set Up Database**
   - Follow the detailed guide in `SUPABASE_SETUP.md`
   - Run the database migrations in your Supabase SQL Editor

4. **Deploy Edge Functions (Optional)**
   - Deploy the AI chat functions from `supabase/functions/`
   - Set up your `AI_API_KEY` in function environment variables

5. **Start Python Chatbot Service (Recommended)**
   ```bash
   # Windows
   start_chatbot.bat
   
   # Linux/Mac
   python start_chatbot.py
   ```
   - The chatbot service provides comprehensive website knowledge and FAQ
   - Available at: http://localhost:8001
   - API Documentation: http://localhost:8001/docs

## 🏗️ Project Structure

```
readyreserve-automate-ai/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── integrations/      # API integrations
│   │   ├── supabase/      # Supabase client
│   │   └── chatbot/       # Python chatbot client
│   └── ...
├── chatbot/               # Python chatbot service
│   ├── main.py           # FastAPI chatbot application
│   ├── website_knowledge.py # Comprehensive website knowledge base
│   ├── requirements.txt  # Python dependencies
│   └── README.md         # Chatbot documentation
├── supabase/             # Supabase configuration
│   ├── functions/        # Edge Functions (now use Python chatbot)
│   ├── migrations/       # Database migrations
│   └── config.toml       # Supabase config
└── ...
```

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Router** - Client-side routing

### Backend
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Supabase Auth** - Built-in authentication system
- **Supabase Edge Functions** - Serverless functions that connect to Python chatbot
- **Python Chatbot Service** - FastAPI service with comprehensive website knowledge
- **PostgreSQL** - Robust relational database
- **Row Level Security** - Database-level security policies

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# Optional: For Edge Functions (OpenAI API Key)
AI_API_KEY=your_openai_api_key_here

# Optional: For Python Chatbot Service
VITE_CHATBOT_API_URL=http://localhost:8001

# Optional: For n8n Integration
VITE_N8N_API_URL=http://localhost:5678
```

### Supabase Configuration

The frontend automatically connects to Supabase. Make sure your Supabase project is properly configured with:
- Database tables (run migrations)
- Authentication settings
- Edge Functions (for AI features)

## 📚 API Documentation

Supabase provides built-in API documentation:
- **Supabase Dashboard**: https://supabase.com/dashboard
- **API Reference**: Available in your project dashboard
- **Database Schema**: View tables and relationships in the dashboard

## 🚀 Features

### Frontend Features
- 🤖 **AI Chat Interface** - Interactive chat with Ready Assistants
- 📊 **Admin Dashboard** - Manage automations and users
- 🔧 **Automation Configuration** - Set up and customize automations
- 💬 **Real-time Chat** - Live chat with Ready Assistants
- 📱 **Responsive Design** - Works on all devices
- 🌙 **Dark/Light Theme** - Theme switching support

### Backend Features
- 🔐 **Supabase Auth** - Built-in authentication and user management
- 🤖 **AI Integration** - Edge Functions with OpenAI API
- 🧠 **Smart Chatbot** - Python service with comprehensive website knowledge
- ❓ **FAQ Integration** - Intelligent FAQ search and responses
- 🔗 **n8n Integration** - Native workflow automation with n8n
- 📊 **PostgreSQL Database** - Robust relational database with RLS
- 🔄 **Real-time Updates** - Live data synchronization
- 📝 **Auto-generated APIs** - REST and GraphQL APIs
- 🛡️ **Row Level Security** - Database-level security policies

## 🗄️ Database

Supabase provides a PostgreSQL database with the following tables:

- **profiles** - User profiles and information
- **user_roles** - User roles (admin/user)
- **automations** - Available automation templates
- **user_automations** - User's active automations
- **automation_configs** - User-specific configurations
- **automation_logs** - Execution logs and history
- **automation_usage** - Usage tracking and analytics
- **contact_submissions** - Contact form submissions
- **newsletter_subscriptions** - Newsletter signups

## 🔄 Supabase Integration

This project is built with Supabase as the backend, providing:

- ✅ **Built-in Authentication** - User management and security
- ✅ **Real-time Database** - Live data synchronization
- ✅ **Edge Functions** - Serverless AI chat functionality
- ✅ **Row Level Security** - Database-level access control
- ✅ **Auto-generated APIs** - REST and GraphQL endpoints

## 🔗 n8n Workflow Deployment

ReadyReserve AI provides pre-built n8n workflows with your agents already integrated:

### **Features:**
- 📋 **Pre-built Workflows** - Ready-to-deploy n8n workflows with ReadyReserve AI agents
- ⚙️ **Easy Configuration** - Just add your business information and API keys
- 🚀 **One-Click Deployment** - Download and import workflows into your n8n instance
- 🎯 **Webhook Integration** - Workflows automatically connect to ReadyReserve AI agents
- 📊 **Execution Logging** - Track all automation runs and results

### **How It Works:**
1. **Choose Automation** - Select the ReadyReserve AI agent you want to use
2. **Add Your Information** - Configure with your API keys, business data, and preferences
3. **Download Workflow** - Get the pre-built n8n workflow file
4. **Import to n8n** - Import the workflow into your n8n instance
5. **Activate & Use** - Turn on the workflow and start using your AI agent

### **Available Workflows:**
- **Customer Support Chatbot** - AI-powered customer service with your business info
- **Lead Qualification** - Automated lead scoring with your CRM integration
- **Social Media Posting** - Content generation with your brand voice
- **Document Processing** - OCR and data extraction for your business
- **Analytics Dashboard** - Business intelligence with your data sources

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
```

### Backend Deployment

Supabase handles backend deployment automatically:

1. **Database**: Managed PostgreSQL with automatic backups
2. **Edge Functions**: Deploy from Supabase dashboard
3. **Authentication**: Built-in and managed by Supabase
4. **Storage**: File storage with CDN

#### Deploy Edge Functions
```bash
# Install Supabase CLI
npm install -g supabase

# Login and link project
supabase login
supabase link --project-ref your-project-ref

# Deploy functions
supabase functions deploy chat
supabase functions deploy agent-chat
supabase functions deploy execute-automation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the ReadyReserve AI Automation Platform.

## 🆘 Support

For support and questions:
- Check the detailed setup guide in `SUPABASE_SETUP.md`
- Review the Supabase documentation at https://supabase.com/docs
- Open an issue on GitHub

---

**ReadyReserve AI** - Your growth partner for AI-driven digital transformation.