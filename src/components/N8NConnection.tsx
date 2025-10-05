import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { n8nClient, N8NWorkflow } from "@/integrations/n8n/client";
import { 
  Link2, 
  CheckCircle, 
  XCircle, 
  Play, 
  Pause, 
  Settings, 
  ExternalLink,
  Copy,
  TestTube,
  Zap
} from "lucide-react";

interface N8NConnectionProps {
  automationId: string;
  automationTitle: string;
  onDeployed?: (deploymentInfo: any) => void;
}

export const N8NConnection = ({ automationId, automationTitle, onDeployed }: N8NConnectionProps) => {
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [n8nUrl, setN8nUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [workflows, setWorkflows] = useState<N8NWorkflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved connection details
    const savedUrl = localStorage.getItem('n8n_url');
    const savedApiKey = localStorage.getItem('n8n_api_key');
    
    if (savedUrl) setN8nUrl(savedUrl);
    if (savedApiKey) setApiKey(savedApiKey);
  }, []);

  const testConnection = async () => {
    if (!n8nUrl || !apiKey) {
      toast({
        title: "Missing Information",
        description: "Please enter both n8n URL and API key",
        variant: "destructive",
      });
      return;
    }

    setConnectionStatus('connecting');
    
    try {
      // Update client with new URL and API key
      n8nClient.setApiKey(apiKey);
      
      const result = await n8nClient.testConnection();
      
      if (result.connected) {
        setConnectionStatus('connected');
        localStorage.setItem('n8n_url', n8nUrl);
        localStorage.setItem('n8n_api_key', apiKey);
        
        // Load workflows
        const workflowList = await n8nClient.getWorkflows();
        setWorkflows(workflowList);
        
        toast({
          title: "Connected Successfully",
          description: `Connected to n8n v${result.version}`,
        });
      } else {
        setConnectionStatus('disconnected');
        toast({
          title: "Connection Failed",
          description: "Could not connect to n8n instance",
          variant: "destructive",
        });
      }
    } catch (error) {
      setConnectionStatus('disconnected');
      toast({
        title: "Connection Error",
        description: "Failed to connect to n8n instance",
        variant: "destructive",
      });
    }
  };

  const createReadyReserveWorkflow = async () => {
    if (!selectedWorkflow) return;

    try {
      const template = await n8nClient.getReadyReserveTemplates();
      const automationTemplate = template.find(t => t.id.includes(automationId));
      
      if (!automationTemplate) {
        toast({
          title: "Template Not Found",
          description: "No template available for this automation",
          variant: "destructive",
        });
        return;
      }

      // Create workflow with automation-specific configuration
      const newWorkflow = {
        ...automationTemplate,
        name: `${automationTitle} - ReadyReserve AI`,
        nodes: automationTemplate.nodes.map(node => {
          if (node.type === 'n8n-nodes-base.webhook') {
            return {
              ...node,
              parameters: {
                ...node.parameters,
                path: `${automationId}-webhook`
              }
            };
          }
          if (node.type === 'n8n-nodes-base.httpRequest') {
            return {
              ...node,
              parameters: {
                ...node.parameters,
                url: `${window.location.origin}/api/automations/${automationId}/execute`
              }
            };
          }
          return node;
        })
      };

      const createdWorkflow = await n8nClient.createWorkflow(newWorkflow);
      
      // Get webhook URL
      const webhookNode = createdWorkflow.nodes.find(node => node.type === 'n8n-nodes-base.webhook');
      if (webhookNode) {
        const webhookUrl = await n8nClient.getWebhookUrl(createdWorkflow.id, webhookNode.id);
        setWebhookUrl(webhookUrl);
        onConnected?.(webhookUrl);
      }

      toast({
        title: "Workflow Created",
        description: "ReadyReserve AI workflow created successfully",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create workflow",
        variant: "destructive",
      });
    }
  };

  const testWebhook = async () => {
    if (!webhookUrl) return;

    setTesting(true);
    try {
      const result = await n8nClient.testWebhook(webhookUrl, {
        test: true,
        automationId,
        message: "Test message from ReadyReserve AI"
      });

      if (result.success) {
        toast({
          title: "Webhook Test Successful",
          description: "Webhook is working correctly",
        });
      } else {
        toast({
          title: "Webhook Test Failed",
          description: "Webhook is not responding",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Test Error",
        description: "Failed to test webhook",
        variant: "destructive",
      });
    } finally {
      setTesting(false);
    }
  };

  const copyWebhookUrl = () => {
    navigator.clipboard.writeText(webhookUrl);
    toast({
      title: "Copied",
      description: "Webhook URL copied to clipboard",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="h-5 w-5" />
          n8n Integration
        </CardTitle>
        <CardDescription>
          Connect your n8n instance to use ReadyReserve AI agents in your workflows
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="connection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="webhook">Webhook</TabsTrigger>
          </TabsList>

          <TabsContent value="connection" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="n8n-url">n8n Instance URL</Label>
                <Input
                  id="n8n-url"
                  placeholder="https://your-n8n-instance.com"
                  value={n8nUrl}
                  onChange={(e) => setN8nUrl(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  URL of your n8n instance (e.g., https://n8n.yourdomain.com)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Your n8n API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Generate an API key in your n8n settings
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button onClick={testConnection} disabled={connectionStatus === 'connecting'}>
                  {connectionStatus === 'connecting' ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <TestTube className="h-4 w-4 mr-2" />
                      Test Connection
                    </>
                  )}
                </Button>

                {connectionStatus === 'connected' && (
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Connected
                  </Badge>
                )}
              </div>

              {connectionStatus === 'connected' && (
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Successfully connected to your n8n instance. You can now create workflows.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </TabsContent>

          <TabsContent value="workflow" className="space-y-4">
            {connectionStatus === 'connected' ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Workflow</Label>
                  <div className="space-y-2">
                    {workflows.map((workflow) => (
                      <div
                        key={workflow.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedWorkflow === workflow.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedWorkflow(workflow.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{workflow.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {workflow.nodes.length} nodes
                            </p>
                          </div>
                          <Badge variant={workflow.active ? "default" : "secondary"}>
                            {workflow.active ? (
                              <>
                                <Play className="h-3 w-3 mr-1" />
                                Active
                              </>
                            ) : (
                              <>
                                <Pause className="h-3 w-3 mr-1" />
                                Inactive
                              </>
                            )}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={createReadyReserveWorkflow}
                  disabled={!selectedWorkflow}
                  className="w-full"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Create ReadyReserve AI Workflow
                </Button>
              </div>
            ) : (
              <Alert>
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  Please connect to your n8n instance first to manage workflows.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="webhook" className="space-y-4">
            {webhookUrl ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <div className="flex gap-2">
                    <Input value={webhookUrl} readOnly className="font-mono text-sm" />
                    <Button variant="outline" size="icon" onClick={copyWebhookUrl}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Use this URL in your n8n workflow to trigger ReadyReserve AI
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button onClick={testWebhook} disabled={testing}>
                    {testing ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Testing...
                      </>
                    ) : (
                      <>
                        <TestTube className="h-4 w-4 mr-2" />
                        Test Webhook
                      </>
                    )}
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={webhookUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open in Browser
                    </a>
                  </Button>
                </div>

                <Alert>
                  <Settings className="h-4 w-4" />
                  <AlertDescription>
                    <strong>How to use:</strong> Add this webhook URL as a trigger node in your n8n workflow. 
                    When the webhook receives data, it will automatically execute your ReadyReserve AI automation.
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <Alert>
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  Create a workflow first to get your webhook URL.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
