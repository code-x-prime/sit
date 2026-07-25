"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import Link from "next/link";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: React.ReactNode;
  description: string;
  actions: HeroAction[];
  video?: {
    src: string;
    poster?: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  video,
}: HeroProps) {
  return (
    <section className="relative w-full">
      {/* Hero Content - normal section */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 sm:gap-4 text-center px-4 pt-20 sm:pt-30 pb-2">
        {/* Badge */}
        {badge && (
          <Badge variant="outline" className="animate-appear gap-2">
            <span className="text-muted-foreground">{badge.text}</span>
            <Link href={badge.action.href} className="flex items-center gap-1">
              {badge.action.text}
              <ArrowRightIcon className="h-3 w-3" />
            </Link>
          </Badge>
        )}

        {/* Title */}
        <h1 className="relative z-10 flex flex-wrap sm:flex-nowrap items-center justify-center animate-appear text-2xl font-semibold leading-tight text-foreground drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground delay-100 px-2">
          {description}
        </p>

        {/* Actions */}
        <div className="relative z-10 flex w-full animate-appear flex-col justify-center gap-3 delay-300 sm:flex-row sm:gap-4 px-4 sm:px-0">
          {actions.map((action, index) => (
            <Button key={index} variant={action.variant} className="w-full sm:w-auto">
              <Link href={action.href} className="flex items-center justify-center gap-2 w-full">
                {action.icon}
                {action.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Video - SmoothScrollHero clip-path expand */}
      <SmoothScrollHero
        scrollHeight={800}
        videoSrc={video?.src || "/hero-video.mp4"}
        initialClipPercentage={10}
        finalClipPercentage={90}
      />
    </section>
  );
}

export default HeroSection;
