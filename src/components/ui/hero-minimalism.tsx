"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export interface MinimalHeroProps {
  kicker?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  tag?: string;
  heading?: string;
  desc?: string;
}

export function MinimalHero({
  kicker = "Shrestha IT Academy",
  title = <>Learn fast.<br />Understand markets.</>,
  subtitle = "Practical stock market & financial-market education focused on clarity, risk-management principles, and structured learning.",
  ctaText = "Explore Programs",
  ctaHref = "/courses",
  tag = "Designed for Practical Learners",
  heading = "Structured Curriculum. Guided Learning.",
  desc = "Study Indian Equity, F&O, Forex & Crypto concepts with mentored live market-analysis sessions and structured price-action learning.",
}: MinimalHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    setSize();

    type Particle = {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.max(25, Math.floor((canvas.width * canvas.height) / 8000));

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={containerRef} className="minimal-root relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col justify-between overflow-hidden bg-[#040914] text-white">
      <style>{`
.minimal-root, .minimal-root * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.minimal-root {
  --bg: #040914;
  --fg: #ffffff;
  --muted: #94a3b8;
  --border: rgba(255, 255, 255, 0.12);
  --accent: #38bdf8;
}

/* top bar */
.hero-topbar {
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  position: relative;
  z-index: 20;
}
.hero-brand {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
}
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--fg);
  border: 1px solid var(--border);
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
}
.hero-cta:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.3);
}

/* hero center */
.hero-main {
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 20px;
  max-width: 900px;
  margin: 0 auto;
}
.hero-kicker {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.hero-title {
  font-weight: 800;
  font-size: clamp(30px, 6.5vw, 56px);
  line-height: 1.05;
  margin: 0;
  color: var(--fg);
  letter-spacing: -0.02em;
}
.hero-subtitle {
  margin-top: 20px;
  font-size: clamp(14px, 2vw, 14px);
  color: var(--muted);
  max-width: 640px;
  line-height: 1.6;
}

/* accent lines container */
.accent-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

/* base line visuals */
.hline, .vline {
  position: absolute;
  background: var(--border);
  opacity: .5;
  will-change: transform, opacity;
}

/* horizontal lines */
.hline {
  height: 1px; left: 0; right: 0;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  animation: drawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
}
.hline:nth-child(1){ top: 18%; animation-delay: 150ms; }
.hline:nth-child(2){ top: 50%; animation-delay: 280ms; }
.hline:nth-child(3){ top: 82%; animation-delay: 410ms; }

/* vertical lines */
.vline {
  width: 1px; top: 0; bottom: 0;
  transform: scaleY(0);
  transform-origin: 50% 0%;
  animation: drawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
}
.vline:nth-child(4){ left: 15%; animation-delay: 520ms; }
.vline:nth-child(5){ left: 50%; animation-delay: 640ms; }
.vline:nth-child(6){ left: 85%; animation-delay: 760ms; }

/* subtle gradient shimmer while drawing */
.hline::after, .vline::after{
  content:"";
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
  opacity:0;
  animation: shimmer 900ms ease-out forwards;
}
.hline:nth-child(1)::after{ animation-delay: 150ms; }
.hline:nth-child(2)::after{ animation-delay: 280ms; }
.hline:nth-child(3)::after{ animation-delay: 410ms; }
.vline:nth-child(4)::after{ animation-delay: 520ms; }
.vline:nth-child(5)::after{ animation-delay: 640ms; }
.vline:nth-child(6)::after{ animation-delay: 760ms; }

/* keyframes */
@keyframes drawX {
  0% { transform: scaleX(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleX(1); opacity: .5; }
}
@keyframes drawY {
  0% { transform: scaleY(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleY(1); opacity: .5; }
}
@keyframes shimmer {
  0% { opacity: .0; }
  30% { opacity: .3; }
  100% { opacity: 0; }
}

/* canvas */
.particleCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: .7;
  z-index: 5;
}

/* bottom section */
.hero-bottom {
  position: relative;
  z-index: 20;
  width: 100%;
  padding: 24px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  background: rgba(4, 9, 20, 0.7);
  backdrop-blur-md;
}
.hero-tag {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
}
.hero-heading {
  font-size: clamp(16px, 2.5vw, 18px);
  font-weight: 700;
  color: var(--fg);
}
.hero-desc {
  font-size: 12px;
  color: var(--muted);
  max-width: 680px;
  line-height: 1.5;
}
      `}</style>

      {/* Top bar */}
      <div className="hero-topbar">
        <span className="hero-brand">SHRESTHA IT ACADEMY</span>
        <Link href={ctaHref} className="hero-cta">
          <span>{ctaText}</span>
          <IconArrowRight size={14} />
        </Link>
      </div>

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="particleCanvas" />

      {/* Accent Grid Lines */}
      <div className="accent-lines">
        <div className="hline" />
        <div className="hline" />
        <div className="hline" />
        <div className="vline" />
        <div className="vline" />
        <div className="vline" />
      </div>

      {/* Center Hero Content */}
      <main className="hero-main">
        <div className="hero-kicker">{kicker}</div>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </main>

      {/* Bottom Content Bar */}
      <div className="hero-bottom">
        <div className="hero-tag">{tag}</div>
        <div className="hero-heading">{heading}</div>
        <p className="hero-desc">{desc}</p>
      </div>
    </section>
  );
}

export default MinimalHero;
