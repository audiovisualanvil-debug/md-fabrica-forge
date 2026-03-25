import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <HeroSection />
    <BrandsSection />
    <AboutSection />
    <ProductsSection />
    <ServicesSection />
    <TestimonialsSection />
    <HowItWorksSection />
    <CTABanner />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
