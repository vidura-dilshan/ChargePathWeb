import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "Facebook", href: "#", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>) },
  { label: "X (Twitter)", href: "#", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>) },
  { label: "Instagram", href: "#", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>) },
  { label: "LinkedIn", href: "#", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>) },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1428] py-14 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4">
        <div>
          <Link href="#home" className="flex items-center gap-2 font-[family-name:var(--font-poppins)] text-xl font-extrabold text-white">
            <Image src="/logo.png" alt="ChargePath logo" width={36} height={36} className="h-9 w-9 rounded-xl" />
            Charge<span className="gradient-text">Path</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            Find charging stations, plan smart routes and power your EV journey.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-slate-400 transition hover:bg-blue-600 hover:text-white">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Product</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li><a href="#features" className="transition hover:text-cyan-400">Features</a></li>
            <li><a href="#how" className="transition hover:text-cyan-400">How it works</a></li>
            <li><a href="#screens" className="transition hover:text-cyan-400">Screenshots</a></li>
            <li><a href="#download" className="transition hover:text-cyan-400">Download</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">For Owners</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li><a href="#owners" className="transition hover:text-cyan-400">Register a station</a></li>
            <li><a href="#owners" className="transition hover:text-cyan-400">Owner portal</a></li>
            <li><a href="#" className="transition hover:text-cyan-400">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>support@chargepath.app</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ChargePath. All rights reserved.
      </div>
    </footer>
  );
}