"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";

const PROMO_START = new Date("2025-08-01T00:00:00Z");
const PROMO_END = new Date("2025-08-15T00:00:00Z");
const LOCALSTORAGE_KEY = "promo20off_closed";

export type BooleanStateAction = Dispatch<SetStateAction<boolean>>;
type PromoModalProps = {
  openModal: boolean;
  setOpenModal: BooleanStateAction;
};

export default function PromoModal(props: PromoModalProps) {
  const { openModal, setOpenModal } = props;

  // Show modal during promo period if not closed
  useEffect(() => {
    const now = new Date();
    const closed = localStorage.getItem(LOCALSTORAGE_KEY);
    if (now >= PROMO_START && now < PROMO_END && !closed) {
      setOpenModal(true);
    }
  }, [setOpenModal]);

  const handleClose = () => {
    setOpenModal(false);
    localStorage.setItem(LOCALSTORAGE_KEY, "1");
  };

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
          className="absolute top-3 right-4 text-[#e8e6e3] text-2xl hover:text-[#3391ff] transition-colors"
          aria-label="Close promotion modal"
        >
          ×
        </button>
        <h2 className="text-3xl mb-4">🎉 20% OFF!</h2>
        <p className="text-lg mb-6">
          Enjoy <b>20% off</b> all services!
          <br />
          <span className="text-[#3391ff]">August 1st – 14th, 2025</span>
        </p>
        <div className="text-sm text-[#b2b2b2]">
          To celebrate our brand opening event, enjoy this special offer!
          <br />
          <b>Limited time only!</b>
        </div>
      </div>
    </div>
  );
}
