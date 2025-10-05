import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Settings, Play, History, ChevronLeft, Save } from "lucide-react";
import { WorkflowDeployment } from "@/components/WorkflowDeployment";

const AutomationConfig = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [automation, setAutomation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [config, setConfig] = useState({
    apiKey: "",
    webhookUrl: "",
    customPrompt: "",
    enabled: true,
    schedule: "manual",
  });
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    checkAccess();
    fetchAutomation();
    fetchConfig();
    fetchLogs();
  }, [id]);

  const checkAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
      return;
    }

    // Check if user has this automation activated
    const { data } = await supabase
      .from("user_automations")
      .select("*")
      .eq("user_id", user.id)
      .eq("automation_id", id)
      .maybeSingle();

    if (!data) {
      toast({
        title: "Access denied",
        description: "Please activate this automation first",
        variant: "destructive",
      });
      navigate("/browse");
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
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConfig = async () => {
    if (!id) return;
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("automation_configs")
      .select("*")
      .eq("user_id", user.id)
      .eq("automation_id", id)
      .maybeSingle();

    if (data) {
      setConfig({
        apiKey: data.api_key || "",
        webhookUrl: data.webhook_url || "",
        customPrompt: data.custom_prompt || "",
        enabled: data.enabled,
        schedule: data.schedule || "manual",
      });
    }
  };

  const fetchLogs = async () => {
    if (!id) return;
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("automation_logs")
      .select("*")
      .eq("user_id", user.id)
      .eq("automation_id", id)
      .order("created_at", { ascending: false })
      .limit(10);

    if (data) {
      setLogs(data);
    }
  };

  const handleSaveConfig = async () => {
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("automation_configs")
        .upsert(
          {
            user_id: user.id,
            automation_id: id,
            api_key: config.apiKey,
            webhook_url: config.webhookUrl,
            custom_prompt: config.customPrompt,
            enabled: config.enabled,
            schedule: config.schedule,
          },
          { 
            onConflict: 'user_id,automation_id',
            ignoreDuplicates: false 
          }
        );

      if (error) throw error;

      toast({
        title: "Configuration saved",
        description: "Your automation settings have been updated",
      });
    } catch (error) {
      console.error("Error saving config:", error);
      toast({
        title: "Error",
        description: "Failed to save configuration",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleTestRun = async () => {
    setExecuting(true);
    try {
      const { data, error } = await supabase.functions.invoke("execute-automation", {
        body: {
          automationId: id,
          inputData: { prompt: "Test execution" },
        },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Test run completed",
          description: "Automation executed successfully",
        });
        fetchLogs();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error executing automation:", error);
      toast({
        title: "Execution failed",
        description: error instanceof Error ? error.message : "Failed to execute automation",
        variant: "destructive",
      });
    } finally {
      setExecuting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{automation?.title}</h1>
                <p className="text-muted-foreground">{automation?.description}</p>
              </div>
              <Badge variant="default" className="bg-green-500">Active</Badge>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="settings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="settings">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="workflow">
                <Settings className="w-4 h-4 mr-2" />
                Deploy Workflow
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="w-4 h-4 mr-2" />
                Execution History
              </TabsTrigger>
            </TabsList>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                  <CardDescription>
                    Set up your automation parameters and API connections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Enabled Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enabled" className="text-base">Enable Automation</Label>
                      <p className="text-sm text-muted-foreground">
                        Automation will run based on your schedule
                      </p>
                    </div>
                    <Switch
                      id="enabled"
                      checked={config.enabled}
                      onCheckedChange={(checked) => setConfig({ ...config, enabled: checked })}
                    />
                  </div>

                  {/* API Key */}
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key (Optional)</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="sk-..."
                      value={config.apiKey}
                      onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Connect your own API key for advanced features
                    </p>
                  </div>

                  {/* Webhook URL */}
                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl">Webhook URL (Optional)</Label>
                    <Input
                      id="webhookUrl"
                      placeholder="https://..."
                      value={config.webhookUrl}
                      onChange={(e) => setConfig({ ...config, webhookUrl: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Receive notifications when automation runs
                    </p>
                  </div>

                  {/* Custom Prompt */}
                  <div className="space-y-2">
                    <Label htmlFor="customPrompt">Custom Instructions</Label>
                    <Textarea
                      id="customPrompt"
                      placeholder="Add custom instructions for the AI..."
                      value={config.customPrompt}
                      onChange={(e) => setConfig({ ...config, customPrompt: e.target.value })}
                      rows={4}
                    />
                  </div>

                  {/* Schedule */}
                  <div className="space-y-2">
                    <Label htmlFor="schedule">Execution Schedule</Label>
                    <select
                      id="schedule"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      value={config.schedule}
                      onChange={(e) => setConfig({ ...config, schedule: e.target.value })}
                    >
                      <option value="manual">Manual only</option>
                      <option value="hourly">Every hour</option>
                      <option value="daily">Daily at 9 AM</option>
                      <option value="weekly">Weekly on Monday</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="gradient" 
                      onClick={handleSaveConfig}
                      disabled={saving}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? "Saving..." : "Save Configuration"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleTestRun}
                      disabled={executing}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {executing ? "Running..." : "Test Run"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Workflow Deployment Tab */}
            <TabsContent value="workflow">
              <WorkflowDeployment 
                automationId={id || ''} 
                automationTitle={automation?.title || ''}
                onDeployed={(deploymentInfo) => {
                  toast({
                    title: "Workflow Ready",
                    description: "Your workflow is ready to deploy to n8n",
                  });
                }}
              />
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Execution History</CardTitle>
                  <CardDescription>
                    Recent automation runs and their results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {logs.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        No execution history yet. Run a test to see results here.
                      </p>
                    ) : (
                      logs.map((log) => (
                        <div
                          key={log.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant="default"
                                className={log.status === "success" ? "bg-green-500" : "bg-red-500"}
                              >
                                {log.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(log.created_at).toLocaleString()}
                              </span>
                            </div>
                            <p className="text-sm">{log.message}</p>
                            {log.output_data?.result && (
                              <p className="text-xs text-muted-foreground mt-2">
                                Result: {log.output_data.result.substring(0, 100)}...
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Duration</p>
                            <p className="text-sm font-medium">
                              {log.duration_ms ? `${(log.duration_ms / 1000).toFixed(2)}s` : 'N/A'}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AutomationConfig;
