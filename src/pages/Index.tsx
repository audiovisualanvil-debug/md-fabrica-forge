import { useState } from "react";
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
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  const [brandFilter, setBrandFilter] = useState("");

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <TopBar />
      <Header />
      <HeroSection />
      <BrandsSection onBrandClick={(brand) => setBrandFilter(brand)} />
      <AboutSection />
      <ProductsSection brandFilter={brandFilter} onClearFilter={() => setBrandFilter("")} />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </div>
  );
};

export default Index;
