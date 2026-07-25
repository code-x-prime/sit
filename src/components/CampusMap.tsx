"use client"

import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map"
import { IconBuildingBank, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react"

export default function CampusMap() {
    return (
        <Map
            center={[77.0568, 28.6225]}
            zoom={15}
            className="w-full h-full"
        >
            <MapControls showFullscreen />

            <MapMarker longitude={77.0568} latitude={28.6225}>
                <MarkerContent>
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-[#01488B] dark:bg-amber border-4 border-white shadow-xl flex items-center justify-center">
                            <IconBuildingBank className="w-5 h-5 text-white dark:text-navy" />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#01488B] dark:border-t-amber" />
                    </div>
                </MarkerContent>

                <MarkerPopup className="w-64 p-0" closeButton>
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[#01488B]/10 dark:bg-amber/20">
                                <IconBuildingBank className="w-5 h-5 text-[#01488B] dark:text-amber" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-sm text-navy-dark dark:text-white leading-snug">
                                    Shrestha IT Academy
                                </h4>
                                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                                    Uttam Nagar Branch
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Shop No 167B, Third Floor, Main Road, Opposite Metro Pillar No. 672, Uttam Nagar, New Delhi, 110059
                        </p>

                        <div className="flex items-center gap-2 pt-1">
                            <a
                                href="https://wa.me/919236666923?text=Hi%20Shrestha%20IT,%20I%20want%20to%20visit%20the%20Uttam%20Nagar%20Delhi%20Campus."
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
                            >
                                <IconBrandWhatsapp className="w-4 h-4" />
                                <span>Chat Location</span>
                            </a>
                            <a
                                href="tel:+919236666923"
                                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 hover:bg-slate-200 transition"
                            >
                                <IconPhone className="w-3.5 h-3.5" />
                                <span>Call</span>
                            </a>
                        </div>
                    </div>
                </MarkerPopup>
            </MapMarker>
        </Map>
    )
}
