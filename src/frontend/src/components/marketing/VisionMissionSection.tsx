import { useEffect, useRef, useState } from 'react';
import { Target, Compass } from 'lucide-react';

export default function VisionMissionSection() {
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
      id="vision-mission"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our{' '}
              <span className="heading-gradient">
                Vision & Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div
              className={`bg-background border border-border/50 rounded-2xl p-8 shadow-premium transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading provider of innovative digital signage solutions that transform brand visibility, ensuring every message captivates audiences and leaves a lasting impact in a dynamic marketplace.
              </p>
            </div>

            {/* Mission */}
            <div
              className={`bg-background border border-border/50 rounded-2xl p-8 shadow-premium transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower businesses with premium, customizable digital sign boards that enhance brand presence and communication. We are committed to delivering exceptional quality, creativity, and service, providing our clients with innovative 3D and LED signage solutions tailored to their unique needs, helping them stand out in any environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
