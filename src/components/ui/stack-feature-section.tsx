"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const logoConfigs = [
  { src: "/logos/zerodha.jpeg", alt: "Zerodha" },
  { src: "/logos/groww.png", alt: "Groww" },
  { src: "/logos/angelone.png", alt: "Angel One" },
  { src: "/logos/dhan.jpeg", alt: "Dhan" },
  { src: "/logos/trading-view.png", alt: "Trading View" },
  { src: "/logos/meta-5.png", alt: "MetaTrader 5" },
  { src: "/logos/nse-india.png", alt: "NSE India" },
  { src: "/logos/fyers.jpeg", alt: "Fyers" },
  { src: "/logos/sharekhan.jpeg", alt: "Sharekhan" },
  { src: "/logos/sensibull.png", alt: "Sensibull" },
  { src: "/logos/exness.jpeg", alt: "Exness" },
  { src: "/logos/vantage.jpeg", alt: "Vantage" },
  { src: "/logos/delta-exchange.png", alt: "Delta Exchange" },
  { src: "/logos/screener.png", alt: "Screener" },
  { src: "/logos/investopedia.png", alt: "Investopedia" },
];

interface FeatureSectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function FeatureSection({
  title = "Ready to start your market education journey?",
  description = "Join Shrestha IT today and get the guidance you need to build financial-market knowledge and confidence.",
  primaryBtnText = "Enquire Now",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Explore Programs",
  secondaryBtnHref = "/courses"
}: FeatureSectionProps) {
  const orbitCount = 3;
  const orbitGap = 7; // rem between orbits
  const iconsPerOrbit = Math.ceil(logoConfigs.length / orbitCount);

  return (
    <section className="relative max-w-7xl mx-auto my-10 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-navy/10 dark:border-white/10 bg-navy text-white overflow-hidden rounded-2xl shadow-xl">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-light/10 blur-3xl pointer-events-none" />

      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-12 md:py-0 text-center md:text-left">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-white tracking-tight">
          {title}
        </h2>
        <p className="text-white/80 mb-8 max-w-lg text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <Button>
            <Link href={primaryBtnHref}>{primaryBtnText}</Link>
          </Button>
          <Button>
            <Link href={secondaryBtnHref}>{secondaryBtnText}</Link>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-[30rem] flex items-center justify-center md:justify-start overflow-hidden">
        <div className="relative w-[35rem] h-[35rem] md:w-[45rem] md:h-[45rem] md:translate-x-[40%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-amber/60 shadow-[0_0_30px_rgba(245,184,0,0.5)] p-1 overflow-hidden z-10 animate-pulse">
            <Image
              src="/logo.jpeg"
              alt="Shrestha IT Logo"
              fill
              className="object-cover rounded-full"
              unoptimized
            />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${8 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dashed border-white/35"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${15 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {logoConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((logo, logoIdx) => {
                    const angle = logoIdx * angleStep;
                    const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                    const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                    return (
                      <div
                        key={logoIdx}
                        className="absolute bg-white dark:bg-card border border-white/20 rounded-full shadow-md hover:scale-110 transition duration-300 overflow-hidden flex items-center justify-center"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          width: "2.25rem",
                          height: "2.25rem",
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={36}
                          height={36}
                          className="w-full h-full object-contain p-0.5"
                          unoptimized
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
