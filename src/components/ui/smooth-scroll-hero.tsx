"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  videoSrc: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1200,
  videoSrc,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const { scrollY } = useScroll();

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
          src={videoSrc}
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
