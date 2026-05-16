import { ArrowRight, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32"
    >
      {/* fondo */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1900&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-gold-radial" />
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      </div>

      <div className="container-x relative">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold-300/80">
          <span className="size-1.5 rounded-full bg-gold-400 animate-pulse" />
          Temporada 2026 · Liga Influencer
        </div>

        <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <h1 className="heading text-[14vw] leading-[0.85] md:text-[8rem] text-white">
              MÁS QUE
              <br />
              UN EQUIPO,
              <br />
              <span className="gold-text">UNA MANADA.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/70 text-lg">
              Alces FC es el club de fútbol amateur que mezcla espectáculo,
              comunidad y contenido. Sumate como socio, vestí los colores y
              vivila desde adentro.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#socios" className="btn-gold">
                Hacete socio <ArrowRight size={16} />
              </a>
              <a href="#tienda" className="btn-ghost">
                Tienda oficial
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
              <a
                href="https://instagram.com/losalcesfc"
                className="flex items-center gap-2 hover:text-gold-300"
              >
                <Instagram size={16} /> @losalcesfc
              </a>
              <a
                href="https://youtube.com/@LosAlcesFC"
                className="flex items-center gap-2 hover:text-gold-300"
              >
                <Youtube size={16} /> /LosAlcesFC
              </a>
              <span className="hidden sm:inline">2.816 seguidores</span>
            </div>
          </div>

          <div className="hidden md:block animate-floaty">
            <Logo size={220} />
          </div>
        </div>
      </div>

      {/* ticker */}
      <div className="mt-16 border-y border-white/5 bg-ink-900/70">
        <div className="ticker-mask overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap py-4 animate-[shimmer_30s_linear_infinite] text-gold-300/80 heading tracking-widest text-2xl">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                ALCES FC · 2026 · LIGA INFLUENCER · ALCES FC · LA MANADA · 2026 ·
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
