import { MapPin, Route, Wallet, Activity, Star, Building2 } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: MapPin, color: "from-blue-500 to-blue-600", title: "Find Stations", desc: "Search nearby or all charging stations with filters for connector type, charging type and distance radius." },
  { icon: Route, color: "from-cyan-500 to-blue-500", title: "Smart Route Planning", desc: "Plan battery-aware trips with optimal charging stops, distance, duration and estimated cost." },
  { icon: Activity, color: "from-violet-500 to-blue-500", title: "Real-Time Availability", desc: "See which chargers are free or in use, charging speed (kW) and connector type at a glance." },
  { icon: Wallet, color: "from-green-500 to-emerald-500", title: "In-App Wallet", desc: "Top up your balance and pay for charging sessions without fumbling for cards or cash." },
  { icon: Star, color: "from-amber-400 to-orange-500", title: "Favourite Stations", desc: "Save the stations you use most and reach them in a single tap from your home screen." },
  { icon: Building2, color: "from-teal-500 to-green-500", title: "Station Owner Portal", desc: "Own a charger? Register it for free, monitor sessions and start earning today." },
];

export default function Features() {
  return (
    <section id="features" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            Everything you need
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Powerful features, <span className="gradient-text">one app</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 card-soft transition duration-300 hover:-translate-y-1.5 hover:border-blue-200">
                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.color} shadow-lg transition group-hover:scale-110`}>
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}