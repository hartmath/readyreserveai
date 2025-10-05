// Python Backend API Client
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  content: string;
}

export interface Automation {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  user_count: number;
  is_popular: boolean;
  features: string[];
  created_at: string;
  updated_at?: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  company?: string;
  access_token: string;
}

export interface AutomationExecuteRequest {
  automation_id: string;
  input_data: Record<string, any>;
}

export interface AutomationExecuteResponse {
  success: boolean;
  result?: string;
  duration?: number;
  error?: string;
}

class BackendClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('access_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Authentication
  async register(email: string, fullName?: string, company?: string): Promise<User> {
    const user = await this.request<User>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        full_name: fullName,
        company,
      }),
    });
    
    this.token = user.access_token;
    localStorage.setItem('access_token', user.access_token);
    return user;
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.request<User>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    this.token = user.access_token;
    localStorage.setItem('access_token', user.access_token);
    return user;
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('access_token');
  }

  // Automations
  async getAutomations(): Promise<Automation[]> {
    return this.request<Automation[]>('/automations');
  }

  async getAutomation(id: string): Promise<Automation> {
    return this.request<Automation>(`/automations/${id}`);
  }

  // Chat
  async chat(messages: ChatMessage[]): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({ messages }),
    });
  }

  async agentChat(automationId: string, messages: ChatMessage[]): Promise<ChatResponse> {
    return this.request<ChatResponse>('/agent-chat', {
      method: 'POST',
      body: JSON.stringify({
        automation_id: automationId,
        messages,
      }),
    });
  }

  // Automation Execution
  async executeAutomation(request: AutomationExecuteRequest): Promise<AutomationExecuteResponse> {
    return this.request<AutomationExecuteResponse>('/execute-automation', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

export const backendClient = new BackendClient();
