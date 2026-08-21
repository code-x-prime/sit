import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Shrestha IT",
  description: "How Shrestha IT collects, uses, and protects your personal information when you use our website and enroll in our trading courses.",
  alternates: { canonical: "https://shresthait.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:pt-32">
        <div className="mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
            Legal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-black text-navy-dark dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>

        <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-card/60 p-6 sm:p-8 space-y-8">
          <Section title="1. Information We Collect">
            When you enquire about a course, fill out a contact form, or enroll with Shrestha IT, we may collect your
            name, phone number, email address, and any message or details you voluntarily provide. We may also
            collect basic analytics data (such as pages visited and device type) to improve our website.
          </Section>

          <Section title="2. How We Use Your Information">
            We use the information you provide to respond to enquiries, share course and batch details, process
            enrollments, send updates about your learning journey, and improve our services. We do not sell your
            personal information to third parties.
          </Section>

          <Section title="3. WhatsApp & Communication">
            By submitting an enquiry or clicking &quot;Enroll on WhatsApp&quot;, you consent to being contacted by our
            team via WhatsApp, phone call, SMS, or email regarding your enquiry, admissions, and relevant course
            updates.
          </Section>

          <Section title="4. Data Sharing">
            We do not share your personal information with third parties except: (a) with our internal team members
            and mentors for the purpose of admissions and training coordination, (b) with service providers who help
            us operate our website and communications (such as email or hosting providers), or (c) where required by
            law.
          </Section>

          <Section title="5. Data Security">
            We take reasonable technical and organizational measures to protect your personal information from
            unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </Section>

          <Section title="6. Cookies & Analytics">
            Our website may use cookies or similar technologies to understand how visitors use our site and to
            improve user experience. You can disable cookies through your browser settings, though some site features
            may not function as intended.
          </Section>

          <Section title="7. Your Rights">
            You may request access to, correction of, or deletion of your personal data held by us at any time by
            contacting us using the details below. We will respond to reasonable requests within a reasonable
            timeframe.
          </Section>

          <Section title="8. Children's Privacy">
            Our services are intended for individuals who are at least 18 years old, or minors enrolling with the
            consent and involvement of a parent or guardian. We do not knowingly collect personal information from
            children without such consent.
          </Section>

          <Section title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
            reasons. The updated version will be posted on this page with a revised &quot;Last updated&quot; date.
          </Section>

          <Section title="10. Contact Us">
            <>
              If you have any questions about this Privacy Policy or how your data is handled, please contact us at{" "}
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
          <Link href="/terms" className="font-semibold text-[#01488B] dark:text-amber hover:underline">
            View Terms &amp; Conditions
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
