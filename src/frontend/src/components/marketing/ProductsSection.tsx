import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/products';

export default function ProductsSection() {
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

  const handleOrderClick = (productId: string) => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Dispatch custom event to preselect product
      window.dispatchEvent(new CustomEvent('preselectProduct', { detail: { productId } }));
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our{' '}
            <span className="heading-gradient">
              Products
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium signage solutions designed to elevate your brand presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <Card
              key={product.id}
              className={`border-border/50 shadow-premium hover:shadow-premium-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
                <Button
                  onClick={() => handleOrderClick(product.id)}
                  className="w-full bg-primary hover:bg-primary/90 transition-colors"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
