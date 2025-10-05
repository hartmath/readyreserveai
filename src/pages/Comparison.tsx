import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const competitors = [
  {
    feature: "AI Model Selection",
    readyreserve: "OpenAI, Google, Azure - choose per automation",
    zapier: "Limited AI integrations",
    make: "Basic AI support",
    n8n: "Requires custom setup"
  },
  {
    feature: "Pre-built Automations",
    readyreserve: "150+ AI-powered automations",
    zapier: "General workflows only",
    make: "Limited AI templates",
    n8n: "Community templates"
  },
  {
    feature: "Custom AI Prompts",
    readyreserve: true,
    zapier: false,
    make: false,
    n8n: "With coding"
  },
  {
    feature: "Live AI Testing",
    readyreserve: true,
    zapier: false,
    make: false,
    n8n: false
  },
  {
    feature: "n8n Integration",
    readyreserve: "Native support",
    zapier: "Via webhooks",
    make: "Via webhooks",
    n8n: "N/A"
  },
  {
    feature: "Pricing Model",
    readyreserve: "Task-based, starts free",
    zapier: "Expensive per task",
    make: "Operations-based",
    n8n: "Self-hosted or cloud"
  },
  {
    feature: "Setup Time",
    readyreserve: "Instant - test before signup",
    zapier: "15-30 minutes",
    make: "20-40 minutes",
    n8n: "Hours for setup"
  },
  {
    feature: "Technical Knowledge",
    readyreserve: "None required",
    zapier: "Basic",
    make: "Moderate",
    n8n: "Advanced"
  }
];

const Comparison = () => {
  const renderValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4">Feature Comparison</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose ReadyReserve AI?
              </h1>
              <p className="text-lg text-muted-foreground">
                See how we compare to other automation platforms
              </p>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="font-bold">Feature</div>
                  <div className="text-center">
                    <div className="font-bold gradient-primary bg-clip-text text-transparent flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      ReadyReserve
                    </div>
                  </div>
                  <div className="text-center font-bold text-muted-foreground">Zapier</div>
                  <div className="text-center font-bold text-muted-foreground">Make</div>
                  <div className="text-center font-bold text-muted-foreground">n8n</div>
                </div>

                {competitors.map((row, index) => (
                  <Card key={index} className="mb-3">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="font-semibold text-sm">{row.feature}</div>
                        <div className="text-center bg-primary/5 py-2 px-3 rounded-lg border border-primary/20">
                          {renderValue(row.readyreserve)}
                        </div>
                        <div className="text-center text-muted-foreground py-2">
                          {renderValue(row.zapier)}
                        </div>
                        <div className="text-center text-muted-foreground py-2">
                          {renderValue(row.make)}
                        </div>
                        <div className="text-center text-muted-foreground py-2">
                          {renderValue(row.n8n)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto mt-16 text-center bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of businesses automating their workflows with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/browse" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium inline-block">
                  Browse Automations
                </Link>
                <Link to="/pricing" className="px-6 py-3 border border-border rounded-lg hover:bg-secondary/50 transition-smooth font-medium inline-block">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;