import HeaderNav from '../components/marketing/HeaderNav';
import HeroSection from '../components/marketing/HeroSection';
import AboutSection from '../components/marketing/AboutSection';
import ServicesSection from '../components/marketing/ServicesSection';
import GallerySection from '../components/marketing/GallerySection';
import WhyChooseUsSection from '../components/marketing/WhyChooseUsSection';
import ContactSection from '../components/marketing/ContactSection';
import Footer from '../components/marketing/Footer';

export default function MarketingLanding() {
  return (
    <div className="relative">
      <HeaderNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
