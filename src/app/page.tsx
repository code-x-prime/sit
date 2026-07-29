
import { AnimatedSection } from "@/components/AnimatedSection"
import { HeroSectionDemo } from "@/components/blocks/hero-section-demo"

import { StatsArcSection } from "@/components/StatsArcSection"
import FeatureSection from "@/components/ui/stack-feature-section"
import { TestimonialsMasonry } from "@/components/TestimonialsMasonry"
import { TradingBeamSection } from "@/components/TradingBeamSection"

import { VerticalTabs } from "@/components/ui/vertical-tabs"
import { CategorizedFaq } from "@/components/ui/faq-categorized"


import { ScrollingAnimation } from "@/components/ui/scrolling-animation"
import { CourseCategoriesSection } from "@/components/CourseCategoriesSection"
import { LogoCloud } from "@/components/ui/logo-cloud-2"

export default function HomePage() {
    return (
        <>
            <HeroSectionDemo />
            <main className="mx-auto max-w-7xl px-4 sm:px-6">

                <StatsArcSection />

                {/* News & Press Coverage Section with LogoCloud */}
                <AnimatedSection className="py-12 md:py-16">
                    <div className="text-center mb-8 max-w-2xl mx-auto space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/50 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Featured Coverage
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-dark dark:text-white tracking-tight">
                            Recognized in <span className="text-[#01488B] dark:text-amber">India&apos;s Top Media</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            Covered across India&apos;s leading business daily press, news wires & startup platforms.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-navy/15 dark:border-white/15 shadow-sm">
                        <LogoCloud />
                    </div>
                </AnimatedSection>

                {/* Vertical Tabs Component Integration */}
                <AnimatedSection>
                    <VerticalTabs
                        heading="Built for Practical Trading Success"
                        subheading="(OUR TRADING MODULES)"
                    />
                </AnimatedSection>

                {/* Official SIT Course Categories & Pricing Section */}
                <AnimatedSection>
                    <CourseCategoriesSection />
                </AnimatedSection>

                <AnimatedSection>
                    <ScrollingAnimation />
                </AnimatedSection>

                <AnimatedSection>
                    <TradingBeamSection />
                </AnimatedSection>

                {/* Categorized FAQ Component Integration */}
                <AnimatedSection>
                    <CategorizedFaq />
                </AnimatedSection>

                <AnimatedSection>
                    <TestimonialsMasonry />
                </AnimatedSection>

                <AnimatedSection>
                    <FeatureSection />
                </AnimatedSection>
            </main>
        </>
    )
}
