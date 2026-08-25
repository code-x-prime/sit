"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconClock,
  IconRosetteDiscountCheck,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { COURSES } from "@/lib/courses-data";

export function CourseHeroCarousel() {
  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const autoplay = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative w-full pt-24 sm:pt-28 pb-8 md:pb-14">
      <div className="mx-auto max-w-[94%] sm:max-w-[90%] px-4">
        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {COURSES.map((course) => {
              const whatsappMsg = `Hi Shrestha IT, I want to enquire about the ${course.title} course. Please share course details, schedule and admission information for Online/Offline.`;
              return (
                <CarouselItem key={course.id} className="pl-4 md:pl-6 basis-full">
                  <div
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/courses/${course.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        router.push(`/courses/${course.id}`);
                      }
                    }}
                    className="group relative block w-full overflow-hidden rounded-[2rem] border border-navy/10 dark:border-white/10 shadow-2xl cursor-pointer"
                  >
                    {/* Big banner image */}
                    <div className={`relative w-full h-[60vw] max-h-[420px] min-h-[260px] sm:h-[45vw] sm:max-h-[480px] lg:h-[38vw] lg:max-h-[560px] bg-gradient-to-br ${course.gradientHeader}`}>
                      <Image
                        src={course.wideImage}
                        alt={course.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/40 to-transparent" />

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10">
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="relative h-9 w-9 sm:h-11 sm:w-11 overflow-hidden rounded-xl ring-2 ring-white/30 shrink-0 shadow-lg">
                            <Image src="/logo.jpeg" alt="Shrestha IT logo" fill className="object-cover" />
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20">
                              {course.categoryName}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-white/90 bg-white/15 px-2.5 py-1 rounded-full backdrop-blur-md">
                              <IconClock className="w-3 h-3" />
                              {course.duration}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2 max-w-2xl">
                          {course.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-bold text-emerald-300 mb-5 flex items-center gap-1.5">
                          <IconRosetteDiscountCheck className="w-4 h-4 shrink-0" />
                          {course.levels}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-navy-dark shadow-lg transition group-hover:scale-[1.03]">
                            View Details & Pricing
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                          <a
                            href={`https://wa.me/919236666923?text=${encodeURIComponent(whatsappMsg)}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]"
                          >
                            <IconBrandWhatsapp className="w-4 h-4" />
                            Enquire on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

        </Carousel>

        {/* Custom Prev/Next Nav */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute top-1/2 left-1 md:-left-3 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 dark:border-white/10 bg-card text-navy dark:text-white shadow-lg transition hover:bg-navy hover:text-white active:scale-95"
            aria-label="Previous course"
          >
            <IconChevronLeft size={22} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute top-1/2 right-1 md:-right-3 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 dark:border-white/10 bg-card text-navy dark:text-white shadow-lg transition hover:bg-navy hover:text-white active:scale-95"
            aria-label="Next course"
          >
            <IconChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {COURSES.map((course, idx) => (
            <button
              key={course.id}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-[#01488B] dark:bg-amber" : "w-2.5 bg-navy/15 dark:bg-white/15"
                }`}
              aria-label={`Go to ${course.shortTitle} slide`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseHeroCarousel;
