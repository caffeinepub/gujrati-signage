import { useEffect, useState } from 'react';
import { X, Phone, Briefcase, Image } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface IntroHelperOverlayProps {
  onDismiss: () => void;
  onQuickAction: (sectionId: string) => void;
}

export default function IntroHelperOverlay({
  onDismiss,
  onQuickAction,
}: IntroHelperOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const quickActions = [
    { label: 'Contact Us', icon: Phone, action: 'contact' },
    { label: 'Our Services', icon: Briefcase, action: 'services' },
    { label: 'View Work', icon: Image, action: 'work' },
  ];

  return (
    <Dialog open={true} onOpenChange={onDismiss}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-metallic/20 bg-background/95 backdrop-blur-md">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Phone Animation */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative w-full aspect-[3/4] flex items-center justify-center p-8">
              <img
                src="/assets/generated/intro-phone.dim_900x1200.png"
                alt="Phone"
                className="w-full h-auto max-w-[200px] animate-float"
              />
            </div>
          </div>

          {/* Helper Avatar & Message */}
          <div className="px-8 pb-8">
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-premium border-2 border-metallic/20">
                <img
                  src="/assets/generated/helper-avatar.dim_1024x1024.png"
                  alt="Vikrant Patel"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-metallic-light via-metallic to-metallic-dark bg-clip-text text-transparent">
                  Gujrati Signage
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                How can I help you today?
              </p>

              {/* Quick Actions */}
              <div className="w-full space-y-3 mb-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.action}
                      variant="outline"
                      className="w-full justify-start text-left hover:bg-accent/10 hover:border-metallic/50 transition-all duration-300"
                      onClick={() => onQuickAction(action.action)}
                      style={{
                        transitionDelay: `${(index + 1) * 100}ms`,
                      }}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="ghost"
                onClick={onDismiss}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Skip and explore
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
