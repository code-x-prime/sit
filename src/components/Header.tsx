"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { LinkButton } from "@/components/ui/button"
import {
    IconHome,
    IconInfoCircle,
    IconList,
    IconMessageCircle,
    IconMenu2,
    IconX,
} from "@tabler/icons-react"

const navLinks = [
    { href: "/", label: "Home", icon: IconHome },
    { href: "/about", label: "About", icon: IconInfoCircle },
    { href: "/courses", label: "Courses", icon: IconList },
    { href: "/contact", label: "Contact", icon: IconMessageCircle },
]

export function Header() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-40 border-b border-navy/10 bg-card/95 shadow-sm backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
                <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/50 rounded-lg">
                    <Image
                        src="/logo.jpeg"
                        alt="Shrestha IT"
                        width={90}
                        height={60}
                        className="h-10 w-auto object-contain md:h-12"
                        priority
                    />
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const active = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors ${active
                                        ? "text-navy"
                                        : "text-foreground/75 hover:text-navy"
                                    }`}
                            >
                                {link.label}
                                {active && (
                                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-navy" />
                                )}
                            </Link>
                        )
                    })}
                </nav>
                <div className="hidden md:flex">
                    <LinkButton href="/contact">Enroll Now</LinkButton>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-lg border border-navy/10 p-2 text-navy transition hover:bg-navy-light"
                        aria-label="Open menu"
                    >
                        <IconMenu2 size={22} stroke={2} />
                    </button>
                    {open ? (
                        <div className="fixed inset-0 z-50 flex">
                            <button
                                className="absolute inset-0 bg-navy-dark/40 backdrop-blur-sm"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu overlay"
                            />
                            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-card p-6 shadow-2xl">
                                <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                                    <span className="font-heading text-xl font-bold text-navy">Menu</span>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg p-2 text-navy transition hover:bg-navy-light"
                                        aria-label="Close menu"
                                    >
                                        <IconX size={22} stroke={2} />
                                    </button>
                                </div>
                                <div className="mt-6 flex flex-col gap-3">
                                    {navLinks.map((link) => {
                                        const active = pathname === link.href
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition ${active
                                                        ? "border-navy/20 bg-navy text-white"
                                                        : "border-navy/10 text-foreground hover:border-navy/20 hover:bg-navy-light"
                                                    }`}
                                            >
                                                <link.icon size={20} stroke={2} />
                                                {link.label}
                                            </Link>
                                        )
                                    })}
                                    <LinkButton href="/contact" className="mt-2 w-full">
                                        Enroll Now
                                    </LinkButton>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    )
}
