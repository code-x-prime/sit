import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck, IconHome, IconBrandWhatsapp } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Thank You | Shrestha IT",
  description: "Your enquiry has been submitted successfully. The Shrestha IT team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-[65vh] max-w-3xl items-center justify-center px-4 py-16 sm:px-6">
      <section className="w-full rounded-3xl border border-navy/10 bg-card p-8 text-center shadow-xl dark:border-white/10 sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <IconCheck className="h-9 w-9 stroke-[3]" />
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#01488B] dark:text-amber">
          Shrestha IT Helpdesk
        </p>
        <h1 className="text-3xl font-black text-navy-dark dark:text-white sm:text-4xl">
          Thank you for reaching out!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Your enquiry has been submitted successfully. Our team will contact you shortly with course and batch details.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01488B] px-6 py-3 font-bold text-white transition hover:bg-[#01396f]"
          >
            <IconHome className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919236666923?text=Hi%20Shrestha%20IT%2C%20I%20just%20submitted%20an%20enquiry.%20Please%20help%20me%20with%20the%20next%20steps."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
          >
            <IconBrandWhatsapp className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
