import { Check, ShieldCheck } from "lucide-react";
import { plans } from "@/lib/data";
import clsx from "clsx";

const fmt = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function Suscripciones() {
  return (
    <section id="socios" className="py-24 md:py-32 relative">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-gold-300/80">
              Socios
            </div>
            <h2 className="heading text-5xl md:text-7xl mt-3">
              Sumate a <span className="gold-text">la manada</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Cuota mensual con débito automático vía Mercado Pago. Cancelás
              cuando quieras. Beneficios reales, no humo.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck size={16} className="text-gold-400" />
            Pagos seguros con Mercado Pago
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className={clsx(
                "card p-7 flex flex-col",
                p.highlight &&
                  "border-gold-400/60 bg-gradient-to-b from-gold-400/10 via-ink-800/40 to-ink-900 shadow-gold"
              )}
            >
              {p.highlight && (
                <span className="absolute top-5 right-5 rounded-full bg-gold-400 text-ink-950 text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                  Más elegida
                </span>
              )}
              <div className="text-xs uppercase tracking-[0.3em] text-gold-300/80">
                Plan
              </div>
              <h3 className="heading text-4xl mt-2">{p.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="heading text-5xl gold-text">
                  {fmt.format(p.price)}
                </span>
                <span className="text-white/50 text-sm">/ {p.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80 flex-1">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-gold-400"
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "mt-8",
                  p.highlight ? "btn-gold" : "btn-ghost"
                )}
              >
                {p.cta}
              </button>
              <div className="mt-3 text-[11px] text-white/40 text-center">
                Sin permanencia · Baja con un click
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
