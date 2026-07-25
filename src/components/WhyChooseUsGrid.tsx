"use client";

import * as React from "react";
import Image from "next/image";

interface FeatureCard {
  id: string;
  image: string;
  title: string;
  description: string;
  fallbackSvg: React.ReactNode;
}

const topFeatures: FeatureCard[] = [
  {
    id: "live-trading",
    image: "/why_sit_1.png",
    title: "Practical Live Trading",
    description: "Hands-on trading sessions during live market hours with real-time price action analysis and execution.",
    fallbackSvg: (
      <svg className="w-32 h-32 text-navy/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="20" y="30" width="60" height="45" rx="6" />
        <path d="M30 55 L45 40 L60 50 L70 35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="70" cy="35" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "expert-mentorship",
    image: "/why_sit_2.png",
    title: "Expert Mentorship",
    description: "One-on-one guidance from market veterans across Indian Equity, F&O Derivatives, Forex, and Crypto.",
    fallbackSvg: (
      <svg className="w-32 h-32 text-navy/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="15" y="25" width="70" height="50" rx="8" />
        <circle cx="50" cy="45" r="12" />
        <path d="M30 65 Q50 55 70 65" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

const bottomFeatures: FeatureCard[] = [
  {
    id: "curriculum",
    image: "/why_sit_3.png",
    title: "Structured Curriculum",
    description: "Step-by-step modules building from absolute market basics to advanced technical chart analysis.",
    fallbackSvg: (
      <svg className="w-28 h-28 text-navy/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M25 40 L50 25 L75 40 L50 55 Z" />
        <path d="M25 55 L50 70 L75 55" />
        <path d="M25 70 L50 85 L75 70" />
      </svg>
    )
  },
  {
    id: "risk-management",
    image: "/why_sit_4.png",
    title: "Risk Management Rules",
    description: "Strict capital protection rules, position sizing models, and risk-to-reward ratio frameworks.",
    fallbackSvg: (
      <svg className="w-28 h-28 text-navy/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="30" y="20" width="40" height="60" rx="10" />
        <path d="M50 35 L50 65" strokeWidth="2" />
        <path d="M40 50 L60 50" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "community-support",
    image: "/why_sit_5.png",
    title: "Community & Career Support",
    description: "Lifetime access to our student trader community, daily market updates, and certification support.",
    fallbackSvg: (
      <svg className="w-28 h-28 text-navy/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="14" />
      </svg>
    )
  }
];

export function WhyChooseUsGrid() {
  const [imgErrors, setImgErrors] = React.useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-8 bg-transparent flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col items-center">

        {/* Headings */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/10 bg-navy-light text-[10px] font-semibold tracking-wider text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-navy" />
            Why Shrestha IT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
            Built for Practical Trading Success
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to transform from a market beginner to a disciplined trader.
          </p>
        </div>

        {/* 5-Card Layout Grid */}
        <div className="w-full space-y-6">

          {/* Top Row: 2 Cards (Asymmetrical split) */}
          <div className="grid gap-6 md:grid-cols-12">
            {/* Card 1 */}
            <div className="md:col-span-5 rounded-3xl border border-navy/10 bg-[#f8f9fb] dark:bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy/20 flex flex-col justify-between">
              <div className="relative h-44 sm:h-52 w-full flex items-center justify-center mb-6 overflow-hidden rounded-2xl">
                {!imgErrors[topFeatures[0].id] ? (
                  <Image
                    src={topFeatures[0].image}
                    alt={topFeatures[0].title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    onError={() => handleImgError(topFeatures[0].id)}
                    unoptimized
                  />
                ) : (
                  topFeatures[0].fallbackSvg
                )}
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy-dark dark:text-white mb-2">
                  {topFeatures[0].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topFeatures[0].description}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-7 rounded-3xl border border-navy/10 bg-[#f8f9fb] dark:bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy/20 flex flex-col justify-between">
              <div className="relative h-44 sm:h-52 w-full flex items-center justify-center mb-6 overflow-hidden rounded-2xl">
                {!imgErrors[topFeatures[1].id] ? (
                  <Image
                    src={topFeatures[1].image}
                    alt={topFeatures[1].title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    onError={() => handleImgError(topFeatures[1].id)}
                    unoptimized
                  />
                ) : (
                  topFeatures[1].fallbackSvg
                )}
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy-dark dark:text-white mb-2">
                  {topFeatures[1].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topFeatures[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bottomFeatures.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-navy/10 bg-[#f8f9fb] dark:bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy/20 flex flex-col justify-between"
              >
                <div className="relative h-40 w-full flex items-center justify-center mb-6 overflow-hidden rounded-2xl">
                  {!imgErrors[item.id] ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      onError={() => handleImgError(item.id)}
                      unoptimized
                    />
                  ) : (
                    item.fallbackSvg
                  )}
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-dark dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
