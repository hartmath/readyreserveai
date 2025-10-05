// Python Chatbot API Client
const CHATBOT_API_URL = import.meta.env.VITE_CHATBOT_API_URL || 'http://localhost:8001';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  user_id?: string;
}

export interface ChatResponse {
  content: string;
  sources?: string[];
  faq_matches?: FAQMatch[];
}

export interface FAQMatch {
  category: string;
  question: string;
  answer: string;
}

export interface FAQSearchRequest {
  question: string;
  category?: string;
}

export interface FAQSearchResponse {
  results: FAQMatch[];
}

export interface ServiceInfo {
  category: string;
  service: {
    name: string;
    description: string;
    features: string[];
    use_cases: string[];
  };
}

class ChatbotClient {
  private baseUrl: string;

  constructor(baseUrl: string = CHATBOT_API_URL) {
    this.baseUrl = baseUrl;
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

  // Main chat endpoint
  async chat(request: ChatRequest): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // FAQ search
  async searchFAQ(request: FAQSearchRequest): Promise<FAQSearchResponse> {
    return this.request<FAQSearchResponse>('/search-faq', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Get FAQ categories
  async getFAQCategories(): Promise<{ categories: string[] }> {
    return this.request<{ categories: string[] }>('/faq-categories');
  }

  // Get FAQ by category
  async getFAQByCategory(category: string): Promise<{ category: string; questions: any[] }> {
    return this.request<{ category: string; questions: any[] }>(`/faq/${category}`);
  }

  // Get all services
  async getServices(): Promise<{ services: any }> {
    return this.request<{ services: any }>('/services');
  }

  // Get service details
  async getServiceDetails(serviceName: string): Promise<ServiceInfo> {
    return this.request<ServiceInfo>(`/services/${serviceName}`);
  }

  // Get pricing information
  async getPricing(): Promise<{ pricing: any }> {
    return this.request<{ pricing: any }>('/pricing');
  }

  // Get contact information
  async getContactInfo(): Promise<{ contact: any }> {
    return this.request<{ contact: any }>('/contact');
  }

  // Get how it works information
  async getHowItWorks(): Promise<{ how_it_works: any }> {
    return this.request<{ how_it_works: any }>('/how-it-works');
  }

  // Health check
  async healthCheck(): Promise<{ status: string; service: string }> {
    return this.request<{ status: string; service: string }>('/health');
  }
}

export const chatbotClient = new ChatbotClient();
