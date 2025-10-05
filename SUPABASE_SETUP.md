# Supabase Setup Guide for ReadyReserve AI

## 🚀 Quick Setup Steps

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and click "New Project"
3. Choose organization and project name: `readyreserve-ai`
4. Set a strong database password (save this!)
5. Choose a region close to you
6. Click "Create new project"

### 2. Get Your Credentials
Once your project is created:
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)

### 3. Set Up Environment Variables
1. Copy `env-template.txt` to `.env.local`:
   ```bash
   cp env-template.txt .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
   ```

### 4. Set Up Database Schema
Your project already has the database migrations ready! 

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the migration files in order:

#### Migration 1: Create tables and basic structure
```sql
-- Copy and paste the content from: supabase/migrations/20251005010947_f0140dd0-1890-4623-9444-8bae30cf9ca9.sql
```

#### Migration 2: Fix security functions
```sql
-- Copy and paste the content from: supabase/migrations/20251005011028_9b9ff9c3-58c6-4e12-aa4a-961701d1a60d.sql
```

#### Migration 3: Add additional tables
```sql
-- Copy and paste the content from: supabase/migrations/20251005011059_289fce99-5848-4bd8-b4e2-240aff0b944a.sql
```

#### Migration 4: Add more features
```sql
-- Copy and paste the content from: supabase/migrations/20251005012455_0cfa6648-6050-4937-af4e-b28abba8bcfd.sql
```

#### Migration 5: Final updates
```sql
-- Copy and paste the content from: supabase/migrations/202510050211311_2b5d9d39-983c-490f-811b-01f5e1c0c2d0.sql
```

### 5. Set Up Edge Functions (Optional)
If you want to use the AI chat features:

1. Go to **Edge Functions** in your Supabase dashboard
2. Create these functions:

#### Function 1: `chat`
- Copy content from `supabase/functions/chat/index.ts`

#### Function 2: `agent-chat`
- Copy content from `supabase/functions/agent-chat/index.ts`

#### Function 3: `execute-automation`
- Copy content from `supabase/functions/execute-automation/index.ts`

3. **Set up AI API Key** (Required for AI features):
   - Go to **Edge Functions** → **Settings** → **Environment Variables**
   - Add: `AI_API_KEY` = `your_openai_api_key_here`
   - Get your OpenAI API key from: https://platform.openai.com/api-keys

### 6. Configure Authentication
1. Go to **Authentication** → **Settings**
2. Configure your site URL: `http://localhost:8080`
3. Add redirect URLs if needed

### 7. Test Your Setup
1. Start your frontend: `npm run dev`
2. Visit: http://localhost:8080
3. Try to sign up/login
4. Check the browser console for any errors

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Check that your `.env.local` file has the correct values
   - Make sure there are no extra spaces or quotes

2. **Database connection errors**
   - Verify your Project URL is correct
   - Check that all migrations have been run

3. **Authentication not working**
   - Check Authentication settings in Supabase dashboard
   - Verify site URL is set to `http://localhost:8080`

4. **Edge Functions not working**
   - Make sure you've deployed the functions
   - Check that `AI_API_KEY` is set in function environment variables

## 📊 Database Tables Created

Your database will have these tables:
- `profiles` - User profiles
- `user_roles` - User roles (admin/user)
- `automations` - Available automation templates
- `user_automations` - User's active automations
- `automation_usage` - Usage tracking
- `automation_configs` - User configurations
- `automation_logs` - Execution logs
- `contact_submissions` - Contact form submissions
- `newsletter_subscriptions` - Newsletter signups

## 🎯 Next Steps

Once everything is set up:
1. Test user registration/login
2. Try the AI chat features
3. Explore the automation catalog
4. Set up your first automation

## 🆘 Need Help?

- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the browser console for errors
- Check the Supabase dashboard logs
