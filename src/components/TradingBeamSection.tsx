"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedBeam, Circle, TradingIcons } from "@/components/ui/animated-beam";

export function TradingBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-transparent flex justify-center items-center">
      {/* Outer Container - Side-by-Side Layout */}
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Side: Headings & Text */}
        <div className="w-full lg:w-5/12 text-center lg:text-left space-y-4 sm:space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-navy/10 bg-navy-light text-xs font-semibold tracking-wider text-navy uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            Connected Market Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-[1.15]">
            One Institute. <br className="hidden lg:block" /> Every Financial Market.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our live trading hub seamlessly connects Indian Equity, F&O Derivatives, Forex, Crypto & Wealth Management under one roof with real-time mentorship.
          </p>
        </div>

        {/* Right Side: Interactive Beam Node Graph */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div
            className="relative flex w-full max-w-[620px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-3.5 sm:p-8 md:p-10 shadow-md"
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-8 sm:gap-12">
              
              {/* Top Row */}
              <div className="flex flex-row items-center justify-between px-1">
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div1Ref}>
                    <TradingIcons.equity />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    Indian Equity
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div5Ref}>
                    <TradingIcons.crypto />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    Crypto Assets
                  </span>
                </div>
              </div>

              {/* Middle Row (Center Hub) */}
              <div className="flex flex-row items-center justify-between px-1">
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div2Ref}>
                    <TradingIcons.derivatives />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    F&O Derivatives
                  </span>
                </div>

                {/* Central Hub Logo Circle */}
                <div className="flex flex-col items-center gap-1 z-20">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -4, 4, -4, 4, 0],
                    }}
                    transition={{
                      rotate: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.4, ease: "easeOut" },
                    }}
                    className="cursor-pointer"
                  >
                    <Circle ref={div4Ref} className="h-16 w-16 sm:h-24 sm:w-24 p-1 sm:p-1.5 overflow-hidden bg-white border-2 sm:border-3 border-sky-500 shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:shadow-[0_0_45px_rgba(56,189,248,0.95)] rounded-full transition-shadow duration-300">
                      <TradingIcons.hub />
                    </Circle>
                  </motion.div>
                </div>

                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div6Ref}>
                    <TradingIcons.wealth />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    Wealth Setup
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-row items-center justify-between px-1">
                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div3Ref}>
                    <TradingIcons.forex />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    Forex Markets
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1 sm:gap-1.5 z-20">
                  <Circle ref={div7Ref}>
                    <TradingIcons.mentorship />
                  </Circle>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white text-center max-w-[85px] sm:max-w-none leading-tight">
                    Mentorship
                  </span>
                </div>
              </div>

            </div>

            {/* Continuous Animated Beams */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-50}
              duration={1.8}
              delay={0}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#10B981"
              gradientStopColor="#38BDF8"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
              duration={1.6}
              delay={0.3}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#3B82F6"
              gradientStopColor="#38BDF8"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={50}
              duration={2.0}
              delay={0.6}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#F59E0B"
              gradientStopColor="#38BDF8"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-50}
              reverse
              duration={1.7}
              delay={0.2}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#6366F1"
              gradientStopColor="#38BDF8"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              reverse
              duration={1.9}
              delay={0.5}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#EC4899"
              gradientStopColor="#38BDF8"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={50}
              reverse
              duration={1.8}
              delay={0.4}
              pathWidth={2.5}
              pathColor="rgba(148, 163, 184, 0.45)"
              gradientStartColor="#10B981"
              gradientStopColor="#01488B"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradingBeamSection;
