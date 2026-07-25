"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Indian Equity & Stocks",
    description:
      "Master price action, technical analysis, and swing trading strategies tailored for Nifty, Bank Nifty, and Indian equities.",
    image: "/indian.jpeg",
  },
  {
    id: "02",
    title: "Forex & Global Markets",
    description:
      "Understand currency pairs, risk-to-reward metrics, global macroeconomic factors, and high-probability breakout strategies.",
    image: "/forex.jpeg",
  },
  {
    id: "03",
    title: "F&O & Crypto Derivatives",
    description:
      "Advanced options hedging, futures spread mechanics, risk management algorithms, and crypto asset trading.",
    image: "/f&q.jpeg",
  },
];

const AUTO_PLAY_DURATION = 3500;

interface VerticalTabsProps {
  services?: ServiceItem[];
  heading?: string;
  subheading?: string;
}

export function VerticalTabs({
  services = DEFAULT_SERVICES,
  heading = "Built for Practical Trading Success",
  subheading = "(OUR TRADING MODULES)",
}: VerticalTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isMounted || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isMounted, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full bg-transparent py-8 md:py-16 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title & Vertical Accordion Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-2 mb-10">
              <h2 className="tracking-tight text-balance text-3xl font-extrabold md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                {heading}
              </h2>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-[0.25em] block ml-0.5">
                {subheading}
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-7 text-left transition-all duration-500 border-t border-slate-200 first:border-0 cursor-pointer",
                      isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-700"
                    )}
                  >
                    {/* Active Left Indicator Bar */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[3px] bg-transparent">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-slate-900 origin-top rounded-full"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-xs font-semibold mt-1 tabular-nums text-slate-400">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300",
                          isActive ? "text-navy" : "text-slate-400 font-bold"
                        )}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-md pt-1 pb-2">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Card Preview */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/3 md:aspect-16/11 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl">
                {isMounted ? (
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 260, damping: 32 },
                        opacity: { duration: 0.4 },
                      }}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      onClick={handleNext}
                    >
                      <Image
                        src={services[activeIndex].image}
                        alt={services[activeIndex].title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={services[0].image}
                      alt={services[0].title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                )}

                {/* Clean Controls at Bottom Right */}
                <div className="absolute bottom-6 right-6 flex gap-2.5 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-90 shadow-md cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-90 shadow-md cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
