import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Github, Download as DownloadIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const communityLinks = [
  {
    icon: MessageCircle,
    title: "Discord Community",
    description: "Join our unhinged server and chat with other Gubuntu users and developers.",
    link: "https://discord.gg/kj6azRh8yC",
    buttonText: "Join Discord"
  },
  {
    icon: Github,
    title: "GitHub Repository",
    description: "Contribute to the project, report issues, or browse the source code.",
    link: "https://github.com/gubuntu-dev-icebear/Gubuntu",
    buttonText: "View on GitHub"
  },
  {
    icon: DownloadIcon,
    title: "SourceForge Project",
    description: "Download releases, view statistics, and follow project updates.",
    link: "https://sourceforge.net/projects/gubuntu-desktop/",
    buttonText: "Visit SourceForge"
  }
];

function CommunityCard({ item, index }: { item: typeof communityLinks[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        className="group h-full p-6 sm:p-8 border-card-border backdrop-blur-sm bg-card/50 hover:bg-card/70 hover-elevate active-elevate-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
        data-testid={`card-community-${index}`}
      >
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
            <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary transition-transform duration-300 group-hover:rotate-12" data-testid={`icon-community-${index}`} />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-300" data-testid={`heading-community-${index}`}>
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`text-community-${index}`}>
            {item.description}
          </p>
          <Button
            variant="outline"
            className="w-full rounded-full transition-all duration-300 hover:scale-105"
            data-testid={`button-community-${index}`}
            onClick={() => window.open(item.link, '_blank')}
          >
            {item.buttonText}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Community() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-purple-900/5 to-background relative overflow-hidden" data-testid="section-community">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-testid="heading-community">
            Join the Community
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-community-description">
            Connect with developers and users, contribute to the project, and stay updated
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {communityLinks.map((item, index) => (
            <CommunityCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
