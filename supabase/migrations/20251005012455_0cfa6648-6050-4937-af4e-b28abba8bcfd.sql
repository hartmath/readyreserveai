-- Create table for automation configurations
CREATE TABLE IF NOT EXISTS public.automation_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  automation_id uuid REFERENCES public.automations(id) ON DELETE CASCADE,
  api_key text,
  webhook_url text,
  custom_prompt text,
  enabled boolean DEFAULT true,
  schedule text DEFAULT 'manual',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, automation_id)
);

-- Create table for automation execution logs
CREATE TABLE IF NOT EXISTS public.automation_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  automation_id uuid REFERENCES public.automations(id) ON DELETE CASCADE,
  status text NOT NULL,
  message text,
  input_data jsonb,
  output_data jsonb,
  duration_ms integer,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.automation_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for automation_configs
CREATE POLICY "Users can view their own configs"
  ON public.automation_configs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own configs"
  ON public.automation_configs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own configs"
  ON public.automation_configs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own configs"
  ON public.automation_configs FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for automation_logs
CREATE POLICY "Users can view their own logs"
  ON public.automation_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own logs"
  ON public.automation_logs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_automation_configs_updated_at
  BEFORE UPDATE ON public.automation_configs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();