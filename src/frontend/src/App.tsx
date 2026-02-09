import { useEffect, useState } from 'react';
import MarketingLanding from './pages/MarketingLanding';
import IntroHelperOverlay from './components/marketing/IntroHelperOverlay';
import { ThemeProvider } from 'next-themes';

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('gujrati-signage-intro-seen');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleDismissIntro = () => {
    localStorage.setItem('gujrati-signage-intro-seen', 'true');
    setShowIntro(false);
  };

  const handleQuickAction = (sectionId: string) => {
    handleDismissIntro();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        {showIntro && (
          <IntroHelperOverlay
            onDismiss={handleDismissIntro}
            onQuickAction={handleQuickAction}
          />
        )}
        <MarketingLanding />
      </div>
    </ThemeProvider>
  );
}

export default App;
