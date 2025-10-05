import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="ReadyReserve AI Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your growth partner for AI-driven digital transformation. Discover the perfect automation for your business needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/browse" className="hover:text-foreground transition-smooth">Browse Automations</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-smooth">Pricing</Link></li>
              <li><Link to="/resources" className="hover:text-foreground transition-smooth">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-smooth">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-smooth">About</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-smooth">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-smooth">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-smooth">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ReadyReserve AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              Twitter
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};