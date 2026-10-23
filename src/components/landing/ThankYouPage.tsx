import { IconBrandInstagram, IconBrandWhatsapp, IconCheck, IconInfoCircle, IconPhone } from "@tabler/icons-react";
import { LandingHeader } from "./LandingHeader";
import { LandingFooter } from "./LandingFooter";
import { StickyBar } from "./StickyBar";
import { MapAndAddress } from "./CampusBlock";
import { ThankYouHeading } from "./ConversionTracker";
import { INSTAGRAM, PHONE_LABEL, PHONE_TEL } from "./constants";
import type { Course } from "./content";

const steps = [
  ["Our team calls you", "We will call you within 1 working day."],
  ["Demo class is scheduled", "We fix the day and time – Offline at Uttam Nagar or Online Live."],
  ["Attend the demo, then decide", "Meet the mentors and see how classes work before you enrol."],
];

export function ThankYouPage({ c }: { c: Course }) {
  const note = c.thankYou.note;
  const tone = note?.tone === "indigo" ? "border-indigo-200 bg-indigo-50 text-indigo-600" : "border-amber-300 bg-amber-50 text-amber-600";
  return (
    <>
      <LandingHeader waLink={c.whatsapp} />
      <main className="px-4 pb-28 pt-8 md:pb-12 md:pt-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <section className="space-y-3 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-600/30">
                <IconCheck size={30} stroke={3.5} />
              </div>
            </div>
            <ThankYouHeading source={c.source} />
            <p className="mx-auto max-w-xl text-[15px] text-slate-600 sm:text-base">
              Our team will call you within 1 working day to confirm the demo class time for the {c.thankYou.courseName} course.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0B1F3A] sm:text-xl">What happens next</h2>
            <ol className="space-y-2.5">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[#0B1F3A]">{t}</p>
                    <p className="text-sm text-slate-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {note && (
            <section className={`flex gap-3 rounded-2xl border-2 p-4 ${tone}`}>
              <IconInfoCircle className="mt-0.5 shrink-0" size={26} />
              <p className="text-[15px] text-slate-800"><strong>Please note:</strong> {note.text}</p>
            </section>
          )}

          <section className="grid gap-3 sm:grid-cols-2">
            <a href={c.whatsapp} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-center text-base font-bold text-white sm:text-lg transition hover:brightness-95">
              <IconBrandWhatsapp size={22} /> Get Details on WhatsApp
            </a>
            <a href={PHONE_TEL} className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#0B1F3A] bg-white px-4 text-base font-bold text-[#0B1F3A] transition hover:bg-slate-50 sm:text-lg">
              <IconPhone size={22} /> Call: {PHONE_LABEL}
            </a>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0B1F3A] sm:text-xl">Visit our campus</h2>
            <MapAndAddress note="Please call us to fix a time before you visit." />
          </section>

          <div className="flex flex-col items-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-[#0B1F3A]">
              <IconBrandInstagram size={20} /> Follow us on Instagram
            </a>
            <a href={`/demo/${c.slug}`} className="font-semibold text-[#0B1F3A] underline underline-offset-4">Back to the course page</a>
          </div>
        </div>
      </main>
      <LandingFooter disclaimer={c.disclaimer} waLink={c.whatsapp} />
      <StickyBar waLink={c.whatsapp} showBook={false} />
    </>
  );
}
