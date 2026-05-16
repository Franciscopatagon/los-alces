"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#socios", label: "Socios" },
  { href: "#tienda", label: "Tienda" },
  { href: "#plantel", label: "Plantel" },
  { href: "#estadisticas", label: "Estadísticas" },
  { href: "#comunidad", label: "Comunidad" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={36} />
          <span className="heading text-xl tracking-[0.18em] text-white">
            ALCES <span className="gold-text">FC</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-gold-300 transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#socios" className="hidden md:inline-flex btn-gold">
          Hacete socio
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-900">
          <div className="container-x py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 uppercase tracking-widest text-sm"
              >
                {l.label}
              </a>
            ))}
            <a href="#socios" className="btn-gold w-fit">
              Hacete socio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
