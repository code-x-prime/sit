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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4HMKVZ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4HMKVZ6');
          `}
        </Script>
        {/* End Google Tag Manager */}
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
