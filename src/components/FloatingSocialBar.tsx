"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconShare,
  IconX,
} from "@tabler/icons-react";

const socialItems = [
  {
    name: "Instagram",
    label: "Follow Instagram",
    href: "https://www.instagram.com/shrestha_it?igsh=c2pqc3V6OGs3NGRv",
    icon: IconBrandInstagram,
    gradient: "from-amber-500 via-rose-500 to-purple-600",
    shadow: "shadow-rose-500/50",
    borderGlow: "group-hover:border-rose-400",
  },
  {
    name: "WhatsApp",
    label: "WhatsApp Helpline",
    href: "https://wa.me/919236666923?text=Hi%20Shrestha%20IT,%20I%20want%20to%20enquire%20about%20your%20market%20education%20courses.",
    icon: IconBrandWhatsapp,
    gradient: "from-emerald-400 via-teal-500 to-emerald-600",
    shadow: "shadow-emerald-500/50",
    borderGlow: "group-hover:border-emerald-400",
  },
  {
    name: "LinkedIn",
    label: "Sagar Shrestha (LinkedIn)",
    href: "https://www.linkedin.com/in/sagar-shrestha-278001135/",
    icon: IconBrandLinkedin,
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    shadow: "shadow-blue-500/50",
    borderGlow: "group-hover:border-sky-400",
  },
];

export function FloatingSocialBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      // Only show after user scrolls down past 450px (after hero section)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* DESKTOP VIEW: Right-Center Vertical Dock */}
          <motion.aside
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Floating Social Dock"
            className="hidden md:block fixed right-5 top-1/2 -translate-y-1/2 z-[9999]"
          >
            <div className="relative p-[1.5px] rounded-full bg-gradient-to-b from-sky-400/50 via-purple-500/40 to-amber-500/50 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all duration-500">
              <div className="flex flex-col items-center gap-3.5 p-2.5 rounded-full bg-[#040914]/95 backdrop-blur-2xl">
                {socialItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="relative flex items-center group">
                      <span className="absolute right-full mr-4 px-3.5 py-1.5 rounded-xl bg-[#091122]/95 backdrop-blur-xl text-white text-xs font-extrabold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 transition-all duration-300 shadow-2xl border border-sky-400/30">
                        {item.label}
                      </span>

                      <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        whileHover={{ scale: 1.22, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-gradient-to-tr ${item.gradient} hover:border-transparent hover:shadow-xl ${item.shadow} ${item.borderGlow} cursor-pointer`}
                      >
                        <Icon size={22} stroke={2} className="drop-shadow-sm" />
                      </motion.a>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          {/* MOBILE VIEW: Hidden */}
          <div className="hidden fixed bottom-24 right-7 z-[9999] flex flex-col items-end gap-3">
            {/* Mobile Expanded Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2.5 p-3 rounded-3xl bg-[#040914]/95 backdrop-blur-2xl border border-sky-400/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
                >
                  {socialItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#091122] text-white border border-white/15 active:scale-95 transition-all shadow-md bg-gradient-to-r ${item.gradient}`}
                      >
                        <Icon size={20} stroke={2} />
                        <span className="text-xs font-bold">{item.name}</span>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Floating Action Button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="flex h-13 w-13 items-center justify-center rounded-full bg-[#040914]/95 text-white border border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.5)] backdrop-blur-xl active:scale-95 cursor-pointer"
              aria-label="Toggle Social Media Menu"
            >
              {mobileOpen ? (
                <IconX className="h-6 w-6 text-sky-400" />
              ) : (
                <IconShare className="h-6 w-6 text-sky-400" />
              )}
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default FloatingSocialBar;
