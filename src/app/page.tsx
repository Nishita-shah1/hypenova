import Hero_section from "@/components/Hero_section";
import Navbar from "@/components/Navbar";
import ResultsSection from "@/components/ResultsSection";
import WhiteLine from "@/components/WhiteLine";
import ServicesSection from "@/components/Servise_section";
import PricingSection from "@/components/Pricing_section";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/Founder_section";
import ContactSection from "@/components/Contact_section";

export default function Home() {
  return (
    <div>
      <WhiteLine />
      <Navbar />
      <Hero_section />
      <ResultsSection />
      <ServicesSection />
      <PricingSection/>
      <TestimonialsSection />
      <FounderSection />
      <ContactSection />

    </div>
    
  );
}