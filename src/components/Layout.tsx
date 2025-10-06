import { Navigation } from "@/components/Navigation";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navigation */}
      <Navigation />
      
      {/* Mobile Header */}
      <MobileHeader />
      
      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {children}
      </main>
      
      {/* Footer - Hidden on mobile */}
      {showFooter && <div className="hidden sm:block"><Footer /></div>}
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
