import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const About = () => {
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
                <span className="text-sm font-semibold text-primary">About ReadyReserve</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering Businesses with AI Automation
              </h1>
              
              <p className="text-xl text-muted-foreground">
                We're on a mission to make AI automation accessible to everyone, 
                helping businesses save time and scale effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At ReadyReserve, we believe that every business deserves access to 
                  powerful AI automation tools. We've created a marketplace where you 
                  can discover, customize, and deploy AI workflows in minutes—not months.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform connects businesses with pre-built automation solutions, 
                  eliminating the need for expensive development and lengthy implementation times.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">150+</h3>
                  <p className="text-sm text-muted-foreground">AI Automations</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">10,000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Users</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">98%</h3>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7</h3>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible with AI automation, 
                  bringing you the latest and most effective solutions.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  AI shouldn't be complicated. We make powerful automation accessible 
                  to businesses of all sizes, with no coding required.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Results</h3>
                <p className="text-muted-foreground">
                  Every automation in our marketplace is tested and proven to deliver 
                  real business value and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI automation to save time and scale.
              </p>
              <Button variant="secondary" size="lg">
                Get Started Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
