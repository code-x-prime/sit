"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCard {
  id: number;
  title: string;
  desc: string;
  image: string;
  badge: string;
  targetX: number;
  targetY: number;
}

const SIT_FEATURES: FeatureCard[] = [
  {
    id: 1,
    title: "Practical Live Trading",
    desc: "Hands-on trading sessions during live market hours with real-time price action analysis.",
    image: "/why_sit_1.png",
    badge: "Live Setup",
    targetX: -360,
    targetY: -160,
  },
  {
    id: 2,
    title: "Expert Mentorship",
    desc: "One-on-one guidance from market veterans across Equity, F&O, Forex & Crypto.",
    image: "/why_sit_2.png",
    badge: "1-on-1 Guidance",
    targetX: 360,
    targetY: -160,
  },
  {
    id: 3,
    title: "Structured Curriculum",
    desc: "Step-by-step modules building from absolute market basics to advanced technical setups.",
    image: "/why_sit_3.png",
    badge: "Basic to Pro",
    targetX: -420,
    targetY: 60,
  },
  {
    id: 4,
    title: "Risk Management Rules",
    desc: "Strict capital protection rules, position sizing models & risk-to-reward frameworks.",
    image: "/why_sit_4.png",
    badge: "Capital Safety",
    targetX: 420,
    targetY: 60,
  },
  {
    id: 5,
    title: "Community & Support",
    desc: "Lifetime access to our student trader community, daily market updates & certification.",
    image: "/why_sit_5.png",
    badge: "Lifetime Access",
    targetX: 0,
    targetY: 230,
  },
];

const SIT_PARALLAX_CARDS: iCardItem[] = [
  {
    title: "Practical Live Trading",
    description: "Hands-on trading sessions during live market hours with real-time price action analysis.",
    tag: "Live Setup",
    src: "/why_sit_1.png",
    link: "/courses",
    color: "#ffffff",
    textColor: "#0F172A",
  },
  {
    title: "Expert Mentorship",
    description: "One-on-one guidance from market veterans across Equity, F&O, Forex & Crypto.",
    tag: "1-on-1 Guidance",
    src: "/why_sit_2.png",
    link: "/courses",
    color: "#f8fafc",
    textColor: "#01488B",
  },
  {
    title: "Structured Curriculum",
    description: "Step-by-step modules building from absolute market basics to advanced technical setups.",
    tag: "Basic to Pro",
    src: "/why_sit_3.png",
    link: "/courses",
    color: "#ffffff",
    textColor: "#0F172A",
  },
  {
    title: "Risk Management Rules",
    description: "Strict capital protection rules, position sizing models & risk-to-reward frameworks.",
    tag: "Capital Safety",
    src: "/why_sit_4.png",
    link: "/courses",
    color: "#f8fafc",
    textColor: "#01488B",
  },
  {
    title: "Community & Support",
    description: "Lifetime access to our student trader community, daily market updates & certification.",
    tag: "Lifetime Access",
    src: "/why_sit_5.png",
    link: "/courses",
    color: "#ffffff",
    textColor: "#0F172A",
  },
];

// DESKTOP ONLY COMPONENT (>= 1024px)
function DesktopRadialBlossom() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerRingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isMobile = window.innerWidth < 1024;
      if (isMobile) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "center center",
          end: "+=1000",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Animate center ring scale
      if (centerRingRef.current) {
        tl.fromTo(
          centerRingRef.current,
          { scale: 0.85, opacity: 0.5 },
          { scale: 1, opacity: 1, ease: "power2.out" },
          0
        );
      }

      // Animate cards outward from center (0,0) to target coordinates
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const feature = SIT_FEATURES[idx];

        tl.fromTo(
          card,
          { x: 0, y: 0, scale: 0.45, opacity: 0.1 },
          {
            x: feature.targetX,
            y: feature.targetY,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          0
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen bg-transparent flex flex-col items-center justify-center py-6 px-4 overflow-hidden"
    >
      {/* Headings */}
      <div className="text-center mb-4 space-y-2 z-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-[11px] font-bold uppercase tracking-wider text-navy dark:text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Why Shrestha IT
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-navy-dark dark:text-white">
          Built for Practical <span className="text-[#01488B] dark:text-amber">Trading Success</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto">
          Everything you need to transform from a market beginner to a disciplined trader.
        </p>
      </div>

      {/* GSAP Pinned Radial Blossom Layout */}
      <div className="relative w-full max-w-[1240px] h-[720px] flex items-center justify-center">

        {/* Center Ring Core */}
        <div
          ref={centerRingRef}
          className="relative w-52 h-52 rounded-full border-2 border-dashed border-[#01488B]/30 dark:border-amber/30 flex items-center justify-center bg-card/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-20"
        >
          <div className="text-center p-4 space-y-1">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              5 Pillars
            </span>
            <div className="text-2xl font-black text-[#01488B] dark:text-amber pt-1">
              Trading Core
            </div>
            <p className="text-[10px] font-semibold text-muted-foreground">
              SIT Ecosystem
            </p>
          </div>
        </div>

        {/* 5 Feature Cards expanding outwards */}
        {SIT_FEATURES.map((feature, idx) => (
          <div
            key={feature.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="absolute z-30 will-change-transform"
          >
            <div className="w-[235px] p-3.5 rounded-3xl bg-card/95 dark:bg-slate-900/95 border border-navy/10 dark:border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-navy/30">
              {/* 3D Illustration */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-white mb-2 flex items-center justify-center p-1 border border-navy/10">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-1"
                  unoptimized
                />
              </div>

              {/* Card Title & Badge */}
              <div className="flex items-center justify-between gap-1 mb-1">
                <h3 className="font-bold text-xs text-navy-dark dark:text-white truncate">
                  {feature.title}
                </h3>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  {feature.badge}
                </span>
              </div>

              {/* Description Text */}
              <p className="text-[11px] text-muted-foreground leading-snug">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

// MOBILE & TABLET ONLY COMPONENT (< 1024px) - GSAP ScrollTrigger Pinned Parallax Card Stacking
function MobileGSAPCardsParallax() {
  return (
    <div className="w-full py-4 bg-transparent space-y-2">
      {/* Headings */}
      <div className="text-center space-y-2 px-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-[10px] font-bold uppercase tracking-wider text-navy dark:text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Why Shrestha IT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-dark dark:text-white">
          Built for Practical <span className="text-[#01488B] dark:text-amber">Trading Success</span>
        </h2>
        <p className="text-muted-foreground text-xs max-w-sm mx-auto">
          Everything you need to transform from a market beginner to a disciplined trader.
        </p>
      </div>

      {/* GSAP CardsParallax Stacking */}
      <CardsParallax items={SIT_PARALLAX_CARDS} />
    </div>
  );
}

export function ScrollingAnimation() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block w-full">
        <DesktopRadialBlossom />
      </div>

      {/* Mobile & Tablet Version with GSAP Card Stacking */}
      <div className="block lg:hidden w-full">
        <MobileGSAPCardsParallax />
      </div>
    </>
  );
}

export default ScrollingAnimation;
