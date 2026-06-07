import { Download, Search, Navigation, Zap } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: Download, title: "Download the app", desc: "Install ChargePath from the Play Store and create your free account." },
  { icon: Search, title: "Find a station", desc: "Browse nearby chargers, filter by connector and check live availability." },
  { icon: Navigation, title: "Plan your route", desc: "Enter your trip and battery level — we'll plot the best charging stops." },
  { icon: Zap, title: "Charge & go", desc: "Book, pay from your wallet, and hit the road with confidence." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-mesh px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-blue-600">
            Simple by design
          </p>
          <h2 className="mt-3 text-center font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-slate-100 bg-white p-7 text-center card-soft">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                  Step {i + 1}
                </span>
                <div className="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50">
                  <s.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}