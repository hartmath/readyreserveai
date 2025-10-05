import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  CheckCircle, 
  XCircle, 
  Play, 
  Settings, 
  ExternalLink,
  Copy,
  TestTube,
  Zap,
  FileText,
  Key,
  Database
} from "lucide-react";

interface WorkflowDeploymentProps {
  automationId: string;
  automationTitle: string;
  onDeployed?: (deploymentInfo: any) => void;
}

interface UserConfig {
  // API Keys
  openaiApiKey?: string;
  slackToken?: string;
  twitterToken?: string;
  crmToken?: string;
  
  // Business Data
  businessName?: string;
  businessType?: string;
  supportEmail?: string;
  
  // Endpoints
  crmEndpoint?: string;
  databaseEndpoint?: string;
  slackChannel?: string;
  
  // Custom Data
  customPrompts?: string;
  businessRules?: string;
}

export const WorkflowDeployment = ({ automationId, automationTitle, onDeployed }: WorkflowDeploymentProps) => {
  const [deploymentStatus, setDeploymentStatus] = useState<'not-deployed' | 'configuring' | 'deployed'>('not-deployed');
  const [userConfig, setUserConfig] = useState<UserConfig>({});
  const [deploymentPackage, setDeploymentPackage] = useState<any>(null);
  const [testing, setTesting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved configuration
    const savedConfig = localStorage.getItem(`workflow_config_${automationId}`);
    if (savedConfig) {
      setUserConfig(JSON.parse(savedConfig));
      setDeploymentStatus('configuring');
    }
  }, [automationId]);

  const saveConfiguration = () => {
    localStorage.setItem(`workflow_config_${automationId}`, JSON.stringify(userConfig));
    toast({
      title: "Configuration Saved",
      description: "Your workflow configuration has been saved",
    });
  };

  const generateDeploymentPackage = async () => {
    setDeploymentStatus('configuring');
    
    try {
      // Generate deployment package with user's configuration
      const packageData = {
        automationId,
        automationTitle,
        userConfig,
        workflowTemplate: await getWorkflowTemplate(automationId),
        deploymentInstructions: getDeploymentInstructions(automationId),
        webhookUrl: `${window.location.origin}/api/automations/${automationId}/execute`
      };
      
      setDeploymentPackage(packageData);
      setDeploymentStatus('deployed');
      
      toast({
        title: "Deployment Package Ready",
        description: "Your workflow is ready to deploy to n8n",
      });
      
      onDeployed?.(packageData);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate deployment package",
        variant: "destructive",
      });
    }
  };

  const downloadWorkflow = () => {
    if (!deploymentPackage) return;
    
    const workflowData = {
      name: `${automationTitle} - ReadyReserve AI`,
      nodes: deploymentPackage.workflowTemplate.nodes,
      connections: deploymentPackage.workflowTemplate.connections,
      settings: {
        executionOrder: "v1"
      }
    };
    
    const blob = new Blob([JSON.stringify(workflowData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${automationId}-workflow.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Workflow Downloaded",
      description: "Import this file into your n8n instance",
    });
  };

  const copyWebhookUrl = () => {
    if (!deploymentPackage) return;
    
    navigator.clipboard.writeText(deploymentPackage.webhookUrl);
    toast({
      title: "Copied",
      description: "Webhook URL copied to clipboard",
    });
  };

  const testWebhook = async () => {
    if (!deploymentPackage) return;

    setTesting(true);
    try {
      const response = await fetch(deploymentPackage.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          test: true,
          automationId,
          message: "Test message from ReadyReserve AI workflow"
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Webhook Test Successful",
          description: "Your workflow is working correctly",
        });
      } else {
        toast({
          title: "Webhook Test Failed",
          description: "Please check your configuration",
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Deploy ReadyReserve AI Workflow
        </CardTitle>
        <CardDescription>
          Configure and deploy your {automationTitle} workflow to n8n
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="configure" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="configure">Configure</TabsTrigger>
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
            <TabsTrigger value="test">Test</TabsTrigger>
          </TabsList>

          <TabsContent value="configure" className="space-y-4">
            <div className="space-y-6">
              {/* API Keys Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  API Keys & Credentials
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <Input
                      id="openai-key"
                      type="password"
                      placeholder="sk-..."
                      value={userConfig.openaiApiKey || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, openaiApiKey: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="slack-token">Slack Token (Optional)</Label>
                    <Input
                      id="slack-token"
                      type="password"
                      placeholder="xoxb-..."
                      value={userConfig.slackToken || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, slackToken: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="twitter-token">Twitter Token (Optional)</Label>
                    <Input
                      id="twitter-token"
                      type="password"
                      placeholder="Bearer token..."
                      value={userConfig.twitterToken || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, twitterToken: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="crm-token">CRM Token (Optional)</Label>
                    <Input
                      id="crm-token"
                      type="password"
                      placeholder="API token..."
                      value={userConfig.crmToken || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, crmToken: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Business Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Business Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input
                      id="business-name"
                      placeholder="Your Company Name"
                      value={userConfig.businessName || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, businessName: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Input
                      id="business-type"
                      placeholder="e.g., SaaS, E-commerce, Consulting"
                      value={userConfig.businessType || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, businessType: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="support-email">Support Email</Label>
                    <Input
                      id="support-email"
                      type="email"
                      placeholder="support@yourcompany.com"
                      value={userConfig.supportEmail || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, supportEmail: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="slack-channel">Slack Channel (Optional)</Label>
                    <Input
                      id="slack-channel"
                      placeholder="#general"
                      value={userConfig.slackChannel || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, slackChannel: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Endpoints Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Integration Endpoints
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="crm-endpoint">CRM Endpoint (Optional)</Label>
                    <Input
                      id="crm-endpoint"
                      placeholder="https://your-crm.com/api"
                      value={userConfig.crmEndpoint || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, crmEndpoint: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="database-endpoint">Database Endpoint (Optional)</Label>
                    <Input
                      id="database-endpoint"
                      placeholder="https://your-database.com/api"
                      value={userConfig.databaseEndpoint || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, databaseEndpoint: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Custom Configuration */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Custom Configuration
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-prompts">Custom AI Prompts (Optional)</Label>
                    <Textarea
                      id="custom-prompts"
                      placeholder="Add any custom instructions for the AI agent..."
                      value={userConfig.customPrompts || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, customPrompts: e.target.value })}
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-rules">Business Rules (Optional)</Label>
                    <Textarea
                      id="business-rules"
                      placeholder="Add any specific business rules or constraints..."
                      value={userConfig.businessRules || ''}
                      onChange={(e) => setUserConfig({ ...userConfig, businessRules: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={saveConfiguration}>
                  <Settings className="h-4 w-4 mr-2" />
                  Save Configuration
                </Button>
                <Button onClick={generateDeploymentPackage} variant="default">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Deployment Package
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deploy" className="space-y-4">
            {deploymentStatus === 'deployed' && deploymentPackage ? (
              <div className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your workflow is ready to deploy! Follow the steps below to set it up in n8n.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Deployment Steps:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <Badge variant="default" className="mt-1">1</Badge>
                      <div>
                        <p className="font-medium">Download Workflow</p>
                        <p className="text-sm text-muted-foreground">Download the n8n workflow file</p>
                        <Button size="sm" className="mt-2" onClick={downloadWorkflow}>
                          <Download className="h-4 w-4 mr-2" />
                          Download Workflow
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <Badge variant="default" className="mt-1">2</Badge>
                      <div>
                        <p className="font-medium">Import to n8n</p>
                        <p className="text-sm text-muted-foreground">Import the downloaded file into your n8n instance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <Badge variant="default" className="mt-1">3</Badge>
                      <div>
                        <p className="font-medium">Configure Credentials</p>
                        <p className="text-sm text-muted-foreground">Add your API keys and credentials in n8n</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <Badge variant="default" className="mt-1">4</Badge>
                      <div>
                        <p className="font-medium">Activate Workflow</p>
                        <p className="text-sm text-muted-foreground">Turn on the workflow in n8n</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <div className="flex gap-2">
                    <Input value={deploymentPackage.webhookUrl} readOnly className="font-mono text-sm" />
                    <Button variant="outline" size="icon" onClick={copyWebhookUrl}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This webhook URL is already configured in your workflow
                  </p>
                </div>
              </div>
            ) : (
              <Alert>
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  Please configure your workflow first to generate the deployment package.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="test" className="space-y-4">
            {deploymentStatus === 'deployed' && deploymentPackage ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Test Your Workflow</Label>
                  <p className="text-sm text-muted-foreground">
                    Test your deployed workflow to ensure it's working correctly
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
                        Test Workflow
                      </>
                    )}
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={deploymentPackage.webhookUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Webhook URL
                    </a>
                  </Button>
                </div>

                <Alert>
                  <FileText className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Testing Tips:</strong> Make sure your n8n workflow is active and properly configured. 
                    The test will send a sample request to your ReadyReserve AI agent.
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <Alert>
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  Deploy your workflow first to enable testing.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Helper functions
async function getWorkflowTemplate(automationId: string) {
  // This would fetch the actual workflow template for the automation
  // For now, return a basic template
  return {
    nodes: [
      {
        id: 'webhook-trigger',
        name: 'Webhook Trigger',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 1,
        position: [100, 100],
        parameters: {
          path: automationId,
          httpMethod: 'POST'
        }
      },
      {
        id: 'readyreserve-ai',
        name: 'ReadyReserve AI',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.1,
        position: [400, 100],
        parameters: {
          url: `${window.location.origin}/api/automations/${automationId}/execute`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }
    ],
    connections: {
      'webhook-trigger': {
        main: [
          [
            {
              node: 'readyreserve-ai',
              type: 'main',
              index: 0
            }
          ]
        ]
      }
    }
  };
}

function getDeploymentInstructions(automationId: string) {
  return [
    "Download the workflow file",
    "Import it into your n8n instance",
    "Configure your API keys and credentials",
    "Activate the workflow",
    "Test with sample data"
  ];
}
