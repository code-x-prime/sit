import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shrestha IT",
  description: "Terms and conditions for enrolling in and using Shrestha IT's market education courses and website.",
  alternates: { canonical: "https://shresthait.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:pt-32">
        <div className="mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
            Legal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-black text-navy-dark dark:text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>

        <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8 space-y-8">
          <Section title="1. Acceptance of Terms">
            By enrolling in any course, accessing our website, or using our services, you agree to be bound by these
            Terms &amp; Conditions. Shrestha Edutech Private Limited (&quot;Shrestha IT&quot;, &quot;we&quot;, &quot;us&quot;) reserves the right to
            update these terms at any time; continued use of our services constitutes acceptance of the revised terms.
          </Section>

          <Section title="2. Course Enrollment & Fees">
            Enrollment is confirmed only after full or partial payment as agreed at the time of admission. Course fees
            are as displayed on our website or communicated directly by our team, and are subject to change for future
            batches. Any discount or offer (such as 10% off on one-shot payment) applies only under the stated conditions.
          </Section>

          <Section title="3. Refund & Cancellation Policy">
            Fees paid towards course enrollment are generally non-refundable once a batch has commenced. Requests for
            cancellation before batch commencement may be considered on a case-by-case basis at our sole discretion.
            Please contact our support team for any refund-related queries.
          </Section>

          <Section title="4. Educational Purpose & No Financial Advice">
            All courses, live sessions, mentorship, and materials provided by Shrestha IT are strictly for educational
            purposes. Nothing on this website or in our courses constitutes financial, investment, or trading advice.
            Trading and investing in equity, derivatives, forex, and cryptocurrency markets involves substantial risk
            of loss and is not suitable for every individual. You are solely responsible for your own trading and
            investment decisions.
          </Section>

          <Section title="5. No Guarantee of Profit">
            We do not guarantee any specific trading results, profits, or accuracy rates from applying the strategies
            taught. Past performance, student testimonials, or case studies shared on our platform are not indicative
            of future results.
          </Section>

          <Section title="6. Intellectual Property">
            All course content, recorded sessions, presentations, and materials are the intellectual property of
            Shrestha IT. Unauthorized reproduction, distribution, or resale of our course content is strictly
            prohibited.
          </Section>

          <Section title="7. Code of Conduct">
            Students are expected to maintain respectful conduct during offline and online sessions. Shrestha IT
            reserves the right to remove any student from a batch, without refund, for conduct that disrupts the
            learning environment of other students.
          </Section>

          <Section title="8. Limitation of Liability">
            Shrestha IT, its founders, mentors, and employees shall not be held liable for any direct, indirect, or
            consequential losses arising from the use of our educational content or from trading/investment decisions
            made by students.
          </Section>

          <Section title="9. Governing Law">
            These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive
            jurisdiction of the courts in Delhi, India.
          </Section>

          <Section title="10. Contact Us">
            <>
              For any questions regarding these Terms &amp; Conditions, please reach out to us at{" "}
              <a href="mailto:shresthaedutech2026@gmail.com" className="font-semibold text-[#01488B] dark:text-amber hover:underline">
                shresthaedutech2026@gmail.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+919236666923" className="font-semibold text-[#01488B] dark:text-amber hover:underline">
                +91 9236666923
              </a>
              .
            </>
          </Section>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm">
          <Link href="/privacy" className="font-semibold text-[#01488B] dark:text-amber hover:underline">
            View Privacy Policy
          </Link>
          <span className="text-muted-foreground">&middot;</span>
          <Link href="/contact" className="font-semibold text-[#01488B] dark:text-amber hover:underline">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-extrabold text-navy-dark dark:text-white mb-2">{title}</h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
