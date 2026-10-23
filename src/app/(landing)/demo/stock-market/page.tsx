import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { STOCK } from "@/components/landing/content";

export const metadata: Metadata = {
  title: STOCK.meta.title,
  description: STOCK.meta.description,
  alternates: { canonical: "https://shresthait.com/demo/stock-market" },
};

export default function Page() {
  return <LandingPage c={STOCK} />;
}
