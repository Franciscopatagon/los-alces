import { players } from "@/lib/data";

const posLabel: Record<string, string> = {
  POR: "Arquero",
  DEF: "Defensor",
  MED: "Mediocampista",
  DEL: "Delantero",
};

export function Plantel() {
  return (
    <section id="plantel" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-gold-300/80">
              El plantel
            </div>
            <h2 className="heading text-5xl md:text-7xl mt-3">
              La <span className="gold-text">manada</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Conocé a los jugadores. Click en cada uno para ver ficha
              técnica, posición y stats de la temporada.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((p) => (
            <article
              key={p.id}
              className="card group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

              <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                <span className="heading text-7xl gold-text leading-none">
                  {p.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest bg-ink-950/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                  {posLabel[p.position]}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs uppercase tracking-widest text-gold-300/80">
                  {p.nickname}
                </div>
                <h3 className="heading text-3xl text-white mt-1">{p.name}</h3>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Stat label="PJ" value={p.matches} />
                  <Stat label="Goles" value={p.goals} />
                  <Stat label="Asist." value={p.assists} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-ink-950/60 backdrop-blur rounded-lg border border-white/5 py-2">
      <div className="heading text-xl text-gold-300">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/50">
        {label}
      </div>
    </div>
  );
}
