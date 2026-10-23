import Image from "next/image";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { PHONE_TEL } from "./constants";

export function LandingHeader({ waLink }: { waLink: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-3 sm:h-20 sm:px-4">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <Image
            src="/logo.jpeg"
            alt="Shrestha IT logo"
            width={64}
            height={64}
            priority
            className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-slate-200 sm:h-14 sm:w-14 sm:rounded-2xl"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate font-[family-name:var(--font-poppins)] text-[17px] font-bold text-[#0B1F3A] sm:text-xl">Shrestha IT</p>
            <p className="truncate text-[11px] font-medium text-slate-500 sm:text-[13px]">
              <span className="sm:hidden">Market Education · Delhi</span>
              <span className="hidden sm:inline">Market Education · Uttam Nagar, Delhi</span>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={PHONE_TEL} aria-label="Call Shrestha IT" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-[#0B1F3A] transition hover:border-[#0B1F3A] sm:h-12 sm:w-auto sm:gap-2 sm:px-5">
            <IconPhone size={20} />
            <span className="hidden text-sm font-semibold sm:inline">Call</span>
          </a>
          <a href={waLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white transition hover:brightness-95 sm:h-12 sm:w-auto sm:gap-2 sm:px-5">
            <IconBrandWhatsapp size={22} />
            <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
