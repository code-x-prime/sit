"use client";

import { usePathname } from "next/navigation";

export function HeaderOffset() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return <div className="h-16 sm:h-18" aria-hidden="true" />;
}

export default HeaderOffset;
