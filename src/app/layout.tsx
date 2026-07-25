import type { Metadata } from "next";
import { BackgroundBlur } from "@/components/BackgroundBlur";
import { Footer } from "@/components/Footer";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingSocialBar } from "@/components/FloatingSocialBar";
import { oswald, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrestha IT",
  description: "Practical trading education in equity, forex, crypto, and derivatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BackgroundBlur />
          <AnimatedNavFramer />
          <FloatingSocialBar />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <ScrollToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
