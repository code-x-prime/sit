"use client";

import * as React from "react";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const photos: GalleryPhoto[] = [
  {
    id: "team-photo-large",
    src: "/gallery/team-photo-large.jpg",
    alt: "Shrestha IT trading academy full team and student community at the Delhi campus",
    caption: "Our Growing Trading Community",
  },
  {
    id: "media-interview-1",
    src: "/gallery/media-interview-1.jpg",
    alt: "Shrestha IT founder Sagar Shrestha being interviewed by national news media",
    caption: "Featured in National Media",
  },
  {
    id: "mentor-teaching",
    src: "/gallery/mentor-teaching.jpg",
    alt: "Live trading mentor teaching candlestick chart analysis to students on smart board",
    caption: "Live Market Trading Sessions",
  },
  {
    id: "certificate-ceremony-1",
    src: "/gallery/certificate-ceremony-1.jpg",
    alt: "Students receiving trading course completion certificates at Shrestha IT",
    caption: "Certified Trader Graduations",
  },
  {
    id: "founder-interview-desk",
    src: "/gallery/founder-interview-desk.jpg",
    alt: "Shrestha IT Director and CEO Sagar Shrestha giving a press interview at his office desk",
    caption: "Director & CEO in the Press",
  },
  {
    id: "classroom-session-1",
    src: "/gallery/classroom-session-1.jpg",
    alt: "Shrestha IT classroom with mentor guiding students through a live trading setup",
    caption: "Hands-On Classroom Training",
  },
  {
    id: "certificate-handover-2",
    src: "/gallery/certificate-handover-2.jpg",
    alt: "Senior mentor handing over a trading certificate of participation to a student",
    caption: "Recognizing Every Milestone",
  },
  {
    id: "celebration-team",
    src: "/gallery/celebration-team.jpg",
    alt: "Shrestha IT students and mentors celebrating together at the trading academy office",
    caption: "Celebrating Trader Success",
  },
  {
    id: "office-team",
    src: "/gallery/office-team.jpg",
    alt: "Shrestha IT trading academy office team group photo",
    caption: "Our Delhi Campus Office",
  },
  {
    id: "trading-session-live",
    src: "/gallery/trading-session-live.jpg",
    alt: "Mentor explaining live Bitcoin trading chart on smart board at Shrestha IT",
    caption: "Real-Time Market Analysis",
  },
  {
    id: "certificate-group-2",
    src: "/gallery/certificate-group-2.jpg",
    alt: "Group of certified students posing with their trading course completion certificates",
    caption: "Every Batch, A New Success Story",
  },
  {
    id: "classroom-discussion",
    src: "/gallery/classroom-discussion.jpg",
    alt: "Students in an open discussion during a live trading class at Shrestha IT",
    caption: "Interactive Trading Discussions",
  },
];

interface PhotoGalleryProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  showCta?: boolean;
}

export function PhotoGallery({
  eyebrow = "Life at Shrestha IT",
  title = (
    <>
      Real Students. Real Mentors. <span className="text-[#01488B] dark:text-amber">Real Results.</span>
    </>
  ),
  description = "A glimpse inside our Delhi campus — live trading sessions, mentor-led classrooms, media features, and certified trader graduations.",
  showCta = true,
}: PhotoGalleryProps) {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 md:px-8 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-dark dark:text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {showCta && (
            <Link
              href="/about"
              className="hidden md:inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#01488B] dark:bg-amber px-6 py-3.5 text-sm font-bold text-white dark:text-navy-dark shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Know More About Us
              <IconArrowUpRight size={18} stroke={2.5} />
            </Link>
          )}
        </div>

        {/* Responsive Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[230px] md:auto-rows-[260px]">
          {photos.map((photo, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={photo.id}
                className={`group relative overflow-hidden rounded-2xl border border-navy/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white text-xs sm:text-sm font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 leading-snug">
                  {photo.caption}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        {showCta && (
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01488B] dark:bg-amber px-6 py-3.5 text-sm font-bold text-white dark:text-navy-dark shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Know More About Us
              <IconArrowUpRight size={18} stroke={2.5} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoGallery;
