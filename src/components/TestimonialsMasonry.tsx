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
    image: "/testimonial_video_amit.png",
    title: "How Amit Sharma Cracked Bank Nifty F&O Trading",
    company: "SIT Delhi Center",
    videoSrc: "/hero-video.mp4",
  },
  {
    type: "text",
    avatar: "/avatar_amit.png",
    name: "Amit Sharma",
    role: "F&O Trader",
    location: "Uttam Nagar, Delhi",
    text: "Bhai, simple words me bolu toh Shrestha IT best hai. Classes bahot interactive hain aur live market me trade karna seekha diya. Mera loss-making phase ab over ho chuka hai!",
    highlight: "Mera overall confidence double ho gaya live options trading desk par.",
  },
  {
    type: "text",
    avatar: "/avatar_vikram.png",
    name: "Vikram Malhotra",
    role: "Swing Trader",
    location: "Bangalore",
    text: "SIT lectures build from absolute basics. Being from a non-commerce background, I was worried, but the mentors made technical chart analysis very simple to understand.",
  },
];

const column2: TestimonialCard[] = [
  {
    type: "text",
    avatar: "/avatar_sanjay.png",
    name: "Sanjay Singh",
    role: "Equity Investor",
    location: "Noida, UP",
    text: "Market analysis and indicators setup ko deeply samjhaya gaya. The risk management strategy taught here saved my portfolio from major drawdown. Highly recommended!",
  },
  {
    type: "text",
    avatar: "/avatar_priya.png",
    name: "Priya Patel",
    role: "Forex Specialist",
    location: "Andheri West, Mumbai",
    text: "I joined the Forex Mastery program here. The mentor support is amazing! Live sessions clear all doubts instantly. Now trading with confidence in global currency pairs.",
    highlight: "Daily market tracking aur real-time guidance ne live currency charts analysis clear kr diya.",
  },
  {
    type: "text",
    avatar: "/avatar_rahul.png",
    name: "Rahul Verma",
    role: "Derivatives Trader",
    location: "Kanpur, UP",
    text: "F&O and Derivatives training is top-notch. Real-time market analysis examples helpful hain. Special thanks to the support team for constant guidance and live doubts resolution!",
  },
];

const column3: TestimonialCard[] = [
  {
    type: "text",
    avatar: "/avatar_rajesh.png",
    name: "Rajesh Kumar",
    role: "Commodity Trader",
    location: "Patna, Bihar",
    text: "Classes start basic se hoti hain, and instructors provide real case studies. The mentorship after the course is what sets Shrestha IT apart from other academies.",
  },
  {
    type: "image",
    image: "/testimonial_video_priya.png",
    title: "From Zero to Consistent Weekly Income in Forex",
    company: "SIT Mumbai Center",
    videoSrc: "/hero-video.mp4",
  },
  {
    type: "text",
    avatar: "/avatar_neha.png",
    name: "Neha Gupta",
    role: "Technical Analyst",
    location: "Pune",
    text: "Trading software parameters and price action setup ko sahi se use karna seekha. Live practice sessions in the computer lab helped me build proper setups on my trading platform.",
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
        <div className="flex items-center gap-3.5 mb-6">
          <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-navy/10 dark:border-white/10 bg-muted shrink-0">
            <Image
              src={card.avatar}
              alt={card.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h5 className="font-bold text-base text-navy-dark dark:text-white leading-none mb-1">
              {card.name}
            </h5>
            <p className="text-xs font-medium text-muted-foreground">
              {card.role}, {card.location}
            </p>
          </div>
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
