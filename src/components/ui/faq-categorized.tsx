"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

const DEFAULT_FAQ_DATA: FaqCategory[] = [
  {
    id: "courses",
    label: "Trading Programs",
    items: [
      {
        question: "What trading markets do you cover at Shrestha IT Academy?",
        answer:
          "We offer specialized practical courses in Indian Equity & Stock Markets, F&O & Option Chain Derivatives, Forex & Global Currency Pairs, and Crypto Assets & Web3.",
      },
      {
        question: "Are these courses suitable for complete beginners?",
        answer:
          "Yes! Our curriculum is structured step-by-step from foundational market mechanics to advanced institutional price-action setups and risk management.",
      },
      {
        question: "What is the typical duration of a trading course?",
        answer:
          "Most specialized modules run for 10 to 14 weeks. We also offer combined multi-market packages with lifetime community and mentorship desk access.",
      },
      {
        question: "Will I get live market practical trading experience?",
        answer:
          "Absolutely. Every course includes live market trading sessions, real-time chart analysis, risk-reward calculation drills, and mentor supervision.",
      },
    ],
  },
  {
    id: "admissions",
    label: "Admissions & Fees",
    items: [
      {
        question: "How do I enroll for offline classroom or online live batches?",
        answer:
          "You can apply directly through our website, contact us on WhatsApp (+91 9236666923), or visit our Delhi campus at Uttam Nagar, New Delhi.",
      },
      {
        question: "Do you offer flexible fee payment installments?",
        answer:
          "Yes, we provide student-friendly installment options and combo package discounts when enrolling for multiple market modules.",
      },
      {
        question: "Will I receive a completion certificate?",
        answer:
          "Yes, every student receives an official course completion certificate from Shrestha IT Academy upon passing the practical strategy evaluation.",
      },
    ],
  },
  {
    id: "mentorship",
    label: "Mentorship & Support",
    items: [
      {
        question: "How does 1-on-1 mentorship work during market hours?",
        answer:
          "Our senior traders review your trade setups, entry/exit logs, risk management rules, and provide constructive feedback during live market sessions.",
      },
      {
        question: "Can I access recorded lessons if I miss a live class?",
        answer:
          "Yes! All live online classes are recorded and made available on your student portal for review anytime.",
      },
      {
        question: "What post-course support is provided?",
        answer:
          "Students get lifetime access to our trader community channel, weekly market outlook webinars, and alumni trading desk meetups.",
      },
    ],
  },
  {
    id: "guidance",
    label: "Beginner Guidance",
    items: [
      {
        question: "How much capital do I need to start trading?",
        answer:
          "You do not need large capital to start. We teach risk-first position sizing and paper trading drills so you gain confidence before deploying real funds.",
      },
      {
        question: "Can I pursue trading alongside a full-time job or college?",
        answer:
          "Yes! We offer weekend batches, evening classes, and swing trading strategies specifically designed for working professionals and students.",
      },
    ],
  },
];

interface CategorizedFaqProps {
  subhead?: string;
  title?: string;
  categories?: FaqCategory[];
}

export function CategorizedFaq({
  subhead = "Let's answer some questions",
  title = "Frequently Asked Questions",
  categories = DEFAULT_FAQ_DATA,
}: CategorizedFaqProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "courses");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setOpenIndex(0); // auto open first item of newly selected category
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center space-y-1.5 mb-6 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest block">
            {subhead}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* Category Pill Tabs (Mobile Scrollable Row) */}
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 mb-6 sm:mb-10 px-0.5">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "shrink-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-[#040914] text-white shadow-md dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-600 border border-slate-200/60 dark:bg-slate-800/60 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700/60"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              {currentCategoryObj.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.question + idx}
                    className={cn(
                      "rounded-2xl border transition-all duration-200 overflow-hidden",
                      isOpen
                        ? "border-slate-300 dark:border-slate-700 bg-card shadow-sm"
                        : "border-slate-200/80 dark:border-slate-800/80 bg-card hover:border-slate-300 dark:hover:border-slate-700"
                    )}
                  >
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full p-4 sm:p-6 flex items-center justify-between gap-3 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base md:text-lg leading-snug">
                        {item.question}
                      </span>
                      <div className="shrink-0 text-slate-700 dark:text-slate-300 p-0.5">
                        {isOpen ? (
                          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence mode="wait">
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default CategorizedFaq;
