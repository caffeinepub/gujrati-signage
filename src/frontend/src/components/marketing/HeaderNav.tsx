import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Wordmark from './Wordmark';

const navLinks = [
  { label: 'Home', href: '#hero', description: 'Welcome to Gujrati Signage' },
  { label: 'About', href: '#about', description: 'Our legacy since 1960' },
  { label: 'Founders', href: '#founders', description: 'Meet the visionaries behind our craft' },
  { label: 'Vision & Mission', href: '#vision-mission', description: 'Our guiding principles' },
  { label: 'Services', href: '#services', description: 'Comprehensive signage solutions' },
  { label: 'Products', href: '#products', description: 'Explore our product range' },
  { label: 'Gallery', href: '#work', description: 'View our completed projects' },
  { label: 'Why Us', href: '#why-choose-us', description: 'What sets us apart' },
  { label: 'Payment', href: '#payment', description: 'Flexible payment options' },
  { label: 'Enquiry', href: '#enquiry', description: 'Send us your questions' },
  { label: 'Order', href: '#order', description: 'Place your order today' },
  { label: 'Contact', href: '#contact', description: 'Get in touch with us' },
];

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-3 group"
          >
            <div className="flex flex-col">
              <Wordmark size="md" />
              <div className="text-xs text-muted-foreground mt-1">Since 1960</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group/nav">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Button>
                {/* Hover detail panel - desktop only */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-premium-lg opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background/95 border-l border-t border-border/50 rotate-45" />
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
