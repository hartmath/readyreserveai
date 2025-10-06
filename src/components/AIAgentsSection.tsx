import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  DollarSign, 
  Code, 
  Target, 
  Scale, 
  Users, 
  Car, 
  Wrench, 
  Megaphone, 
  Phone, 
  BarChart3,
  Sparkles,
  Zap,
  Brain,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export const AIAgentsSection = () => {
  const navigate = useNavigate();
  const [deployingAgent, setDeployingAgent] = useState<string | null>(null);

  const handleDeployAgent = async (agentId: string, agentName: string) => {
    setDeployingAgent(agentId);
    
    // Simulate deployment process
    setTimeout(() => {
      setDeployingAgent(null);
      // Navigate to automation config page with agent details
      navigate(`/automation/ai-agent-${agentId}/config`, {
        state: { 
          agentName,
          agentId,
          isAIAgent: true 
        }
      });
    }, 1500);
  };

  const managementAgents = [
    {
      id: "ceo",
      name: "AI CEO",
      title: "Chief Executive Officer",
      description: "Strategic leadership and decision-making AI agent that provides high-level business guidance, market analysis, and executive decision support.",
      icon: Crown,
      features: ["Strategic Planning", "Market Analysis", "Executive Decision Support"],
      category: "Management"
    },
    {
      id: "cfo",
      name: "AI CFO",
      title: "Chief Financial Officer",
      description: "Financial management and analysis AI agent that handles budgeting, forecasting, financial reporting, and investment strategies.",
      icon: DollarSign,
      features: ["Financial Planning", "Budget Management", "Cash Flow Analysis"],
      category: "Management"
    },
    {
      id: "cto",
      name: "AI CTO",
      title: "Chief Technology Officer",
      description: "Technology strategy and innovation AI agent that guides digital transformation, technology adoption, and technical decision-making.",
      icon: Code,
      features: ["Technology Strategy", "Digital Transformation", "Innovation Management"],
      category: "Management"
    },
    {
      id: "sales-closer",
      name: "AI Sales Closer",
      title: "Sales Closing Specialist",
      description: "High-conversion sales AI agent that specializes in closing deals, handling objections, and maximizing sales opportunities.",
      icon: Target,
      features: ["Deal Closing", "Objection Handling", "Sales Strategy"],
      category: "Management"
    },
    {
      id: "lawyer",
      name: "AI Legal Counsel",
      title: "Legal Advisor",
      description: "Legal expertise AI agent that provides legal guidance, contract analysis, compliance support, and risk assessment.",
      icon: Scale,
      features: ["Contract Analysis", "Legal Compliance", "Risk Assessment"],
      category: "Management"
    },
    {
      id: "hr",
      name: "AI HR Director",
      title: "Human Resources",
      description: "Human resources management AI agent that handles recruitment, employee relations, performance management, and HR strategy.",
      icon: Users,
      features: ["Talent Acquisition", "Employee Relations", "Performance Management"],
      category: "Management"
    }
  ];

  const operationalAgents = [
    {
      id: "car-salesman",
      name: "AI Car Salesman",
      title: "Automotive Sales Specialist",
      description: "Specialized automotive sales AI agent that understands car features, financing options, and customer needs to close vehicle sales.",
      icon: Car,
      features: ["Vehicle Knowledge", "Customer Needs Analysis", "Financing Options"],
      category: "Car Dealership"
    },
    {
      id: "parts-person",
      name: "AI Parts Specialist",
      title: "Automotive Parts Expert",
      description: "Automotive parts and inventory AI agent that manages parts catalog, inventory, and provides technical parts guidance.",
      icon: Wrench,
      features: ["Parts Catalog", "Inventory Management", "Technical Specifications"],
      category: "Car Dealership"
    },
    {
      id: "ai-mechanic",
      name: "AI Mechanic",
      title: "Diagnostic Specialist",
      description: "Automotive diagnostic AI agent that analyzes vehicle problems, recommends repairs, and provides technical guidance.",
      icon: Brain,
      features: ["Diagnostic Analysis", "Repair Recommendations", "Technical Documentation"],
      category: "Car Dealership"
    },
    {
      id: "smma",
      name: "AI SMMA",
      title: "Social Media Marketing",
      description: "Social media marketing AI agent that creates content, manages campaigns, and optimizes social media presence.",
      icon: Megaphone,
      features: ["Content Creation", "Campaign Management", "Social Media Strategy"],
      category: "Marketing"
    },
    {
      id: "receptionist",
      name: "AI Receptionist",
      title: "Customer Service Specialist",
      description: "Front-line customer service AI agent that handles inquiries, appointments, and provides initial customer support.",
      icon: Phone,
      features: ["Call Handling", "Appointment Scheduling", "Customer Inquiries"],
      category: "Customer Service"
    },
    {
      id: "analytics",
      name: "AI Analytics",
      title: "Sales Analytics Specialist",
      description: "Data analysis AI agent that provides insights, performance metrics, and strategic recommendations for sales teams.",
      icon: BarChart3,
      features: ["Data Analysis", "Performance Metrics", "Predictive Analytics"],
      category: "Analytics"
    }
  ];

  return (
    <>
      {/* Management AI Agents */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Management AI System</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">C-Suite AI Agents</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-level AI agents that provide strategic leadership and executive decision support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {managementAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <agent.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg lg:text-xl">{agent.name}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{agent.title}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20 text-xs">
                    {agent.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-2 flex items-center gap-1 sm:gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full text-xs sm:text-sm" 
                    variant="gradient"
                    onClick={() => handleDeployAgent(agent.id, agent.name)}
                    disabled={deployingAgent === agent.id}
                  >
                    {deployingAgent === agent.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        Deploy Agent
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational AI Agents */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-semibold text-accent">Operational AI Agents</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Specialized AI Team</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-specific AI agents for operational excellence and customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {operationalAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <agent.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg lg:text-xl">{agent.name}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{agent.title}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-accent/5 text-accent border-accent/20 text-xs">
                    {agent.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-2 flex items-center gap-1 sm:gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full text-xs sm:text-sm" 
                    variant="gradient"
                    onClick={() => handleDeployAgent(agent.id, agent.name)}
                    disabled={deployingAgent === agent.id}
                  >
                    {deployingAgent === agent.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        Deploy Agent
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};