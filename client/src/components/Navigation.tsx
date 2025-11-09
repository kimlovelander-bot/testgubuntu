import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
        data-testid="navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105" data-testid="text-logo">
                Gubuntu
              </div>
            </button>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection('features')}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                data-testid="link-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                data-testid="link-download"
              >
                Download
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                data-testid="link-community"
              >
                Community
              </button>
            </div>

            <div className="hidden md:block">
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                data-testid="button-nav-download"
                onClick={() => window.open('https://sourceforge.net/projects/gubuntu-desktop/files/latest/download', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 sm:top-20 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        data-testid="mobile-menu"
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-1">
            <button
              onClick={() => scrollToSection('features')}
              className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              data-testid="link-mobile-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              data-testid="link-mobile-download"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              data-testid="link-mobile-community"
            >
              Community
            </button>
            <div className="pt-4">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6"
                data-testid="button-mobile-download"
                onClick={() => {
                  window.open('https://sourceforge.net/projects/gubuntu-desktop/files/latest/download', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Gubuntu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
