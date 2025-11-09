import { Card } from "@/components/ui/card";
import { Palette, Zap, Code2, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Palette,
    title: "Stock GNOME",
    description: "Pure, unmodified GNOME desktop environment. No custom themes, no unnecessary modifications. Just GNOME as it was meant to be."
  },
  {
    icon: Zap,
    title: "Canonical-Free",
    description: "Ubuntu without Canonical's additions. No snaps, no telemetry, no corporate decisions. Your system, your rules."
  },
  {
    icon: Code2,
    title: "No Ubuntu Themes",
    description: "Clean, stock GNOME aesthetics. Experience the default GNOME look without Ubuntu's orange theming overlays."
  },
  {
    icon: Users,
    title: "Active Development",
    description: "Community-driven and actively maintained. Join our Discord community and contribute to the future of Gubuntu."
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        className="group p-6 sm:p-8 hover-elevate active-elevate-2 transition-all duration-500 border-card-border backdrop-blur-md bg-card/50 hover:bg-card/70 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
        data-testid={`card-feature-${index}`}
      >
        <div className="mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl w-fit backdrop-blur-sm group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
          <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary transition-transform duration-300 group-hover:rotate-12" data-testid={`icon-feature-${index}`} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`heading-feature-${index}`}>
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`text-feature-${index}`}>
          {feature.description}
        </p>
      </Card>
    </div>
  );
}

export default function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background/50 backdrop-blur-sm relative overflow-hidden" data-testid="section-features">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-testid="heading-features">
            Why Gubuntu?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-features-description">
            Experience Ubuntu the way GNOME intended - pure, minimal, and powerful.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
