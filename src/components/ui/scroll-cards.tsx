"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

export interface iCardSlideProps {
  items: iCardItem[];
}

export function CardsParallax({ items }: iCardSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current || cardRefs.current.length === 0) return;

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 350}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        // Card coming up to stack over previous card
        tl.fromTo(
          card,
          { yPercent: 100, opacity: 0.9 },
          { yPercent: 0, opacity: 1, ease: "none" },
          index - 1
        );

        // Previous card scales down slightly for 3D deck effect
        const prevCard = cards[index - 1];
        if (prevCard) {
          tl.to(
            prevCard,
            { scale: 0.92, opacity: 0.6, ease: "none" },
            index - 1
          );
        }
      });
    },
    { scope: containerRef, dependencies: [items] }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden py-4 px-4 bg-transparent"
    >
      <div className="relative w-full max-w-xl md:max-w-2xl h-[420px] sm:h-[460px]">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-between shadow-2xl border border-navy/10 dark:border-white/10 backdrop-blur-xl"
            style={{
              backgroundColor: item.color || "#ffffff",
              zIndex: i + 1,
            }}
          >
            {/* Top Tag & Number */}
            <div className="w-full flex items-center justify-between z-10">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {item.tag || `Pillar 0${i + 1}`}
              </span>
              <span className="text-xs font-black text-navy/40 dark:text-white/40 font-mono">
                0{i + 1} / 0{items.length}
              </span>
            </div>

            {/* 3D Illustration */}
            <div className="relative w-full h-36 sm:h-44 my-2 flex items-center justify-center z-10 p-2">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain p-1"
              />
            </div>

            {/* Title & Description */}
            <div className="text-center z-10 space-y-1.5">
              <h3
                className="text-xl sm:text-2xl font-black tracking-tight font-heading"
                style={{ color: item.textColor || "#0F172A" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs sm:text-sm font-medium leading-relaxed max-w-sm mx-auto"
                style={{ color: item.textColor || "#0F172A", opacity: 0.85 }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsParallax;
