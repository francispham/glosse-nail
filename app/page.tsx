"use client";
import { useState } from "react";

import Footer from "@/components/footer";
import HeroSection from "@/components/about";
import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import ServicesSection from "@/components/services";

import { SplashCursor } from "@/components/ui/splash-cursor";
import PromoModal from "@/components/ui/promo-modal";
// import TeamSection from "@/components/team";
// import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <HeroSection setOpenModal={setOpenModal} />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <Footer setOpenModal={setOpenModal} />
      <PromoModal openModal={openModal} setOpenModal={setOpenModal} />
      <SplashCursor />
    </>
  );
}
