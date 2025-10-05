"""
Website Knowledge Base for ReadyReserve AI Chatbot
Contains comprehensive information about the website, services, and FAQ
"""

# Website Information
WEBSITE_INFO = {
    "name": "ReadyReserve AI",
    "tagline": "Your growth partner for AI-driven digital transformation",
    "description": "ReadyReserve brings AI power to medium-sized businesses—fast, flexible, and customized. We integrate with leading AI platforms to automate your workflows.",
    "url": "https://readyreserve.ai",
    "founded": "2024",
    "mission": "To democratize AI automation for businesses of all sizes"
}

# Service Categories
SERVICE_CATEGORIES = {
    "customer_engagement": {
        "name": "Customer Engagement",
        "description": "Enhance customer interactions with AI-powered solutions",
        "services": [
            {
                "name": "AI Chatbots",
                "description": "24/7 customer support with intelligent AI responses and natural language understanding",
                "features": ["Instant Responses", "Natural Conversations", "Multi-Channel Support", "Context Awareness"],
                "use_cases": ["Customer Support", "Lead Qualification", "FAQ Automation", "Order Assistance"]
            },
            {
                "name": "Lead Qualification",
                "description": "Automatically identify and score high-value prospects using AI analysis",
                "features": ["AI Scoring", "Behavior Analysis", "CRM Integration", "Real-time Insights"],
                "use_cases": ["Sales Pipeline", "Marketing Automation", "Customer Segmentation", "Conversion Optimization"]
            },
            {
                "name": "WhatsApp/SMS Automation",
                "description": "Instant communication and engagement through messaging platforms",
                "features": ["Multi-Platform Support", "Automated Responses", "Rich Media", "Analytics"],
                "use_cases": ["Customer Support", "Marketing Campaigns", "Appointment Reminders", "Order Updates"]
            }
        ]
    },
    "marketing_sales": {
        "name": "Marketing & Sales",
        "description": "AI-powered marketing and sales automation solutions",
        "services": [
            {
                "name": "AI Social Media Posting",
                "description": "Automated content creation and posting across all social platforms",
                "features": ["Multi-Platform", "AI Content Suggestions", "Optimal Timing", "Analytics"],
                "use_cases": ["Brand Awareness", "Lead Generation", "Customer Engagement", "Content Marketing"]
            },
            {
                "name": "Campaign Optimization",
                "description": "AI-driven insights to improve marketing campaign performance",
                "features": ["A/B Testing", "Performance Analytics", "Audience Insights", "ROI Tracking"],
                "use_cases": ["Email Marketing", "Social Media", "PPC Campaigns", "Content Strategy"]
            },
            {
                "name": "CRM Integration",
                "description": "Seamless workflow integration with your existing CRM systems",
                "features": ["Data Synchronization", "Automated Updates", "Lead Scoring", "Pipeline Management"],
                "use_cases": ["Sales Automation", "Customer Management", "Lead Tracking", "Reporting"]
            }
        ]
    },
    "operations": {
        "name": "Operations",
        "description": "Streamline business operations with intelligent automation",
        "services": [
            {
                "name": "Appointment Scheduling",
                "description": "Automated scheduling system with intelligent conflict resolution",
                "features": ["Calendar Integration", "Conflict Detection", "Reminder System", "Multi-Timezone"],
                "use_cases": ["Service Booking", "Meeting Scheduling", "Resource Management", "Customer Appointments"]
            },
            {
                "name": "Document Automation",
                "description": "AI-powered document processing, generation, and management",
                "features": ["AI Extraction", "Template Generation", "Workflow Integration", "Version Control"],
                "use_cases": ["Contract Generation", "Invoice Processing", "Report Creation", "Compliance Documentation"]
            },
            {
                "name": "Workflow Approvals",
                "description": "Automated approval processes to speed up business operations",
                "features": ["Multi-Level Approvals", "Conditional Logic", "Notification System", "Audit Trail"],
                "use_cases": ["Purchase Orders", "Expense Approvals", "Content Publishing", "HR Processes"]
            }
        ]
    },
    "data_insights": {
        "name": "Data & Insights",
        "description": "Transform data into actionable business insights",
        "services": [
            {
                "name": "Analytics Dashboards",
                "description": "Real-time business analytics with AI-powered insights",
                "features": ["Real-time Metrics", "Custom Dashboards", "AI Insights", "Interactive Visualizations"],
                "use_cases": ["Performance Monitoring", "KPI Tracking", "Business Intelligence", "Decision Making"]
            },
            {
                "name": "Automated Reports",
                "description": "AI-generated reports with insights and recommendations",
                "features": ["Scheduled Reports", "Custom Templates", "AI Analysis", "Multi-Format Export"],
                "use_cases": ["Monthly Reports", "Performance Analysis", "Compliance Reporting", "Executive Summaries"]
            },
            {
                "name": "Predictive Forecasting",
                "description": "AI-powered forecasting for business planning and strategy",
                "features": ["Trend Analysis", "Seasonal Adjustments", "Confidence Intervals", "Scenario Planning"],
                "use_cases": ["Sales Forecasting", "Demand Planning", "Budget Planning", "Risk Assessment"]
            }
        ]
    },
    "compliance_security": {
        "name": "Compliance & Security",
        "description": "Ensure compliance and security with AI monitoring",
        "services": [
            {
                "name": "GDPR Data Compliance",
                "description": "Automated monitoring and compliance with GDPR regulations",
                "features": ["Data Mapping", "Consent Management", "Breach Detection", "Compliance Reporting"],
                "use_cases": ["Data Protection", "Privacy Compliance", "Audit Preparation", "Risk Management"]
            },
            {
                "name": "HIPAA Alerts",
                "description": "Healthcare-specific compliance monitoring and alerting",
                "features": ["PHI Protection", "Access Monitoring", "Audit Logging", "Incident Response"],
                "use_cases": ["Healthcare Compliance", "Patient Data Protection", "Audit Trails", "Risk Mitigation"]
            },
            {
                "name": "Security Monitoring",
                "description": "24/7 security monitoring with AI threat detection",
                "features": ["Threat Detection", "Anomaly Detection", "Real-time Alerts", "Incident Response"],
                "use_cases": ["Cybersecurity", "Fraud Detection", "Access Control", "Compliance Monitoring"]
            }
        ]
    }
}

# How It Works Process
HOW_IT_WORKS = {
    "step_1": {
        "title": "Choose an Automation Category",
        "description": "Select from our 5 main categories: Customer Engagement, Marketing & Sales, Operations, Data & Insights, or Compliance & Security",
        "details": "Each category contains multiple specialized automations designed for specific business needs"
    },
    "step_2": {
        "title": "Connect Workflow to Your Business Tools",
        "description": "Integrate with your existing tools via n8n workflow automation",
        "details": "We support 200+ integrations including CRM, email, social media, and productivity tools"
    },
    "step_3": {
        "title": "Customize with ReadyReserve AI Consulting",
        "description": "Get personalized setup and optimization with our AI experts",
        "details": "Our team provides training, customization, and ongoing support to ensure maximum ROI"
    }
}

# Integrations
INTEGRATIONS = {
    "ai_platforms": [
        "OpenAI GPT models",
        "Microsoft Azure AI",
        "Google AI Services",
        "Anthropic Claude"
    ],
    "workflow_tools": [
        "n8n (Primary workflow engine)",
        "Zapier",
        "Microsoft Power Automate",
        "IFTTT"
    ],
    "business_tools": [
        "Salesforce CRM",
        "HubSpot",
        "Mailchimp",
        "Slack",
        "Microsoft Teams",
        "Google Workspace",
        "Microsoft 365"
    ]
}

# Pricing Information
PRICING = {
    "starter": {
        "name": "Starter",
        "price": "$99/month",
        "description": "Perfect for small businesses getting started with AI automation",
        "features": [
            "Up to 5 automations",
            "Basic AI chatbot",
            "Email support",
            "Standard integrations"
        ]
    },
    "professional": {
        "name": "Professional",
        "price": "$299/month",
        "description": "Ideal for growing businesses with advanced automation needs",
        "features": [
            "Up to 20 automations",
            "Advanced AI features",
            "Priority support",
            "Custom integrations",
            "Analytics dashboard"
        ]
    },
    "enterprise": {
        "name": "Enterprise",
        "price": "Custom",
        "description": "Tailored solutions for large organizations",
        "features": [
            "Unlimited automations",
            "Custom AI models",
            "Dedicated support",
            "White-label options",
            "Advanced security",
            "Custom development"
        ]
    }
}

# FAQ Data
FAQ_DATA = [
    {
        "category": "General",
        "questions": [
            {
                "question": "What is ReadyReserve AI?",
                "answer": "ReadyReserve AI is your growth partner for AI-driven digital transformation. We bring AI power to medium-sized businesses through fast, flexible, and customized automation solutions. We integrate with leading AI platforms like OpenAI, Microsoft Azure AI, and Google AI Services to automate your workflows."
            },
            {
                "question": "How does ReadyReserve AI work?",
                "answer": "Our process is simple: 1) Choose an automation category from our 5 main areas (Customer Engagement, Marketing & Sales, Operations, Data & Insights, or Compliance & Security), 2) Connect your workflow to your business tools via n8n, and 3) Customize with our AI consulting team for optimal results."
            },
            {
                "question": "What types of businesses can benefit from ReadyReserve AI?",
                "answer": "ReadyReserve AI is designed for medium-sized businesses across all industries. Whether you're in retail, healthcare, finance, manufacturing, or services, our AI automation solutions can be customized to meet your specific needs and industry requirements."
            },
            {
                "question": "Do I need technical expertise to use ReadyReserve AI?",
                "answer": "No technical expertise required! Our platform is designed to be user-friendly, and our AI consulting team provides full setup, training, and ongoing support. We handle the technical complexity so you can focus on growing your business."
            }
        ]
    },
    {
        "category": "Services",
        "questions": [
            {
                "question": "What automation categories do you offer?",
                "answer": "We offer 5 main categories: 1) Customer Engagement (AI chatbots, lead qualification, WhatsApp/SMS automation), 2) Marketing & Sales (social media posting, campaign optimization, CRM integration), 3) Operations (appointment scheduling, document automation, workflow approvals), 4) Data & Insights (analytics dashboards, automated reports, predictive forecasting), and 5) Compliance & Security (GDPR compliance, HIPAA alerts, security monitoring)."
            },
            {
                "question": "Can I customize the AI automations for my business?",
                "answer": "Absolutely! Every automation can be customized to fit your specific business needs. Our AI consulting team works with you to tailor the solutions, integrate with your existing tools, and optimize performance for maximum ROI."
            },
            {
                "question": "What AI platforms do you integrate with?",
                "answer": "We integrate with leading AI platforms including OpenAI GPT models, Microsoft Azure AI, Google AI Services, and Anthropic Claude. We also support workflow tools like n8n, Zapier, and Microsoft Power Automate, plus 200+ business tool integrations."
            },
            {
                "question": "How long does it take to set up an automation?",
                "answer": "Setup time varies by complexity, but most standard automations can be configured within 1-2 weeks. Complex custom solutions may take 4-6 weeks. Our team provides detailed timelines during the consultation phase."
            }
        ]
    },
    {
        "category": "Pricing",
        "questions": [
            {
                "question": "What are your pricing plans?",
                "answer": "We offer three main plans: Starter ($99/month) for small businesses with up to 5 automations, Professional ($299/month) for growing businesses with up to 20 automations and advanced features, and Enterprise (custom pricing) for large organizations with unlimited automations and custom solutions."
            },
            {
                "question": "Is there a free trial available?",
                "answer": "Yes! We offer a 14-day free trial for our Starter plan. This includes access to basic automations, AI chatbot, and email support so you can experience the value before committing."
            },
            {
                "question": "Are there any setup fees?",
                "answer": "Setup fees vary by plan. Starter and Professional plans include basic setup in the monthly fee. Enterprise plans may include custom development costs depending on requirements. We provide transparent pricing during consultation."
            },
            {
                "question": "Can I change my plan later?",
                "answer": "Yes, you can upgrade or downgrade your plan at any time. We'll help you transition smoothly and ensure you don't lose any data or configurations during the change."
            }
        ]
    },
    {
        "category": "Support",
        "questions": [
            {
                "question": "What kind of support do you provide?",
                "answer": "We provide comprehensive support including email support for all plans, priority support for Professional and Enterprise plans, dedicated support for Enterprise customers, and 24/7 monitoring for critical systems. Our AI consulting team is also available for setup, training, and optimization."
            },
            {
                "question": "Do you provide training for my team?",
                "answer": "Yes! We provide comprehensive training for your team including platform orientation, automation management, best practices, and ongoing education. Training is included with Professional and Enterprise plans."
            },
            {
                "question": "What if I need help with a specific integration?",
                "answer": "Our support team specializes in integrations and can help you connect any of our 200+ supported tools. We provide step-by-step guidance, troubleshooting, and custom integration development if needed."
            },
            {
                "question": "Is there documentation available?",
                "answer": "Yes, we provide comprehensive documentation including setup guides, API documentation, best practices, and troubleshooting guides. All documentation is available in our knowledge base and is regularly updated."
            }
        ]
    },
    {
        "category": "Security",
        "questions": [
            {
                "question": "How secure is my data with ReadyReserve AI?",
                "answer": "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and HIPAA regulations, implement 24/7 security monitoring, and provide detailed audit trails. All data is stored securely and access is strictly controlled."
            },
            {
                "question": "Do you comply with industry regulations?",
                "answer": "Yes, we comply with major industry regulations including GDPR for data protection, HIPAA for healthcare, SOC 2 for security standards, and ISO 27001 for information security management. We can help you meet your specific compliance requirements."
            },
            {
                "question": "Where is my data stored?",
                "answer": "Your data is stored in secure, geographically distributed data centers with multiple redundancy layers. We use industry-leading cloud providers with enterprise-grade security and compliance certifications."
            },
            {
                "question": "Can I export my data?",
                "answer": "Yes, you can export your data at any time in standard formats (CSV, JSON, XML). We also provide data migration assistance if you need to move to another platform."
            }
        ]
    }
]

# Contact Information
CONTACT_INFO = {
    "email": "hello@readyreserve.ai",
    "phone": "+1 (555) 123-4567",
    "address": "123 AI Innovation Drive, Tech City, TC 12345",
    "hours": "Monday - Friday: 9:00 AM - 6:00 PM EST",
    "support_email": "support@readyreserve.ai",
    "sales_email": "sales@readyreserve.ai"
}

# Social Media
SOCIAL_MEDIA = {
    "twitter": "@readyreserve_ai",
    "linkedin": "ReadyReserve AI",
    "facebook": "ReadyReserve AI",
    "instagram": "@readyreserve_ai"
}

def get_website_knowledge():
    """Return comprehensive website knowledge for the chatbot"""
    return {
        "website_info": WEBSITE_INFO,
        "service_categories": SERVICE_CATEGORIES,
        "how_it_works": HOW_IT_WORKS,
        "integrations": INTEGRATIONS,
        "pricing": PRICING,
        "faq": FAQ_DATA,
        "contact_info": CONTACT_INFO,
        "social_media": SOCIAL_MEDIA
    }

def search_faq(question, category=None):
    """Search FAQ for relevant answers"""
    results = []
    question_lower = question.lower()
    
    for faq_category in FAQ_DATA:
        if category and faq_category["category"].lower() != category.lower():
            continue
            
        for faq_item in faq_category["questions"]:
            if (question_lower in faq_item["question"].lower() or 
                question_lower in faq_item["answer"].lower()):
                results.append({
                    "category": faq_category["category"],
                    "question": faq_item["question"],
                    "answer": faq_item["answer"]
                })
    
    return results

def get_service_info(service_name):
    """Get detailed information about a specific service"""
    for category, data in SERVICE_CATEGORIES.items():
        for service in data["services"]:
            if service_name.lower() in service["name"].lower():
                return {
                    "category": data["name"],
                    "service": service
                }
    return None
