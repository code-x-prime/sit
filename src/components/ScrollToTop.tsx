"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronUp } from "@tabler/icons-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 200);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(1, Math.max(0, scrolled / docHeight)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-24 right-5 sm:bottom-24 sm:right-7 z-30 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-navy-dark/95 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-amber/60 hover:shadow-[0_10px_35px_rgba(245,184,0,0.4)]">
            
            {/* SVG Progress Ring with Glow */}
            <svg className="absolute -rotate-90 h-full w-full pointer-events-none" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r={radius}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
                fill="transparent"
              />
              <motion.circle
                cx="26"
                cy="26"
                r={radius}
                stroke="#F5B800"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                style={{
                  filter: "drop-shadow(0px 0px 4px rgba(245, 184, 0, 0.6))"
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
              />
            </svg>

            {/* Icon */}
            <IconChevronUp className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-amber" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
