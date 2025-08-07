import Link from "next/link";
import Image from "next/image";

import { LINKS } from "@/lib/constants";
import { useScrollToElement } from "@/lib/hooks";
import { SocialLinks } from "@/components/ui/social-links";
import { BooleanStateAction } from "@/components/ui/promo-modal";

type FooterSectionProps = {
  setOpenModal: BooleanStateAction;
};

const EMBED_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7285683720734!2d-123.13580892231255!3d49.28154027139271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722b7b836aeb%3A0xb1143d5def9b6dea!2sGloss%C3%A9%20Nails!5e0!3m2!1sen!2sca!4v1754116819336!5m2!1sen!2sca";

export default function FooterSection({ setOpenModal }: FooterSectionProps) {
  const handleScroll = useScrollToElement();

  return (
    <footer className="py-16 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="webkit">
          <iframe
            src={EMBED_MAP_URL}
            width="100%"
            height="500"
            loading="lazy"
            className="mt-4 mb-12 lg:mt-8 lg:mb-18 my-map"
          />
        </div>

        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image
            src="https://res.cloudinary.com/ddz8cmo2p/image/upload/v1750741597/Logo_nmcxy6.png"
            alt="Glossé Nails Logo"
            width={200}
            height={50}
            className="mt-4"
          />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {LINKS.map((item) => (
            <Link
              className="text-muted-foreground hover:text-primary block duration-150"
              key={item.title}
              href={item.href}
              target={item.href.includes("#") ? "_self" : "_blank"}
              rel={
                item.href.includes("#") ? "noreferrer" : "noopener noreferrer"
              }
              onClick={(e) => {
                if (item.href.includes("#")) {
                  handleScroll(e, item);

                  if (item.href.includes("promotions")) setOpenModal(true);
                }
              }}
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <SocialLinks />
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} <strong>1989</strong>, All rights
          reserved
        </span>
      </div>
    </footer>
  );
}
