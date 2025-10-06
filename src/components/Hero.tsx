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
            <span className="text-xs sm:text-sm font-semibold text-primary">Enterprise-Grade AI Consulting</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight px-2">
              {/* Mobile version - no typewriter animation */}
              <span className="block sm:hidden">
                There's an AI Automation for That
              </span>
              {/* Desktop version - with typewriter animation */}
              <span className="hidden sm:inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-[typewriter_3.5s_steps(40)_1s_1_normal_both,blink_0.75s_step-end_infinite]">
                There's an AI Automation for That
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Enterprise-level AI consulting with the personal touch your SMB deserves.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Same expertise as IBM Watson, Google Cloud, Microsoft Azure, and AWS.
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
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 pt-4 sm:pt-6 lg:pt-8 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-base sm:text-xl lg:text-2xl font-bold">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Automations</div>
              </div>
            </div>
            
            <div className="w-px h-6 sm:h-10 lg:h-12 bg-border hidden sm:block"></div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-base sm:text-xl lg:text-2xl font-bold">10,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
            
            <div className="w-px h-6 sm:h-10 lg:h-12 bg-border hidden sm:block"></div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-base sm:text-xl lg:text-2xl font-bold">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="pt-3 sm:pt-4 lg:pt-6 px-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 lg:mb-4">Operating at the same level as global AI leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 opacity-60">
              <span className="text-xs sm:text-sm font-semibold">IBM Watson</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">Google Cloud</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">Microsoft Azure</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold">AWS</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 opacity-80">
              We are peers, not clients - delivering enterprise-grade AI consulting with SMB focus
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <Button 
              variant="gradient" 
              size="lg" 
              onClick={() => navigate("/browse")}
              className="text-sm sm:text-base px-6 sm:px-8"
            >
              Browse Automations
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate("/ai-agents")}
              className="text-sm sm:text-base px-6 sm:px-8 border-2 hover:bg-primary/5"
            >
              View AI Agents
            </Button>
          </div>
        </div>
      </div>
    </section>;
};