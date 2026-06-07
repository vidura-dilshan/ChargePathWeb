"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Screens", href: "#screens" },
  { label: "For Owners", href: "#owners" },
];

const NAV_OFFSET = 72; // height of the fixed navbar

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reliable in-page smooth scroll with navbar offset
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      // keep the URL hash in sync (optional, nice for sharing/back button)
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200 bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 font-[family-name:var(--font-poppins)] text-lg font-extrabold text-slate-900 sm:text-xl"
        >
          <Image
            src="/logo.png"
            alt="ChargePath logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl shadow-lg shadow-cyan-500/20"
            priority
          />
          Charge<span className="gradient-text">Path</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          onClick={(e) => handleNavClick(e, "#download")}
          className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 md:inline-block"
        >
          Download
        </a>

        <button className="text-slate-800 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="block py-2 font-medium text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, "#download")}
            className="mt-2 block rounded-full bg-blue-600 px-6 py-2.5 text-center font-semibold text-white"
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}