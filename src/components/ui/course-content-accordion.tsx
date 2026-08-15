"use client";

import * as React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface CourseModuleItem {
  module: string;
  description: string;
}

export function CourseContentAccordion({ items }: { items: CourseModuleItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.module}
            className={cn(
              "overflow-hidden rounded-xl border transition-colors",
              isOpen ? "border-[#01488B] dark:border-amber bg-card" : "border-navy/10 dark:border-white/10 bg-card/60"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center gap-4 p-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black transition-colors",
                  isOpen ? "bg-[#01488B] dark:bg-amber text-white dark:text-navy-dark" : "bg-navy-light/60 dark:bg-white/5 text-navy-dark dark:text-white"
                )}
              >
                {idx + 1}
              </span>
              <span className="flex-1 text-sm font-bold text-navy-dark dark:text-white">{item.module}</span>
              <IconChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 pl-16 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
