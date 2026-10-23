"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconArrowRight, IconBuildingCommunity, IconClockHour4, IconLock, IconUser, IconVideo } from "@tabler/icons-react";
import { FLAG_KEY, NAME_KEY } from "./constants";

const field =
  "h-12 w-full rounded-xl border bg-white text-base text-[#0B1F3A] placeholder:text-slate-400 outline-none transition focus:border-[#16A34A] focus:ring-4 focus:ring-[#16A34A]/15";

type Props = { id: string; thankYouPath: string; source: string; title?: string; subtitle?: string; dark?: boolean };

export function LeadForm({ id, thankYouPath, source, title, subtitle, dark = false }: Props) {
  const router = useRouter();
  const [errors, setErrors] = useState<{ name?: string; phone?: string; form?: string }>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "")
      .replace(/[\s-]/g, "")
      .replace(/^(\+91|91|0)(?=\d{10}$)/, "");
    const mode = String(fd.get("mode") || "");
    const next: typeof errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Please enter a valid 10-digit mobile number.";
    setErrors(next);
    if (next.name || next.phone) return;

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, mode, website: fd.get("website") || "", source }),
      });
      if (!res.ok) throw new Error("failed");
      try {
        sessionStorage.setItem(FLAG_KEY, "1");
        sessionStorage.setItem(NAME_KEY, name);
      } catch {}
      router.push(thankYouPath);
    } catch {
      setErrors({ form: "Could not submit. Please try again, or contact us on WhatsApp / call." });
      setLoading(false);
    }
  }

  const label = `mb-1.5 block text-sm font-semibold ${dark ? "text-white" : "text-[#0B1F3A]"}`;
  const border = (bad?: string) => (bad ? "border-red-400" : "border-slate-300");
  const modes = [
    { value: "Offline – Uttam Nagar Campus", title: "Offline", sub: "Uttam Nagar Campus", Icon: IconBuildingCommunity },
    { value: "Online Live", title: "Online", sub: "Live classes", Icon: IconVideo },
  ];

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className={`scroll-mt-24 overflow-hidden rounded-2xl sm:rounded-3xl ${
        dark ? "border border-white/15 bg-white/[0.06]" : "border border-slate-200 bg-white shadow-[0_20px_50px_-12px_rgba(11,31,58,0.35)]"
      }`}
    >
      {title && (
        <div className={`flex items-start justify-between gap-3 px-5 pb-4 pt-5 sm:px-7 sm:pt-6 ${dark ? "" : "border-b border-slate-100 bg-slate-50"}`}>
          <div className="space-y-1">
            <h2 className={`font-[family-name:var(--font-poppins)] text-lg font-bold leading-snug sm:text-2xl ${dark ? "text-white" : "text-[#0B1F3A]"}`}>{title}</h2>
            {subtitle && <p className={`text-[13px] sm:text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold text-green-700">
            <IconClockHour4 size={13} /> 1 min
          </span>
        </div>
      )}

      <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Full Name</label>
          <div className="relative">
            <IconUser size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input id={`${id}-name`} name="name" autoComplete="name" className={`${field} ${border(errors.name)} pl-10 pr-4`} placeholder="Your name" aria-invalid={!!errors.name} />
          </div>
          {errors.name && <p className="mt-1 text-sm font-medium text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={label}>Mobile Number</label>
          <div className="flex">
            <span className={`flex h-12 shrink-0 items-center rounded-l-xl border border-r-0 bg-slate-100 px-3.5 text-base font-semibold text-slate-600 ${border(errors.phone)}`}>+91</span>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={14}
              className={`${field} ${border(errors.phone)} min-w-0 rounded-l-none px-4`}
              placeholder="10-digit mobile number"
              aria-invalid={!!errors.phone}
            />
          </div>
          {errors.phone && <p className="mt-1 text-sm font-medium text-red-500">{errors.phone}</p>}
        </div>

        <fieldset>
          <legend className={label}>Preferred Mode</legend>
          <div className="grid grid-cols-2 gap-2.5">
            {modes.map(({ value, title: t, sub, Icon }, i) => (
              <label key={value} className="block cursor-pointer">
                <input type="radio" name="mode" value={value} defaultChecked={i === 0} className="peer sr-only" />
                <span className="flex h-full items-center gap-2.5 rounded-xl border border-slate-300 bg-white p-3 text-[#0B1F3A] transition peer-checked:border-[#16A34A] peer-checked:bg-green-50 peer-checked:ring-2 peer-checked:ring-[#16A34A]/25 peer-focus-visible:ring-4 peer-focus-visible:ring-[#16A34A]/30">
                  <Icon size={22} className="shrink-0 text-[#16A34A]" />
                  <span className="min-w-0 leading-tight">
                    <span className="block text-sm font-bold">{t}</span>
                    <span className="block truncate text-[12px] text-slate-500">{sub}</span>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        {errors.form && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{errors.form}</p>}

        <button
          type="submit"
          disabled={loading}
          className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-base font-bold text-white shadow-lg shadow-green-600/30 transition hover:bg-[#15803D] active:scale-[0.99] disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Book Free Demo Class"}
          {!loading && <IconArrowRight size={20} className="transition group-hover:translate-x-0.5" />}
        </button>

        <p className={`flex items-start justify-center gap-2 text-[13px] leading-snug ${dark ? "text-slate-300" : "text-slate-600"}`}>
          <IconLock size={15} className="mt-0.5 shrink-0" />
          <span>We will call you within 1 working day. Your number is safe with us.</span>
        </p>
      </div>
    </form>
  );
}
