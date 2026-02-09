import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              A Legacy of{' '}
              <span className="bg-gradient-to-r from-metallic-light via-metallic to-metallic-dark bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-metallic to-transparent mx-auto mb-8" />
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-foreground">Established in 1960</span>, Gujrati Signage has been at the forefront of signage craftsmanship for over six decades. Our journey began with a simple vision: to create signage that stands the test of time.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Through generations of expertise, we've perfected the art of precision manufacturing, combining traditional craftsmanship with modern innovation. Every piece we create carries the weight of our heritage and the promise of lasting quality.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Today, we continue to serve businesses and individuals with the same dedication that defined our founding—delivering signage solutions that communicate your identity with clarity, elegance, and enduring impact.
            </p>
          </div>

          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-metallic mb-2">60+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-metallic mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-metallic mb-2">3</div>
              <div className="text-sm text-muted-foreground">Generations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-metallic mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
