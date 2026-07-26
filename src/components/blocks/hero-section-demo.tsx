"use client";

import { HeroSection } from "@/components/blocks/hero-section";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "Practical trading education",
        action: {
          text: "Explore courses",
          href: "/courses",
        },
      }}
      title={
        <span className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-[0.25em] gap-y-1">
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent whitespace-nowrap">
            Master the markets with
          </span>
          <span className="relative inline-flex h-[1.25em] w-[140px] sm:w-[220px] md:w-[340px] items-center justify-start overflow-visible">
            <GooeyText
              texts={["clarity", "confidence", "precision", "success"]}
              morphTime={1.5}
              cooldownTime={0.5}
              className="w-full h-full"
              textClassName="font-semibold text-[#01488B] text-3xl sm:text-5xl md:text-7xl whitespace-nowrap"
            />
          </span>
        </span>
      }
      description="Join Shrestha IT for hands-on trading programs in equity, forex, crypto, and derivatives. Learn from mentors, trade with confidence."
      actions={[
        {
          text: "Browse Courses",
          href: "/courses",
          variant: "default",
          icon: <ArrowRight className="h-5 w-5" />,
        },
      ]}
      video={{
        src: "https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785052780059-desktop.mp4",
        srcMobile: "https://pub-ea068395076f48558e674cdcaf6fd536.r2.dev/learning/general/1785052804709-mobile.mp4",
      }}
    />
  );
}
