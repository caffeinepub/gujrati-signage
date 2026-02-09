import { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get in{' '}
              <span className="bg-gradient-to-r from-metallic-light via-metallic to-metallic-dark bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-metallic to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your signage vision to life? Contact us today
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Phone Numbers */}
            <Card className="border-border/50 hover:border-metallic/50 transition-all duration-500 hover:shadow-premium-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-metallic-light/20 to-metallic-dark/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-metallic" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3">Call Us</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        asChild
                        className="w-full justify-start text-left hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
                      >
                        <a href="tel:9828939660">
                          <Phone className="w-4 h-4 mr-2" />
                          +91 98289 39660
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full justify-start text-left hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
                      >
                        <a href="tel:9828054199">
                          <Phone className="w-4 h-4 mr-2" />
                          +91 98280 54199
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-border/50 hover:border-metallic/50 transition-all duration-500 hover:shadow-premium-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-metallic-light/20 to-metallic-dark/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-metallic" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3">Email Us</h3>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full justify-start text-left hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
                    >
                      <a href="mailto:vikratpatell77.vp@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        vikratpatell77.vp@gmail.com
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div
            className={`text-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
              >
                <a
                  href="https://www.instagram.com/gujratisignage_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-6 h-6 group-hover:text-metallic transition-colors" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
              >
                <a
                  href="https://www.facebook.com/share/1HjagdkEXW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-6 h-6 group-hover:text-metallic transition-colors" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
