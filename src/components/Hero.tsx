import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Zap, Users, TrendingUp, ArrowRight, Play, Target, Brain } from "lucide-react";
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

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-primary/10 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary/30 rounded-full blur-lg float-animation" style={{ animationDelay: '2s' }}></div>
        
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
          
          {/* RR Logo with Neon Glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-neon glow-effect float-animation">
                RR
              </div>
              <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-black text-primary/20 blur-sm">
                RR
              </div>
            </div>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-neon shadow-neon">
            <Sparkles className="w-5 h-5 text-neon" />
            <span className="text-sm font-bold text-neon">YOUR AI CO-FOUNDER FOR THE NEXT INDUSTRIAL REVOLUTION</span>
          </div>
          
          {/* Main Heading - Tony Robbins Style */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="block text-neon">LAUNCH YOUR</span>
              <span className="block text-gold">AI EMPIRE</span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                IN 30 DAYS
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Ready Reserve Company delivers <span className="text-neon font-bold">world-class AI automation</span> that transforms SMBs into <span className="text-gold font-bold">industry leaders</span>.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="bg-neon text-black hover:bg-primary/80 text-lg px-8 py-6 rounded-xl shadow-neon font-bold transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Target className="w-5 h-5 mr-2" />
              LAUNCH MY AI COMPANY
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon text-neon hover:bg-primary/10 text-lg px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/about')}
            >
              <Play className="w-5 h-5 mr-2" />
              WATCH DEMO
            </Button>
          </div>
          
          {/* Industry Focus */}
          <div className="pt-8 sm:pt-12">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Trusted by leaders in:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {["Automotive", "Marine", "Real Estate", "Restoration", "SMBs"].map(industry => (
                <div 
                  key={industry}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-neon font-semibold hover:bg-primary/20 transition-all cursor-pointer"
                  onClick={() => handleTagClick(industry)}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats - Redesigned */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-neon">
                <Brain className="w-8 h-8 text-neon" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-neon">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-semibold">AI Agents Deployed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center border border-accent">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gold">300%</div>
              <div className="text-sm sm:text-base text-muted-foreground font-semibold">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-neon">
                <Users className="w-8 h-8 text-neon" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-neon">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground font-semibold">AI Operations</div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="pt-8 sm:pt-12">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Powered by enterprise-grade AI platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-70">
              <span className="text-sm sm:text-base font-bold text-neon">OpenAI GPT-4</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-sm sm:text-base font-bold text-gold">Microsoft Azure</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-sm sm:text-base font-bold text-neon">Google AI</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-sm sm:text-base font-bold text-gold">n8n Workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};