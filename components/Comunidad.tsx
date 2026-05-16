import { MessageCircle, Users, Sparkles } from "lucide-react";

export function Comunidad() {
  return (
    <section id="comunidad" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-radial -z-10" />
      <div className="container-x">
        <div className="card p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-gold-400/10 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-gold-300/80">
                Comunidad
              </div>
              <h2 className="heading text-5xl md:text-6xl mt-3">
                La <span className="gold-text">Manada</span> vive en Discord
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                Charlas en vivo, sorteos, contenido exclusivo y acceso directo
                a los jugadores. Sumate gratis al servidor con tu invitación
                como socio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="btn-gold">
                  <MessageCircle size={16} /> Unirme al Discord
                </a>
                <a href="#" className="btn-ghost">
                  Ver beneficios de socio
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gold-400" />
                  1.240 miembros
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-gold-400" />
                  Sorteos semanales
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop",
              ].map((src, i) => (
                <div
                  key={src}
                  className={
                    "relative overflow-hidden rounded-xl border border-white/5 " +
                    (i % 2 ? "translate-y-6" : "")
                  }
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-44 object-cover grayscale-[40%] hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
