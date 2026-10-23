import { IconMapPin, IconNavigation } from "@tabler/icons-react";
import { ADDRESS, MAP_DIRECTIONS, MAP_EMBED } from "./constants";

export function MapAndAddress({ note }: { note: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <iframe src={MAP_EMBED} title="Shrestha IT campus map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-52 w-full sm:h-80" />
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:p-5 sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="flex items-start gap-2 font-semibold text-[#0B1F3A]"><IconMapPin className="mt-0.5 shrink-0 text-[#16A34A]" size={20} />{ADDRESS}</p>
          <p className="pl-7 text-sm text-slate-600">{note}</p>
        </div>
        <a href={MAP_DIRECTIONS} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-5 font-semibold text-white transition hover:bg-[#15803D]"><IconNavigation size={18} />Get Directions</a>
      </div>
    </div>
  );
}
