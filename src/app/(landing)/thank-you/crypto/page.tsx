import type { Metadata } from "next";
import { ThankYouPage } from "@/components/landing/ThankYouPage";
import { CRYPTO } from "@/components/landing/content";

export const metadata: Metadata = {
  title: "Thank You | Shrestha IT",
  description: "Your demo class request has been received.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouPage c={CRYPTO} />;
}
