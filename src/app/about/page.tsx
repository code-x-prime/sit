"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { MinimalHero } from "@/components/ui/hero-minimalism";
import { CategorizedFaq } from "@/components/ui/faq-categorized";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PhotoGallery } from "@/components/PhotoGallery";
import {
  IconTarget,
  IconEye,
  IconTrendingUp,
  IconAward,
  IconBook,
  IconUsers,
  IconClock,
  IconChartBar,
  IconCertificate,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const newsCoverage = [
  {
    name: "The Tribune",
    tagline: "Business & Startup Coverage",
    logoImg: "/news/tribune-india.png",
    link: "https://www.tribuneindia.com/news/business/most-eminent-startups-of-india-2026-2-2/",
    desc: "Recognized among the Most Eminent Startups of India for practical trading education & mentorship excellence.",
  },
  {
    name: "ANI News",
    tagline: "National News Wire",
    logoImg: "/news/ani-news.png",
    link: "https://www.aninews.in/news/business/most-eminent-startups-of-india-202620260506123233/",
    desc: "Featured in ANI's national business release highlighting India's most prominent emerging startups.",
  },
  {
    name: "Hindustan Times",
    tagline: "Leading Daily Brand Feature",
    logoImg: "/news/hindustan-times.png",
    link: "https://www.hindustantimes.com/brand-stories/emerging-startups-shaping-india-s-business-landscape-in-2026-101778130531577.html#google_vignette",
    desc: "Highlighted as an emerging startup shaping India's business & financial education landscape in 2026.",
  },
  {
    name: "The Wire",
    tagline: "PTI Press Release Feature",
    logoImg: "/news/the-wire.png",
    link: "https://thewire.in/ptiprnews/most-eminent-startups-of-india-2026",
    desc: "Featured in PTI PR news for pioneering stock market & financial literacy for Indian youth.",
  },
  {
    name: "PTI News",
    tagline: "Press Trust of India",
    logoImg: "/news/pti-news.png",
    link: "https://www.ptinews.com/press-release/most-eminent-startups-of-india-2026/3637566",
    desc: "Covered by Press Trust of India in the official listing of India's most eminent startups.",
  },
  {
    name: "Hindustan Metro",
    tagline: "Education & Tech Feature",
    logoImg: "/news/hindustan-metro.png",
    link: "https://hindustanmetro.com/shrestha-it-bridging-the-gap-between-education-and-industry-in-india",
    desc: "Shrestha IT: Bridging the Gap Between Education and Industry in India through practical skill development.",
  },
  {
    name: "Entrepreneur Hunt",
    tagline: "Startup & Innovation Portal",
    logoImg: "/news/entrepreneur-hunt.png",
    link: "https://entrepreneurhunt.com/shrestha-it-bridging-the-gap-between-education-and-industry-in-india",
    desc: "In-depth story on how Shrestha IT is training next-gen traders with live market mentorship.",
  },
  {
    name: "Dailyhunt",
    tagline: "Digital News Network",
    logoImg: "/news/dailyhunt.png",
    link: "https://m.dailyhunt.in/news/india/english/punjabbytes-epaper-dhb7faabc774324241990251ac4336f653/-newsid-dhb7faabc774324241990251ac4336f653_1b410a006dc9438685405082386ba146?sm=Y",
    desc: "Covered across regional & national feeds via PunjabBytes on Dailyhunt app.",
  },
];

const highlights = [
  { icon: IconUsers, value: "250+", label: "Students Trained Offline" },
  { icon: IconBook, value: "1000+", label: "Live Sessions Completed" },
  { icon: IconChartBar, value: "5/5", label: "Student Rating (200+)" },
  { icon: IconClock, value: "4", label: "Dedicated Mentors" },
];

const mentors = [
  {
    name: "Rahul Sharma",
    role: "Equity & F&O Market Educator",
    experience: "8+ Yrs Exp",
    avatar: "/avatar_rahul.png",
    specialty: "Price Action & Options Concepts",
    badgeColor: "bg-[#E0F2FE] text-[#075985] dark:bg-[#073655] dark:text-[#bae6fd]",
  },
  {
    name: "Neha Kapoor",
    role: "Forex Market Expert",
    experience: "6+ Yrs Exp",
    avatar: "/avatar_neha.png",
    specialty: "Currencies & Global Macro",
    badgeColor: "bg-[#FCE7F3] text-[#831843] dark:bg-[#4a152e] dark:text-[#fbcfe8]",
  },
  {
    name: "Amit Verma",
    role: "Crypto & Web3 Educator",
    experience: "7+ Yrs Exp",
    avatar: "/avatar_amit.png",
    specialty: "Crypto Derivatives & On-Chain",
    badgeColor: "bg-[#FEF9C3] text-[#713f12] dark:bg-[#423b0a] dark:text-[#fef08a]",
  },
  {
    name: "Priya Malhotra",
    role: "Derivatives Market Educator",
    experience: "5+ Yrs Exp",
    avatar: "/avatar_priya.png",
    specialty: "Options Concepts & Hedging",
    badgeColor: "bg-[#F3E8FF] text-[#581c87] dark:bg-[#3b1259] dark:text-[#e9d5ff]",
  },
  {
    name: "Rajesh Kumar",
    role: "Risk Management Lead",
    experience: "10+ Yrs Exp",
    avatar: "/avatar_rajesh.png",
    specialty: "Capital Protection & Psychology",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    name: "Vikram Singh",
    role: "Technical Analysis Lead",
    experience: "9+ Yrs Exp",
    avatar: "/avatar_vikram.png",
    specialty: "Smart Money Concepts & SMC",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <MinimalHero
        kicker="About Shrestha IT Academy"
        title={<>Practical Institute.<br />Built for Growth.</>}
        subtitle="Empower students with practical financial-market knowledge, price-action concepts, and structured market-analysis learning."
        ctaText="View Programs"
        ctaHref="/courses"
        tag="Our Mission & Vision"
        heading="Trusted Financial Market Education Across India"
        desc="Dedicated to building confident market learners in Equity, Forex, Crypto, and F&O derivatives concepts."
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* About Us Section */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-dark dark:text-white tracking-tight leading-tight">
              About <span className="text-[#01488B] dark:text-amber">Shrestha IT</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Shrestha IT is a leading learning institute dedicated to providing high-quality education, practical skill development, and career-oriented training programs. We focus on empowering students with industry-relevant knowledge, hands-on experience, and expert mentorship to help them succeed in today&apos;s competitive world.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our training approach combines practical learning, modern technologies, and real-world applications to enhance technical skills, confidence, and professional growth. Along with skill-based education, we also provide career guidance, personality development, and continuous support to help learners become industry-ready professionals.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission & Vision Section - 2 Large Showcase Cards */}
        <AnimatedSection className="py-6 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-navy/10 dark:border-white/10 bg-card p-6 sm:p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white overflow-hidden border border-navy/5 dark:border-white/5 mb-6 p-4 flex items-center justify-center shadow-inner">
                <Image
                  src="/our_mission_illustration.png"
                  alt="Our Mission - Shrestha IT"
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#4a152e] text-[#831843] dark:text-[#fbcfe8] text-xs font-black uppercase tracking-wider">
                  <IconTarget size={18} stroke={2.5} />
                  <span>Our Mission</span>
                </div>
                <h3 className="font-heading text-2xl font-black text-navy-dark dark:text-white tracking-tight">
                  Practical Market Knowledge & Analytical Skills
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Empower students with practical, structured financial-market education and a strong analytical foundation across Equity, Forex, Crypto, and F&O Derivatives concepts.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-navy/10 dark:border-white/10 bg-card p-6 sm:p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white overflow-hidden border border-navy/5 dark:border-white/5 mb-6 p-4 flex items-center justify-center shadow-inner">
                <Image
                  src="/our_vision_illustration.png"
                  alt="Our Vision - Shrestha IT"
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] dark:bg-[#073655] text-[#075985] dark:text-[#bae6fd] text-xs font-black uppercase tracking-wider">
                  <IconEye size={18} stroke={2.5} />
                  <span>Our Vision</span>
                </div>
                <h3 className="font-heading text-2xl font-black text-navy-dark dark:text-white tracking-tight">
                  India&apos;s Most Trusted Market Education Academy
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Become the most trusted, student-focused market-education academy across India with a proven curriculum in price-action concepts and risk-management principles.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section - Pastel Cards Style */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="text-center mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/50 dark:bg-navy/30 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-navy-dark dark:text-white">
              Numbers That Speak
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${idx === 0
                  ? "bg-[#FCE7F3] dark:bg-[#4a152e]/80 text-[#831843] dark:text-[#fbcfe8]"
                  : idx === 1
                    ? "bg-[#E0F2FE] dark:bg-[#073655]/80 text-[#075985] dark:text-[#bae6fd]"
                    : idx === 2
                      ? "bg-[#FEF9C3] dark:bg-[#423b0a]/80 text-[#713f12] dark:text-[#fef08a]"
                      : "bg-[#F3E8FF] dark:bg-[#3b1259]/80 text-[#581c87] dark:text-[#e9d5ff]"
                  }`}
              >
                <item.icon size={28} stroke={2} className="mb-3 opacity-80" />
                <div className="text-3xl sm:text-4xl font-black tracking-tight font-heading">
                  {item.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold leading-snug opacity-90">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Coverage - SIT in News */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="rounded-3xl   p-6 sm:p-8 md:p-10">
            <div className="mb-8 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full  bg-white dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Featured Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-dark dark:text-white tracking-tight">SIT in News & Press</h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">Recognized and covered by India&apos;s top financial press and media publications.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsCoverage.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between rounded-2xl border border-navy/15 dark:border-white/15 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/80 dark:from-navy-dark dark:via-navy/90 dark:to-navy overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#01488B]/40 dark:hover:border-amber/40 p-5"
                >
                  {/* Top Decorative Vintage Line/Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-[#01488B] to-amber opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4 pt-1">
                    {/* Header with White Media Box & Press Tag */}
                    <div className="flex items-center justify-between gap-2 border-b border-navy/10 dark:border-white/10 pb-3">
                      <div className="relative h-12 w-36 rounded-xl bg-white p-2 border border-slate-200/80 shadow-inner flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={item.logoImg}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-amber border border-navy/10 dark:border-white/10 shrink-0">
                        PRESS
                      </span>
                    </div>

                    {/* Headline & Body */}
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h3 className="font-heading font-black text-lg text-navy-dark dark:text-white group-hover:text-[#01488B] dark:group-hover:text-amber transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <IconArrowRight size={18} className="shrink-0 text-[#01488B] dark:text-amber opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </div>
                      <p className="text-xs font-bold text-navy/70 dark:text-amber/90 uppercase tracking-wider mb-2.5">
                        {item.tagline}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-amber/60 dark:border-amber/80 pl-2.5 py-0.5">
                        &ldquo;{item.desc}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Newspaper Read Footer */}
                  <div className="mt-5 pt-3 border-t border-navy/10 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#01488B] dark:text-amber">
                    <span className="text-[11px] font-semibold text-muted-foreground whitespace-nowrap">Official Press</span>
                    <span className="text-xs font-black tracking-wide whitespace-nowrap inline-flex items-center gap-1 text-[#01488B] dark:text-amber group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Real Campus Photo Gallery */}
        <AnimatedSection className="py-10 md:py-12">
          <PhotoGallery
            eyebrow="Inside Our Campus"
            title={
              <>
                A Look Inside <span className="text-[#01488B] dark:text-amber">Shrestha IT</span>
              </>
            }
            description="From live mentor-led trading sessions to certificate ceremonies and national media features — here's what training at our Delhi campus actually looks like."
            showCta={false}
          />
        </AnimatedSection>



        {/* Mentors Section */}
        <AnimatedSection className="py-12 md:py-16">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Expert Education Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy-dark dark:text-white">
              Learn From Experienced <span className="text-[#01488B] dark:text-amber">Market Mentors</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Get 1-on-1 mentorship, live market analysis discussions, and risk-management principles from experienced market educators.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-navy/10 dark:border-white/10 bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border-2 border-navy/10 dark:border-amber/20 shadow-md group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={mentor.avatar}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-1">
                    <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${mentor.badgeColor}`}>
                      {mentor.experience}
                    </span>
                    <h3 className="font-heading text-lg font-black text-navy-dark dark:text-white group-hover:text-[#01488B] dark:group-hover:text-amber transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-bold text-navy/70 dark:text-amber/80">
                      {mentor.role}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-navy/5 dark:border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">Specialty:</span>
                  <span className="font-bold text-navy-dark dark:text-white bg-navy-light/50 dark:bg-navy/40 px-2 py-0.5 rounded text-[11px]">
                    {mentor.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Mentorship Support Section */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-navy-light dark:bg-card p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-white dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
                  <IconAward size={14} />
                  Mentorship & Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-dark dark:text-white">
                  Market Education & Learning Support
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SIT offers personalized mentorship from a team of seven industry experts, each specializing in a different market segment. Our mentors provide practical guidance, structured learning support, and ongoing feedback to ensure that every learner gains the confidence and analytical skills needed to understand the markets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: IconTarget, label: "Market Discipline & Psychology", color: "text-[#831843] dark:text-[#fbcfe8]" },
                  { icon: IconEye, label: "Emotional Discipline Concepts", color: "text-[#075985] dark:text-[#bae6fd]" },
                  { icon: IconTrendingUp, label: "Understanding Market Risk", color: "text-[#713f12] dark:text-[#fef08a]" },
                  { icon: IconChartBar, label: "Learning Progress Review", color: "text-[#581c87] dark:text-[#e9d5ff]" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-navy/10 dark:border-white/10 shadow-sm">
                    <item.icon size={20} className={`shrink-0 ${item.color}`} />
                    <span className="text-xs font-bold text-navy-dark dark:text-white leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Exam & Certification Section */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Premium ISO Certificate Preview Frame */}
              <div className="relative group w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-navy-dark to-slate-950 p-4 border border-amber/30 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                {/* Gold Seal Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-amber animate-pulse" />
                    <span className="text-[11px] font-black tracking-wider text-amber uppercase">Official Registration</span>
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                    ISO 9001:2015
                  </span>
                </div>

                {/* Certificate Render Container */}
                <div className="relative w-full aspect-[1/1.3] rounded-2xl overflow-hidden bg-white shadow-inner border border-slate-200">
                  <iframe
                    src="https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785338618145-iso-certificate.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                    title="Shrestha Edutech ISO 9001:2015 Certificate"
                    className="w-full h-full border-0 pointer-events-none scale-105"
                  />
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <a
                      href="https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785338618145-iso-certificate.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-amber text-navy font-black text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      <span>View High Resolution PDF</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3 flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-slate-300 truncate max-w-[220px]">
                    No: UBML-QMS-0702026002
                  </span>
                  <a
                    href="https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785338618145-iso-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-black text-amber hover:underline flex items-center gap-1"
                  >
                    <span>Full Screen</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Text Info Column */}
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
                  <IconCertificate size={14} />
                  Exam & Certification
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-dark dark:text-white">
                  ISO 9001:2015 Certified Excellence
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shrestha Edutech Private Limited holds official ISO 9001:2015 Quality Management System Certification (Certificate No: <strong className="text-navy-dark dark:text-amber">UBML-QMS-0702026002</strong>) for Education and Skill Development Training.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SIT ensures that learners are future-ready by offering comprehensive exams to test their market knowledge and analytical skills. Upon successful completion, participants receive a certificate of participation recognizing their learning in equity, forex, and cryptocurrency market education.
                </p>
                <div className="p-4 rounded-2xl bg-navy/5 dark:bg-amber/10 border border-navy/10 dark:border-amber/20">
                  <p className="text-xs font-semibold text-navy dark:text-amber">
                    🎓 Best students may get offered by us to join our SIT team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section - KEEPING AS IS (user approved) */}
        <AnimatedSection className="py-10 md:py-12">
          <CategorizedFaq />
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-10 md:py-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#021838] via-[#01488B] to-[#040914] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl border border-white/10">
            {/* Ambient Gradient Glows */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#01488B]/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">


              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Start Your Market Education Journey Today
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed">
                Join our community of 250+ learners and get expert mentorship in Equity, Forex, Crypto & Derivatives market education.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-amber hover:bg-amber-light text-navy-dark text-sm font-black transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-amber/40 hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <IconArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Courses</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Footer */}
        <AnimatedSection className="py-8 border-t border-navy/10 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xs font-bold text-navy-dark dark:text-white">Email</p>
              <p className="text-xs text-muted-foreground mt-1">shresthaedutech2026@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-bold text-navy-dark dark:text-white">Phone</p>
              <p className="text-xs text-muted-foreground mt-1">+91 9236666923 / +91 7428692121</p>
            </div>
            <div>
              <p className="text-xs font-bold text-navy-dark dark:text-white">Address</p>
              <p className="text-xs text-muted-foreground mt-1">Third Floor, 167B, Metro Pillar No. 672 Uttam Nagar, Delhi, 110059</p>
            </div>
          </div>
        </AnimatedSection>

      </main>

      <ScrollToTop />
    </div>
  );
}
