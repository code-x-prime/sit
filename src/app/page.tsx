
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

export default function HomePage() {
    return (
        <>
            <HeroSectionDemo />
            <main className="mx-auto max-w-7xl  px-4 sm:px-6 ">

                <StatsArcSection />

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
