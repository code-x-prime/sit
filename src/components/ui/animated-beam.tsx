"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type RefObject, forwardRef, useEffect, useId, useState } from "react";
import Image from "next/image";

export const TradingIcons = {
  equity: () => (
    <Image src="/svg/indian-equity.svg" alt="Indian Equity" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  derivatives: () => (
    <Image src="/svg/f&o-derivatives.svg" alt="F&O Derivatives" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  forex: () => (
    <Image src="/svg/forex-markets.svg" alt="Forex Markets" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  crypto: () => (
    <Image src="/svg/crypto-assets.svg" alt="Crypto Assets" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  wealth: () => (
    <Image src="/svg/wealth-setup.svg" alt="Wealth Setup" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  mentorship: () => (
    <Image src="/svg/mentorship.svg" alt="Mentorship" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" unoptimized />
  ),
  hub: () => (
    <Image
      src="/logo.jpeg"
      alt="Shrestha IT Logo"
      fill
      className="object-cover rounded-full"
      unoptimized
    />
  ),
};

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 2,
  delay = 0,
  pathColor = "rgba(148, 163, 184, 0.45)",
  pathWidth = 2.5,
  pathOpacity = 0.9,
  gradientStartColor = "#01488B",
  gradientStopColor = "#38BDF8",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = true,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : "none";

  const gradientCoordinates = reverse
    ? {
        x1: ["100%", "-20%"],
        x2: ["120%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["-20%", "100%"],
        x2: ["0%", "120%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Crisp Base Dashed Line */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      {/* Fast Animated Beam Motion Path */}
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth * 1.4,
          strokeOpacity: 0.9,
        }}
        animate={{
          strokeWidth: pathWidth * 1.6,
          strokeOpacity: 1,
        }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor} stopOpacity="1"></stop>
          <stop offset="50%" stopColor={gradientStopColor} stopOpacity="1"></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
AnimatedBeam.displayName = "AnimatedBeam";

export const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-2.5 sm:p-4 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-sky-500 hover:shadow-lg",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = "Circle";
