import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team";
import FeaturesSection from "@/components/features";
import TestimonialsSection from "@/components/testimonials";
import PricingSection from "@/components/pricing";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <SplashCursor />
    </>
  );
}
