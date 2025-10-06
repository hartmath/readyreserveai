import { Link, useLocation } from "react-router-dom";
import { Home, Search, User, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: "Home",
      exact: true
    },
    {
      path: "/browse",
      icon: Search,
      label: "Browse"
    },
    {
      path: "/pricing",
      icon: Settings,
      label: "Pricing"
    },
    {
      path: "/dashboard",
      icon: User,
      label: "Profile"
    }
  ];

  const isActive = (path: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/50 sm:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path, item.exact);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1"
            >
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-auto p-2 flex flex-col items-center gap-1 text-xs font-medium transition-all",
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-all",
                  active && "scale-110"
                )} />
                <span className="text-[10px] leading-tight">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
