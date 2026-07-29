import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type NewsLogoItem = {
  name: string;
  tagline: string;
  logoImg: string;
  link: string;
};

export const defaultNewsLogos: NewsLogoItem[] = [
  {
    name: "The Tribune",
    tagline: "Business & Startup Coverage",
    logoImg: "/news/tribune-india.png",
    link: "https://www.tribuneindia.com/news/business/most-eminent-startups-of-india-2026-2-2/",
  },
  {
    name: "ANI News",
    tagline: "National News Wire",
    logoImg: "/news/ani-news.png",
    link: "https://www.aninews.in/news/business/most-eminent-startups-of-india-202620260506123233/",
  },
  {
    name: "Hindustan Times",
    tagline: "Leading Daily Feature",
    logoImg: "/news/hindustan-times.png",
    link: "https://www.hindustantimes.com/brand-stories/emerging-startups-shaping-india-s-business-landscape-in-2026-101778130531577.html#google_vignette",
  },
  {
    name: "The Wire",
    tagline: "PTI Press Feature",
    logoImg: "/news/the-wire.png",
    link: "https://thewire.in/ptiprnews/most-eminent-startups-of-india-2026",
  },
  {
    name: "PTI News",
    tagline: "Press Trust of India",
    logoImg: "/news/pti-news.png",
    link: "https://www.ptinews.com/press-release/most-eminent-startups-of-india-2026/3637566",
  },
  {
    name: "Hindustan Metro",
    tagline: "Education & Industry",
    logoImg: "/news/hindustan-metro.png",
    link: "https://hindustanmetro.com/shrestha-it-bridging-the-gap-between-education-and-industry-in-india",
  },
  {
    name: "Entrepreneur Hunt",
    tagline: "Startup & Innovation",
    logoImg: "/news/entrepreneur-hunt.png",
    link: "https://entrepreneurhunt.com/shrestha-it-bridging-the-gap-between-education-and-industry-in-india",
  },
  {
    name: "Dailyhunt",
    tagline: "Digital News Network",
    logoImg: "/news/dailyhunt.png",
    link: "https://m.dailyhunt.in/news/india/english/punjabbytes-epaper-dhb7faabc774324241990251ac4336f653/-newsid-dhb7faabc774324241990251ac4336f653_1b410a006dc9438685405082386ba146?sm=Y",
  },
];

type LogoCloudProps = React.ComponentProps<"div"> & {
  items?: NewsLogoItem[];
};

export function LogoCloud({ className, items = defaultNewsLogos, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-navy/15 dark:border-white/15 md:grid-cols-4 bg-background",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-navy/15 dark:border-white/15" />

      {items.map((item, index) => {
        const isSecondColumnOnMobile = (index + 1) % 2 === 0;
        const isFourthColumnOnDesktop = (index + 1) % 4 === 0;

        return (
          <LogoCard
            key={index}
            href={item.link}
            name={item.name}
            tagline={item.tagline}
            logoImg={item.logoImg}
            className={cn(
              "relative border-b border-navy/15 dark:border-white/15 transition-colors hover:bg-slate-50 dark:hover:bg-navy/60 group",
              !isSecondColumnOnMobile && "border-r",
              !isFourthColumnOnDesktop && "md:border-r",
              index === 0 && "bg-slate-50/50 dark:bg-navy/30",
              index === 2 && "md:bg-slate-50/50 dark:md:bg-navy/30",
              index === 5 && "md:bg-slate-50/50 dark:md:bg-navy/30",
              index === 7 && "bg-slate-50/50 dark:bg-navy/30"
            )}
          >
            {/* Plus icon decorative markers */}
            {index === 0 && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-navy/40 dark:text-white/40"
                strokeWidth={1}
              />
            )}
            {index === 2 && (
              <>
                <PlusIcon
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-navy/40 dark:text-white/40"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-navy/40 dark:text-white/40"
                  strokeWidth={1}
                />
              </>
            )}
            {index === 4 && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-navy/40 dark:text-white/40"
                strokeWidth={1}
              />
            )}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-navy/15 dark:border-white/15" />
    </div>
  );
}

type LogoCardProps = {
  href: string;
  name: string;
  tagline: string;
  logoImg: string;
  className?: string;
  children?: React.ReactNode;
};

function LogoCard({ href, name, tagline, logoImg, className, children }: LogoCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${name} - ${tagline}`}
      className={cn(
        "flex flex-col items-center justify-center px-4 py-8 md:p-8 text-center transition-all duration-300",
        className
      )}
    >
      <div className="relative h-12 w-36 max-w-full mb-2 bg-white rounded-lg p-1.5 border border-slate-200/80 shadow-xs flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logoImg}
          alt={name}
          fill
          className="object-contain p-1"
          unoptimized
        />
      </div>
      <span className="text-xs font-black text-navy-dark dark:text-white group-hover:text-[#01488B] dark:group-hover:text-amber transition-colors mt-1">
        {name}
      </span>
      <span className="text-[10px] font-semibold text-muted-foreground line-clamp-1">
        {tagline}
      </span>
      {children}
    </a>
  );
}
