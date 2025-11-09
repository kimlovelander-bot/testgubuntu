import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, HardDrive, Monitor, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Download() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: mainCardRef, isVisible: mainCardVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" data-testid="section-download">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 animate-gradient-slow bg-[length:200%_200%]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-12 sm:mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-testid="heading-download">
              Ready to Try Gubuntu?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-download-description">
              Download the latest beta release and experience pure GNOME on Ubuntu
            </p>
          </div>
          
          <div
            ref={mainCardRef}
            className={`scroll-reveal ${mainCardVisible ? 'revealed' : ''}`}
          >
            <Card className="p-6 sm:p-8 lg:p-10 mb-8 border-card-border backdrop-blur-xl bg-card/60 hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20" data-testid="card-download-main">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <div className="text-2xl sm:text-3xl font-bold" data-testid="text-version">
                    Gubuntu v2 "Walnut"
                  </div>
                  <Sparkles className="h-6 w-6 text-pink-500 animate-pulse" />
                </div>
                <div className="text-muted-foreground" data-testid="text-release-date">
                  Latest Beta Release • November 2025
                </div>
                
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 sm:px-12 py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/40"
                  data-testid="button-download-main"
                  onClick={() => window.open('https://sourceforge.net/projects/gubuntu-desktop/files/latest/download', '_blank')}
                >
                  <DownloadIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download from SourceForge
                </Button>
                
                <div className="text-sm text-muted-foreground" data-testid="text-file-info">
                  gubuntu-beta-2025.11.05-desktop-amd64.iso • 5.5 GB
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              ref={card1Ref}
              className={`scroll-reveal ${card1Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card className="group h-full p-6 border-card-border backdrop-blur-md bg-card/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10" data-testid="card-requirements">
                <div className="flex items-start gap-3 mb-4">
                  <Monitor className="h-5 w-5 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-300" data-testid="heading-requirements">
                    System Requirements
                  </h3>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground" data-testid="list-requirements">
                  <li className="hover:translate-x-1 transition-transform duration-200">• 4 GB RAM (8 GB recommended)</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• 25 GB free disk space</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• 64-bit processor</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• UEFI or BIOS boot support</li>
                </ul>
              </Card>
            </div>
            
            <div
              ref={card2Ref}
              className={`scroll-reveal ${card2Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Card className="group h-full p-6 border-card-border backdrop-blur-md bg-card/50 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10" data-testid="card-installation">
                <div className="flex items-start gap-3 mb-4">
                  <HardDrive className="h-5 w-5 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-300" data-testid="heading-installation">
                    Installation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground" data-testid="list-installation">
                  <li className="hover:translate-x-1 transition-transform duration-200">• Download the ISO file</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• Create a bootable USB drive</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• Boot from USB and install</li>
                  <li className="hover:translate-x-1 transition-transform duration-200">• Enjoy pure GNOME experience</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
