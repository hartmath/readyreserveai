import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out AI automation",
      features: [
        "Up to 3 active automations",
        "1,000 tasks per month",
        "Basic integrations",
        "Community support",
        "Email notifications"
      ],
      cta: "Get Started",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "For growing businesses and teams",
      features: [
        "Unlimited automations",
        "50,000 tasks per month",
        "Advanced integrations",
        "Priority support",
        "Custom workflows",
        "Analytics dashboard",
        "Team collaboration",
        "API access"
      ],
      cta: "Start Free Trial",
      variant: "gradient" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for large organizations",
      features: [
        "Everything in Professional",
        "Unlimited tasks",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "White-label options",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Simple, Transparent Pricing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold">
                Choose Your Plan
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Start free, scale as you grow. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.popular ? 'border-primary shadow-glow' : ''}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      variant={plan.variant} 
                      className="w-full"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                    
                    <div className="space-y-3">
                      <p className="font-semibold text-sm">What's included:</p>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Can I change plans later?",
                    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the difference."
                  },
                  {
                    question: "What counts as a task?",
                    answer: "A task is any action performed by an automation, such as sending an email, updating a database record, or processing a form submission."
                  },
                  {
                    question: "Is there a free trial?",
                    answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers."
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <CardDescription>{faq.answer}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Our team is here to help you find the perfect plan for your needs.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Contact Sales
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  Schedule Demo
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

export default Pricing;
