"use client";

import { useEffect, useState } from "react";
import { FLAG_KEY, NAME_KEY } from "./constants";

type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

// The conversion fires only when the form-submit flag is present, and the flag is cleared right after.
// A refresh or a direct visit has no flag, so there is no duplicate or fake conversion.
// Set NEXT_PUBLIC_GADS_CONVERSION_LABEL to the Google Ads conversion label (AW-18326954298/<LABEL>).
function ConversionTracker({ onName, source }: { onName: (n: string) => void; source: string }) {
  useEffect(() => {
    try {
      const n = sessionStorage.getItem(NAME_KEY);
      if (n) onName(n);
      if (sessionStorage.getItem(FLAG_KEY) !== "1") return;
      sessionStorage.removeItem(FLAG_KEY);
    } catch {
      return;
    }
    const w = window as W;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "lead_form_submit", lead_source: source });
    const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
    if (label) {
      const fire = () => w.gtag?.("event", "conversion", { send_to: `AW-18326954298/${label}` });
      if (w.gtag) fire();
      else setTimeout(fire, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export function ThankYouHeading({ source }: { source: string }) {
  const [name, setName] = useState("");
  return (
    <>
      <ConversionTracker onName={setName} source={source} />
      <h1 className="font-[family-name:var(--font-poppins)] text-[1.6rem] font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
        {name ? `Thank you, ${name}!` : "Thank you!"}
        <span className="mt-1 block text-lg font-semibold text-slate-600 sm:text-2xl">Your demo class request has been received</span>
      </h1>
    </>
  );
}
