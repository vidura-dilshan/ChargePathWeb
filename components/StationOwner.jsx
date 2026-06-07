import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";

const points = [
  "Register your charging station for free",
  "Set your own pricing per kW (LKR)",
  "Monitor sessions, revenue & live status",
  "Reach thousands of EV drivers instantly",
];

export default function StationOwner() {
  return (
    <section id="owners" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 card-soft md:p-14 lg:grid-cols-2">
          <Reveal className="flex justify-center">
            <PhoneMockup src="/screens/8.jpeg" alt="Station Owner Portal" />
          </Reveal>

          <Reveal delay={0.12}>
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-green-700">
              For station owners
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Power the future of <span className="gradient-text">EV charging</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Own a charger? Join the ChargePath network and turn it into income.
              Manage, monitor and grow your charging business from your phone.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
            >
              Start earning today
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}