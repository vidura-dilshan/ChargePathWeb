import Image from "next/image";
import { Apple, Play, MapPin, Zap, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-mesh"
    >
      {/* Decorative color glows for depth */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 -top-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* Hero photo — right side, vivid, blended only at its left edge */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%] lg:w-[54%]">
        <Image
          src="/bg2.jpg"
          alt="EV driver charging"
          fill
          priority
          className="object-cover object-[58%_center]"
        />
        {/* blend the photo into the page (heavier on mobile for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fc] via-[#f7f9fc]/80 to-transparent sm:via-[#f7f9fc]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fc]/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
            <Zap className="h-3.5 w-3.5" /> The future of EV charging
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl md:text-6xl">
            Find. Charge. <br />
            <span className="gradient-text">Go.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-slate-600 sm:text-lg">
            ChargePath helps EV drivers locate charging stations, plan
            battery-aware routes, and pay seamlessly  all from one app.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#download"
              className="flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-xl shadow-slate-900/20 transition hover:scale-105"
            >
              <Play className="h-6 w-6" fill="white" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase opacity-70">Get it on</span>
                <span className="block font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href="#download"
              className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white/80 px-5 py-3 text-slate-900 backdrop-blur transition hover:border-blue-400 hover:bg-white"
            >
              <Apple className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase opacity-60">Download on the</span>
                <span className="block font-semibold">App Store</span>
              </span>
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.8 rating
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-600" /> 126+ stations
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-600" /> Live availability
            </span>
          </div>
        </Reveal>
      </div>

      {/* Floating app-style station card (large screens) */}
      <Reveal delay={0.35} className="absolute bottom-32 right-8 z-20 hidden w-64 xl:block">
        <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Kurunegala South</p>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
              Available
            </span>
          </div>
          <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 text-amber-500" /> 7 kW
            </span>
            <span>Type 1</span>
            <span>1.2 km</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}