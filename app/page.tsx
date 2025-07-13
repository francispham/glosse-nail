import HeroSection from "@/components/about";
import TeamSection from "@/components/team";
import FeaturesSection from "@/components/features";
// import TestimonialsSection from "@/components/testimonials";
import ServicesSection from "@/components/services";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <SplashCursor />
    </>
  );
}
