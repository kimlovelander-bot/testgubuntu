import { Card } from "@/components/ui/card";
import { Info, AlertCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal<HTMLDivElement>();
  const { ref: disclaimerRef, isVisible: disclaimerVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-900/10 via-background to-pink-900/10 backdrop-blur-sm relative overflow-hidden" data-testid="section-about">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-12 sm:mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-testid="heading-about">
              About Gubuntu
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-about-description">
              A community remix built for GNOME purists
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              ref={card1Ref}
              className={`scroll-reveal ${card1Visible ? 'revealed' : ''}`}
            >
              <Card className="group h-full p-6 sm:p-8 border-card-border backdrop-blur-md bg-card/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10" data-testid="card-philosophy">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                    <Info className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300" data-testid="heading-philosophy">
                      Our Philosophy
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="text-philosophy">
                      Gubuntu is a stripped-down, minimal custom version of Ubuntu that provides a pure GNOME experience. 
                      We believe in giving users choice and control over their computing environment without corporate 
                      interference or unnecessary modifications.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div
              ref={card2Ref}
              className={`scroll-reveal ${card2Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card className="group h-full p-6 sm:p-8 border-card-border backdrop-blur-md bg-card/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10" data-testid="card-status">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm group-hover:from-orange-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                    <AlertCircle className="h-6 w-6 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300" data-testid="heading-status">
                      Beta Status
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="text-status">
                      Gubuntu is currently in active beta development. While it's stable enough for daily use, 
                      you may encounter rough edges. We're actively working on improvements and welcome feedback 
                      from our community.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div
            ref={disclaimerRef}
            className={`scroll-reveal ${disclaimerVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <Card className="p-6 backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/40 transition-all duration-300" data-testid="card-disclaimer">
              <p className="text-sm text-muted-foreground text-center" data-testid="text-disclaimer">
                <strong>Important:</strong> Gubuntu is a community remix of Ubuntu. 
                It is not affiliated with or endorsed by Canonical Ltd.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
