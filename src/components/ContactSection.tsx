import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || null,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([data]);

      if (error) throw error;
    
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input 
            id="name"
            name="name"
            placeholder="John Doe" 
            required
            className="transition-smooth"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input 
            id="email"
            name="email"
            type="email" 
            placeholder="john@company.com" 
            required
            className="transition-smooth"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company Name
        </label>
        <Input 
          id="company"
          name="company"
          placeholder="Your Company Inc." 
          className="transition-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about your AI automation needs
        </label>
        <Textarea 
          id="message"
          name="message"
          placeholder="I'm interested in automating..."
          rows={4}
          required
          className="transition-smooth resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        variant="gradient" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Consultation"}
      </Button>
    </form>
  );
};