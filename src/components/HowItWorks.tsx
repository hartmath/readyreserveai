import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Link2, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Search & Discover",
    description: "Browse our library of 150+ pre-built AI automation workflows."
  },
  {
    number: "2",
    icon: Link2,
    title: "Connect via n8n",
    description: "Seamlessly integrate with your existing business tools in minutes."
  },
  {
    number: "3",
    icon: Zap,
    title: "Customize & Deploy",
    description: "Fine-tune your workflows with our AI consulting team and go live."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started with AI automation in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
                  )}
                  
                  <Card className="p-6 space-y-4 border border-border hover:border-primary/40 transition-smooth relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="gradient" size="lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};