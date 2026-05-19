import { Instagram, Youtube, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <span className="heading text-2xl tracking-[0.18em]">
              ALCES <span className="gold-text">FC</span>
            </span>
          </div>
          <p className="mt-4 text-white/60 max-w-md text-sm">
            Club de fútbol amateur. Espectáculo, contenido y comunidad.
            Fundado por gente que ama el juego.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Social href="https://instagram.com/losalcesfc" icon={Instagram} />
            <Social href="https://youtube.com/@LosAlcesFC" icon={Youtube} />
            <Social href="#comunidad" icon={MessageCircle} />
            <Social href="mailto:hola@alsfc.com" icon={Mail} />
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-gold-300/80">
            Club
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#socios">Socios</a></li>
            <li><a href="#tienda">Tienda</a></li>
            <li><a href="#plantel">Plantel</a></li>
            <li><a href="#estadisticas">Estadísticas</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-gold-300/80">
            Legal
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Términos</li>
            <li>Política de privacidad</li>
            <li>Política de devolución</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Alces FC · alsfc.com</span>
          <span>
            <span className="text-gold-300/80">Demo · Propuesta MVP 2026</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      className="size-10 grid place-items-center rounded-full border border-white/10 hover:border-gold-400/60 hover:text-gold-300 transition"
    >
      <Icon size={18} />
    </a>
  );
}
