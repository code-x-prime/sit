"use client";

import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";

interface StickyEnrollBarProps {
  whatsappMsg: string;
  price: string;
  shortTitle: string;
}

export function StickyEnrollBar({ whatsappMsg, price, shortTitle }: StickyEnrollBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 dark:border-white/10 bg-white/95 dark:bg-navy-dark/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <a
          href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition hover:scale-105 hover:bg-emerald-600"
        >
          <IconBrandWhatsapp className="size-6" />
        </a>

        <div className="hidden sm:flex flex-col leading-tight mr-auto">
          <span className="text-xs font-bold text-navy-dark dark:text-white">{shortTitle}</span>
          <span className="text-xs font-semibold text-[#01488B] dark:text-amber">₹{price}</span>
        </div>

        <a
          href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl bg-[#0A2540] dark:bg-amber px-6 py-3.5 text-sm font-bold text-white dark:text-navy-dark shadow-md transition hover:scale-[1.02]"
        >
          Join Classes
          <IconArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

export default StickyEnrollBar;
