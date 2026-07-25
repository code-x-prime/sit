import { AnimatedSection } from "@/components/AnimatedSection"
import { MinimalHero } from "@/components/ui/hero-minimalism"
import { CourseCategoriesSection } from "@/components/CourseCategoriesSection"
import { CategorizedFaq } from "@/components/ui/faq-categorized"

export default function CoursesPage() {
    return (
        <div className="w-full">
            {/* Page Hero Section */}
            <MinimalHero
                kicker="Trading Curriculum & Pricing"
                title={<>Master the Markets.<br/>Trade with Precision.</>}
                subtitle="Choose institutional-grade courses tailored for Indian Equity, F&O Derivatives, Forex, and Crypto Assets."
                ctaText="Enquire Now"
                ctaHref="/contact"
                tag="Comprehensive Programs"
                heading="Mentored Live Market Execution"
                desc="Flexible learning modes, step-by-step risk management, and 1-on-1 mentorship for every skill level."
            />

            <main className="mx-auto max-w-7xl space-y-8 sm:space-y-12 px-4 py-8 sm:px-6 lg:py-12">
                
                {/* Official SIT Course Categories & Pricing Section */}
                <AnimatedSection>
                    <CourseCategoriesSection showTitle={false} />
                </AnimatedSection>

                {/* Reusable Categorized FAQ Component Integration */}
                <AnimatedSection>
                    <CategorizedFaq
                        subhead="Everything You Need to Know"
                        title="Course Admissions & FAQ"
                    />
                </AnimatedSection>

            </main>
        </div>
    )
}
