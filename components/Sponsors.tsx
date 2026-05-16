const sponsors = [
  "FUSCO",
  "THACO",
  "MERCADO PAGO",
  "DISCORD",
  "GOOGLE",
  "LIGA INFLUENCER",
];

export function Sponsors() {
  return (
    <section className="py-14 border-y border-white/5 bg-ink-900/40">
      <div className="container-x">
        <div className="text-center text-[11px] uppercase tracking-[0.4em] text-white/40">
          Nuestros aliados
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {sponsors.map((s) => (
            <span
              key={s}
              className="heading text-2xl md:text-3xl text-white/30 hover:text-gold-300 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
