import Footer from "@/components/footer";
import HeroSection from "@/components/about";
import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import ServicesSection from "@/components/services";

import { SplashCursor } from "@/components/ui/splash-cursor";
// import TeamSection from "@/components/team";
// import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      <SplashCursor />
    </>
  );
}
