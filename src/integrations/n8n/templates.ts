// n8n Workflow Templates for ReadyReserve AI Automations

export interface N8NWorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  nodes: any[];
  connections: any[];
  tags: string[];
  userConfigFields: UserConfigField[];
  deploymentInstructions: string[];
}

export interface UserConfigField {
  id: string;
  label: string;
  type: 'text' | 'password' | 'email' | 'url' | 'textarea';
  required: boolean;
  placeholder?: string;
  description?: string;
  category: 'api_keys' | 'business_info' | 'endpoints' | 'custom';
}

export const n8nTemplates: N8NWorkflowTemplate[] = [
  {
    id: 'customer-support-chatbot',
    name: 'ReadyReserve AI Customer Support',
    description: 'AI-powered customer support chatbot that handles inquiries 24/7',
    category: 'Customer Engagement',
    tags: ['chatbot', 'support', 'ai', 'customer-service'],
    userConfigFields: [
      {
        id: 'openaiApiKey',
        label: 'OpenAI API Key',
        type: 'password',
        required: true,
        placeholder: 'sk-...',
        description: 'Required for AI responses',
        category: 'api_keys'
      },
      {
        id: 'businessName',
        label: 'Business Name',
        type: 'text',
        required: true,
        placeholder: 'Your Company Name',
        description: 'Used in AI responses',
        category: 'business_info'
      },
      {
        id: 'supportEmail',
        label: 'Support Email',
        type: 'email',
        required: true,
        placeholder: 'support@yourcompany.com',
        description: 'Contact email for escalations',
        category: 'business_info'
      },
      {
        id: 'customPrompts',
        label: 'Custom Support Instructions',
        type: 'textarea',
        required: false,
        placeholder: 'Add specific instructions for your support team...',
        description: 'Customize how the AI responds to customers',
        category: 'custom'
      }
    ],
    deploymentInstructions: [
      'Download the workflow file',
      'Import it into your n8n instance',
      'Add your OpenAI API key in the credentials section',
      'Configure your business information',
      'Activate the workflow',
      'Test with a sample customer message'
    ],
    nodes: [
      {
        id: 'webhook-trigger',
        name: 'Webhook Trigger',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          path: 'customer-support',
          httpMethod: 'POST',
          responseMode: 'responseNode',
          options: {}
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: 'https://your-readyreserve-instance.com/api/automations/customer-support-chatbot/execute',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            message: '={{ $json.message }}',
            user_id: '={{ $json.user_id }}',
            context: '={{ $json.context }}'
          },
          options: {}
        }
      },
      {
        id: 'format-response',
        name: 'Format Response',
        type: 'n8n-nodes-base.function',
        typeVersion: 1,
        position: [700, 100],
        parameters: {
          functionCode: `// Format the AI response for the customer
const aiResponse = $input.first().json;

return {
  json: {
    success: true,
    message: aiResponse.processed_data?.data || aiResponse.processed_data?.message,
    timestamp: new Date().toISOString(),
    automation_id: 'customer-support-chatbot'
  }
};`
        }
      },
      {
        id: 'webhook-response',
        name: 'Webhook Response',
        type: 'n8n-nodes-base.respondToWebhook',
        typeVersion: 1,
        position: [1000, 100],
        parameters: {
          respondWith: 'json',
          responseBody: '={{ $json }}'
        }
      }
    ],
    connections: {
      'webhook-trigger': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'readyreserve-ai': {
        main: [
          [
            {
              node: 'format-response',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'format-response': {
        main: [
          [
            {
              node: 'webhook-response',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  },
  {
    id: 'lead-qualification',
    name: 'ReadyReserve AI Lead Qualification',
    description: 'Automatically qualify leads based on behavior and demographics',
    category: 'Marketing & Sales',
    tags: ['lead-qualification', 'sales', 'crm', 'ai'],
    nodes: [
      {
        id: 'webhook-trigger',
        name: 'Lead Data Webhook',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          path: 'lead-qualification',
          httpMethod: 'POST',
          responseMode: 'responseNode'
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI Lead Analysis',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: 'https://your-readyreserve-instance.com/api/automations/lead-qualification/execute',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            lead_data: '={{ $json }}',
            qualification_criteria: '={{ $json.qualification_criteria }}'
          }
        }
      },
      {
        id: 'update-crm',
        name: 'Update CRM',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [700, 100],
        parameters: {
          url: '={{ $json.crm_endpoint }}',
          method: 'PATCH',
          headers: {
            'Authorization': 'Bearer {{ $json.crm_token }}',
            'Content-Type': 'application/json'
          },
          body: {
            lead_id: '={{ $json.lead_id }}',
            qualification_score: '={{ $json.processed_data.qualification_score }}',
            qualification_status: '={{ $json.processed_data.status }}',
            ai_notes: '={{ $json.processed_data.notes }}'
          }
        }
      },
      {
        id: 'webhook-response',
        name: 'Response',
        type: 'n8n-nodes-base.respondToWebhook',
        typeVersion: 1,
        position: [1000, 100],
        parameters: {
          respondWith: 'json',
          responseBody: '={{ $json }}'
        }
      }
    ],
    connections: {
      'webhook-trigger': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'readyreserve-ai': {
        main: [
          [
            {
              node: 'update-crm',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'update-crm': {
        main: [
          [
            {
              node: 'webhook-response',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  },
  {
    id: 'social-media-posting',
    name: 'ReadyReserve AI Social Media',
    description: 'Generate and schedule engaging social media posts',
    category: 'Marketing & Sales',
    tags: ['social-media', 'content-generation', 'marketing', 'ai'],
    nodes: [
      {
        id: 'schedule-trigger',
        name: 'Schedule Trigger',
        type: 'n8n-nodes-base.scheduleTrigger',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          rule: {
            interval: [
              {
                field: 'hours',
                hoursInterval: 2
              }
            ]
          }
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI Content Generator',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: 'https://your-readyreserve-instance.com/api/automations/social-media-posting/execute',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            platform: 'twitter',
            topic: 'business_automation',
            tone: 'professional',
            length: 'short'
          }
        }
      },
      {
        id: 'post-to-social',
        name: 'Post to Social Media',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [700, 100],
        parameters: {
          url: 'https://api.twitter.com/2/tweets',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer {{ $json.twitter_token }}',
            'Content-Type': 'application/json'
          },
          body: {
            text: '={{ $json.processed_data.content }}'
          }
        }
      }
    ],
    connections: {
      'schedule-trigger': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'readyreserve-ai': {
        main: [
          [
            {
              node: 'post-to-social',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  },
  {
    id: 'document-processing',
    name: 'ReadyReserve AI Document Processing',
    description: 'Extract data from invoices, receipts, and documents',
    category: 'Operations',
    tags: ['document-processing', 'ocr', 'automation', 'ai'],
    nodes: [
      {
        id: 'webhook-trigger',
        name: 'Document Upload Webhook',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          path: 'document-processing',
          httpMethod: 'POST',
          responseMode: 'responseNode'
        }
      },
      {
        id: 'extract-text',
        name: 'Extract Text from Document',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: 'https://api.ocr.space/parse/image',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            apikey: '{{ $json.ocr_api_key }}',
            url: '={{ $json.document_url }}',
            language: 'eng'
          }
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI Document Analysis',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [700, 100],
        parameters: {
          url: 'https://your-readyreserve-instance.com/api/automations/document-processing/execute',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            extracted_text: '={{ $json.ParsedResults[0].ParsedText }}',
            document_type: '={{ $json.document_type }}',
            processing_requirements: '={{ $json.requirements }}'
          }
        }
      },
      {
        id: 'save-results',
        name: 'Save Results',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [1000, 100],
        parameters: {
          url: '={{ $json.database_endpoint }}',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer {{ $json.database_token }}',
            'Content-Type': 'application/json'
          },
          body: {
            document_id: '={{ $json.document_id }}',
            extracted_data: '={{ $json.processed_data }}',
            processing_date: '={{ new Date().toISOString() }}'
          }
        }
      },
      {
        id: 'webhook-response',
        name: 'Response',
        type: 'n8n-nodes-base.respondToWebhook',
        typeVersion: 1,
        position: [1300, 100],
        parameters: {
          respondWith: 'json',
          responseBody: '={{ $json }}'
        }
      }
    ],
    connections: {
      'webhook-trigger': {
        main: [
          [
            {
              node: 'extract-text',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'extract-text': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'readyreserve-ai': {
        main: [
          [
            {
              node: 'save-results',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'save-results': {
        main: [
          [
            {
              node: 'webhook-response',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  },
  {
    id: 'analytics-dashboard',
    name: 'ReadyReserve AI Analytics',
    description: 'Generate real-time business intelligence with AI insights',
    category: 'Data & Insights',
    tags: ['analytics', 'dashboard', 'business-intelligence', 'ai'],
    nodes: [
      {
        id: 'schedule-trigger',
        name: 'Daily Analytics Trigger',
        type: 'n8n-nodes-base.scheduleTrigger',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          rule: {
            interval: [
              {
                field: 'cronExpression',
                cronExpression: '0 9 * * *'
              }
            ]
          }
        }
      },
      {
        id: 'fetch-data',
        name: 'Fetch Business Data',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: '={{ $json.data_source_url }}',
          method: 'GET',
          headers: {
            'Authorization': 'Bearer {{ $json.data_source_token }}'
          }
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI Analytics',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [700, 100],
        parameters: {
          url: 'https://your-readyreserve-instance.com/api/automations/analytics-dashboard/execute',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            business_data: '={{ $json }}',
            analysis_type: 'daily_summary',
            insights_required: ['trends', 'anomalies', 'recommendations']
          }
        }
      },
      {
        id: 'send-report',
        name: 'Send Analytics Report',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [1000, 100],
        parameters: {
          url: 'https://api.slack.com/api/chat.postMessage',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer {{ $json.slack_token }}',
            'Content-Type': 'application/json'
          },
          body: {
            channel: '{{ $json.slack_channel }}',
            text: 'Daily Analytics Report',
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: '={{ $json.processed_data.summary }}'
                }
              }
            ]
          }
        }
      }
    ],
    connections: {
      'schedule-trigger': {
        main: [
          [
            {
              node: 'fetch-data',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'fetch-data': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      },
      'readyreserve-ai': {
        main: [
          [
            {
              node: 'send-report',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  }
];

export function getTemplateByAutomationId(automationId: string): N8NWorkflowTemplate | undefined {
  return n8nTemplates.find(template => template.id === automationId);
}

export function getTemplatesByCategory(category: string): N8NWorkflowTemplate[] {
  return n8nTemplates.filter(template => template.category === category);
}
