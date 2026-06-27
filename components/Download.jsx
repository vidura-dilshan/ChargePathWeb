"use client";

import { QRCodeSVG } from "qrcode.react";
import { Apple, Play, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

// 🔗 Replace with your real Play Store link once published
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.chargepath.app";

export default function Download() {
  return (
    <section id="download" className="bg-mesh px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
            <Smartphone className="h-3.5 w-3.5" /> Get the app
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Start your <span className="gradient-text">electric journey</span> today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#000]">
            Scan the QR code with your phone, or grab ChargePath from your app store.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-10 rounded-3xl border border-slate-100 bg-white p-8 card-soft sm:flex-row sm:justify-center">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
              <QRCodeSVG value={PLAY_STORE_URL} size={160} level="H" fgColor="#0f172a" bgColor="#ffffff" />
            </div>

            <div className="flex w-full max-w-[220px] flex-col gap-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:scale-105"
              >
                <Play className="h-6 w-6" fill="white" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-70">Get it on</span>
                  <span className="block font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-2xl border border-slate-300 px-6 py-3 text-slate-900 transition hover:border-blue-400 hover:bg-blue-50"
              >
                <Apple className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-60">Get it on</span>
                  <span className="block font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
