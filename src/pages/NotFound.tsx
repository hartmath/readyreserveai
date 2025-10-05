import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold gradient-primary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="w-5 h-5" />
                Browse Automations
              </Button>
            </Link>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-4">Popular Pages</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <Link to="/pricing" className="p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                <p className="font-semibold mb-1">Pricing</p>
                <p className="text-sm text-muted-foreground">View our plans and pricing</p>
              </Link>
              <Link to="/about" className="p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                <p className="font-semibold mb-1">About Us</p>
                <p className="text-sm text-muted-foreground">Learn about our mission</p>
              </Link>
              <Link to="/faq" className="p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                <p className="font-semibold mb-1">FAQ</p>
                <p className="text-sm text-muted-foreground">Common questions answered</p>
              </Link>
              <Link to="/resources" className="p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                <p className="font-semibold mb-1">Resources</p>
                <p className="text-sm text-muted-foreground">Guides and tutorials</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;