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

  return <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">150+ AI Automations Available</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-[typewriter_3.5s_steps(40)_1s_1_normal_both,blink_0.75s_step-end_infinite]">
                There's an AI Automation for That
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Discover AI-powered workflows to automate your business.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Connect, customize, and deploy in minutes.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto space-y-4 px-4">
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-focus-within:opacity-10 rounded-2xl blur-xl transition-opacity"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-3 sm:left-5 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground z-10" />
                  <Input 
                    placeholder="What do you want to automate?" 
                    className="h-12 sm:h-14 lg:h-16 pl-10 sm:pl-14 pr-20 sm:pr-32 text-sm sm:text-base border-2 rounded-xl sm:rounded-2xl shadow-sm focus:shadow-glow focus:border-primary/50 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="gradient" size="sm" className="absolute right-1 sm:right-2 rounded-lg sm:rounded-xl text-xs sm:text-sm px-3 sm:px-4">
                    Search
                  </Button>
                </div>
              </div>
            </form>
            
            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 justify-center">
              <span className="text-xs sm:text-sm text-muted-foreground">Trending:</span>
              {["AI Chatbots", "Social Media", "CRM", "Analytics", "Email"].map(tag => 
                <Button 
                  key={tag} 
                  variant="tag" 
                  size="sm" 
                  className="text-xs sm:text-sm hover:gradient-primary hover:text-primary-foreground"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Button>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-6 sm:pt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Automations</div>
              </div>
            </div>
            
            <div className="w-px h-8 sm:h-10 lg:h-12 bg-border hidden sm:block"></div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">10,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
            
            <div className="w-px h-8 sm:h-10 lg:h-12 bg-border hidden sm:block"></div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Powered by leading AI platforms</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 opacity-60">
              <span className="text-xs sm:text-sm font-semibold">OpenAI</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">Microsoft Azure</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">Google AI</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">n8n</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};