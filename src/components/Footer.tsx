"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  IconMail,
  IconTrendingUp,
  IconArrowUpRight,
  IconChevronRight,
  IconShieldCheck,
} from "@tabler/icons-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Trading Courses" },
  { href: "/contact", label: "Contact & Enquiry" },
];

const courseLinks = [
  { href: "/courses", label: "Indian Equity & Stocks" },
  { href: "/courses", label: "Forex Trading Mastery" },
  { href: "/courses", label: "Crypto Assets & Web3" },
  { href: "/courses", label: "F&O & Derivatives" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/shrestha_it?igsh=c2pqc3V6OGs3NGRv",
    icon: IconBrandInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919236666923?text=Hi%20Shrestha%20IT,%20I%20want%20to%20enquire%20about%20trading%20courses.",
    icon: IconBrandWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sagar-shrestha-278001135/",
    icon: IconBrandLinkedin,
  },
];

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;
      const icons = footerRef.current.querySelectorAll(".social-circle-btn");
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.15,
            y: -3,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#040914] text-white overflow-hidden font-sans"
    >
      {/* Subtle Dark Navy Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">

        {/* Top Banner Card (Clean Dark Navy Styling - NO Yellow) */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#091122] p-8 md:p-10 mb-14 shadow-2xl">
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <IconTrendingUp size={280} className="text-sky-400" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <IconShieldCheck size={16} /> CERTIFIED TRADING ACADEMY
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Built for Practical Trading Success
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Master Indian Equity, F&O, Forex & Crypto with real market live execution & institutional price action.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/919236666923?text=Hi%20Shrestha%20IT,%20I%20want%20to%20enquire%20about%20trading%20courses."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 cursor-pointer"
              >
                <IconBrandWhatsapp size={20} className="stroke-[2.5]" />
                <span>Enquire On WhatsApp</span>
              </a>
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition-all duration-200"
              >
                <span>View All Courses</span>
                <IconArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Column Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20 bg-white p-1 shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Shrestha IT Academy Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover rounded-lg"
                  priority
                />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold tracking-tight text-white">
                  Shrestha IT Academy
                </h4>


              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Empowering traders with institutional price-action setups, risk management frameworks, and real-time market mentorship in New Delhi & online across India.
            </p>

            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase block">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="social-circle-btn flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-300 hover:border-sky-400 hover:text-sky-400 transition duration-200 cursor-pointer"
                  >
                    <item.icon size={18} stroke={2} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-sky-400 pl-2.5">
              QUICK LINKS
            </h5>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                  >
                    <IconChevronRight
                      size={14}
                      className="text-sky-400 group-hover:translate-x-0.5 transition-transform"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Trading Markets */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-sky-400 pl-2.5">
              TRADING MARKETS
            </h5>
            <ul className="space-y-2.5 text-xs">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Delhi Campus Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-sky-400 pl-2.5">
              DELHI CAMPUS CONTACT
            </h5>

            <div className="space-y-2.5 text-xs text-gray-300">
              <a
                href="tel:+919236666923"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition duration-200 group"
              >
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                  <IconPhone size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Call / WhatsApp</div>
                  <div className="font-bold text-white group-hover:text-sky-400 transition">
                    +91 9236666923
                  </div>
                </div>
              </a>

              <a
                href="mailto:support@shrestha.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition duration-200 group"
              >
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                  <IconMail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Official Email</div>
                  <div className="font-bold text-white group-hover:text-sky-400 transition">
                    support@shrestha.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                  <IconMapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Delhi Academy Address</div>
                  <div className="text-[11px] font-semibold text-gray-200">
                    Uttam Nagar, New Delhi - 110059
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar & Credit */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div className="flex items-center gap-3 text-gray-300 font-medium">
            <span className="hover:text-white cursor-pointer transition">TERMS & CONDITIONS</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition">DISCLAIMER</span>
          </div>

          <p>© {new Date().getFullYear()} Shrestha IT Academy. All rights reserved.</p>

          <div className="flex items-center gap-1 font-semibold">
            <span>Designed & Developed by</span>
            <a
              href="https://groxmedia.in/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-sky-400 hover:underline underline-offset-4 transition-colors"
            >
              Grox Media
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
