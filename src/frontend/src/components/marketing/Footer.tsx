import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'gujrati-signage';

  return (
    <footer className="relative py-12 bg-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-metallic">
              <img
                src="/assets/brand/whatsapp-logo.jpeg"
                alt="Gujrati Signage"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Gujrati Signage</div>
              <div className="text-xs text-muted-foreground">Since 1960</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            Crafting excellence in signage for over six decades. Trusted by generations.
          </p>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Gujrati Signage. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-metallic transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
