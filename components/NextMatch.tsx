import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { nextMatch } from "@/lib/data";

export function NextMatch() {
  return (
    <section className="container-x -mt-12 relative z-10">
      <div className="card shadow-gold p-6 md:p-8">
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* Local */}
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-full bg-ink-900 ring-1 ring-gold-400/40 grid place-items-center heading text-2xl text-gold-300">
              AFC
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                Local
              </div>
              <div className="heading text-2xl">Alces FC</div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center px-6 border-x border-white/5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-300/80 flex items-center justify-center gap-2">
              <Trophy size={14} /> Próximo partido
            </div>
            <div className="heading text-3xl mt-2">VS</div>
            <div className="mt-3 flex flex-col gap-1 text-sm text-white/70">
              <span className="flex items-center justify-center gap-2">
                <CalendarDays size={14} />
                {nextMatch.fecha} · {nextMatch.hora} hs
              </span>
              <span className="flex items-center justify-center gap-2">
                <MapPin size={14} />
                {nextMatch.cancha}
              </span>
              <span className="text-gold-300/80 text-xs tracking-widest uppercase">
                {nextMatch.competencia}
              </span>
            </div>
          </div>

          {/* Visitante */}
          <div className="flex items-center gap-4 md:justify-end">
            <div className="md:text-right">
              <div className="text-xs uppercase tracking-widest text-white/50">
                Visitante
              </div>
              <div className="heading text-2xl">{nextMatch.rival}</div>
            </div>
            <div className="size-16 rounded-full bg-ink-900 ring-1 ring-white/10 grid place-items-center heading text-2xl text-white/60">
              TDO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
