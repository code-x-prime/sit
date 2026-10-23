import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} min-h-screen overflow-x-hidden bg-white text-base leading-relaxed text-[#0B1F3A] [font-family:var(--font-inter),system-ui,sans-serif] [scroll-behavior:smooth]`}
    >
      {children}
    </div>
  );
}
