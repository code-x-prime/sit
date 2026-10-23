"use client";

import { usePathname } from "next/navigation";

// Landing pages (/demo/*, /thank-you/*) apni khud ki header/footer use karte hain.
export function isLandingPath(pathname: string | null) {
  return !!pathname && (pathname.startsWith("/demo/") || pathname.startsWith("/thank-you/"));
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isLandingPath(pathname)) return null;
  return <>{children}</>;
}
