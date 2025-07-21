import HeroSection from "@/components/about";
import FeaturesSection from "@/components/features";
import ServicesSection from "@/components/services";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

import { SplashCursor } from "@/components/ui/splash-cursor";
// import TeamSection from "@/components/team";
// import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <SplashCursor />
    </>
  );
}
