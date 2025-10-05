-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table for additional user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user_roles table (CRITICAL: separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Create automations catalog table
CREATE TABLE public.automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  rating DECIMAL(2,1) DEFAULT 0,
  user_count INTEGER DEFAULT 0,
  is_popular BOOLEAN DEFAULT false,
  features JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user_automations table (tracks active automations per user)
CREATE TABLE public.user_automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  automation_id UUID REFERENCES public.automations(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active',
  activated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, automation_id)
);

-- Create automation_usage table (tracks task usage)
CREATE TABLE public.automation_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  automation_id UUID REFERENCES public.automations(id) ON DELETE CASCADE,
  tasks_count INTEGER DEFAULT 0,
  month TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_usage ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for automations (publicly viewable)
CREATE POLICY "Anyone can view automations"
  ON public.automations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage automations"
  ON public.automations FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_automations
CREATE POLICY "Users can view their own automations"
  ON public.user_automations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can activate automations"
  ON public.user_automations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can deactivate their automations"
  ON public.user_automations FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all user automations"
  ON public.user_automations FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for automation_usage
CREATE POLICY "Users can view their own usage"
  ON public.automation_usage FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all usage"
  ON public.automation_usage FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_automations_updated_at
  BEFORE UPDATE ON public.automations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample automations
INSERT INTO public.automations (title, description, category, rating, user_count, is_popular, features) VALUES
  ('AI Customer Support Chatbot', 'Automate customer inquiries with intelligent AI responses. 24/7 support with natural language understanding.', 'Customer Support', 4.9, 2500, true, '["Instant Responses", "Natural Conversations", "Multi-Channel Support"]'),
  ('Social Media Scheduler', 'Plan and auto-post content across all platforms. AI-powered content suggestions and optimal timing.', 'Social Media', 4.8, 1800, true, '["Multi-Platform", "AI Content Suggestions", "Analytics"]'),
  ('Email Marketing Automation', 'Personalized email campaigns with AI-driven segmentation and A/B testing capabilities.', 'Marketing', 4.7, 3200, false, '["AI Segmentation", "A/B Testing", "Personalization"]'),
  ('Lead Scoring & Qualification', 'Automatically score and qualify leads using AI analysis of behavior and engagement patterns.', 'Sales', 4.9, 1500, true, '["AI Scoring", "Behavior Analysis", "CRM Integration"]');