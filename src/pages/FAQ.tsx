import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is ReadyReserve AI?",
        a: "ReadyReserve AI is an AI automation platform that helps businesses streamline workflows and increase productivity through intelligent automation. We offer pre-built automations and custom solutions powered by leading AI models from OpenAI, Azure, and Google."
      },
      {
        q: "How do I get started?",
        a: "Simply browse our automation library, test any automation with our AI chat interface, sign up for a free account, and activate the automations you need. You can configure each automation to match your specific workflow requirements."
      },
      {
        q: "Do I need technical knowledge to use ReadyReserve AI?",
        a: "No! Our platform is designed for business users. The AI chat interface guides you through testing and setup, and our pre-built automations require no coding. For advanced customizations, our team can assist you."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "What are the pricing plans?",
        a: "We offer Starter, Professional, and Enterprise plans. The Starter plan is free with 10 tasks/month, Professional is $49/month with 100 tasks/month, and Enterprise offers unlimited tasks with custom pricing. All plans include core features with varying levels of support and capabilities."
      },
      {
        q: "What counts as a 'task'?",
        a: "A task is a single execution of an automation. For example, if you run an email summarization automation on one email, that counts as one task. Batch operations may count as multiple tasks depending on the automation."
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes, you can change your plan at any time from your dashboard. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle."
      }
    ]
  },
  {
    category: "Automations",
    questions: [
      {
        q: "How many automations can I use?",
        a: "All plans allow you to activate and use as many automations as you need. The limitation is on the number of tasks (executions) per month, not the number of different automations."
      },
      {
        q: "Can I customize automations?",
        a: "Yes! Each automation can be configured with custom prompts, webhooks, API keys, and scheduling options. Professional and Enterprise plans include priority support for customization requests."
      },
      {
        q: "What AI models do you support?",
        a: "We integrate with OpenAI (GPT-4, GPT-3.5), Google AI (Gemini), and Azure AI. Different automations may use different models optimized for their specific tasks."
      }
    ]
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "Is my data secure?",
        a: "Absolutely. We use enterprise-grade encryption for data in transit and at rest. All automations run in isolated environments, and we never share your data with third parties. We're compliant with GDPR and SOC 2 standards."
      },
      {
        q: "Where is my data stored?",
        a: "Data is stored in secure cloud infrastructure with automatic backups. You can request data export or deletion at any time from your dashboard settings."
      },
      {
        q: "Do you train AI models on my data?",
        a: "No. We do not use your data to train AI models. Your data is only used to execute the automations you configure."
      }
    ]
  },
  {
    category: "Integration & API",
    questions: [
      {
        q: "Can I integrate ReadyReserve with my existing tools?",
        a: "Yes! We offer webhook support, API access, and direct integrations with popular tools. Enterprise plans include custom integration development."
      },
      {
        q: "Do you offer an API?",
        a: "Yes, Professional and Enterprise plans include API access. You can trigger automations programmatically and retrieve results via our REST API."
      },
      {
        q: "What about n8n integration?",
        a: "We fully support n8n workflows. You can connect ReadyReserve automations to your n8n instances for advanced workflow orchestration."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        q: "What kind of support do you offer?",
        a: "Starter plans include email support with 48-hour response time. Professional plans get priority email support. Enterprise plans include dedicated account management and phone support."
      },
      {
        q: "Do you offer training or onboarding?",
        a: "Professional plans include onboarding assistance. Enterprise plans get dedicated onboarding sessions and ongoing training for your team."
      },
      {
        q: "Can you build custom automations for us?",
        a: "Yes! Enterprise plans include custom automation development. Contact us to discuss your specific needs."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about ReadyReserve AI
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((section, idx) => (
                <div key={idx} className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                  <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, qIdx) => (
                      <AccordionItem key={qIdx} value={`${idx}-${qIdx}`} className="border-b border-border/50 last:border-0">
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center bg-primary/5 border border-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium">
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;