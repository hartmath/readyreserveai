// n8n Integration Client
const N8N_API_URL = import.meta.env.VITE_N8N_API_URL || 'http://localhost:5678';

export interface N8NWorkflow {
  id: string;
  name: string;
  active: boolean;
  nodes: N8NNode[];
  connections: N8NConnection[];
  settings?: any;
}

export interface N8NNode {
  id: string;
  name: string;
  type: string;
  typeVersion: number;
  position: [number, number];
  parameters: any;
}

export interface N8NConnection {
  node: string;
  type: string;
  index: number;
}

export interface N8NExecution {
  id: string;
  finished: boolean;
  mode: string;
  startedAt: string;
  stoppedAt?: string;
  workflowData: N8NWorkflow;
  data: any;
}

export interface N8NCredential {
  id: string;
  name: string;
  type: string;
  data: any;
}

export interface N8NWebhook {
  path: string;
  httpMethod: string;
  node: string;
}

class N8NClient {
  private baseUrl: string;
  private apiKey: string | null = null;

  constructor(baseUrl: string = N8N_API_URL) {
    this.baseUrl = baseUrl;
    this.apiKey = localStorage.getItem('n8n_api_key');
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    localStorage.setItem('n8n_api_key', apiKey);
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/api/v1${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.apiKey) {
      headers['X-N8N-API-KEY'] = this.apiKey;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Test connection to n8n instance
  async testConnection(): Promise<{ connected: boolean; version?: string }> {
    try {
      const response = await this.request<{ version: string }>('/active');
      return { connected: true, version: response.version };
    } catch (error) {
      return { connected: false };
    }
  }

  // Get all workflows
  async getWorkflows(): Promise<N8NWorkflow[]> {
    return this.request<N8NWorkflow[]>('/workflows');
  }

  // Get specific workflow
  async getWorkflow(id: string): Promise<N8NWorkflow> {
    return this.request<N8NWorkflow>(`/workflows/${id}`);
  }

  // Create new workflow
  async createWorkflow(workflow: Partial<N8NWorkflow>): Promise<N8NWorkflow> {
    return this.request<N8NWorkflow>('/workflows', {
      method: 'POST',
      body: JSON.stringify(workflow),
    });
  }

  // Update workflow
  async updateWorkflow(id: string, workflow: Partial<N8NWorkflow>): Promise<N8NWorkflow> {
    return this.request<N8NWorkflow>(`/workflows/${id}`, {
      method: 'PUT',
      body: JSON.stringify(workflow),
    });
  }

  // Activate/deactivate workflow
  async toggleWorkflow(id: string, active: boolean): Promise<N8NWorkflow> {
    return this.request<N8NWorkflow>(`/workflows/${id}/activate`, {
      method: 'POST',
      body: JSON.stringify({ active }),
    });
  }

  // Execute workflow
  async executeWorkflow(id: string, data?: any): Promise<N8NExecution> {
    return this.request<N8NExecution>(`/workflows/${id}/execute`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get workflow executions
  async getExecutions(workflowId?: string, limit = 20): Promise<N8NExecution[]> {
    const params = new URLSearchParams();
    if (workflowId) params.append('workflowId', workflowId);
    params.append('limit', limit.toString());
    
    return this.request<N8NExecution[]>(`/executions?${params}`);
  }

  // Get webhook URL for workflow
  async getWebhookUrl(workflowId: string, nodeId: string): Promise<string> {
    const workflow = await this.getWorkflow(workflowId);
    const webhookNode = workflow.nodes.find(node => node.id === nodeId);
    
    if (!webhookNode || webhookNode.type !== 'n8n-nodes-base.webhook') {
      throw new Error('Webhook node not found');
    }

    const webhookPath = webhookNode.parameters.path || 'webhook';
    return `${this.baseUrl}/webhook/${webhookPath}`;
  }

  // Get credentials
  async getCredentials(): Promise<N8NCredential[]> {
    return this.request<N8NCredential[]>('/credentials');
  }

  // Create credential
  async createCredential(credential: Partial<N8NCredential>): Promise<N8NCredential> {
    return this.request<N8NCredential>('/credentials', {
      method: 'POST',
      body: JSON.stringify(credential),
    });
  }

  // Test webhook connection
  async testWebhook(webhookUrl: string, testData?: any): Promise<{ success: boolean; response?: any }> {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testData || { test: true }),
      });
      
      return { success: response.ok, response: await response.json().catch(() => null) };
    } catch (error) {
      return { success: false };
    }
  }

  // Get ReadyReserve AI workflow templates
  async getReadyReserveTemplates(): Promise<N8NWorkflow[]> {
    // Import templates dynamically to avoid circular dependencies
    const { n8nTemplates } = await import('./templates');
    
    return n8nTemplates.map(template => ({
      id: template.id,
      name: template.name,
      active: false,
      nodes: template.nodes,
      connections: template.connections
    }));
  }
}

export const n8nClient = new N8NClient();
