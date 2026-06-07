import Reveal from "./Reveal";

const stats = [
  { value: "126+", label: "Charging stations" },
  { value: "5 km", label: "Smart radius search" },
  { value: "24/7", label: "Live availability" },
  { value: "Free", label: "To download" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-12 px-5">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-100 bg-white p-7 card-soft sm:p-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-[family-name:var(--font-poppins)] text-3xl font-extrabold gradient-text sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}