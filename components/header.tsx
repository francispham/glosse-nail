"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useScroll, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/constants";
import { useScrollToElement } from "@/lib/hooks";

import { Button } from "@/components/ui/button";
import { TikTokLink } from "@/components/ui/tiktok-link";
import { FacebookLink } from "@/components/ui/facebook-link";
import { InstagramLink } from "@/components/ui/instagram-link";
import { BooleanStateAction } from "@/components/ui/promo-modal";

type HeroHeaderProps = {
  setOpenModal: BooleanStateAction;
};

export const HeroHeader = ({ setOpenModal }: HeroHeaderProps) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.005);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full pt-2"
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl"
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src="https://res.cloudinary.com/ddz8cmo2p/image/upload/v1750741597/Glosse_nails_2_uxujwu.png"
                  alt="Glossé Nails Logo"
                  width={100}
                  height={50}
                  className="h-9 w-auto lg:h-13"
                />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  <LinkList setOpenModal={setOpenModal} />
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <LinkList
                    setOpenModal={setOpenModal}
                    setMenuState={setMenuState}
                  />
                </ul>
              </div>
              <AuthButtons />
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

const AuthButtons = ({ show = false }: { show?: boolean }) =>
  show ? (
    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
      <Button asChild variant="outline" size="sm">
        <Link href="#">
          <span>Login</span>
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href="#">
          <span>Sign Up</span>
        </Link>
      </Button>
    </div>
  ) : null;

const LinkList = ({
  setMenuState,
  setOpenModal,
}: {
  setOpenModal: BooleanStateAction;
  setMenuState?: BooleanStateAction;
}) => {
  const handleScroll = useScrollToElement();

  return (
    <>
      {LINKS.map((item) => (
        <li key={item.title}>
          <Link
            className="text-muted-foreground hover:text-primary block duration-150"
            href={item.href}
            target={item.href.includes("#") ? "_self" : "_blank"}
            rel={item.href.includes("#") ? "noreferrer" : "noopener noreferrer"}
            onClick={(e) => {
              if (item.href.includes("#")) {
                handleScroll(e, item);

                if (item.href.includes("promotions")) {
                  setOpenModal(true);
                } else {
                  setMenuState?.(false);
                }
              }
            }}
          >
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
      <FacebookLink />
      <TikTokLink />
      <InstagramLink />
    </>
  );
};
