import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, TrendingUp, Settings, BarChart3, Shield, Sparkles, ArrowRight, Star } from "lucide-react";

const automations = [
  {
    title: "AI Customer Support Chatbot",
    category: "Customer Engagement",
    description: "Automate customer inquiries with intelligent AI responses. Integrates with your existing support tools.",
    icon: MessageSquare,
    tags: ["ChatGPT", "Support", "24/7"],
    featured: true,
    saves: 234
  },
  {
    title: "Lead Qualification System",
    category: "Marketing & Sales",
    description: "Automatically score and qualify leads based on behavior and demographics.",
    icon: TrendingUp,
    tags: ["CRM", "Sales", "AI"],
    featured: true,
    saves: 189
  },
  {
    title: "Social Media Content Generator",
    category: "Marketing & Sales",
    description: "Generate and schedule engaging social media posts across all platforms.",
    icon: Sparkles,
    tags: ["Content", "Social", "Auto-post"],
    featured: false,
    saves: 156
  },
  {
    title: "Document Processing AI",
    category: "Operations",
    description: "Extract data from invoices, receipts, and documents automatically.",
    icon: Settings,
    tags: ["OCR", "Documents", "Automation"],
    featured: false,
    saves: 143
  },
  {
    title: "Analytics Dashboard",
    category: "Data & Insights",
    description: "Real-time business intelligence with AI-powered insights and predictions.",
    icon: BarChart3,
    tags: ["Analytics", "Reports", "AI Insights"],
    featured: true,
    saves: 201
  },
  {
    title: "GDPR Compliance Monitor",
    category: "Compliance & Security",
    description: "Automatic compliance checking and reporting for data protection regulations.",
    icon: Shield,
    tags: ["GDPR", "Security", "Compliance"],
    featured: false,
    saves: 98
  },
];

export const AutomationCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Automations</h2>
            <p className="text-muted-foreground">Hand-picked AI workflows for your business</p>
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {automations.map((automation, index) => {
            const Icon = automation.icon;
            return (
              <Card 
                key={index}
                className="p-5 hover:shadow-glow transition-smooth hover:-translate-y-0.5 border border-border bg-card cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-lg bg-gradient-card gradient-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {automation.featured && (
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                        <Star className="w-3 h-3 mr-1 fill-accent" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{automation.category}</div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {automation.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {automation.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {automation.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="text-xs text-muted-foreground">
                      {automation.saves} saves
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Browse All Automations
          </Button>
        </div>
      </div>
    </section>
  );
};