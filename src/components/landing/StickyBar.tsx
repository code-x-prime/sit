import { IconBrandWhatsapp, IconCalendarEvent, IconPhone } from "@tabler/icons-react";
import { PHONE_TEL } from "./constants";

const btn = "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[12px] font-semibold text-white";

export function StickyBar({ waLink, showBook = true }: { waLink: string; showBook?: boolean }) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)] md:hidden">
        <a href={PHONE_TEL} className={`${btn} bg-[#0B1F3A]`}><IconPhone size={20} />Call Now</a>
        <a href={waLink} target="_blank" rel="noreferrer" className={`${btn} bg-[#25D366]`}><IconBrandWhatsapp size={20} />WhatsApp</a>
        {showBook && <a href="#demo-form" className={`${btn} bg-[#16A34A]`}><IconCalendarEvent size={20} />Book Free Demo</a>}
      </div>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2.5 rounded-full bg-[#25D366] pl-4 pr-5 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-4 ring-white transition hover:scale-105 md:flex"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
          <IconBrandWhatsapp size={28} className="relative" />
        </span>
        Chat with us
      </a>
    </>
  );
}
