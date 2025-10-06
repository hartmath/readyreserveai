import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const MobileHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-elevated sm:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="ReadyReserve AI Logo" 
              className="h-8 w-8 object-contain group-hover:scale-105 transition-smooth rounded-lg"
            />
            <span className="text-lg font-bold">ReadyReserve AI</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="h-10 w-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm sm:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src={logo} 
                  alt="ReadyReserve AI Logo" 
                  className="h-8 w-8 object-contain rounded-lg"
                />
                <span className="text-lg font-bold">ReadyReserve AI</span>
              </Link>
              <Button
                onClick={() => setMobileMenuOpen(false)}
                variant="ghost"
                size="icon"
                className="h-10 w-10"
              >
                ×
              </Button>
            </div>

            {/* Menu Items */}
             <div className="flex-1 p-4 space-y-4">
               <Link 
                 to="/solutions" 
                 className="block text-lg font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 Solutions
               </Link>
               <Link 
                 to="/about" 
                 className="block text-lg font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 About
               </Link>
               <Link 
                 to="/contact" 
                 className="block text-lg font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 Contact
               </Link>
               <Link 
                 to="/dashboard" 
                 className="block text-lg font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 Portal
               </Link>
             </div>

            {/* Footer */}
            <div className="p-4 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                ReadyReserve AI - Your AI Automation Partner
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
