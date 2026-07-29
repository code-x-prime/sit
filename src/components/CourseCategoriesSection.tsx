"use client";

import React, { useState } from "react";
import {
  IconTrendingUp,
  IconWorld,
  IconCoinBitcoin,
  IconChartCandle,
  IconCheck,
  IconSparkles,
  IconClock,
  IconTag,
  IconCurrencyRupee,
  IconRosetteDiscountCheck,
  IconChartDots,
  IconBuildingBank,
  IconBrandWhatsapp,
  IconDeviceLaptop,
  IconMapPin,
} from "@tabler/icons-react";

export interface CourseCategory {
  id: string;
  title: string;
  shortTitle: string;
  categoryName: string;
  duration: string;
  levels: string;
  offlinePrice: string;
  onlinePrice: string;
  discount: string;
  popular?: boolean;
  icon: React.ReactNode;
  headerBgIcon: React.ReactNode;
  gradientHeader: string;
  curriculum: string[];
}

export const COURSES: CourseCategory[] = [
  {
    id: "equity-derivatives",
    title: "Indian Equity + Derivatives Market Trading",
    shortTitle: "Equity & Derivatives Combo",
    categoryName: "NSE / BSE Equity + F&O",
    duration: "2 Months",
    levels: "4 Levels (Minor, Major, Bachelor, Master)",
    offlinePrice: "35,000",
    onlinePrice: "35,000",
    discount: "10% OFF on One Shot Payment",
    popular: true,
    icon: <IconTrendingUp className="w-6 h-6 text-white" />,
    headerBgIcon: <IconBuildingBank className="w-20 h-20 text-white" />,
    gradientHeader: "from-emerald-600 via-teal-600 to-[#0A2540]",
    curriculum: [
      "Chart & Price Data (How Candle works)",
      "Adv. SMC, FVG & Order Blocks",
      "Institutional Entry & Liquidity Strategy",
      "Futures & Options Buying/Selling Strategies",
    ],
  },
  {
    id: "derivatives",
    title: "Indian Derivatives Market Trading",
    shortTitle: "F&O & Options",
    categoryName: "Futures & Options",
    duration: "2 Months",
    levels: "4 Levels (Minor, Major, Bachelor, Master)",
    offlinePrice: "20,000",
    onlinePrice: "20,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconChartCandle className="w-6 h-6 text-white" />,
    headerBgIcon: <IconChartDots className="w-20 h-20 text-white" />,
    gradientHeader: "from-rose-600 via-purple-600 to-[#0A2540]",
    curriculum: [
      "Futures & Forward Contracts Foundation",
      "Options Buying & Selling Strategies",
      "Quantitative Techniques & Risk Analytics",
      "Master Trade Setup & Expiry Day Trades",
    ],
  },
  {
    id: "forex",
    title: "Forex Market Trading",
    shortTitle: "Global Currencies",
    categoryName: "Forex FX",
    duration: "2 Months",
    levels: "4 Levels (Forex FA, Next Gen, Alpha F, SIT)",
    offlinePrice: "15,000",
    onlinePrice: "15,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconWorld className="w-6 h-6 text-white" />,
    headerBgIcon: <IconWorld className="w-20 h-20 text-white" />,
    gradientHeader: "from-[#01488B] via-blue-600 to-[#0F172A]",
    curriculum: [
      "MetaTrader 4 & PIP / Spread Mechanics",
      "Fundamental, Technical & Sentiment Analysis",
      "Short Selling & Economic Calendar",
      "Educational Trading & Group Mentorship",
    ],
  },
  {
    id: "crypto",
    title: "Cryptocurrency Market Trading",
    shortTitle: "Crypto & Web3",
    categoryName: "Crypto Assets",
    duration: "2 Months",
    levels: "4 Levels (Coins FA, Next Gen, Alpha Coin, SIT)",
    offlinePrice: "15,000",
    onlinePrice: "15,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconCoinBitcoin className="w-6 h-6 text-white" />,
    headerBgIcon: <IconCoinBitcoin className="w-20 h-20 text-white" />,
    gradientHeader: "from-amber-500 via-amber-600 to-[#0F172A]",
    curriculum: [
      "Crypto Currency Pairs & Blockchain Basics",
      "Market Cycles & Altcoin Strategy",
      "Leverage & Short Selling Mechanics",
      "Risk Management & Money Rewards",
    ],
  },
];

interface CourseCategoriesSectionProps {
  showTitle?: boolean;
}

export function CourseCategoriesSection({ showTitle = true }: CourseCategoriesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>("derivatives");
  const [learningMode, setLearningMode] = useState<"offline" | "online">("offline");

  return (
    <section className="relative w-full py-8 md:py-16 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 space-y-10">

        {/* Section Header */}
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-navy/10 dark:border-white/10 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
                <IconSparkles className="w-3.5 h-3.5 text-amber animate-spin" />
                Official SIT Curriculum & Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-dark dark:text-white tracking-tight leading-tight">
                Pick Your Market & <span className="text-[#01488B] dark:text-amber">Master Trading</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Structured 2-Month hands-on programs with 4 progressive levels (Minor, Major, Bachelor & Master) designed to make you industry-ready.
              </p>
            </div>


          </div>
        )}

        {/* 4 Main Segment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COURSES.map((course) => {
            const isPopular = course.popular;
            const isSelected = selectedCourse === course.id;

            const whatsappMsg = `Hi Shrestha IT, I want to enroll in the ${course.title} (₹${course.offlinePrice}, 2 Months, 4 Levels). Please share admission & batch details for Online/Offline.`;

            return (
              <div
                key={course.id}
                onMouseEnter={() => setSelectedCourse(course.id)}
                className={`group relative flex flex-col justify-between p-5 rounded-3xl border transition-all duration-300 ${isSelected
                  ? "border-[#01488B] dark:border-amber bg-card shadow-2xl scale-[1.02] z-20"
                  : "border-navy/10 dark:border-white/10 bg-card/70 dark:bg-card/40 shadow-sm hover:shadow-md"
                  }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 z-30 bg-gradient-to-r from-amber to-amber-dark text-navy font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <IconSparkles className="w-3 h-3 fill-navy animate-pulse" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Premium Course Card Visual Header */}
                  <div className={`relative w-full h-36 rounded-2xl overflow-hidden bg-gradient-to-br ${course.gradientHeader} p-4 flex flex-col justify-between mb-4 shadow-md transition-transform duration-500 group-hover:scale-[1.02]`}>
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
                    <div className="absolute right-2 top-2 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      {course.headerBgIcon}
                    </div>

                    {/* Top Category Badge & Duration */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/15">
                        {course.categoryName}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                        <IconClock className="w-3 h-3" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Banner Title & Icon */}
                    <div className="z-10 flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-md">
                        {course.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest block">
                          SIT Masterclass
                        </span>
                        <h4 className="text-sm font-black text-white truncate max-w-[140px]">
                          {course.shortTitle}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Main Title & Level */}
                  <h3 className="font-heading text-lg font-extrabold text-navy-dark dark:text-white mb-1 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-1">
                    <IconRosetteDiscountCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                    <span>{course.levels}</span>
                  </p>

                  {/* Highlighted Batches Badge (Offline + Online) */}
                  <div className="mb-4 flex items-center gap-2 p-2 rounded-xl bg-navy-light/60 dark:bg-navy/50 border border-navy/10 dark:border-white/10">
                    <div className="flex-1 flex items-center justify-center gap-1 py-1 rounded-lg bg-white dark:bg-navy/80 text-[10px] font-extrabold text-[#01488B] dark:text-amber shadow-xs border border-navy/5">
                      <IconMapPin className="w-3 h-3 text-[#01488B] dark:text-amber" />
                      <span>Offline Campus</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-1 py-1 rounded-lg bg-white dark:bg-navy/80 text-[10px] font-extrabold text-amber-600 dark:text-amber shadow-xs border border-navy/5">
                      <IconDeviceLaptop className="w-3 h-3 text-amber-500" />
                      <span>Online Live</span>
                    </div>
                  </div>

                  {/* Curriculum Highlights List */}
                  <div className="space-y-2 mb-6 border-t border-navy/5 dark:border-white/5 pt-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      Key Modules Covered:
                    </span>
                    {course.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Display & WhatsApp Button */}
                <div className="border-t border-navy/10 dark:border-white/10 pt-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="flex items-center text-2xl font-black text-navy-dark dark:text-white font-heading">
                        <IconCurrencyRupee className="w-5 h-5 -mr-0.5 text-navy dark:text-amber" />
                        <span>{course.offlinePrice}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground block font-semibold">
                        Offline & Online Batch Fee
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <IconTag className="w-3 h-3" />
                      10% OFF
                    </span>
                  </div>

                  {/* WhatsApp Enroll Button */}
                  <a
                    href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition duration-300 hover:scale-[1.02]"
                  >
                    <IconBrandWhatsapp className="w-4 h-4 text-white shrink-0" />
                    <span>Enroll on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMBO BUNDLE OFFER BANNER ("Want to Learn ALL? Collect Bundle") */}
        <div className="relative rounded-3xl overflow-hidden border border-navy/20 dark:border-amber/30 bg-gradient-to-r from-[#0F172A] via-[#01488B] to-[#0A2540] p-8 sm:p-10 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber/20 border border-amber/40 text-amber text-xs font-bold uppercase tracking-wider">
                <IconSparkles className="w-3.5 h-3.5 fill-amber" />
                Want to Learn ALL? Collect Bundle
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Get Complete Multi-Segment <span className="text-amber">Mastery Bundles</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Combine Forex, Crypto & Derivatives for 3+ months of comprehensive live market training, personal mentor allocation, and lifetime trading desk support.
              </p>
            </div>

            {/* Bundle Options */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

              {/* Bundle 1 */}
              <div className="w-full sm:w-auto p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3 min-w-[210px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Forex + Crypto Segment
                  </span>
                  <div className="flex items-center justify-center text-2xl font-black text-amber font-heading">
                    <IconCurrencyRupee className="w-5 h-5 -mr-0.5" />
                    <span>24,999</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">
                    3+ Months Access
                  </span>
                </div>

                <a
                  href={`https://wa.me/919236666923?text=${encodeURIComponent(
                    `Hi Shrestha IT, I want to enroll in the Forex + Crypto Combo Bundle (₹24,999 RS, 3+ Months, ${learningMode.toUpperCase()} Mode). Please share admission details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition duration-300"
                >
                  <IconBrandWhatsapp className="w-3.5 h-3.5 text-white" />
                  <span>Get Bundle</span>
                </a>
              </div>

              {/* Bundle 2 */}
              <div className="w-full sm:w-auto p-5 rounded-2xl bg-gradient-to-b from-amber/30 to-amber/10 backdrop-blur-md border border-amber/50 text-center space-y-3 min-w-[210px] shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber uppercase tracking-wider block mb-1">
                    All-Segment Master Bundle
                  </span>
                  <div className="flex items-center justify-center text-2xl font-black text-white font-heading">
                    <IconCurrencyRupee className="w-5 h-5 -mr-0.5" />
                    <span>29,999</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-semibold block mt-0.5">
                    All Segments Included
                  </span>
                </div>

                <a
                  href={`https://wa.me/919236666923?text=${encodeURIComponent(
                    `Hi Shrestha IT, I want to enroll in the All-Segment Master Bundle (₹29,999 RS, All Segments Included, ${learningMode.toUpperCase()} Mode). Please share admission details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-amber hover:bg-amber-dark text-navy text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition duration-300"
                >
                  <IconBrandWhatsapp className="w-3.5 h-3.5 fill-navy" />
                  <span>Get All-Access</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CourseCategoriesSection;
