import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/5"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-backdrop.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* 3D Signage Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div
          className={`relative w-full max-w-4xl transition-all duration-1500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src="/assets/generated/hero-signage-3d.dim_1400x900.png"
            alt="3D Signage"
            className="w-full h-auto animate-float"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Crafting Signage Excellence
            <br />
            <span className="bg-gradient-to-r from-metallic-light via-metallic to-metallic-dark bg-clip-text text-transparent">
              Since 1960
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Over six decades of precision craftsmanship, trusted by generations
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('work')}
              className="w-full sm:w-auto text-base px-8 py-6 border-2 hover:bg-accent/10 shadow-premium-sm hover:shadow-premium transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Scroll Cue */}
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="text-sm mb-2 tracking-wide">Discover More</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
