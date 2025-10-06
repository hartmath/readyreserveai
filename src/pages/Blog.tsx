import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "10 Ways AI Automation Can Transform Your Business Operations",
    excerpt: "Discover how leading companies are using AI automation to streamline workflows, reduce costs, and boost productivity across departments.",
    category: "Business Strategy",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  },
  {
    title: "Getting Started with n8n: A Complete Guide for Beginners",
    excerpt: "Learn how to set up your first n8n workflow and integrate it with ReadyReserve AI for powerful automation capabilities.",
    category: "Tutorial",
    date: "2025-01-12",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  },
  {
    title: "The Future of AI in Customer Support: Trends for 2025",
    excerpt: "Explore emerging AI technologies that are revolutionizing customer service and how to prepare your business for the future.",
    category: "Industry Insights",
    date: "2025-01-08",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
  },
  {
    title: "Email Automation Best Practices: Boost Your Marketing ROI",
    excerpt: "Master email automation with AI-powered strategies that increase engagement, conversion rates, and customer retention.",
    category: "Marketing",
    date: "2025-01-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop",
  },
  {
    title: "Case Study: How Company X Saved 200 Hours Monthly with AI",
    excerpt: "A detailed look at how one company implemented ReadyReserve AI automations and achieved remarkable efficiency gains.",
    category: "Case Study",
    date: "2025-01-02",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    title: "Comparing AI Models: OpenAI vs Google vs Azure",
    excerpt: "An in-depth comparison of leading AI platforms to help you choose the right model for your automation needs.",
    category: "Technology",
    date: "2024-12-28",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
];

const categories = ["All", "Business Strategy", "Tutorial", "Industry Insights", "Marketing", "Case Study", "Technology"];

const Blog = () => {
  return (
    <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ReadyReserve AI Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Insights, tutorials, and best practices for AI automation and digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-smooth overflow-hidden">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-smooth">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest AI automation insights, tutorials, and best practices delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Blog;