import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Zap, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/browse");
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/browse?search=${encodeURIComponent(tag)}`);
  };

  return <section className="relative py-20 md:py-28 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">150+ AI Automations Available</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-[typewriter_3.5s_steps(40)_1s_1_normal_both,blink_0.75s_step-end_infinite]">
                There's an AI Automation for That
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Discover AI-powered workflows to automate your business.<br />
              Connect, customize, and deploy in minutes.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto space-y-4">
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-focus-within:opacity-10 rounded-2xl blur-xl transition-opacity"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-5 w-5 h-5 text-muted-foreground z-10" />
                  <Input 
                    placeholder="What do you want to automate? Try 'customer support' or 'email marketing'" 
                    className="h-16 pl-14 pr-32 text-base border-2 rounded-2xl shadow-sm focus:shadow-glow focus:border-primary/50 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="gradient" size="lg" className="absolute right-2 rounded-xl">
                    Search
                  </Button>
                </div>
              </div>
            </form>
            
            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="text-sm text-muted-foreground">Trending:</span>
              {["AI Chatbots", "Social Media", "CRM", "Analytics", "Email"].map(tag => 
                <Button 
                  key={tag} 
                  variant="tag" 
                  size="sm" 
                  className="hover:gradient-primary hover:text-primary-foreground"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Button>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-muted-foreground">Automations</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-border hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-border hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-4">Powered by leading AI platforms</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              <span className="text-sm font-semibold">OpenAI</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-semibold">Microsoft Azure</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-semibold">Google AI</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-semibold">n8n</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};