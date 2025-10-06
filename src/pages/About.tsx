import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Users, Zap, Building2, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About ReadyReserve</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Enterprise-Grade AI Consulting for SMBs
              </h1>
              
              <p className="text-xl text-muted-foreground">
                We operate at the same level as IBM Watson, Google Cloud, Microsoft Azure, and AWS, 
                but with the personalized approach your small and medium business deserves.
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
                  At ReadyReserve AI, we operate as peers to IBM Watson, Google Cloud, Microsoft Azure, 
                  and AWS in the AI consulting space. While these giants focus on Fortune 500 enterprises, 
                  we bring the same level of expertise and capability to small and medium businesses.
                </p>
                <p className="text-lg text-muted-foreground">
                  We are not powered by these companies - we are their equals in AI consulting expertise, 
                  but with a specialized focus on delivering enterprise-grade solutions with the personal 
                  touch that SMBs need and deserve.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Enterprise-Grade</h3>
                  <p className="text-sm text-muted-foreground">AI Consulting</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">SMB Focus</h3>
                  <p className="text-sm text-muted-foreground">Personalized Service</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Same Level</h3>
                  <p className="text-sm text-muted-foreground">As Global Leaders</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Local Touch</p>
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
    </Layout>
  );
};

export default About;
