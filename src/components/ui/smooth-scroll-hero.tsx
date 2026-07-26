"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  videoSrc: string;
  videoSrcMobile?: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1200,
  videoSrc,
  videoSrcMobile,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeVideo = isMobile && videoSrcMobile ? videoSrcMobile : videoSrc;

  const clipStart = useTransform(
    scrollY,
    [0, scrollHeight],
    [initialClipPercentage, 0]
  );
  const clipEnd = useTransform(
    scrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const videoScale = useTransform(
    scrollY,
    [0, scrollHeight + 500],
    [1.7, 1]
  );

  return (
    <div
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <motion.div
        className="sticky top-0 h-screen w-full bg-black overflow-hidden"
        style={{
          clipPath,
          willChange: "transform, clip-path",
        }}
      >
        <motion.video
          key={activeVideo}
          src={activeVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            scale: videoScale,
          }}
        />
      </motion.div>
    </div>
  );
};

export default SmoothScrollHero;
