import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Award } from 'lucide-react';

export default function FoundersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founders"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The{' '}
              <span className="heading-gradient">
                Founders
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          </div>

          {/* Founders Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vikrant Patel */}
            <Card
              className={`border-border/50 shadow-premium transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Vikrant Patel</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder | Age 47</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With an academic foundation in History, Vikrant Patel brings a deep respect for heritage, culture, and storytelling into the soul of the brand. His perspective goes beyond business—he believes that every sign, every design, and every detail should carry meaning. His leadership is rooted in vision, patience, and the responsibility of building something that lasts for generations.
                </p>
              </CardContent>
            </Card>

            {/* Vimal Patel */}
            <Card
              className={`border-border/50 shadow-premium transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Vimal Patel</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder | Age 50</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Educated in B.Com and M.Com, Vimal Patel expanded his professional journey internationally by working in London, gaining global exposure and modern business insight. Despite opportunities abroad, his connection to home and legacy called him back to India. Returning with international experience and strategic clarity, he took charge of strengthening operations and guiding the business toward global standards of excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* A Brotherhood of Vision */}
          <div
            className={`mb-16 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold heading-gradient">
                A Brotherhood of Vision
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bound not only by blood but by purpose, the Patel brothers—both alumni of Mayoor School, Ajmer—share a singular ambition: to elevate Gujarati Signage from a regional identity to a globally respected name. Their partnership blends emotional depth with commercial strength, tradition with innovation, and legacy with forward-thinking leadership.
            </p>
          </div>

          {/* Our Legacy */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold heading-gradient">
                Our Legacy
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The foundation of this journey was laid by the late Shri Kanti Patel, whose values of integrity, hard work, and craftsmanship became the backbone of the business. What began as a humble vision has grown into a legacy carried forward with pride and responsibility by the next generation.
            </p>
          </div>

          {/* Our Journey */}
          <div
            className={`mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 heading-gradient">
              Our Journey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              From local roots to global aspirations, our journey is one of resilience, evolution, and belief. Guided by the wisdom of the past and driven by the possibilities of the future, the brand continues to grow—honoring its origins while expanding its reach across borders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every step forward is a tribute to where we come from and a promise of where we are headed.
            </p>
          </div>

          {/* Words from the Founders */}
          <div
            className={`mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center heading-gradient">
              Words from the Founders
            </h3>
            <div className="space-y-8">
              {/* Vikrant Quote */}
              <Card className="border-border/50 shadow-premium bg-accent/5">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-4">
                    "A business is not built only with materials and machines, but with values, patience, and respect for where we come from. Our purpose is to create work that carries meaning and lasts beyond generations."
                  </blockquote>
                  <p className="text-base font-semibold text-foreground">
                    — Vikrant Patel, Co-Founder
                  </p>
                </CardContent>
              </Card>

              {/* Vimal Quote */}
              <Card className="border-border/50 shadow-premium bg-accent/5">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-4">
                    "Global exposure taught me scale and systems, but returning to India taught me purpose. Our vision is clear—to take Gujarati Signage to the world while staying rooted in authenticity and excellence."
                  </blockquote>
                  <p className="text-base font-semibold text-foreground">
                    — Vimal Patel, Co-Founder
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* A Promise Forward */}
          <div
            className={`text-center transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 heading-gradient">
              A Promise Forward
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Together, the founders stand committed to building a brand that honors its legacy, embraces innovation, and delivers uncompromising quality—setting new benchmarks for Gujarati Signage on the global stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
