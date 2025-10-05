import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { AutomationCategories } from "@/components/AutomationCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <AutomationCategories />
        <Testimonials />
        <HowItWorks />
        <div id="contact" className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Get Personalized Consulting</h2>
                <p className="text-muted-foreground">
                  Let's discuss how AI automation can transform your business
                </p>
              </div>
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;