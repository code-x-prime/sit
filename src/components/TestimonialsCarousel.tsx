"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconStar, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amit Sharma",
    location: "Delhi",
    role: "Equity Trader",
    rating: 5,
    text: "Bhai, simple words me bolu toh Shrestha IT best hai. Classes bahot interactive hain aur live market me trade karna seekha diya. Mera loss-making phase ab over ho chuka hai!",
    avatar: "/avatar_amit.png"
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    role: "Forex Specialist",
    rating: 5,
    text: "I joined the Forex Mastery program. Mentor support is amazing! Live sessions clear all doubts instantly. Now trading with real confidence in global pairs.",
    avatar: "/avatar_priya.png"
  },
  {
    name: "Rahul Verma",
    location: "Kanpur, UP",
    role: "Derivatives Trader",
    rating: 5,
    text: "F&O and Derivatives training is top-notch. Real-time market analysis examples bohot helpful hain. Special thanks to the mentors for hand-holding!",
    avatar: "/avatar_rahul.png"
  },
  {
    name: "Sanjay Singh",
    location: "Noida",
    role: "Full-Time Trader",
    rating: 5,
    text: "Classes start bilkul basic se hoti hain, toh non-commerce background students ke liye bhi samajhna bohot easy hai. Best trading academy in India!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    name: "Neha Gupta",
    location: "Pune",
    role: "Crypto Investor",
    rating: 5,
    text: "Technical analysis and indicators setup ko deeply samjhaya gaya. The risk management strategy taught here saved my portfolio. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  }
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&h=400&fit=crop", height: "h-36 md:h-44" },
  { src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=500&fit=crop", height: "h-44 md:h-56" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=600&fit=crop", height: "h-52 md:h-64" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=450&fit=crop", height: "h-48 md:h-60" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=500&fit=crop", height: "h-40 md:h-48" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop", height: "h-36 md:h-44" }
];

export function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get visible items in the carousel loop
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="relative w-full py-20 bg-background overflow-hidden">
      {/* Top Gallery Collage (Matching Image Layout) */}
      <div className="flex justify-center items-center gap-2 md:gap-4 overflow-hidden px-4 opacity-80 mb-12">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`w-20 sm:w-28 md:w-36 ${img.height} rounded-2xl md:rounded-3xl overflow-hidden shadow-md flex-shrink-0 transition-transform duration-500 hover:scale-105`}
          >
            <Image
              src={img.src}
              alt="Trading Environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100px, 150px"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Subtitle & Headings */}
      <div className="text-center px-4 mb-16 space-y-4">
        <span className="inline-block rounded-full border border-navy/10 bg-navy-light px-4 py-1.5 text-xs font-semibold text-navy uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-navy-dark dark:text-white max-w-3xl mx-auto leading-tight">
          Trusted by traders and investors
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          from Delhi, UP, Mumbai & all over India
        </p>
      </div>

      {/* Testimonials Display Section */}
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-2 md:left-2 -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-navy/10 bg-card text-navy shadow-md transition hover:bg-navy hover:text-white active:scale-95"
            aria-label="Previous testimonial"
          >
            <IconChevronLeft size={22} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-2 md:right-2 -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-navy/10 bg-card text-navy shadow-md transition hover:bg-navy hover:text-white active:scale-95"
            aria-label="Next testimonial"
          >
            <IconChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Cards Grid */}
        <div className="overflow-hidden py-4 px-2">
          {/* Mobile Layout: 1 card */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-navy/10 bg-card p-8 shadow-md"
              >
                <div className="mb-6 flex text-amber gap-0.5">
                  {Array.from({ length: testimonials[startIndex].rating }).map((_, i) => (
                    <IconStar key={i} size={18} stroke={2} fill="currentColor" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-muted-foreground italic min-h-[6rem]">
                  &quot;{testimonials[startIndex].text}&quot;
                </p>
                <div className="mt-6 flex items-center gap-3.5 border-t border-navy/5 pt-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-navy/10 bg-navy-light">
                    <Image
                      src={testimonials[startIndex].avatar}
                      alt={testimonials[startIndex].name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-navy-dark dark:text-white">
                      {testimonials[startIndex].name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[startIndex].role} • {testimonials[startIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Layout: 3 cards side-by-side */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((item, idx) => (
              <motion.div
                key={`${item.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-navy/10 bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex text-amber gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <IconStar key={i} size={16} stroke={2} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic min-h-[6.5rem]">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-navy/5 pt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-navy/10 bg-navy-light shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-navy-dark dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bullet Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === index ? "w-6 bg-navy" : "w-2.5 bg-navy/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
