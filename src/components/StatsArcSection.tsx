"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IconArrowUpRight } from "@tabler/icons-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatCardProps {
  value: string;
  numberVal?: number;
  suffix?: string;
  prefix?: string;
  iconSymbol?: string;
  label: string;
  bgClass: string;
  textClass: string;
  delay?: number;
}

function StatCard({
  value,
  numberVal,
  suffix = "",
  prefix = "",
  iconSymbol = "↗",
  label,
  bgClass,
  textClass,
  delay = 0,
}: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.from(cardRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.95,
        duration: 0.7,
        delay: delay,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          once: true,
        },
      });

      if (numberVal !== undefined && numRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numberVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            if (numRef.current) {
              numRef.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
            }
          },
        });
      }
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${bgClass} ${textClass}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading flex items-baseline gap-1">
          {numberVal !== undefined ? (
            <span ref={numRef} className="tabular-nums">
              {prefix}0{suffix}
            </span>
          ) : (
            <span>{value}</span>
          )}
        </div>
        {iconSymbol && (
          <span className="text-xl sm:text-2xl font-bold opacity-80 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            {iconSymbol}
          </span>
        )}
      </div>

      <p className="mt-4 text-xs sm:text-sm font-semibold leading-relaxed opacity-90">
        {label}
      </p>
    </div>
  );
}

export function StatsArcSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT COLUMN: Eyebrow + Illustration + Hero Title + Body + CTA */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col items-start space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 dark:border-white/10 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Proven Track Record. Active Community.
            </div>

            {/* Trading Line Art Illustration (Left Image) */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border border-navy/10 dark:border-white/10 bg-white dark:bg-card p-4 shadow-sm backdrop-blur-xs group">
              <Image
                src="/trading_community_illustration.png"
                alt="Trading Community Illustration"
                fill
                priority
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Headline matching Surfe layout "Sell more, type less" */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-dark dark:text-white tracking-tight leading-[1.15]">
              Trade <span className="text-rose-500 dark:text-rose-400">smarter</span>, win <span className="text-navy dark:text-amber">bigger</span>
            </h2>

            {/* Body Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              Stock Institute of Trading (SIT) saves you hours of market guesswork. No copy-paste signals anymore—get data accuracy, 1-on-1 mentor guidance, and live setups to close more profitable trades.
            </p>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy dark:bg-amber px-6 py-3.5 text-sm font-bold text-white dark:text-navy transition-all duration-300 hover:bg-navy-dark dark:hover:bg-amber-light hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join Community Free</span>
                <IconArrowUpRight size={18} stroke={2.5} />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Masonry Pastel Stat Cards (6 Cards in 2 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Column 1 */}
            <div className="space-y-4 sm:space-y-5">
              
              {/* Card 1: Pastel Pink */}
              <StatCard
                value="7+"
                numberVal={7}
                suffix="+"
                iconSymbol="⤵"
                label="expert mentors active daily guiding live trade setups & analysis"
                bgClass="bg-[#FCE7F3] dark:bg-[#4a152e]/80"
                textClass="text-[#831843] dark:text-[#fbcfe8]"
                delay={0.1}
              />

              {/* Card 2: Pastel Orange / Peach */}
              <StatCard
                value="94%"
                numberVal={94}
                suffix="%"
                iconSymbol="↗"
                label="success rate reached in live market trade setup execution"
                bgClass="bg-[#FFEDD5] dark:bg-[#512204]/80"
                textClass="text-[#7c2d12] dark:text-[#fed7aa]"
                delay={0.2}
              />

              {/* Card 3: Soft Cyan / Sky */}
              <StatCard
                value="250+"
                numberVal={250}
                suffix="+"
                iconSymbol="🔄"
                label="active traders & investors enrolled in our masterclass community"
                bgClass="bg-[#E0F2FE] dark:bg-[#073655]/80"
                textClass="text-[#075985] dark:text-[#bae6fd]"
                delay={0.3}
              />

            </div>

            {/* Column 2 (Offsetted layout like Surfe reference) */}
            <div className="space-y-4 sm:space-y-5 sm:pt-6">
              
              {/* Card 4: Pastel Yellow */}
              <StatCard
                value="4.9/5"
                suffix="/5"
                prefix=""
                iconSymbol="←"
                label="student satisfaction rating (from 200+ verified student reviews)"
                bgClass="bg-[#FEF9C3] dark:bg-[#423b0a]/80"
                textClass="text-[#713f12] dark:text-[#fef08a]"
                delay={0.15}
              />

              {/* Card 5: Dark Navy / Deep Slate Card */}
              <StatCard
                value="1000+"
                numberVal={1000}
                suffix="+"
                iconSymbol="⤴"
                label="live interactive trading sessions & webinars completed"
                bgClass="bg-[#0F172A] dark:bg-[#020617] border border-slate-700/50 shadow-md"
                textClass="text-white"
                delay={0.25}
              />

              {/* Card 6: Pastel Lilac / Purple */}
              <StatCard
                value="24/7"
                iconSymbol="📈"
                label="real-time market analysis & instant community signal alerts"
                bgClass="bg-[#F3E8FF] dark:bg-[#3b1259]/80"
                textClass="text-[#581c87] dark:text-[#e9d5ff]"
                delay={0.35}
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default StatsArcSection;
