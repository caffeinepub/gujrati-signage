import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Crafting Signage Excellence
            <br />
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
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
              onClick={() => scrollToSection('enquiry')}
              className="w-full sm:w-auto text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              Make an Enquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('order')}
              className="w-full sm:w-auto text-base px-8 py-6 border-2 hover:bg-accent/10 shadow-premium-sm hover:shadow-premium transition-all duration-300"
            >
              Order Now
            </Button>
          </div>

          {/* Scroll Cue */}
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="text-sm mb-2 tracking-wide">Discover More</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
