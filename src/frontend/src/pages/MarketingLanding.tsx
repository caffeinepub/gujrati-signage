import HeaderNav from '../components/marketing/HeaderNav';
import HeroSection from '../components/marketing/HeroSection';
import AboutSection from '../components/marketing/AboutSection';
import FoundersSection from '../components/marketing/FoundersSection';
import ServicesSection from '../components/marketing/ServicesSection';
import ProductsSection from '../components/marketing/ProductsSection';
import VisionMissionSection from '../components/marketing/VisionMissionSection';
import GallerySection from '../components/marketing/GallerySection';
import WhyChooseUsSection from '../components/marketing/WhyChooseUsSection';
import PaymentSection from '../components/marketing/PaymentSection';
import EnquirySection from '../components/marketing/EnquirySection';
import OrderSection from '../components/marketing/OrderSection';
import ContactSection from '../components/marketing/ContactSection';
import Footer from '../components/marketing/Footer';

export default function MarketingLanding() {
  return (
    <div className="relative">
      <HeaderNav />
      <main>
        <HeroSection />
        <AboutSection />
        <FoundersSection />
        <VisionMissionSection />
        <ServicesSection />
        <ProductsSection />
        <GallerySection />
        <WhyChooseUsSection />
        <PaymentSection />
        <EnquirySection />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
