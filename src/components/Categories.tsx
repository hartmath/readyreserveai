import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Settings, BarChart3, Shield, Zap } from "lucide-react";

const categories = [
  { name: "Customer Engagement", icon: MessageSquare, count: 28 },
  { name: "Marketing & Sales", icon: TrendingUp, count: 35 },
  { name: "Operations", icon: Settings, count: 42 },
  { name: "Data & Insights", icon: BarChart3, count: 31 },
  { name: "Compliance & Security", icon: Shield, count: 18 },
  { name: "All Automations", icon: Zap, count: 154 },
];

export const Categories = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-smooth group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-gradient-primary flex items-center justify-center transition-smooth">
                    <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.count}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};