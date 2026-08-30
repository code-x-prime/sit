import type { Metadata } from "next";
import Script from "next/script";
import { BackgroundBlur } from "@/components/BackgroundBlur";
import { Component as TapedFooter } from "@/components/ui/footer-taped-design";
import { MainHeader } from "@/components/ui/main-header";
import { HeaderOffset } from "@/components/HeaderOffset";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingSocialBar } from "@/components/FloatingSocialBar";
import { oswald, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrestha IT",
  description: "Practical financial-market education in equity, forex, crypto, and derivatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18326954298" strategy="afterInteractive" />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18326954298');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <BackgroundBlur />
          <MainHeader />
          <FloatingSocialBar />
          <div className="flex min-h-screen flex-col">
            <HeaderOffset />
            <main className="flex-1">{children}</main>
            <ScrollToTop />
            <TapedFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
