import { useEffect, useRef, useState } from 'react';
import { Award, Wrench, Shield, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Over 60 Years of Expertise',
    description: 'Six decades of refined craftsmanship and industry leadership',
  },
  {
    icon: Wrench,
    title: 'Custom-Built Solutions',
    description: 'Tailored signage designed specifically for your unique needs',
  },
  {
    icon: Shield,
    title: 'Quality Materials & Craftsmanship',
    description: 'Premium materials and meticulous attention to every detail',
  },
  {
    icon: Users,
    title: 'Trusted by Generations',
    description: 'Building lasting relationships with families and businesses',
  },
];

export default function WhyChooseUsSection() {
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
      id="why-choose-us"
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
              Why Choose{' '}
              <span className="bg-gradient-to-r from-metallic-light via-metallic to-metallic-dark bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-metallic to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that define our commitment to excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group text-center transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-metallic-light/20 to-metallic-dark/20 group-hover:from-metallic-light/30 group-hover:to-metallic-dark/30 transition-all duration-500 group-hover:scale-110 shadow-premium">
                  <Icon className="w-10 h-10 text-metallic" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-metallic transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
