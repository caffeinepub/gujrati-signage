import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryImages = [
  {
    src: '/assets/generated/gallery-01.dim_1600x1000.png',
    alt: 'Premium storefront signage installation at night',
  },
  {
    src: '/assets/generated/gallery-02.dim_1600x1000.png',
    alt: 'Premium interior nameplate signage',
  },
  {
    src: '/assets/generated/gallery-03.dim_1600x1000.png',
    alt: 'Premium exterior building signage in daylight',
  },
  {
    src: '/assets/generated/gallery-04.dim_1600x1000.png',
    alt: 'Premium illuminated light board detail',
  },
];

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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
      id="work"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-accent/10 to-background"
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
                Work
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our finest signage installations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="group relative block w-full overflow-hidden rounded-lg aspect-[16/10] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
                        View Full Size
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-full p-0 bg-background/95 backdrop-blur-md border-purple-500/20">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
