import Image from "next/image";
import { IconBrandInstagram, IconBrandWhatsapp, IconInfoCircle, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { ADDRESS, EMAIL, INSTAGRAM, PHONE_LABEL, PHONE_TEL } from "./constants";

const contactItem = "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition hover:border-white/25 hover:bg-white/[0.07]";
const iconTile = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#16A34A]/20 text-[#4ADE80]";

export function LandingFooter({ disclaimer, waLink }: { disclaimer: string; waLink: string }) {
  const [label, ...rest] = disclaimer.split(": ");
  const body = rest.join(": ");
  return (
    <footer className="bg-[#081628] px-4 pb-24 pt-10 text-white sm:pt-14 md:pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:gap-14">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3.5">
              <Image src="/logo.jpeg" alt="Shrestha IT logo" width={64} height={64} loading="lazy" className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/20" />
              <div className="leading-tight">
                <p className="font-[family-name:var(--font-poppins)] text-2xl font-bold">Shrestha IT</p>
                <p className="text-sm text-slate-400">Market Education Institute</p>
              </div>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-slate-300">
              Practical financial-market education – offline at our Uttam Nagar campus in Delhi, and online live.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white transition hover:brightness-95">
                <IconBrandWhatsapp size={18} /> WhatsApp us
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-slate-200 transition hover:border-white/50 hover:text-white">
                <IconBrandInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Contact us</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={PHONE_TEL} className={contactItem}>
                <span className={iconTile}><IconPhone size={20} /></span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-[12px] text-slate-400">Call / WhatsApp</span>
                  <span className="block text-[15px] font-semibold">{PHONE_LABEL}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className={contactItem}>
                <span className={iconTile}><IconMail size={20} /></span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-[12px] text-slate-400">Email</span>
                  <span className="block break-words text-[15px] font-semibold">{EMAIL}</span>
                </span>
              </a>
              <div className={`${contactItem} sm:col-span-2`}>
                <span className={iconTile}><IconMapPin size={20} /></span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-[12px] text-slate-400">Campus address</span>
                  <span className="mt-0.5 block text-[15px] font-semibold leading-snug">{ADDRESS}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex gap-3 rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4 sm:gap-4 sm:p-5">
          <IconInfoCircle size={24} className="mt-0.5 shrink-0 text-amber-300" />
          <p className="text-sm leading-relaxed text-slate-200 sm:text-[15px]">
            <strong className="text-amber-200">{body ? `${label}: ` : ""}</strong>
            {body || disclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Shrestha IT. All rights reserved.</p>
          <div className="flex gap-5 font-medium text-slate-200">
            <a href="https://www.shresthait.com/privacy" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="https://www.shresthait.com/terms" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
