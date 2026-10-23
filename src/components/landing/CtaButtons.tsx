import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { PHONE_LABEL, PHONE_TEL } from "./constants";

export function CtaButtons({ waLink, dark = false }: { waLink: string; dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <a href={waLink} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-center font-semibold text-white transition hover:brightness-95">
        <IconBrandWhatsapp size={20} /> Chat on WhatsApp
      </a>
      <a href={PHONE_TEL} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 font-semibold transition ${dark ? "border-white/35 text-white hover:bg-white/10" : "border-slate-300 bg-white text-[#0B1F3A] hover:border-[#0B1F3A]"}`}>
        <IconPhone size={20} /> Call: {PHONE_LABEL}
      </a>
    </div>
  );
}
