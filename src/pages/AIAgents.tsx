import Layout from "@/components/Layout";
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
  TrendingUp
} from "lucide-react";

const AIAgents = () => {
  const managementAgents = [
    {
      id: "ceo",
      name: "AI CEO",
      title: "Chief Executive Officer",
      description: "Strategic leadership and decision-making AI agent that provides high-level business guidance, market analysis, and executive decision support.",
      icon: Crown,
      features: [
        "Strategic Planning",
        "Market Analysis", 
        "Executive Decision Support",
        "Business Growth Strategy",
        "Risk Assessment",
        "Stakeholder Communication"
      ],
      useCases: [
        "Quarterly Planning",
        "Market Expansion",
        "Investment Decisions",
        "Crisis Management",
        "Partnership Negotiations"
      ],
      category: "Management"
    },
    {
      id: "cfo",
      name: "AI CFO",
      title: "Chief Financial Officer",
      description: "Financial management and analysis AI agent that handles budgeting, forecasting, financial reporting, and investment strategies.",
      icon: DollarSign,
      features: [
        "Financial Planning",
        "Budget Management",
        "Cash Flow Analysis",
        "Investment Strategy",
        "Risk Management",
        "Financial Reporting"
      ],
      useCases: [
        "Budget Planning",
        "Financial Forecasting",
        "Investment Analysis",
        "Cost Optimization",
        "Financial Compliance"
      ],
      category: "Management"
    },
    {
      id: "cto",
      name: "AI CTO",
      title: "Chief Technology Officer",
      description: "Technology strategy and innovation AI agent that guides digital transformation, technology adoption, and technical decision-making.",
      icon: Code,
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Innovation Management",
        "Technical Architecture",
        "Security Planning",
        "Vendor Management"
      ],
      useCases: [
        "Technology Roadmaps",
        "Digital Transformation",
        "Innovation Projects",
        "Security Implementation",
        "Technical Due Diligence"
      ],
      category: "Management"
    },
    {
      id: "sales-closer",
      name: "AI Sales Closer",
      title: "Sales Closing Specialist",
      description: "High-conversion sales AI agent that specializes in closing deals, handling objections, and maximizing sales opportunities.",
      icon: Target,
      features: [
        "Deal Closing",
        "Objection Handling",
        "Sales Strategy",
        "Negotiation",
        "Pipeline Management",
        "Conversion Optimization"
      ],
      useCases: [
        "High-Value Deals",
        "Complex Sales",
        "Enterprise Sales",
        "Contract Negotiations",
        "Sales Training"
      ],
      category: "Management"
    },
    {
      id: "lawyer",
      name: "AI Legal Counsel",
      title: "Legal Advisor",
      description: "Legal expertise AI agent that provides legal guidance, contract analysis, compliance support, and risk assessment.",
      icon: Scale,
      features: [
        "Contract Analysis",
        "Legal Compliance",
        "Risk Assessment",
        "Legal Research",
        "Document Review",
        "Regulatory Guidance"
      ],
      useCases: [
        "Contract Review",
        "Compliance Management",
        "Legal Research",
        "Risk Mitigation",
        "Regulatory Updates"
      ],
      category: "Management"
    },
    {
      id: "hr",
      name: "AI HR Director",
      title: "Human Resources",
      description: "Human resources management AI agent that handles recruitment, employee relations, performance management, and HR strategy.",
      icon: Users,
      features: [
        "Talent Acquisition",
        "Employee Relations",
        "Performance Management",
        "HR Strategy",
        "Compliance Management",
        "Training & Development"
      ],
      useCases: [
        "Recruitment",
        "Employee Onboarding",
        "Performance Reviews",
        "HR Policy Development",
        "Workplace Compliance"
      ],
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
      features: [
        "Vehicle Knowledge",
        "Customer Needs Analysis",
        "Financing Options",
        "Trade-in Evaluation",
        "Sales Process",
        "Follow-up Management"
      ],
      useCases: [
        "New Car Sales",
        "Used Car Sales",
        "Lease Negotiations",
        "Trade-in Appraisals",
        "Customer Service"
      ],
      category: "Car Dealership"
    },
    {
      id: "parts-person",
      name: "AI Parts Specialist",
      title: "Automotive Parts Expert",
      description: "Automotive parts and inventory AI agent that manages parts catalog, inventory, and provides technical parts guidance.",
      icon: Wrench,
      features: [
        "Parts Catalog",
        "Inventory Management",
        "Technical Specifications",
        "Compatibility Analysis",
        "Pricing Optimization",
        "Supplier Relations"
      ],
      useCases: [
        "Parts Sales",
        "Inventory Management",
        "Technical Support",
        "Parts Research",
        "Supplier Coordination"
      ],
      category: "Car Dealership"
    },
    {
      id: "ai-mechanic",
      name: "AI Mechanic",
      title: "Diagnostic Specialist",
      description: "Automotive diagnostic AI agent that analyzes vehicle problems, recommends repairs, and provides technical guidance.",
      icon: Brain,
      features: [
        "Diagnostic Analysis",
        "Repair Recommendations",
        "Technical Documentation",
        "Parts Identification",
        "Service Scheduling",
        "Quality Control"
      ],
      useCases: [
        "Vehicle Diagnostics",
        "Repair Planning",
        "Technical Support",
        "Service Documentation",
        "Quality Assurance"
      ],
      category: "Car Dealership"
    },
    {
      id: "smma",
      name: "AI SMMA",
      title: "Social Media Marketing",
      description: "Social media marketing AI agent that creates content, manages campaigns, and optimizes social media presence.",
      icon: Megaphone,
      features: [
        "Content Creation",
        "Campaign Management",
        "Social Media Strategy",
        "Analytics & Reporting",
        "Community Management",
        "Influencer Relations"
      ],
      useCases: [
        "Social Media Campaigns",
        "Content Marketing",
        "Brand Management",
        "Customer Engagement",
        "Lead Generation"
      ],
      category: "Marketing"
    },
    {
      id: "receptionist",
      name: "AI Receptionist",
      title: "Customer Service Specialist",
      description: "Front-line customer service AI agent that handles inquiries, appointments, and provides initial customer support.",
      icon: Phone,
      features: [
        "Call Handling",
        "Appointment Scheduling",
        "Customer Inquiries",
        "Information Management",
        "Multi-channel Support",
        "Follow-up Coordination"
      ],
      useCases: [
        "Phone Support",
        "Appointment Booking",
        "Customer Inquiries",
        "Information Requests",
        "Service Coordination"
      ],
      category: "Customer Service"
    },
    {
      id: "analytics",
      name: "AI Analytics",
      title: "Sales Analytics Specialist",
      description: "Data analysis AI agent that provides insights, performance metrics, and strategic recommendations for sales teams.",
      icon: BarChart3,
      features: [
        "Data Analysis",
        "Performance Metrics",
        "Predictive Analytics",
        "Report Generation",
        "Trend Analysis",
        "Strategic Insights"
      ],
      useCases: [
        "Sales Performance",
        "Market Analysis",
        "Customer Insights",
        "Revenue Optimization",
        "Strategic Planning"
      ],
      category: "Analytics"
    }
  ];

  const allAgents = [...managementAgents, ...operationalAgents];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Specialized AI Agents</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI Agents for Every Business Role
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From C-suite executives to operational specialists, our AI agents are designed 
              to handle specific business functions with enterprise-grade expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Management AI Agents */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Management AI System</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              C-suite level AI agents that provide strategic leadership and executive decision support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <agent.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <CardDescription className="text-sm">{agent.title}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20">
                    {agent.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {agent.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{agent.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.useCases.slice(0, 2).map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                      {agent.useCases.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{agent.useCases.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="gradient">
                    Deploy Agent
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational AI Agents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational AI Agents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI agents for specific industries and operational functions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationalAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <agent.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <CardDescription className="text-sm">{agent.title}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-accent/5 text-accent border-accent/20">
                    {agent.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {agent.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{agent.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.useCases.slice(0, 2).map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                      {agent.useCases.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{agent.useCases.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="gradient">
                    Deploy Agent
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
          <div className="bg-gradient-primary rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Deploy Your AI Team?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Choose from our specialized AI agents or request a custom solution for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse All Agents
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                Request Custom Agent
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAgents;
