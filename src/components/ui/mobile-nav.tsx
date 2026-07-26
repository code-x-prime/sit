"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div ref={menuRef} className="md:hidden fixed top-0 left-0 right-0 z-50">
      {/* Navbar Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-navy via-navy-dark to-navy shadow-[0_4px_20px_rgb(1,72,138,0.4)]">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative">
            <Image
              src="/logo.jpeg"
              alt="Shrestha IT"
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-amber/50 ring-offset-1 ring-offset-navy"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-navy"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-extrabold text-white leading-tight tracking-wide">
              Shrestha IT
            </span>
            <span className="text-[9px] text-amber/80 font-medium tracking-widest uppercase">
              Trading Academy
            </span>
          </div>
        </Link>

        {/* Hamburger - Right */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300",
            isOpen
              ? "bg-amber text-navy"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
          )}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className={cn(
                "block w-full h-0.5 rounded-full origin-center",
                isOpen ? "bg-navy" : "bg-white"
              )}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className={cn(
                "block w-full h-0.5 rounded-full",
                isOpen ? "bg-navy" : "bg-white"
              )}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className={cn(
                "block w-full h-0.5 rounded-full origin-center",
                isOpen ? "bg-navy" : "bg-white"
              )}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-3 top-[68px] w-60 rounded-2xl border border-amber/20 bg-gradient-to-b from-navy-dark via-navy to-navy-dark shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden"
            >
              {/* User Profile Header */}
              <div className="px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt="Shrestha IT"
                    width={44}
                    height={44}
                    className="rounded-full object-cover ring-2 ring-amber/40"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-heading font-bold text-white">
                      Shrestha IT
                    </span>
                    <span className="text-xs text-white/60">
                      Learn. Trade. Profit.
                    </span>
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              <div className="py-2">
                {navItems.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center mx-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                          active
                            ? "text-amber bg-amber/10 border-l-4 border-amber"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="px-4 py-4 border-t border-white/10 bg-black/20">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-amber to-amber-dark px-4 py-3 text-sm font-bold text-navy shadow-lg hover:shadow-amber/30 transition-all duration-300 active:scale-95"
                >
                  Start Learning Today
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
