"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function BackgroundBlur() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configure smooth spring physics for the follower lag effect
  const springConfig = { damping: 40, stiffness: 120, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of the glow width (30rem / 2 = 240px)
      mouseX.set(e.clientX - 240);
      mouseY.set(e.clientY - 240);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #01488a 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Static soft navy blur circles */}
      <div className="absolute -top-20 -right-20 h-[32rem] w-[32rem] rounded-full bg-[#01488a] opacity-[0.18] blur-[140px]" />
      <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#0a6fc1] opacity-[0.14] blur-[140px]" />
      <div className="absolute -bottom-32 right-1/3 h-[24rem] w-[24rem] rounded-full bg-[#01488a] opacity-[0.12] blur-[140px]" />

      {/* Dynamic mouse follower blur glow */}
      <motion.div
        className="fixed h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(1,72,138,0.18)_0%,rgba(1,72,138,0)_70%)] blur-[100px]"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
    </div>
  );
}
