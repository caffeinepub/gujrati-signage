import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Building Signages',
    description: 'Premium exterior and interior building signage solutions that make a lasting impression.',
    image: '/assets/generated/service-building-signages.dim_1200x800.png',
  },
  {
    title: 'Name Plates',
    description: 'Elegant name plates crafted with precision for homes and offices.',
    image: '/assets/generated/service-name-plates.dim_1200x800.png',
  },
  {
    title: 'Number Plates',
    description: 'Durable and stylish number plates for vehicles and properties.',
    image: '/assets/generated/service-number-plates.dim_1200x800.png',
  },
  {
    title: 'Light Boards',
    description: 'Illuminated signage that captures attention day and night.',
    image: '/assets/generated/service-light-boards.dim_1200x800.png',
  },
  {
    title: 'Custom Sign Boards',
    description: 'Bespoke signage solutions tailored to your unique requirements.',
    image: '/assets/generated/service-custom-sign-boards.dim_1200x800.png',
  },
  {
    title: 'Radium Stickers',
    description: 'High-quality reflective stickers for safety and visibility.',
    image: '/assets/generated/service-radium-stickers.dim_1200x800.png',
  },
  {
    title: 'Hospital Boards',
    description: 'Professional medical signage for hospitals and healthcare facilities.',
    image: '/assets/generated/service-hospital-boards.dim_1200x800.png',
  },
  {
    title: 'Reception Boards',
    description: 'Elegant reception signage that creates a welcoming first impression.',
    image: '/assets/generated/service-reception-boards.dim_1200x800.png',
  },
  {
    title: 'Steel Letters',
    description: 'Premium stainless steel lettering for a sophisticated, lasting impact.',
    image: '/assets/generated/service-steel-letters.dim_1200x800.png',
  },
  {
    title: 'Neon Signs',
    description: 'Eye-catching neon signage that brings vibrant energy to any space.',
    image: '/assets/generated/service-neon-signs.dim_1200x800.png',
  },
  {
    title: 'Glow Sign Boards',
    description: 'Luminous glow signs that ensure maximum visibility around the clock.',
    image: '/assets/generated/service-glow-sign-boards.dim_1200x800.png',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our{' '}
              <span className="heading-gradient">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive signage solutions crafted with precision and care
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group h-full overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-premium-lg service-card">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
