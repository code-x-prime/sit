import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  IconCheck,
  IconClock,
  IconCurrencyRupee,
  IconDeviceLaptop,
  IconMapPin,
  IconBrandWhatsapp,
  IconArrowRight,
  IconBriefcase,
  IconTool,
  IconListCheck,
  IconUsers,
  IconClipboardList,
} from "@tabler/icons-react";

import { COURSES } from "@/lib/courses-data";
import { getCourseContent } from "@/lib/course-content";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CategorizedFaq } from "@/components/ui/faq-categorized";
import { CourseContentAccordion } from "@/components/ui/course-content-accordion";
import { StickyEnrollBar } from "@/components/StickyEnrollBar";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.id === slug);
  const content = getCourseContent(slug);

  if (!course || !content) {
    return { title: "Course Not Found | Shrestha IT" };
  }

  const url = `https://shresthait.com/courses/${slug}`;

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url,
      siteName: "Shrestha IT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.id === slug);
  const content = getCourseContent(slug);

  if (!course || !content) {
    notFound();
  }

  const whatsappMsg = `Hi Shrestha IT, I want to enroll in the ${course.title} (₹${course.offlinePrice}, ${course.duration}, ${course.levels}). Please share admission & batch details for Online/Offline.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: content.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Shrestha IT",
      sameAs: "https://shresthait.com",
    },
    offers: {
      "@type": "Offer",
      price: course.offlinePrice.replace(/,/g, ""),
      priceCurrency: "INR",
      category: "Trading Education",
    },
    hasCourseInstance: [
      { "@type": "CourseInstance", courseMode: "Onsite", courseWorkload: course.duration },
      { "@type": "CourseInstance", courseMode: "Online", courseWorkload: course.duration },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="w-full">
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className={`relative w-full overflow-hidden bg-gradient-to-br ${course.gradientHeader} px-4 py-14 sm:py-20`}>
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-overlay pointer-events-none"
        />
        <div className="mx-auto max-w-5xl relative z-10">
          <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span className="text-white">{course.shortTitle}</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20">
              {course.categoryName}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white border border-white/20">
              <IconClock className="size-3.5" />
              {course.duration}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            {course.title}
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">{content.heroTagline}</p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-navy-dark shadow-lg transition hover:scale-[1.02]"
            >
              <IconBrandWhatsapp className="size-5 text-emerald-600" />
              Enroll on WhatsApp
            </a>
            <div className="flex items-center gap-1.5 text-white font-black text-2xl">
              <IconCurrencyRupee className="size-5" />
              {course.offlinePrice}
              <span className="ml-2 text-xs font-semibold text-white/70">{course.discount}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl space-y-6 px-4 pt-10 pb-28 sm:pt-14 sm:pb-32">
        {/* Full-width course banner */}
        <AnimatedSection>
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden border border-navy/10 dark:border-white/10 shadow-lg">
            <Image
              src={course.wideImage}
              alt={course.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${course.gradientHeader} opacity-30`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white border border-white/20 mb-2">
                {course.categoryName}
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight max-w-2xl">
                {content.heroTagline}
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 mb-6">
              <div className="flex items-center gap-2 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3">
                <IconMapPin className="size-5 text-[#01488B] dark:text-amber shrink-0" />
                <div>
                  <p className="text-xs font-bold text-muted-foreground">Levels</p>
                  <p className="text-sm font-semibold text-navy-dark dark:text-white">{course.levels}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3">
                <IconDeviceLaptop className="size-5 text-[#01488B] dark:text-amber shrink-0" />
                <div>
                  <p className="text-xs font-bold text-muted-foreground">Mode</p>
                  <p className="text-sm font-semibold text-navy-dark dark:text-white">Offline Campus &amp; Online Live</p>
                </div>
              </div>
            </div>
            <SectionKicker>Overview</SectionKicker>
            <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white mb-3">Course Overview</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{content.overview}</p>
          </div>
        </AnimatedSection>

        {/* Who Is This For — with campus photo */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Fit Check</SectionKicker>
            <div className="flex items-center gap-2 mb-5">
              <IconUsers className="size-6 text-[#01488B] dark:text-amber" />
              <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white">Who Is This Course For</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_240px] items-start">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {content.whoIsThisFor.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3.5">
                    <IconCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="relative hidden lg:block h-full min-h-[200px] rounded-2xl overflow-hidden border border-navy/10 dark:border-white/10">
                <Image
                  src={course.fitCheckImage}
                  alt={course.fitCheckImageAlt}
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Prerequisites */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Before You Start</SectionKicker>
            <div className="flex items-center gap-2 mb-5">
              <IconClipboardList className="size-6 text-[#01488B] dark:text-amber" />
              <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white">Prerequisites</h2>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {content.prerequisites.map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3.5">
                  <IconCheck className="size-4 text-[#01488B] dark:text-amber shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Topics you will learn */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Curriculum</SectionKicker>
            <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white mb-1">Topics You Will Learn</h2>
            <p className="text-sm text-muted-foreground mb-5">Including but not limited to:</p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {content.topics.map((topic) => (
                <div key={topic} className="flex items-start gap-2.5 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3.5">
                  <IconCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 leading-snug">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tools */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Toolkit</SectionKicker>
            <div className="flex items-center gap-2 mb-5">
              <IconTool className="size-6 text-[#01488B] dark:text-amber" />
              <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white">What Tools Will You Learn</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {content.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-navy-dark dark:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Course Content / Duration — with live classroom photo */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Syllabus Breakdown</SectionKicker>
            <div className="flex items-center gap-2 mb-1">
              <IconListCheck className="size-6 text-[#01488B] dark:text-amber" />
              <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white">Course Content</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5">Tap a module to see what it covers.</p>

            <div className="relative w-full h-[160px] sm:h-[200px] rounded-2xl overflow-hidden border border-navy/10 dark:border-white/10 mb-5">
              <Image
                src={course.classroomImage}
                alt={course.classroomImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <CourseContentAccordion items={content.courseContent} />
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <IconClock className="size-4" />
              Total Duration: {course.duration} across {course.levels}
            </p>
          </div>
        </AnimatedSection>

        {/* Course Mode */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>Flexibility</SectionKicker>
            <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white mb-5">Course Mode</h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {content.courseMode.map((mode) => (
                <div key={mode} className="flex items-center gap-2.5 rounded-xl border border-navy/10 dark:border-white/10 bg-background/60 p-3.5">
                  <IconCheck className="size-4 text-[#01488B] dark:text-amber shrink-0" />
                  <span className="text-sm font-semibold text-navy-dark dark:text-white">{mode}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Career Opportunities — with certificate photo */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8">
            <SectionKicker>What&apos;s Next</SectionKicker>
            <div className="flex items-center gap-2 mb-5">
              <IconBriefcase className="size-6 text-[#01488B] dark:text-amber" />
              <h2 className="font-heading text-2xl font-extrabold text-navy-dark dark:text-white">
                Career Opportunities After Completing
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[240px_1fr] items-start">
              <div className="relative hidden lg:block h-full min-h-[220px] rounded-2xl overflow-hidden border border-navy/10 dark:border-white/10">
                <Image
                  src={course.careerImage}
                  alt={course.careerImageAlt}
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.careerOpportunities.map((career) => (
                  <div
                    key={career.title}
                    className="rounded-xl bg-gradient-to-br from-[#01488B] to-[#0A2540] p-4 text-white"
                  >
                    <p className="text-sm font-bold mb-1">{career.title}</p>
                    <p className="text-xs text-white/80 leading-relaxed">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection>
          <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-2 sm:p-4">
            <CategorizedFaq
              subhead="Have Questions?"
              title="Frequently Asked Questions"
              categories={[{ id: course.id, label: course.shortTitle, items: content.faqs }]}
            />
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection>
          <div className={`rounded-3xl bg-gradient-to-br ${course.gradientHeader} p-8 sm:p-10 text-center text-white shadow-2xl`}>
            <h2 className="font-heading text-2xl sm:text-3xl font-black mb-2">Ready to Start {course.shortTitle}?</h2>
            <p className="text-sm sm:text-base text-white/85 mb-6">
              ₹{course.offlinePrice} • {course.discount}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-navy-dark shadow-lg transition hover:scale-[1.02]"
              >
                <IconBrandWhatsapp className="size-5 text-emerald-600" />
                Enroll on WhatsApp
              </a>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View All Courses
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <StickyEnrollBar
        whatsappMsg={whatsappMsg}
        price={course.offlinePrice}
        shortTitle={course.shortTitle}
      />
    </div>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-widest text-[#01488B] dark:text-amber">
      {children}
    </span>
  );
}
