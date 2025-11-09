import { Github, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-border/50 backdrop-blur-sm bg-card/30" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="heading-footer-about">
              Gubuntu
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-about">
              Ubuntu without Canonical. Pure GNOME experience. Community-driven development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="heading-footer-links">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/gubuntu-dev-icebear/Gubuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  data-testid="link-github"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://sourceforge.net/projects/gubuntu-desktop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-sourceforge"
                >
                  SourceForge
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/kj6azRh8yC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  data-testid="link-discord"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discord
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="heading-footer-legal">
              Legal
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-legal">
              Gubuntu is a community remix of Ubuntu. Not affiliated with or endorsed by Canonical Ltd.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap" data-testid="text-copyright">
            <span>© 2025 Gubuntu Community.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-pink-500 fill-pink-500 animate-pulse" /> by the community
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
