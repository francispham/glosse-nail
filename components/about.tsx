import Link from "next/link";
import Image from "next/image";

import { HeroHeader } from "@/components/header";

import { Button } from "@/components/ui/button";
import { BooleanStateAction } from "@/components/ui/promo-modal";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

import { useScrollToElement } from "@/lib/hooks";
import { FRESHA_LINK, LINKS } from "@/lib/constants";

const SLICES = [
  "Waxing",
  "Hand Service",
  "Foot Service",
  "Combo Service",
  "Biab Gel",
  "Acrylic",
  "Shellac",
  "Hard Gel",
];

const ABOUT = [
  "At Glossé Nails, founded by Kate and Tracy—two friends with over a decade of experience—we believe beauty is more than skin deep. It's about confidence, connection, and care.",
  "We take pride in those joyful moments when clients leave feeling not just polished, but truly uplifted. Whether it's a child beaming with excitement over their sparkling birthday nails, a nail art enthusiast collaborating with us for hours to bring their creative vision to life, or a senior client embracing us with gratitude after a gentle, respectful treatment—we cherish every interaction.",
  "We're equally touched by the families and friends who turn their nail visits into a shared ritual of laughter, stories, and quality time.",
  "Glossé Nails was created to be more than a salon. It's a welcoming space where every person feels seen, valued, and inspired to express their unique beauty.",
];
type AboutProps = {
  setOpenModal: BooleanStateAction;
};

export default function About({ setOpenModal }: AboutProps) {
  const handleScroll = useScrollToElement();

  return (
    <>
      <HeroHeader setOpenModal={setOpenModal} />
      <section
        id="about"
        className="overflow-x-hidden lg:h-screen flex flex-col justify-between"
      >
        <div className="pb-24 pt-12 md:pb-32 lg:pb-14 lg:pt-40">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 mb-6 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-6xl">
                About Us
              </h1>
              {ABOUT.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 max-w-2xl text-pretty text-lg"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="px-5 text-base"
                >
                  <Link
                    href={FRESHA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-nowrap">Book an appointment</span>
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 text-base"
                >
                  <Link
                    href="#contact"
                    onClick={(e) => handleScroll(e, LINKS[4])}
                  >
                    <span className="text-nowrap">Contact us</span>
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              className="-z-10 order-first ml-auto h-66 mt-10 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:order-last lg:h-max lg:w-4/7 lg:object-contain dark:mix-blend-lighten dark:invert-0 rounded-xl"
              src="https://res.cloudinary.com/ddz8cmo2p/image/upload/v1753133051/IMG_6818_ewjrzy.jpg"
              alt="Glossé Nails"
              height="560"
              width="440"
              priority
            />
          </div>
        </div>

        <section className="bg-background pb-4">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Providing the best services</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  {SLICES.map((slice) => (
                    <div className="flex" key={slice}>
                      <strong>{slice}</strong>
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
