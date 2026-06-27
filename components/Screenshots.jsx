"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";

const screens = [
  { src: "/screens/4.jpeg", label: "Find Charging Stations" },
  { src: "/screens/3.jpeg", label: "Route Planning" },
  { src: "/screens/12.jpeg", label: "Optimal Route" },
  { src: "/screens/5.jpeg", label: "Wallet & Favourites" },
  { src: "/screens/7.jpeg", label: "Your Profile" },
];

export default function Screenshots() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section id="screens" className="overflow-hidden px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Take a look</p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
                Built for <span className="gradient-text">every journey</span>
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x scroll-smooth gap-8 overflow-x-auto px-1 pb-8"
        >
          {screens.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className="shrink-0 snap-center">
              <div className="text-center">
                <PhoneMockup src={s.src} alt={s.label} />
                <p className="mt-5 text-sm font-medium text-[#000]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
