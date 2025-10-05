import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    content: "ReadyReserve AI transformed our customer support workflow. We've reduced response times by 70% and our team can focus on complex issues instead of repetitive tasks.",
    rating: 5,
    metric: "70% faster response times"
  },
  {
    name: "Michael Chen",
    role: "Operations Director, CloudScale",
    company: "CloudScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    content: "The n8n integration is seamless. We automated our entire lead qualification process and saw a 3x increase in qualified leads reaching our sales team.",
    rating: 5,
    metric: "3x more qualified leads"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager, GrowthHub",
    company: "GrowthHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    content: "Best investment we've made this year. The email automation alone saves us 200+ hours monthly. The ROI is incredible.",
    rating: 5,
    metric: "200+ hours saved monthly"
  },
  {
    name: "David Park",
    role: "CTO, DataFlow Systems",
    company: "DataFlow",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    content: "Security and reliability are top-notch. The AI models are powerful and the platform is incredibly easy to use, even for non-technical team members.",
    rating: 5,
    metric: "Enterprise-grade security"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses are transforming their operations with ReadyReserve AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{testimonial.metric}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">Powered by industry-leading AI providers</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold">OpenAI</div>
            <div className="text-2xl font-bold">Google AI</div>
            <div className="text-2xl font-bold">Azure AI</div>
            <div className="text-2xl font-bold">n8n</div>
          </div>
        </div>
      </div>
    </section>
  );
};