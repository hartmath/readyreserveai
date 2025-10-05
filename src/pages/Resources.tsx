import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Video, FileText, Download, ExternalLink } from "lucide-react";

const resources = {
  guides: [
    {
      title: "Complete Guide to AI Automation",
      description: "Everything you need to know about implementing AI automation in your business",
      type: "PDF Guide",
      icon: Book,
      downloadable: true
    },
    {
      title: "n8n Integration Handbook",
      description: "Step-by-step guide to connecting ReadyReserve AI with n8n workflows",
      type: "PDF Guide",
      icon: FileText,
      downloadable: true
    },
    {
      title: "ROI Calculator Workbook",
      description: "Calculate the potential return on investment for your automation initiatives",
      type: "Excel Template",
      icon: Download,
      downloadable: true
    }
  ],
  videos: [
    {
      title: "Getting Started with ReadyReserve AI",
      description: "A 10-minute walkthrough of the platform and its core features",
      type: "Video Tutorial",
      duration: "10 min",
      icon: Video
    },
    {
      title: "Building Your First Automation",
      description: "Learn how to set up, configure, and deploy your first AI automation",
      type: "Video Tutorial",
      duration: "15 min",
      icon: Video
    },
    {
      title: "Advanced Configuration Techniques",
      description: "Master advanced features like webhooks, custom prompts, and API integration",
      type: "Video Tutorial",
      duration: "20 min",
      icon: Video
    }
  ],
  whitepapers: [
    {
      title: "The State of AI Automation in 2025",
      description: "Industry research and trends shaping the future of business automation",
      type: "Whitepaper",
      pages: "24 pages",
      icon: FileText,
      downloadable: true
    },
    {
      title: "Security Best Practices for AI Systems",
      description: "A comprehensive guide to securing your AI automation infrastructure",
      type: "Whitepaper",
      pages: "18 pages",
      icon: FileText,
      downloadable: true
    }
  ],
  documentation: [
    {
      title: "API Documentation",
      description: "Complete reference for our REST API and webhooks",
      type: "Documentation",
      icon: ExternalLink,
      link: "/api-docs"
    },
    {
      title: "Integration Guides",
      description: "How to integrate with popular tools and platforms",
      type: "Documentation",
      icon: ExternalLink,
      link: "/integrations"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and solutions for ReadyReserve AI",
      type: "Documentation",
      icon: ExternalLink,
      link: "/troubleshooting"
    }
  ]
};

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Resource Center
              </h1>
              <p className="text-lg text-muted-foreground">
                Guides, tutorials, and tools to help you master AI automation
              </p>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Downloadable Guides</h2>
              <p className="text-muted-foreground">Comprehensive resources to accelerate your automation journey</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.guides.map((guide, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                      <guide.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="mb-3">{guide.type}</Badge>
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Video Tutorials</h2>
              <p className="text-muted-foreground">Learn by watching step-by-step video guides</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.videos.map((video, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                      <video.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge>{video.type}</Badge>
                      <span className="text-sm text-muted-foreground">{video.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4">{video.description}</p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
                      Watch Now
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Whitepapers & Research</h2>
              <p className="text-muted-foreground">In-depth analysis and industry insights</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.whitepapers.map((paper, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                        <paper.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>{paper.type}</Badge>
                          <span className="text-sm text-muted-foreground">{paper.pages}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                        <p className="text-muted-foreground mb-4">{paper.description}</p>
                        <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Documentation</h2>
              <p className="text-muted-foreground">Technical references and guides</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.documentation.map((doc, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="mb-3">{doc.type}</Badge>
                    <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                    <p className="text-muted-foreground mb-4">{doc.description}</p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
                      View Documentation
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
              <h2 className="text-3xl font-bold mb-4">Need Help Getting Started?</h2>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you succeed with AI automation. Get personalized guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium">
                  Contact Us
                </a>
                <a href="/faq" className="px-6 py-3 border border-border rounded-lg hover:bg-secondary/50 transition-smooth font-medium">
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;