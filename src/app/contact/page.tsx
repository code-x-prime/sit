"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MinimalHero } from "@/components/ui/hero-minimalism";
import {
  IconBrandWhatsapp,
  IconMapPin,
  IconPhone,
  IconExternalLink,
  IconCheck,
  IconSend,
  IconSparkles,
  IconLoader2,
  IconAlertTriangle,
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Indian Equity Market",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", phone: "", email: "", course: "Indian Equity Market", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMsg = `Hi Shrestha IT, I want to submit an enquiry:
Name: ${formState.name || "Student"}
Phone: ${formState.phone || "N/A"}
Email: ${formState.email || "N/A"}
Course Interest: ${formState.course || "Indian Equity Market"}
Message: ${formState.message || "Please share admission & course details."}`;

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <MinimalHero
        kicker="Delhi Campus & Online Support"
        title={<>Get in Touch.<br />Start Your Journey.</>}
        subtitle="Have questions about our market education programs? Visit our Uttam Nagar campus or talk to our senior mentors."
        ctaText="WhatsApp Chat"
        ctaHref={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
        tag="Instant Mentorship Support"
        heading="Uttam Nagar Campus & Online Enquiry"
        desc="Shop No 167B, 3rd Floor, Main Road, Uttam Nagar, New Delhi - 110059 • Call/WhatsApp: +91 9236666923"
      />

      <main className="mx-auto max-w-7xl space-y-12 sm:space-y-16 px-4 py-8 sm:px-6 lg:py-12">

        {/* 2-Column Contact & Form Section - Guaranteed 100% Visibility */}
        <section className="w-full bg-transparent py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Heading, Contact Info & Sketch Illustration */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/10 dark:border-white/10 bg-navy-light/60 dark:bg-navy/40 text-xs font-bold uppercase tracking-wider text-navy dark:text-amber">
                <IconSparkles className="w-3.5 h-3.5 text-amber animate-spin" />
                Shrestha IT Helpdesk
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-dark dark:text-white tracking-tight leading-tight">
                Have Questions? <br />
                <span className="text-[#01488B] dark:text-amber">Talk to Our Mentors</span>
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Fill in your details and our team will connect with you via Call / WhatsApp to guide you with course details, batch schedules, and fee structures.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-navy/10 dark:border-white/10 space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-dark dark:text-white">
                    <IconMapPin className="w-4 h-4 text-[#01488B] dark:text-amber shrink-0" />
                    <span>Delhi Campus</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Shop 167B, 3rd Floor, Metro Pillar 672, Uttam Nagar, Delhi
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-navy/10 dark:border-white/10 space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-dark dark:text-white">
                    <IconPhone className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Phone & WhatsApp</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    +91 9236666923 / +91 7428692121
                  </p>
                </div>
              </div>

              {/* Hand-Drawn Sketch Illustration of Thinking Student Trader */}
              <div className="relative w-full max-w-md aspect-16/10 mx-auto pt-4">
                <Image
                  src="/contact_thinking_student.png"
                  alt="SIT Thinking Student Trader"
                  fill
                  className="object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Minimalist Underline Form matching Reference Image */}
            <div className="lg:col-span-6 bg-[#f7f6f2] dark:bg-card border border-navy/10 dark:border-white/10 p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <IconCheck className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-black text-navy-dark dark:text-white">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you for contacting Shrestha IT. Our senior mentor will connect with you shortly.
                  </p>
                  <a
                    href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs shadow-md hover:bg-emerald-700 transition"
                  >
                    <IconBrandWhatsapp className="w-4 h-4 text-white" />
                    <span>Chat Immediately on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-navy/10 dark:border-white/10 pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#01488B] dark:text-amber">
                      Direct Mentorship Enquiry
                    </span>
                    <h3 className="text-2xl font-black text-navy-dark dark:text-white mt-1">
                      Send Your Message
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Explore programs, course modules, and live class schedules with our mentors.
                    </p>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
                      <IconAlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Enter your name */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-semibold text-muted-foreground group-focus-within:text-navy-dark dark:group-focus-within:text-amber transition-colors block">
                        Enter your name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-navy/15 dark:border-white/20 focus:border-[#01488B] dark:focus:border-amber pb-2.5 text-sm font-medium text-navy-dark dark:text-white placeholder:text-muted-foreground/30 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email address */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-semibold text-muted-foreground group-focus-within:text-navy-dark dark:group-focus-within:text-amber transition-colors block">
                        Email address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-navy/15 dark:border-white/20 focus:border-[#01488B] dark:focus:border-amber pb-2.5 text-sm font-medium text-navy-dark dark:text-white placeholder:text-muted-foreground/30 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Course Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Phone number */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-semibold text-muted-foreground group-focus-within:text-navy-dark dark:group-focus-within:text-amber transition-colors block">
                        Phone number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-navy/15 dark:border-white/20 focus:border-[#01488B] dark:focus:border-amber pb-2.5 text-sm font-medium text-navy-dark dark:text-white placeholder:text-muted-foreground/30 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Select course / service */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-semibold text-muted-foreground group-focus-within:text-navy-dark dark:group-focus-within:text-amber transition-colors block">
                        Select your course interest
                      </label>
                      <select
                        value={formState.course}
                        onChange={(e) => setFormState({ ...formState, course: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-navy/15 dark:border-white/20 focus:border-[#01488B] dark:focus:border-amber pb-2.5 text-sm font-medium text-navy-dark dark:text-white focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Indian Equity Market" className="bg-card text-navy-dark">Indian Equity Market</option>
                        <option value="Forex Market" className="bg-card text-navy-dark">Forex Market</option>
                        <option value="Cryptocurrency Market" className="bg-card text-navy-dark">Cryptocurrency Market</option>
                        <option value="Indian Derivatives Market" className="bg-card text-navy-dark">Indian Derivatives Market (F&O)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project description / message */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-semibold text-muted-foreground group-focus-within:text-navy-dark dark:group-focus-within:text-amber transition-colors block">
                      Project description / Questions <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your goals, queries, or batch preference..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-navy/15 dark:border-white/20 focus:border-[#01488B] dark:focus:border-amber pb-2 text-sm font-medium text-navy-dark dark:text-white placeholder:text-muted-foreground/30 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Action Buttons - Editorial Style matching the reference */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full sm:flex-1 py-4 px-8 rounded-2xl bg-[#040914] hover:bg-[#01488B] dark:bg-amber dark:hover:bg-amber-light text-white dark:text-navy text-xs font-black uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <IconLoader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <IconSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5"
                    >
                      <IconBrandWhatsapp className="w-4 h-4 text-white" />
                      <span>WhatsApp Mentors</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

        {/* Normal Clean High-Impact Google Maps Section */}
        <section className="w-full">
          <div className="relative w-full rounded-3xl overflow-hidden border border-navy/10 dark:border-white/10 bg-card shadow-xl space-y-0">
            
            {/* Map Header */}
            <div className="p-6 sm:p-8 bg-card border-b border-navy/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Shrestha IT Learning Center
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-dark dark:text-white">
                  Visit Our Delhi Campus
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Third Floor, 167B, Main Road, Opposite Metro Pillar No. 672, Uttam Nagar, New Delhi, 110059
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/ShresthaIT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#01488B] dark:bg-amber text-white dark:text-navy text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-transform duration-200 shrink-0"
              >
                <IconMapPin className="w-4 h-4" />
                <span>Open Google Maps</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Full Width Google Map Iframe */}
            <div className="relative w-full h-[450px] sm:h-[500px] bg-slate-100 dark:bg-slate-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.3472539970408!2d77.05684397495635!3d28.622486684537712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d052cf33d969b%3A0x4123009f7efcdfe5!2sShrestha%20IT!5e1!3m2!1sen!2sin!4v1784972797773!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
