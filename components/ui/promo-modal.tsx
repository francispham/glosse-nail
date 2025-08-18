"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { FRESHA_LINK } from "@/lib/constants";

const TITLE = "✨ Labour Day Week Treat! ✨";
const TIME = "🎉 August 25th – September 1st, 2025";

export type BooleanStateAction = Dispatch<SetStateAction<boolean>>;
type PromoModalProps = {
  openModal: boolean;
  setOpenModal: BooleanStateAction;
};

export default function PromoModal(props: PromoModalProps) {
  const { openModal, setOpenModal } = props;

  const handleClose = () => setOpenModal(false);

  // Robust scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative max-w-[400px] md:max-w-xl w-full bg-[#232527] text-[#e8e6e3] p-8 md:p-12 rounded-2xl shadow-2xl text-center">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-[#e8e6e3] text-4xl hover:text-[#3391ff] transition-colors"
          aria-label="Close promotion modal"
        >
          ×
        </button>
        <Image
          src="https://res.cloudinary.com/ddz8cmo2p/image/upload/v1750741597/Logo_nmcxy6.png"
          alt="Glosse Nails Logo"
          className="mx-auto mb-4 pt-10"
          width={150}
          height={50}
        />
        <h2 className="text-3xl mb-4"> {TITLE}</h2>
        <p className="text-lg mb-6">
          🌸 Special for New Guests: Enjoy{" "}
          <span className="text-[#3391ff]">10% OFF</span> your first visit
          <br />
          🥂 Complimentary snacks, drinks & fresh fruits all week
          <br />
          Don&apos;t miss this limited-time treat - spot fills up fast!
          <br />
          <span className="text-[#3391ff]">{TIME}</span>
        </p>
        <div className="pb-5 text-sm text-[#b2b2b2]">
          <Link
            href={FRESHA_LINK}
            onClick={handleClose}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-1 text-lg font-bold rounded-full text-black shadow-lg ring-2 ring-transparent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 transition-all duration-200 animate-pulse"
            style={{
              background:
                "linear-gradient(120deg, #e40303 0%, #ff8c00 14%, #ffed00 28%, #008026 42%, #004dff 57%, #750787 71%, #ffffff 85%, #ffaad5 100%)",
            }}
          >
            Booking Now!
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
