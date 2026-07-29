"use client";

import * as React from "react";
import Image from "next/image";
import { IconPlayerPlay, IconQuote, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

interface TestimonialTextCard {
  type: "text";
  avatar: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  highlight?: string;
}

interface TestimonialImageCard {
  type: "image";
  image: string;
  title: string;
  company: string;
  videoSrc?: string;
}

type TestimonialCard = TestimonialTextCard | TestimonialImageCard;

const column1: TestimonialCard[] = [
  {
    type: "image",
    image: "/testimonials/Anas Khan-Indian Equity Trader.jpeg",
    title: "How Anas Khan Achieved 80%+ Accuracy in Equity Trading",
    company: "Anas Khan - SIT Student Story",
    videoSrc: "https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785339239015-whatsapp-video-2026-07-28-at-6.33.28-pm.mp4",
  },
  {
    type: "text",
    avatar: "/testimonials/Anas Khan-Indian Equity Trader.jpeg",
    name: "Anas Khan",
    role: "Indian Equity Trader",
    location: "Delhi NCR",
    rating: 5,
    text: "Shrestha IT ka practical market approach mindblowing hai! Live market sessions me candle chart setup aur SMC liquidity traps seekhe. Equity trading me mera accuracy rate 80%+ ho chuka hai.",
    highlight: "SMC concepts aur risk-to-reward ratio ne mere equity trades ko completely transform kar diya.",
  },
  {
    type: "text",
    avatar: "/testimonials/Manish Shrivastav-Indian option trader.jpeg",
    name: "Manish Shrivastav",
    role: "Indian Option Trader",
    location: "Noida, UP",
    rating: 5,
    text: "Options buying me regular losses ke baad maine SIT join kiya tha. Mentors ne risk management aur option greeks hedging setup ko clear karwaya. Highly recommended for Option traders!",
  },
];

const column2: TestimonialCard[] = [
  {
    type: "text",
    avatar: "/testimonials/azhar- crypto trader.jpeg",
    name: "Azhar Sheikh",
    role: "Crypto & Derivatives Trader",
    location: "Lucknow, UP",
    rating: 5,
    text: "Crypto market volatility ko manage karna aur leverage short-selling techniques SIT ke live trading lab me seekhi. Faculty support superb hai, continuous doubt clearing sessions milte hain.",
    highlight: "Real-time market analysis aur 1-on-1 mentorship se trading mindset ekdum solid ho gaya.",
  },
  {
    type: "text",
    avatar: "/testimonials/Pawan yadav-indian option trader.jpeg",
    name: "Pawan Yadav",
    role: "Indian Option Trader",
    location: "Delhi Campus",
    rating: 5,
    text: "Offline campus training environment best hai! Live index desk par mentors ke saath real-time Nifty & Bank Nifty levels identify karke options trade execution seekha.",
  },
  {
    type: "text",
    avatar: "/testimonials/Rahul Vishwakarma- Crypto trader.jpeg",
    name: "Rahul Vishwakarma",
    role: "Crypto Trader",
    location: "Banaras, UP",
    rating: 5,
    text: "Spot & futures trading in crypto setups simple tarike se explain kiye gaye. Risk capital protection strategy ki wajah se mere loss trades zero ke barabar ho gaye hain.",
  },
];

const column3: TestimonialCard[] = [
  {
    type: "text",
    avatar: "/testimonials/Rajat-Forex Trader.jpeg",
    name: "Rajat Verma",
    role: "Forex FX Trader",
    location: "Chandigarh",
    rating: 5,
    text: "Global Forex pairs MT4/MT5 setup, PIP spreads aur economic calendar events ka drop analysis SIT ne exact sikha diya. Forex live mentorship desk unmatched hai!",
  },
  {
    type: "image",
    image: "/testimonials/Sneha Juneja- Crypto trader.jpeg",
    title: "How Sneha Juneja Mastered Crypto & Web3 Derivatives",
    company: "Sneha Juneja - SIT Student Story",
    videoSrc: "https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785339215703-whatsapp-video-2026-07-23-at-6.24.39-pm.mp4",
  },
  {
    type: "text",
    avatar: "/testimonials/saif qadri- Indian equity trader.jpeg",
    name: "Saif Qadri",
    role: "Indian Equity Trader",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Basic candle reading se lekar advanced institutional SMC breakout setups tak shuru se end tak practical practical training mili. Offline lab and live desk access is gold!",
  },
  {
    type: "text",
    avatar: "/testimonials/Sneha Juneja- Crypto trader.jpeg",
    name: "Sneha Juneja",
    role: "Crypto & Web3 Trader",
    location: "Gurugram, HR",
    rating: 5,
    text: "Being a woman trader, I was looking for authentic 1-on-1 mentorship. SIT mentors made crypto derivatives & altcoin cycle trading crystal clear with zero confusion.",
    highlight: "Disciplined psychology and risk management model taught at SIT changed my whole approach.",
  },
];

export function TestimonialsMasonry() {
  const [activeVideo, setActiveVideo] = React.useState<{
    title: string;
    company: string;
    videoSrc: string;
  } | null>(null);

  const renderCard = (card: TestimonialCard, index: number) => {
    if (card.type === "image") {
      return (
        <div
          key={index}
          onClick={() =>
            setActiveVideo({
              title: card.title,
              company: card.company,
              videoSrc: card.videoSrc || "/hero-video.mp4",
            })
          }
          className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] bg-zinc-900 text-white shadow-md flex flex-col justify-end p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-navy/10 dark:border-white/10"
        >
          {/* Background Image with Dark Overlay */}
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Floating Play Button */}
          <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-navy shadow-lg">
            <IconPlayerPlay size={20} fill="currentColor" className="ml-0.5" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 space-y-2">
            <span className="text-xs font-bold tracking-wider text-amber uppercase">
              {card.company}
            </span>
            <h4 className="text-xl font-extrabold leading-snug tracking-tight text-white group-hover:text-amber-light transition-colors">
              {card.title}
            </h4>
          </div>
        </div>
      );
    }

    return (
      <div
        key={index}
        className="relative bg-card dark:bg-card/80 border border-navy/10 dark:border-white/10 rounded-[2rem] p-8 text-foreground shadow-sm flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
      >
        {/* Quote symbol in top right */}
        <IconQuote
          size={36}
          stroke={1.5}
          className="absolute top-8 right-8 text-muted/40 pointer-events-none"
        />

        {/* User profile row */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="relative h-14 w-14 rounded-2xl overflow-hidden border-2 border-[#01488B]/30 dark:border-amber/40 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-md">
            <Image
              src={card.avatar}
              alt={card.name}
              fill
              className="object-cover object-top p-0.5 rounded-xl"
              unoptimized
            />
          </div>
          <div>
            <h5 className="font-bold text-base text-navy-dark dark:text-white leading-none mb-1">
              {card.name}
            </h5>
            <p className="text-xs font-semibold text-navy/70 dark:text-amber/90">
              {card.role} • <span className="text-muted-foreground font-normal">{card.location}</span>
            </p>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(card.rating || 5)].map((_, i) => (
            <span key={i} className="text-amber text-sm font-bold">★</span>
          ))}
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ml-1">
            VERIFIED TRADER
          </span>
        </div>

        {/* Testimonial text details */}
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {card.text}
          </p>
          {card.highlight && (
            <p className="text-sm font-semibold leading-relaxed text-navy dark:text-amber border-l-2 border-navy dark:border-amber pl-3">
              {card.highlight}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 px-4 md:px-8 bg-transparent flex justify-center items-center">
      {/* Seamless Layout Wrapper */}
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Badge & Headings */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/50 dark:bg-navy/30 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Student Stories & Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-navy-dark dark:text-white">
            What Our Traders Are Saying
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Click on video stories to watch how our students transformed their trading journey.
          </p>
        </div>

        {/* Grid Masonry container */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {column1.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {column2.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {column3.map((card, idx) => renderCard(card, idx))}
          </div>
        </div>
      </div>

      {/* Interactive Video Modal Dialog */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80">
                <div>
                  <span className="text-xs font-bold text-amber tracking-wider uppercase">
                    {activeVideo.company}
                  </span>
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <IconX size={20} />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src={activeVideo.videoSrc}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TestimonialsMasonry;
