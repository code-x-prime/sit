"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "100%",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", damping: 15 },
  },
  collapsed: {
    opacity: 0,
    x: -25,
    rotate: -180,
    transition: { duration: 0.3 },
  },
};

const itemVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", damping: 15 },
  },
  collapsed: {
    opacity: 0,
    x: -20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const collapsedIconVariants: Variants = {
  expanded: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    },
  },
};

const MotionLink = motion.create(Link);

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="hidden md:flex fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] sm:w-auto">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-amber/40 bg-navy/90 shadow-[0_8px_30px_rgb(1,72,138,0.35)] backdrop-blur-md h-12 sm:h-16 w-full justify-between sm:justify-start",
          !isExpanded && "cursor-pointer justify-center"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center pl-1.5 sm:pl-2 pr-2 sm:pr-3"
        >
          <Link href="/" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/logo.jpeg"
              alt="Shrestha IT"
              width={48}
              height={48}
              className="h-9 w-9 sm:h-12 sm:w-12 rounded-full object-cover"
              priority
            />
          </Link>
        </motion.div>

        <motion.div
          className={cn(
            "flex items-center gap-1.5 sm:gap-6 pr-2 sm:pr-5 justify-around sm:justify-start flex-1 sm:flex-initial",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <MotionLink
                key={item.name}
                href={item.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "relative text-xs sm:text-sm font-medium transition-colors px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap",
                  active
                    ? "text-amber"
                    : "text-white/80 hover:text-amber"
                )}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-3 sm:w-4 -translate-x-1/2 rounded-full bg-amber" />
                )}
              </MotionLink>
            );
          })}
          <MotionLink
            href="/contact"
            variants={itemVariants}
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-amber px-4 py-1.5 text-sm font-semibold text-navy shadow transition hover:bg-amber-dark whitespace-nowrap"
          >
            Enroll Now
          </MotionLink>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
