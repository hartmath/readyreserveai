import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Star, Zap, TrendingUp, Filter } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const automations = [
  {
    id: 1,
    title: "AI Customer Support Chatbot",
    description: "Automate customer inquiries with intelligent AI responses. 24/7 support with natural language understanding.",
    category: "Customer Support",
    rating: 4.9,
    users: "2.5k",
    popular: true,
  },
  {
    id: 2,
    title: "Social Media Scheduler",
    description: "Plan and auto-post content across all platforms. AI-powered content suggestions and optimal timing.",
    category: "Social Media",
    rating: 4.8,
    users: "1.8k",
    popular: true,
  },
  {
    id: 3,
    title: "Email Marketing Automation",
    description: "Personalized email campaigns with AI-driven segmentation and A/B testing capabilities.",
    category: "Marketing",
    rating: 4.7,
    users: "3.2k",
    popular: false,
  },
  {
    id: 4,
    title: "Lead Scoring & Qualification",
    description: "Automatically score and qualify leads using AI analysis of behavior and engagement patterns.",
    category: "Sales",
    rating: 4.9,
    users: "1.5k",
    popular: true,
  },
  {
    id: 5,
    title: "Content Generator",
    description: "Generate blog posts, social content, and marketing copy with advanced AI writing assistance.",
    category: "Content",
    rating: 4.6,
    users: "2.1k",
    popular: false,
  },
  {
    id: 6,
    title: "Invoice Processing",
    description: "Extract data from invoices automatically. OCR and AI-powered data validation for accuracy.",
    category: "Finance",
    rating: 4.8,
    users: "1.3k",
    popular: false,
  },
  {
    id: 7,
    title: "Meeting Transcription",
    description: "Auto-transcribe meetings and generate action items. Integration with major video platforms.",
    category: "Productivity",
    rating: 4.7,
    users: "2.8k",
    popular: true,
  },
  {
    id: 8,
    title: "Sentiment Analysis Dashboard",
    description: "Monitor customer sentiment across reviews, social media, and support tickets in real-time.",
    category: "Analytics",
    rating: 4.9,
    users: "1.1k",
    popular: false,
  },
];

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [automations, setAutomations] = useState<any[]>([]);
  const [filteredAutomations, setFilteredAutomations] = useState<any[]>([]);
  const [activeAutomations, setActiveAutomations] = useState<Set<string>>(new Set());
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = ["All Categories", "Customer Support", "Social Media", "Marketing", "Sales", "Analytics", "Productivity", "Content", "Finance"];

  useEffect(() => {
    checkUser();
    fetchAutomations();
  }, []);

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  useEffect(() => {
    filterAutomations();
  }, [searchQuery, selectedCategory, automations]);

  const filterAutomations = () => {
    let filtered = [...automations];

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(auto => 
        auto.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auto.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auto.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(auto => auto.category === selectedCategory);
    }

    setFilteredAutomations(filtered);
  };

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    
    if (user) {
      // Fetch user's active automations
      const { data } = await supabase
        .from("user_automations")
        .select("automation_id")
        .eq("user_id", user.id);
      
      if (data) {
        setActiveAutomations(new Set(data.map(a => a.automation_id)));
      }
    }
  };

  const fetchAutomations = async () => {
    try {
      const { data, error } = await supabase
        .from("automations")
        .select("*")
        .order("is_popular", { ascending: false });

      if (error) throw error;
      setAutomations(data || []);
    } catch (error) {
      console.error("Error fetching automations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (automationId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast({
        title: "Login required",
        description: "Please sign in to activate automations",
      });
      navigate("/login");
      return;
    }

    try {
      if (activeAutomations.has(automationId)) {
        // Deactivate
        const { error } = await supabase
          .from("user_automations")
          .delete()
          .eq("user_id", user.id)
          .eq("automation_id", automationId);

        if (error) throw error;

        setActiveAutomations(prev => {
          const newSet = new Set(prev);
          newSet.delete(automationId);
          return newSet;
        });

        toast({
          title: "Automation deactivated",
          description: "Automation has been removed from your dashboard",
        });
      } else {
        // Activate
        const { error } = await supabase
          .from("user_automations")
          .insert({
            user_id: user.id,
            automation_id: automationId,
            status: "active",
          });

        if (error) throw error;

        setActiveAutomations(prev => new Set([...prev, automationId]));

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

  return (
    <Layout>
      <div>
        {/* Header Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Browse AI Automations
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover 150+ ready-to-use AI workflows for every business need
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Input 
                    placeholder="Search automations..." 
                    className="h-14 pl-12 pr-4 text-base border-2 rounded-xl shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Filter Tags */}
              <div className="flex flex-wrap items-center gap-2 justify-center pt-4">
                <Button variant="tag" size="sm">
                  <Filter className="w-3 h-3 mr-1" />
                  {selectedCategory}
                </Button>
                {categories.filter(cat => cat !== selectedCategory).slice(0, 4).map(tag => (
                  <Button 
                    key={tag} 
                    variant="tag" 
                    size="sm"
                    onClick={() => setSelectedCategory(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Automations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : filteredAutomations.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No automations found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                <Button onClick={() => { setSearchQuery(""); setSelectedCategory("All Categories"); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAutomations.map((automation) => (
                  <Card key={automation.id} className="h-full hover:shadow-glow transition-all group">
                    <Link to={`/automation/${automation.id}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{automation.category}</Badge>
                          {automation.is_popular && (
                            <Badge variant="default" className="bg-primary/10 text-primary">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {automation.title}
                        </CardTitle>
                        <CardDescription>{automation.description}</CardDescription>
                      </CardHeader>
                    </Link>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-semibold">{automation.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({automation.user_count} users)
                          </span>
                        </div>
                        <Button
                          variant={activeAutomations.has(automation.id) ? "outline" : "gradient"}
                          size="sm"
                          onClick={(e) => handleActivate(automation.id, e)}
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          {activeAutomations.has(automation.id) ? "Deactivate" : "Activate"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Zap className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-muted-foreground">
                We add new automations every week. Submit your request and we'll build it for you.
              </p>
              <Button variant="gradient" size="lg">
                Request Custom Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Browse;
