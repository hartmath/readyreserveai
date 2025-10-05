import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AgentChat } from "@/components/AgentChat";
import { Star, Users, Clock, CheckCircle, Zap, Shield, Headphones } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AutomationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [automation, setAutomation] = useState<any>(null);
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
    fetchAutomation();
  }, [id]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    
    if (user && id) {
      const { data } = await supabase
        .from("user_automations")
        .select("*")
        .eq("user_id", user.id)
        .eq("automation_id", id)
        .maybeSingle();
      
      setIsActive(!!data);
    }
  };

  const fetchAutomation = async () => {
    if (!id) return;
    
    try {
      const { data, error } = await supabase
        .from("automations")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setAutomation(data);
    } catch (error) {
      console.error("Error fetching automation:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async () => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please sign in to activate this automation",
      });
      navigate("/login");
      return;
    }

    try {
      if (isActive) {
        const { error } = await supabase
          .from("user_automations")
          .delete()
          .eq("user_id", user.id)
          .eq("automation_id", id);

        if (error) throw error;
        setIsActive(false);

        toast({
          title: "Automation deactivated",
          description: "Automation has been removed from your dashboard",
        });
      } else {
        const { error } = await supabase
          .from("user_automations")
          .insert({
            user_id: user.id,
            automation_id: id,
            status: "active",
          });

        if (error) throw error;
        setIsActive(true);

        toast({
          title: "Automation activated!",
          description: "Check your dashboard to configure it",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!automation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Automation not found</h1>
            <Button onClick={() => navigate("/browse")}>Browse Automations</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">{automation.category}</Badge>
              <h1 className="text-5xl font-bold mb-4">{automation.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {automation.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold">{automation.rating}</span>
                  <span className="text-sm text-muted-foreground">(324 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{automation.user_count}+ active users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">5 min setup</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant={isActive ? "outline" : "gradient"} 
                  size="lg" 
                  className="px-8"
                  onClick={handleActivate}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isActive ? "Deactivate" : "Activate Now"}
                </Button>
                {isActive && (
                  <>
                    <Button 
                      variant="gradient" 
                      size="lg" 
                      onClick={() => navigate(`/automation/${id}/config`)}
                    >
                      Configure
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => navigate("/dashboard")}
                    >
                      Go to Dashboard
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
                <p className="text-xl text-muted-foreground">
                  Try our Ready Assistant right now - no signup required
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <Card className="gradient-card">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">🎯 What Makes Us Different</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Context-Aware Intelligence:</strong> Our AI remembers the entire conversation and adapts responses based on context
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Real-Time Learning:</strong> Continuously improves from interactions to provide better answers
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Natural Language:</strong> Understands intent, not just keywords - feels like talking to a human expert
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Instant Deployment:</strong> Activate in seconds, no complex setup or training required
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">💡 Try These Examples</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">• "How can you help my business?"</p>
                        <p className="text-muted-foreground">• "What makes your AI different?"</p>
                        <p className="text-muted-foreground">• "Can you handle customer returns?"</p>
                        <p className="text-muted-foreground">• "How do I get started?"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <AgentChat 
                    automationId={id!} 
                    automationTitle={automation.title}
                    automationDescription={automation.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: Zap,
                    title: "Instant Responses",
                    description: "Provide immediate answers to customer questions 24/7 with AI-powered responses"
                  },
                  {
                    icon: CheckCircle,
                    title: "Natural Conversations",
                    description: "Advanced NLP ensures human-like interactions that feel natural and helpful"
                  },
                  {
                    icon: Shield,
                    title: "Secure & Compliant",
                    description: "Enterprise-grade security with GDPR and SOC2 compliance built-in"
                  },
                  {
                    icon: Headphones,
                    title: "Multi-Channel Support",
                    description: "Works across website, mobile app, Slack, and popular messaging platforms"
                  }
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* How It Works */}
              <h2 className="text-3xl font-bold mb-8">How It Works</h2>
              <div className="space-y-6 mb-12">
                {[
                  {
                    step: "1",
                    title: "Connect Your Data",
                    description: "Import your FAQs, knowledge base, or product documentation"
                  },
                  {
                    step: "2",
                    title: "Customize Responses",
                    description: "Train the AI with your brand voice and specific response guidelines"
                  },
                  {
                    step: "3",
                    title: "Deploy & Monitor",
                    description: "Add the chatbot to your website and track performance in real-time"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                  Ready to Transform Customer Support?
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Start free, upgrade as you grow. No credit card required.
                </p>
                <Button variant="secondary" size="lg">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AutomationDetail;
