"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Anas Khan",
    role: "Equity Market Education Student",
    location: "Delhi NCR",
    image: "/testimonials/Anas Khan-Indian Equity Trader.jpeg",
    quote:
      "Shrestha IT ka practical market approach mindblowing hai! Live market sessions me candle chart setup aur market-structure concepts seekhe. Ab equity charts ko bahut behtar samajh paata hoon.",
  },
  {
    name: "Manish Shrivastav",
    role: "Options Market Education Student",
    location: "Noida, UP",
    image: "/testimonials/Manish Shrivastav-Indian option trader.jpeg",
    quote:
      "Options ke concepts pehle confusing lagte the, isiliye SIT join kiya tha. Mentors ne risk-management principles aur option Greeks ko bahut clearly samjhaya. Highly recommended!",
  },
  {
    name: "Azhar Sheikh",
    role: "Crypto & Derivatives Education Student",
    location: "Lucknow, UP",
    image: "/testimonials/azhar- crypto trader.jpeg",
    quote:
      "Crypto market volatility ko samajhna aur leverage/short-selling concepts SIT ke live sessions me seekhe. Faculty support superb hai, continuous doubt-clearing sessions milte hain.",
  },
  {
    name: "Pawan Yadav",
    role: "Options Market Education Student",
    location: "Delhi Campus",
    image: "/testimonials/Pawan yadav-indian option trader.jpeg",
    quote:
      "Offline campus learning environment best hai! Mentors ke saath real-time Nifty & Bank Nifty levels identify karke options market-structure analysis seekha.",
  },
  {
    name: "Rahul Vishwakarma",
    role: "Crypto Market Education Student",
    location: "Banaras, UP",
    image: "/testimonials/Rahul Vishwakarma- Crypto trader.jpeg",
    quote:
      "Spot & futures crypto market concepts simple tarike se explain kiye gaye. Risk-management principles seekhne ke baad mera capital-protection approach bahut better ho gaya hai.",
  },
  {
    name: "Rajat Verma",
    role: "Forex Market Education Student",
    location: "Chandigarh",
    image: "/testimonials/Rajat-Forex Trader.jpeg",
    quote:
      "Global Forex pairs, MT4/MT5 platform, PIP/spread concepts aur economic-calendar analysis SIT ne exact sikha diya. Forex live mentorship sessions unmatched hain!",
  },
  {
    name: "Saif Qadri",
    role: "Equity Market Education Student",
    location: "Jaipur, Rajasthan",
    image: "/testimonials/saif qadri- Indian equity trader.jpeg",
    quote:
      "Basic candle reading se lekar advanced market-structure concepts tak shuru se end tak practical learning mili. Offline lab and live classroom access is gold!",
  },
  {
    name: "Sneha Juneja",
    role: "Crypto & Web3 Education Student",
    location: "Gurugram, HR",
    image: "/testimonials/Sneha Juneja- Crypto trader.jpeg",
    quote:
      "I was looking for authentic 1-on-1 mentorship in a learning environment. SIT mentors made crypto derivatives & altcoin market-cycle concepts crystal clear with zero confusion.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full pt-10 pb-20 px-4">
      <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl space-y-10 relative z-10">
        <div className="text-center flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/50 dark:bg-navy/30 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Student Stories & Case Studies
          </span>
          <h2 className="text-3xl font-black tracking-tight text-balance text-navy-dark dark:text-white md:text-4xl lg:text-5xl">
            Real Students, Real Learning
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            See how our students built stronger market knowledge with practical, mentor-led education at Shrestha IT.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, location, quote, image }, index) => (
            <motion.div
              initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
              whileInView={{
                filter: "blur(0px)",
                translateY: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index + 0.1, duration: 0.8 }}
              key={name}
              className="border-navy/15 dark:border-white/15 bg-card/50 relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden rounded-2xl border border-dashed p-5"
            >
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                  <GridPattern
                    width={25}
                    height={25}
                    x={-12}
                    y={4}
                    strokeDasharray="3"
                    className="stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay"
                  />
                </div>
              </div>
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-navy/10 dark:border-white/10">
                <Image src={image} alt={name} fill className="object-cover object-top" unoptimized />
              </div>
              <div>
                <div className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm md:text-base font-bold text-navy-dark dark:text-white">{name}</p>
                  <span className="text-muted-foreground block text-[11px] font-medium tracking-tight">
                    {role} &middot; {location}
                  </span>
                </div>
                <blockquote className="mt-3">
                  <p className="text-foreground/90 text-sm font-light leading-relaxed tracking-wide">
                    {quote}
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
