import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { CRYPTO } from "@/components/landing/content";

export const metadata: Metadata = {
  title: CRYPTO.meta.title,
  description: CRYPTO.meta.description,
  alternates: { canonical: "https://shresthait.com/demo/crypto" },
};

export default function Page() {
  return <LandingPage c={CRYPTO} />;
}
