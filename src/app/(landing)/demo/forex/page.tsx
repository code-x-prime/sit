import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { FOREX } from "@/components/landing/content";

export const metadata: Metadata = {
  title: FOREX.meta.title,
  description: FOREX.meta.description,
  alternates: { canonical: "https://shresthait.com/demo/forex" },
};

export default function Page() {
  return <LandingPage c={FOREX} />;
}
