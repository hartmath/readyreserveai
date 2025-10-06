import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Car,
  Anchor,
  Building,
  Wrench,
  Briefcase,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const aiPlatforms = [
    {
      title: "Multi-Agent AI Systems",
      description: "Deploy intelligent agent networks that work 24/7 to optimize your business operations",
      icon: Brain,
      features: ["Autonomous Decision Making", "Cross-System Integration", "Real-time Learning", "Scalable Architecture"],
      color: "text-neon"
    },
    {
      title: "AI Automation Workflows",
      description: "Transform manual processes into intelligent, self-executing workflows",
      icon: Zap,
      features: ["Process Optimization", "Error Reduction", "Cost Savings", "Speed Enhancement"],
      color: "text-gold"
    },
    {
      title: "SaaS Platform Integration",
      description: "Seamlessly connect and optimize your existing software ecosystem",
      icon: Target,
      features: ["API Integration", "Data Synchronization", "Workflow Automation", "Performance Monitoring"],
      color: "text-neon"
    },
    {
      title: "Enterprise Consulting",
      description: "Strategic AI implementation with dedicated support and training",
      icon: Users,
      features: ["Strategic Planning", "Custom Development", "Team Training", "Ongoing Support"],
      color: "text-gold"
    }
  ];

  const industries = [
    {
      name: "Automotive",
      icon: Car,
      description: "Revolutionize dealership operations with AI-powered customer service, inventory management, and sales optimization",
      useCases: ["Customer Service Bots", "Inventory Optimization", "Sales Lead Generation", "Service Scheduling"]
    },
    {
      name: "Marine",
      icon: Anchor,
      description: "Streamline marine operations with intelligent vessel management, maintenance scheduling, and crew coordination",
      useCases: ["Fleet Management", "Predictive Maintenance", "Crew Scheduling", "Safety Monitoring"]
    },
    {
      name: "Real Estate",
      icon: Building,
      description: "Transform property management with AI-driven market analysis, tenant services, and investment optimization",
      useCases: ["Market Analysis", "Tenant Services", "Property Valuation", "Investment Insights"]
    },
    {
      name: "Restoration",
      icon: Wrench,
      description: "Optimize restoration projects with AI-powered damage assessment, resource planning, and quality control",
      useCases: ["Damage Assessment", "Project Planning", "Resource Allocation", "Quality Assurance"]
    },
    {
      name: "SMBs",
      icon: Briefcase,
      description: "Level the playing field with enterprise-grade AI solutions tailored for small and medium businesses",
      useCases: ["Process Automation", "Customer Engagement", "Data Analytics", "Cost Optimization"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-neon">
              <Sparkles className="w-4 h-4 text-neon" />
              <span className="text-sm font-semibold text-neon">AI SOLUTIONS THAT TRANSFORM INDUSTRIES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="block text-neon">AI PLATFORMS</span>
              <span className="block text-gold">& INDUSTRIES</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready Reserve Company delivers <span className="text-neon font-bold">cutting-edge AI solutions</span> that revolutionize how businesses operate across key industries.
            </p>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-neon">AI PLATFORMS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core platforms that power the next generation of business automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiPlatforms.map((platform, index) => (
              <Card key={index} className="relative border-neon shadow-neon hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-neon">
                      <platform.icon className={`w-6 h-6 ${platform.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold">{platform.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{platform.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-neon text-black hover:bg-primary/80 font-bold"
                    onClick={() => navigate('/contact')}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-gold">INDUSTRIES WE SERVE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized AI solutions for industry leaders and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="relative border-accent shadow-glow hover:shadow-neon transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent">
                      <industry.icon className="w-6 h-6 text-gold" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gold">{industry.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Use Cases:</h4>
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm font-medium">{useCase}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-accent text-gold hover:bg-accent/10 font-bold"
                    onClick={() => navigate('/contact')}
                  >
                    Get Industry Solution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-neon rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-black mb-4">
              READY TO LAUNCH YOUR AI EMPIRE?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Join industry leaders who are already transforming their businesses with Ready Reserve AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black text-neon hover:bg-black/80 font-bold"
                onClick={() => navigate('/contact')}
              >
                <Target className="w-5 h-5 mr-2" />
                BOOK A DEMO
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black text-black hover:bg-black/10 font-bold"
                onClick={() => navigate('/about')}
              >
                <Users className="w-5 h-5 mr-2" />
                MEET THE TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
