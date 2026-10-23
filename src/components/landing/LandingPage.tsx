import Image from "next/image";
import {
  IconAlertTriangle,
  IconBrandWhatsapp,
  IconBuildingCommunity,
  IconCalendarEvent,
  IconChartCandle,
  IconCheck,
  IconCurrencyRupee,
  IconDeviceLaptop,
  IconMapPin,
  IconMessages,
  IconPhone,
  IconPlus,
  IconQuote,
  IconSchool,
  IconShieldLock,
  IconStack2,
  IconStarFilled,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";
import { LandingHeader } from "./LandingHeader";
import { LandingFooter } from "./LandingFooter";
import { StickyBar } from "./StickyBar";
import { LeadForm } from "./LeadForm";
import { CtaButtons } from "./CtaButtons";
import { MapAndAddress } from "./CampusBlock";
import { GOOGLE_REVIEWS_LINK, PHONE_TEL } from "./constants";
import type { Course } from "./content";

const head = "font-[family-name:var(--font-poppins)] font-bold text-[#0B1F3A]";
const wrap = "mx-auto max-w-6xl";
const sec = "px-4 py-10 sm:py-14";

const campusPhotos = [
  { src: "/gallery/classroom-session-1.jpg", alt: "Shrestha IT classroom session" },
  { src: "/gallery/classroom-discussion.jpg", alt: "Classroom discussion at the Uttam Nagar campus" },
  { src: "/gallery/mentor-teaching.jpg", alt: "Mentor-led class at Shrestha IT" },
  { src: "/gallery/certificate-group-2.jpg", alt: "Students with course certificates at Shrestha IT" },
  { src: "/gallery/office-team.jpg", alt: "Shrestha IT campus team" },
];

const audienceIcons = [IconSchool, IconUsers, IconStack2, IconDeviceLaptop];

function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-6 max-w-2xl space-y-2 sm:mb-8 ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#16A34A]">{eyebrow}</p>
      <h2 className={`${head} text-[1.4rem] leading-snug sm:text-3xl`}>{title}</h2>
      {sub && <p className="text-[15px] text-slate-600 sm:text-base">{sub}</p>}
    </div>
  );
}

function renderH1(text: string, highlight: string) {
  const i = text.indexOf(highlight);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-[#4ADE80]">{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

export function LandingPage({ c }: { c: Course }) {
  const formProps = { thankYouPath: c.thankYouPath, source: c.source };
  const details: [React.ElementType, string, string][] = [
    [IconCalendarEvent, "Duration", "2 Months (4 Levels)"],
    [IconBuildingCommunity, "Mode", c.mode],
    [IconCalendarEvent, "Next batch & timings", "WhatsApp us for the latest batch dates and timings"],
    [IconDeviceLaptop, "Requirement", c.requirement],
  ];

  return (
    <>
      <LandingHeader waLink={c.whatsapp} />
      <main className="pb-16 md:pb-0">
        {/* HERO */}
        <section
          className="relative bg-[#0B1F3A] px-4 pb-20 pt-7 text-white sm:pt-12 sm:pb-24"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        >
          <div className={`${wrap} grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center`}>
            <div className="space-y-4 sm:space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#4ADE80]" /> Offline (Uttam Nagar) + Online Live Classes
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-[1.65rem] font-bold leading-[1.2] sm:text-4xl lg:text-[2.6rem]">{renderH1(c.h1, c.h1Highlight)}</h1>
              <p className="max-w-xl text-[15px] text-slate-300 sm:text-base">{c.sub}</p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {c.ticks.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16A34A]"><IconCheck size={14} stroke={3.5} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <LeadForm id="demo-form" title="Book Your Free Demo Class" subtitle="Attend a demo first, then decide." {...formProps} />
              <CtaButtons waLink={c.whatsapp} dark />
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="relative z-10 -mt-10 px-4">
          <div className={`${wrap} grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl lg:grid-cols-4`}>
            {[
              [IconCalendarEvent, "2 Months", "Course duration"],
              [IconStack2, "4 Levels", "Basics to advanced"],
              [IconVideo, "Offline + Online", "Recordings included"],
              [IconMapPin, "Uttam Nagar", "Opp. Metro Pillar 672"],
            ].map(([Icon, big, small]) => {
              const I = Icon as React.ElementType;
              return (
                <div key={big as string} className="flex items-center gap-3 bg-white p-3 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16A34A]"><I size={20} /></span>
                  <div className="min-w-0 leading-tight">
                    <p className="text-[15px] font-bold text-[#0B1F3A] sm:text-base">{big as string}</p>
                    <p className="text-[12px] text-slate-500 sm:text-[13px]">{small as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CURRICULUM */}
        <section className={sec}>
          <div className={wrap}>
            <SectionHead eyebrow="Curriculum" title="What You Will Learn" sub="Four structured levels that take you step by step from the fundamentals to live market analysis." />
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {c.levels.map((l, i) => (
                <div key={l.name} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 sm:rounded-3xl sm:p-6 hover:shadow-xl">
                  <span className="absolute right-4 top-2 font-[family-name:var(--font-poppins)] text-5xl font-extrabold text-slate-100">0{i + 1}</span>
                  <p className="relative text-xs font-bold uppercase tracking-widest text-[#16A34A]">Level {i + 1}</p>
                  <h3 className={`${head} relative mb-3 mt-0.5 text-lg sm:text-xl`}>{l.name}</h3>
                  <ul className="relative space-y-2.5 text-[15px] text-slate-700">
                    {l.points.map((p) => (
                      <li key={p} className="flex gap-2.5"><IconCheck className="mt-1 shrink-0 text-[#16A34A]" size={16} stroke={3} />{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.chips.map((x) => (
                <span key={x} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[13px] font-medium text-[#0B1F3A] sm:px-4 sm:py-2 sm:text-sm">{x}</span>
              ))}
            </div>
          </div>
        </section>

        {/* NOTICE (crypto scams / RBI) */}
        {c.notice && c.notice.tone === "indigo" && (
          <section className="px-4 pb-10 sm:pb-14">
            <div className={`${wrap} flex gap-3 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4 sm:gap-4 sm:rounded-3xl sm:p-7`}>
              <IconShieldLock className="mt-0.5 shrink-0 text-indigo-600" size={30} />
              <div>
                <h2 className={`${head} mb-1 text-xl sm:text-2xl`}>{c.notice.title}</h2>
                <p className="text-[15px] text-slate-700 sm:text-base">{c.notice.text}</p>
              </div>
            </div>
          </section>
        )}

        {/* AUDIENCE */}
        <section className={`${sec} bg-slate-50`}>
          <div className={`${wrap} grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12`}>
            <div className="space-y-5">
              <SectionHead eyebrow="Who it is for" title="Who Is This Course For?" sub="Built for people starting from zero as well as learners who want a structured, mentor-led approach." />
              <div className="flex items-center gap-4 rounded-2xl bg-[#0B1F3A] p-4 text-white sm:p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#16A34A]"><IconCheck size={24} stroke={3.5} /></span>
                <p className="font-semibold leading-snug">{c.audienceNote}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {c.audience.map((a, i) => {
                const I = audienceIcons[i % audienceIcons.length];
                return (
                  <div key={a} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#16A34A]/40 hover:shadow-md sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16A34A]"><I size={24} /></span>
                    <p className="font-semibold leading-snug text-[#0B1F3A]">{a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COURSE DETAILS */}
        <section className={sec}>
          <div className={wrap}>
            <SectionHead eyebrow="Course details" title="Fees, Mode & Batch" />
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <dl className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:rounded-3xl">
                {details.map(([Icon, k, v]) => {
                  const I = Icon;
                  return (
                    <div key={k} className="flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16A34A]"><I size={20} /></span>
                      <div>
                        <dt className="text-sm font-semibold text-slate-500">{k}</dt>
                        <dd className="font-semibold text-[#0B1F3A]">{v}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#0B1F3A] p-5 sm:rounded-3xl sm:p-7 text-white">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-300"><IconCurrencyRupee size={18} />Course fee</p>
                  <p className="mt-1 font-[family-name:var(--font-poppins)] text-4xl font-extrabold sm:text-5xl">{c.fee}</p>
                  <p className="mt-2 inline-block rounded-full bg-[#16A34A] px-3 py-1 text-sm font-semibold">{c.feeNote}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5 text-[15px]">
                    {["Offline + Online Live classes", "Recorded session access", "1-on-1 mentor doubt support"].map((t) => (
                      <li key={t} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A]"><IconCheck size={12} stroke={3.5} /></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {c.bundles && <p className="mt-4 rounded-xl bg-white/10 px-3 py-2 text-[13px] text-slate-200">Bundles: {c.bundles}</p>}
                </div>
                <a href={c.whatsapp} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-center font-bold text-white transition hover:brightness-95">
                  <IconBrandWhatsapp size={20} /> Get Fees & Batch Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NOTICE (RBI) */}
        {c.notice && c.notice.tone === "amber" && (
          <section className="px-4 pb-10 sm:pb-14">
            <div className="mx-auto flex max-w-4xl gap-3 rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 sm:gap-4 sm:rounded-3xl sm:p-7">
              <IconAlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={30} />
              <div>
                <h2 className={`${head} mb-1 text-xl`}>{c.notice.title}</h2>
                <p className="text-[15px] text-slate-800">{c.notice.text}</p>
              </div>
            </div>
          </section>
        )}

        {/* CAMPUS */}
        <section className={`${sec} bg-slate-50`}>
          <div className={wrap}>
            <SectionHead eyebrow="Campus" title="Our Uttam Nagar Campus – See It For Yourself" />
            <div className="mb-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {campusPhotos.map((p, i) => (
                <Image
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className={`w-full rounded-2xl object-cover ${i === 0 ? "col-span-2 aspect-video sm:row-span-2 sm:aspect-auto sm:h-full" : "aspect-4/3"}`}
                />
              ))}
            </div>
            <MapAndAddress note="Please call or WhatsApp us to fix a time before visiting the campus." />
          </div>
        </section>

        {/* MENTOR */}
        <section className={sec}>
          <div className={`${wrap} overflow-hidden rounded-3xl bg-[#0B1F3A] text-white shadow-xl`}>
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-64 sm:h-80 md:h-auto md:min-h-[26rem]">
                <Image
                  src="/gallery/mentor-teaching.jpg"
                  alt="Sagar Shrestha teaching a class at Shrestha IT"
                  fill
                  loading="lazy"
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover object-[30%_35%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent md:hidden" />
              </div>
              <div className="space-y-4 p-6 sm:p-8 md:space-y-5 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4ADE80]">Your mentor</p>
                <div>
                  <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold sm:text-3xl">Sagar Shrestha</h2>
                  <p className="mt-1 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">Director & Mentor, Shrestha IT</p>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-300">
                  Sagar Shrestha is the Director and a mentor at Shrestha IT. In class he explains market concepts step by step on practical charts.
                </p>
                <ul className="space-y-3 border-t border-white/15 pt-5">
                  {[
                    [IconUsers, "Mentor-led discussion in every class"],
                    [IconMessages, "1-on-1 doubt support"],
                    [IconChartCandle, "Concepts explained on practical charts"],
                  ].map(([Icon, t]) => {
                    const I = Icon as React.ElementType;
                    return (
                      <li key={t as string} className="flex items-center gap-3 text-[15px] font-medium">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#16A34A]/20 text-[#4ADE80]"><I size={18} /></span>
                        {t as string}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className={`${sec} bg-slate-50`}>
          <div className={wrap}>
            <SectionHead eyebrow="Student reviews" title="What Our Students Say About Learning Here" center />
            <div className={`grid gap-3 sm:gap-5 ${c.reviews.length === 1 ? "mx-auto max-w-xl" : c.reviews.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
              {c.reviews.map((r) => (
                <figure key={r.name} className="relative flex flex-col rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <IconQuote className="mb-2 text-[#16A34A]/30" size={28} />
                  <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-700">{r.text}</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <Image src={r.photo} alt={r.name} width={44} height={44} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                    <div className="leading-tight">
                      <p className="font-bold text-[#0B1F3A]">{r.name}</p>
                      <p className="text-[13px] text-slate-500">{r.tag}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            {GOOGLE_REVIEWS_LINK && (
              <div className="mt-6 text-center">
                <a href={GOOGLE_REVIEWS_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#0B1F3A] bg-white px-6 font-semibold text-[#0B1F3A]">
                  <IconStarFilled size={18} className="text-amber-500" /> See our Google Reviews
                </a>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className={`${sec} bg-slate-50`}>
          <div className={`${wrap} grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12`}>
            <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" sub="Quick answers to what students ask us most." />
              <div className="space-y-3 rounded-2xl bg-[#0B1F3A] p-5 text-white">
                <p className="font-semibold">Still have a question?</p>
                <p className="text-sm text-slate-300">Talk to our team – we reply on WhatsApp and phone.</p>
                <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={c.whatsapp} target="_blank" rel="noreferrer" className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white transition hover:brightness-95">
                    <IconBrandWhatsapp size={18} /> WhatsApp
                  </a>
                  <a href={PHONE_TEL} className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 px-4 text-sm font-bold text-white transition hover:bg-white/10">
                    <IconPhone size={18} /> Call
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {c.faqs.map(([q, a], i) => (
                <details key={q} open={i === 0} className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition open:border-[#16A34A]/40 open:shadow-md">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 p-4 marker:hidden sm:gap-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500 transition group-open:bg-[#16A34A] group-open:text-white">{i + 1}</span>
                    <span className="flex-1 font-semibold leading-snug text-[#0B1F3A]">{q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-[#16A34A] transition group-open:rotate-45 group-open:bg-[#16A34A] group-open:text-white"><IconPlus size={18} /></span>
                  </summary>
                  <p className="border-t border-slate-100 px-4 pb-4 pt-3 text-[15px] leading-relaxed text-slate-600 sm:px-5 sm:pb-5 sm:pl-[4.25rem]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="bg-[#0B1F3A] px-4 py-10 text-white sm:py-14"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        >
          <div className="mx-auto max-w-xl space-y-5">
            <div className="space-y-1.5 text-center">
              <h2 className="font-[family-name:var(--font-poppins)] text-[1.4rem] font-bold leading-snug sm:text-3xl">Attend a Demo Class First, Then Decide</h2>
              <p className="text-[15px] text-slate-300">Meet the mentors, see the classroom and get your questions answered.</p>
            </div>
            <LeadForm id="demo-form-final" dark {...formProps} />
            <CtaButtons waLink={c.whatsapp} dark />
          </div>
        </section>
      </main>
      <LandingFooter disclaimer={c.disclaimer} waLink={c.whatsapp} />
      <StickyBar waLink={c.whatsapp} />
    </>
  );
}
