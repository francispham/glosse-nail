import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team";
import FeaturesSection from "@/components/features";
import TestimonialsSection from "@/components/testimonials";
import Footer from "@/components/footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
      <SplashCursor />
    </>
  );
}
