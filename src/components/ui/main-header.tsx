"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
  IconPhoneCall,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { COURSES } from "@/lib/courses-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function MainHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-navy/10 dark:border-white/10 bg-white/85 dark:bg-navy-dark/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Shrestha IT"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-[#01488B]/20 dark:ring-amber/30"
            priority
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-base font-extrabold text-navy-dark dark:text-white">Shrestha IT</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#01488B] dark:text-amber">
              Trading Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLinkItem href="/" active={pathname === "/"}>
                Home
              </NavLinkItem>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[420px] bg-popover p-3">
                  <span className="mb-2 block px-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Our Trading Programs
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {COURSES.map((course) => (
                      <NavigationMenuLink key={course.id} asChild>
                        <Link
                          href={`/courses/${course.id}`}
                          className="group flex items-start gap-2.5 rounded-xl px-2.5 py-2.5 transition-colors duration-200 hover:bg-navy-light/60 dark:hover:bg-white/5"
                        >
                          <span
                            className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                              course.gradientHeader
                            )}
                          >
                            {course.icon}
                          </span>
                          <span className="flex flex-col min-w-0">
                            <span className="text-sm font-bold leading-snug text-navy-dark dark:text-white group-hover:text-[#01488B] dark:group-hover:text-amber">
                              {course.shortTitle}
                            </span>
                            <span className="text-xs text-muted-foreground line-clamp-1">{course.categoryName}</span>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
                <div className="border-t border-navy/10 dark:border-white/10 bg-popover p-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/courses"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-navy-light/60 dark:bg-white/5 py-2.5 text-sm font-bold text-[#01488B] dark:text-amber hover:bg-navy-light dark:hover:bg-white/10"
                    >
                      View All Courses &amp; Pricing
                      <IconArrowRight className="size-4" />
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLinkItem href="/about" active={pathname === "/about"}>
                About
              </NavLinkItem>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLinkItem href="/contact" active={pathname === "/contact"}>
                Contact
              </NavLinkItem>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#01488B] dark:bg-amber px-4 py-2 text-sm font-bold text-white dark:text-navy-dark shadow-md transition hover:bg-[#01488B]/90 dark:hover:bg-amber/90 hover:scale-[1.03]"
          >
            Enroll Now
          </Link>

          {/* Mobile trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Toggle menu"
                className={cn(
                  "lg:hidden flex h-10 w-10 items-center justify-center rounded-full border text-navy-dark dark:text-white transition-colors",
                  scrolled
                    ? "border-navy/10 dark:border-white/10"
                    : "border-navy/15 dark:border-white/20 bg-white/50 dark:bg-navy-dark/40 backdrop-blur-md"
                )}
              >
                <IconMenu2 className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm p-0 flex flex-col gap-0">
              <div className="flex items-center justify-between border-b border-navy/10 dark:border-white/10 px-5 py-4">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo.jpeg"
                    alt="Shrestha IT"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-[#01488B]/20 dark:ring-amber/30"
                  />
                  <span className="font-heading text-base font-extrabold text-navy-dark dark:text-white">Shrestha IT</span>
                </Link>
                <SheetClose asChild>
                  <button aria-label="Close menu" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-navy-light/60 dark:hover:bg-white/10">
                    <IconX className="size-5" />
                  </button>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navLinks.slice(0, 1).map((item) => (
                  <MobileLink key={item.href} href={item.href} active={pathname === item.href}>
                    {item.name}
                  </MobileLink>
                ))}

                <MobileCourseDisclosure />

                {navLinks.slice(1).map((item) => (
                  <MobileLink key={item.href} href={item.href} active={pathname === item.href}>
                    {item.name}
                  </MobileLink>
                ))}
              </div>

              <div className="border-t border-navy/10 dark:border-white/10 p-4 space-y-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-[#01488B] dark:bg-amber px-4 py-3 text-sm font-bold text-white dark:text-navy-dark shadow-md"
                >
                  Enroll Now
                </Link>
                <a
                  href="https://wa.me/919236666923"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-navy/10 dark:border-white/10 px-4 py-3 text-sm font-bold text-navy-dark dark:text-white"
                >
                  <IconPhoneCall className="size-4" />
                  Talk to Us
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLinkItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        active ? "text-[#01488B] dark:text-amber" : "text-navy-dark dark:text-white hover:text-[#01488B] dark:hover:text-amber"
      )}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
          active
            ? "bg-navy-light/60 dark:bg-white/10 text-[#01488B] dark:text-amber"
            : "text-navy-dark dark:text-white hover:bg-navy-light/60 dark:hover:bg-white/5"
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
}

function MobileCourseDisclosure() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-navy-dark dark:text-white hover:bg-navy-light/60 dark:hover:bg-white/5"
      >
        Courses
        <IconChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="mt-1 space-y-1 pl-2">
          {COURSES.map((course) => (
            <SheetClose asChild key={course.id}>
              <Link
                href={`/courses/${course.id}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-dark dark:text-white hover:bg-navy-light/60 dark:hover:bg-white/5"
              >
                <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white", course.gradientHeader)}>
                  {course.icon}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">{course.shortTitle}</span>
                  <span className="text-xs text-muted-foreground">₹{course.offlinePrice}</span>
                </span>
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link
              href="/courses"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-navy-light/60 dark:bg-white/5 py-2.5 text-sm font-bold text-[#01488B] dark:text-amber"
            >
              View All Courses & Pricing
              <IconArrowRight className="size-4" />
            </Link>
          </SheetClose>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
