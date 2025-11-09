import { Button } from "@/components/ui/button";
import { Download, Github, Sparkles } from "lucide-react";
import heroImage from "@assets/stock_images/minimalist_dark_desk_c4dae1e5.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl animate-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/30 shadow-lg hover:bg-white/25 transition-all duration-300" data-testid="badge-status">
              <Sparkles className="h-4 w-4" />
              Beta Release • v2 "Walnut"
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight" data-testid="heading-hero">
              Ubuntu Without
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-slow bg-[length:200%_200%]">
                Canonical Bullshit
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0" data-testid="text-tagline">
              A stripped-down, minimal custom version of Ubuntu with pure, stock GNOME.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-2 border-white/30 rounded-full px-8 py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/50"
                data-testid="button-download"
                onClick={() => window.open('https://sourceforge.net/projects/gubuntu-desktop/files/latest/download', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Gubuntu
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-md bg-white/10 text-white border-2 border-white/50 hover:bg-white/20 rounded-full px-8 py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-testid="button-github"
                onClick={() => window.open('https://github.com/gubuntu-dev-icebear/Gubuntu', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative group animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-gradient-slow bg-[length:200%_200%]" />
              <div className="relative rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src={heroImage}
                  alt="Gubuntu Desktop"
                  className="relative w-full"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
