import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Zap, TrendingUp, Settings, Plus, Activity } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [automations, setAutomations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    fetchUserData();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setUser(user);
  };

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setProfile(profileData);

      // Fetch user's active automations
      const { data: userAutomations } = await supabase
        .from("user_automations")
        .select(`
          *,
          automations (*)
        `)
        .eq("user_id", user.id);

      setAutomations(userAutomations || []);
    } catch (error: any) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/30">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 lg:mb-8 gap-3 sm:gap-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Welcome back, {profile?.full_name || user?.email}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate("/profile")} className="text-xs sm:text-sm">
                <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs sm:text-sm">
                Log Out
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
            <Card className="p-3 sm:p-4">
              <CardHeader className="flex flex-row items-center justify-between pb-2 px-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Active Automations
                </CardTitle>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </CardHeader>
              <CardContent className="px-0">
                <div className="text-2xl sm:text-3xl font-bold">{automations.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {automations.length === 0 ? "Get started" : "Running smoothly"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4">
              <CardHeader className="flex flex-row items-center justify-between pb-2 px-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Tasks This Month
                </CardTitle>
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              </CardHeader>
              <CardContent className="px-0">
                <div className="text-2xl sm:text-3xl font-bold">0</div>
                <p className="text-xs text-muted-foreground mt-1">
                  0 of 1,000 used (Free Plan)
                </p>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2 px-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Status
                </CardTitle>
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              </CardHeader>
              <CardContent className="px-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                  <Badge variant="default" className="bg-green-500 text-xs sm:text-sm">All Systems Operational</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last checked: just now
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Active Automations */}
          <Card className="p-3 sm:p-4">
            <CardHeader className="px-0 pb-3 sm:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Your Automations</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Manage and monitor your active workflows</CardDescription>
                </div>
                <Button variant="gradient" size="sm" onClick={() => navigate("/browse")} className="w-full sm:w-auto text-xs sm:text-sm">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Add Automation
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              {automations.length === 0 ? (
                <div className="text-center py-6 sm:py-8 lg:py-12">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">No automations yet</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Browse our marketplace to find the perfect automation for your needs.
                  </p>
                  <Button variant="gradient" size="sm" onClick={() => navigate("/browse")} className="text-xs sm:text-sm">
                    Browse Automations
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {automations.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors gap-3 sm:gap-0"
                    >
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="font-semibold text-sm sm:text-base">{item.automations.title}</h3>
                          <Badge variant="default" className="bg-green-500 text-xs w-fit">Active</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          {item.automations.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                          <span>Activated {new Date(item.activated_at).toLocaleDateString()}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>Status: {item.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigate(`/automation/${item.automations.id}/config`)}
                          className="text-xs flex-1 sm:flex-none"
                        >
                          Configure
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => navigate(`/automation/${item.automations.id}`)}
                          className="text-xs flex-1 sm:flex-none"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
