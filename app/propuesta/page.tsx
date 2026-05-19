"use client";

import { Printer, ArrowDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  CheckCircle2,
  XCircle,
  CreditCard,
  ShoppingBag,
  BarChart3,
  Megaphone,
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Wallet,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const TOTAL = 13;

function Slide({
  n,
  title,
  eyebrow,
  children,
  className = "",
}: {
  n: number;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`slide relative ${className}`} data-slide={n}>
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none" />
      {/* Header */}
      {(eyebrow || title) && (
        <header className="absolute top-12 left-16 right-16 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.5em] text-gold-300/80">
            {eyebrow}
          </div>
          <div className="text-[11px] uppercase tracking-[0.5em] text-white/30">
            {String(n).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </div>
        </header>
      )}

      {/* Title */}
      {title && (
        <div className="absolute top-24 left-16 right-16">
          <h2 className="heading text-7xl text-white leading-[0.95]">
            {title}
          </h2>
          <div className="mt-4 h-px w-24 bg-gold-400" />
        </div>
      )}

      {/* Body */}
      <div className="absolute inset-0 px-16 pt-56 pb-20">{children}</div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-16 right-16 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/30">
        <div className="flex items-center gap-3">
          <Logo size={22} />
          <span>Alces FC · 2026</span>
        </div>
        <span>alsfc.com · Propuesta MVP</span>
      </footer>
    </section>
  );
}

export default function PropuestaPage() {
  return (
    <main className="propuesta">
      {/* Toolbar (no print) */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="btn-gold !py-2 !px-4 !text-xs"
        >
          <Printer size={14} /> Guardar PDF
        </button>
      </div>
      <div className="no-print text-center text-xs text-white/40 py-3">
        Scrolleá para ver las 13 slides · Click en "Guardar PDF" para
        exportar
        <ArrowDown size={12} className="inline ml-2" />
      </div>

      {/* 1 — Portada */}
      <Slide n={1} className="cover">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div className="absolute inset-0 px-16 flex flex-col justify-between py-20">
          <div className="flex items-center justify-between">
            <Logo size={64} />
            <div className="text-right text-[10px] uppercase tracking-[0.4em] text-white/40">
              alsfc.com
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.5em] text-gold-300/80">
              Propuesta · Mayo 2026
            </div>
            <h1 className="heading text-[10rem] leading-[0.85] mt-6 text-white">
              ALCES <span className="gold-text">FC</span>
            </h1>
            <div className="heading text-5xl text-white/80 mt-4 tracking-wide">
              Desarrollo Web · MVP
            </div>
            <p className="mt-8 text-xl text-white/60 max-w-2xl">
              Suscripciones, tienda y estadísticas en una sola plataforma.
            </p>
          </div>

          <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.4em] text-white/40">
            <span>Preparado por Francisco Mana</span>
            <span>alsfc.com</span>
          </div>
        </div>
      </Slide>

      {/* 2 — Resumen ejecutivo */}
      <Slide n={2} eyebrow="Resumen ejecutivo" title="La propuesta, en 30 segundos">
        <div className="flex flex-col h-full justify-between">
          <p className="text-2xl text-white/85 leading-snug max-w-5xl">
            Construimos una web profesional para Alces FC que permite a sus
            fans <span className="gold-text">hacerse socios</span> pagando una
            cuota mensual, <span className="gold-text">comprar productos</span>
            {" "}oficiales y <span className="gold-text">seguir las estadísticas</span>{" "}
            del equipo — todo integrado con Mercado Pago y conectado al
            Discord del club.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <Big stat="10-14" sub="días de entrega" />
            <Big stat="20 hs" sub="de desarrollo" />
            <Big stat="MVP" sub="100% funcional" />
          </div>
        </div>
      </Slide>

      {/* 3 — Objetivo */}
      <Slide n={3} eyebrow="Objetivo" title="¿Qué resuelve esta web?">
        <div className="grid grid-cols-2 gap-6 h-full">
          <ObjCard
            icon={CreditCard}
            title="Suscripciones mensuales"
            text="Socios que pagan automáticamente y acceden a beneficios exclusivos: Discord, descuentos, sorteos."
          />
          <ObjCard
            icon={ShoppingBag}
            title="Tienda oficial"
            text="Marketplace de indumentaria con cobros por Mercado Pago y envío directo del proveedor (dropshipping)."
          />
          <ObjCard
            icon={BarChart3}
            title="Estadísticas en vivo"
            text="Tabla de jugadores y gráficos de la temporada, cargados desde un Excel semanal."
          />
          <ObjCard
            icon={Megaphone}
            title="Espacios publicitarios"
            text="Banners listos para monetizar el tráfico cuando crezca la audiencia."
          />
        </div>
      </Slide>

      {/* 4 — Suscripciones */}
      <Slide n={4} eyebrow="Cómo funciona" title="Suscripciones de socios">
        <FlowDiagram
          steps={[
            { label: "Usuario", icon: Sparkles, note: "Elige su plan" },
            { label: "Mercado Pago", icon: CreditCard, note: "Débito automático mensual" },
            { label: "Web", icon: ShieldCheck, note: "Habilita beneficios" },
            { label: "Discord", icon: MessageCircle, note: "Acceso al canal privado" },
          ]}
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-10 gap-y-3 text-white/80 text-lg">
          <Li>El socio elige plan y paga con Mercado Pago.</Li>
          <Li>Recibe un mail con su acceso al portal.</Li>
          <Li>Se le habilitan botones exclusivos en la web.</Li>
          <Li>Si deja de pagar, se le revocan los beneficios.</Li>
        </ul>
      </Slide>

      {/* 5 — Marketplace */}
      <Slide n={5} eyebrow="Cómo funciona" title="Marketplace · Dropshipping">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-10 items-center h-full">
          <div className="space-y-5 text-white/85 text-lg">
            <Step n={1} text="El cliente elige producto y paga con Mercado Pago." />
            <Step
              n={2}
              text="El sistema envía un mail automático al proveedor con: detalle, cantidades, nombre, dirección, teléfono y fecha estimada."
            />
            <Step n={3} text="El proveedor produce y despacha." />
            <Step n={4} text="El club no toca stock ni logística." />
          </div>

          <div className="w-px h-72 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent" />

          <div className="card p-8 bg-ink-900/70">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-full bg-gold-400/20 grid place-items-center">
                <Mail size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
                  Mail automático
                </div>
                <div className="heading text-xl">Nueva orden #1042</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70 font-mono">
              <div>Producto: Camiseta Titular 2026 · Talle L</div>
              <div>Cantidad: 1 unidad</div>
              <div>Cliente: Juan Pérez</div>
              <div>Tel: +54 11 1234-5678</div>
              <div>Dirección: Av. Siempre Viva 742, CABA</div>
              <div className="text-gold-300">Entrega estimada: 7 días</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 6 — Estadísticas */}
      <Slide n={6} eyebrow="Cómo funciona" title="Estadísticas semanales">
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-white/85 text-lg">
            <Step n={1} text="Una persona del equipo carga los datos del partido en un Excel / Google Sheet, una vez por semana." />
            <Step n={2} text="La web detecta los cambios y se actualiza sola." />
            <Step n={3} text="Los fans ven tabla de goleadores, gráficos de rendimiento y ficha técnica de cada jugador." />

            <div className="mt-8 card p-5 bg-ink-900/70 inline-block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
                Resultado
              </div>
              <div className="heading text-2xl mt-1">
                Cero código, todo desde una planilla.
              </div>
            </div>
          </div>

          <div className="card p-6 bg-ink-900/60">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
              Vista del Google Sheet
            </div>
            <table className="mt-3 w-full text-xs">
              <thead className="text-gold-300/70 border-b border-white/10">
                <tr>
                  <th className="text-left py-2">Fecha</th>
                  <th className="text-left">Rival</th>
                  <th className="text-right">GF</th>
                  <th className="text-right">GC</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {[
                  ["F10", "Tigres", 4, 2],
                  ["F11", "River Star", 2, 0],
                  ["F12", "Halcones", 3, 1],
                  ["F13", "T. del Oeste", "—", "—"],
                ].map((r, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-2">{r[0]}</td>
                    <td>{r[1]}</td>
                    <td className="text-right text-gold-300">{r[2]}</td>
                    <td className="text-right">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/50">
              <ArrowRight size={12} className="text-gold-400" />
              Se sincroniza con la web automáticamente
            </div>
          </div>
        </div>
      </Slide>

      {/* 7 — Publicidad */}
      <Slide n={7} eyebrow="Monetización" title="Espacios publicitarios">
        <div className="grid grid-cols-[1fr_1.2fr] gap-12 items-center h-full">
          <div className="space-y-6 text-white/85 text-lg">
            <p>
              La web va a tener <span className="gold-text">3 espacios</span>{" "}
              reservados para sponsors de la marca.
            </p>
            <ul className="space-y-3">
              <Li>Banner superior en home.</Li>
              <Li>Espacio lateral en tienda.</Li>
              <Li>Banner inferior en estadísticas.</Li>
            </ul>
            <p className="text-white/60 text-base">
              La tarifa por sponsor se define según el tráfico web. Cuando
              crezca la audiencia, se activan y empiezan a generar ingresos
              extra para el club.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <AdBox label="Home · 970×90" />
            <AdBox label="Tienda · 300×600" big />
            <AdBox label="Stats · 728×90" wide />
          </div>
        </div>
      </Slide>

      {/* 8 — Stack tecnológico */}
      <Slide n={8} eyebrow="Stack tecnológico" title="Qué usamos y para qué">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-full text-xs">
          <Tool
            name="Google Workspace"
            desc="Mails con dominio propio (@alsfc.com) + Drive, Calendar y Docs."
            cost="USD 17 / mes"
          />
          <Tool
            name="Mercado Pago"
            desc="Cobra suscripciones y compras con tarjeta, débito o transferencia."
            cost="% por venta"
          />
          <Tool
            name="Don Web"
            desc="Hosting del dominio alsfc.com — el 'alquiler' del nombre."
            cost="$20.000 ARS / año"
          />
          <Tool
            name="Supabase"
            desc="Base de datos: usuarios, suscripciones, productos, estadísticas."
            cost="Gratis al inicio · USD 25/mes con escala"
            highlight
          />
          <Tool
            name="Resend"
            desc="Envía mails automáticos: bienvenida, orden al proveedor, recibos."
            cost="Gratis hasta 3.000 mails/mes"
          />
          <Tool
            name="Vercel"
            desc="Servidor donde la web vive online 24/7."
            cost="Gratis al inicio"
          />
          <Tool
            name="PostHog"
            desc="Analítica: qué hacen los usuarios, dónde abandonan."
            cost="Gratis"
          />
          <div className="card p-4 bg-ink-900/60">
            <div className="text-[9px] uppercase tracking-[0.3em] text-gold-300/80">
              Glosario rápido
            </div>
            <ul className="mt-2 space-y-1 text-[11px] text-white/70 leading-snug">
              <li><b className="text-white">Dominio</b>: la dirección de la web.</li>
              <li><b className="text-white">Base de datos</b>: caja fuerte digital.</li>
              <li><b className="text-white">Hosting</b>: dónde "vive" la web.</li>
              <li><b className="text-white">Mercado Pago</b>: Posnet online.</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 9 — Mercado Pago tabla */}
      <Slide n={9} eyebrow="Mercado Pago" title="Tabla de comisiones">
        <div className="card overflow-hidden bg-ink-900/60">
          <table className="w-full">
            <thead className="bg-ink-900 text-gold-300/80 uppercase text-[11px] tracking-[0.3em]">
              <tr>
                <th className="text-left px-8 py-5">Plazo de acreditación</th>
                <th className="text-right px-8 py-5">Tarjeta crédito</th>
                <th className="text-right px-8 py-5">Tarjeta débito</th>
                <th className="text-right px-8 py-5">Efectivo / Transf.</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {[
                ["Inmediata", "~6,29% + IVA", "~3,99% + IVA", "~4,99% + IVA", false],
                ["14 días", "~4,99% + IVA", "~3,49% + IVA", "~3,99% + IVA", false],
                ["30 días", "~3,49% + IVA", "~2,99% + IVA", "~3,49% + IVA", false],
              ].map(([plazo, c, d, e], i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="px-8 py-5 heading text-2xl text-white">
                    {plazo}
                  </td>
                  <td className="px-8 py-5 text-right text-white/80">{c}</td>
                  <td className="px-8 py-5 text-right text-white/80">{d}</td>
                  <td className="px-8 py-5 text-right text-white/80">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-sm text-white/40 italic">
          Tarifas estimadas vigentes 2026. Confirmar valores actualizados al
          momento de activar la cuenta.
        </p>
      </Slide>

      {/* 10 — Resumen de costos */}
      <Slide n={10} eyebrow="Costos operativos" title="Costos al detalle">
        <div className="grid grid-cols-3 gap-5">
          <CostCard
            title="Mensual al arrancar"
            big="~USD 17"
            sub="/ mes"
            items={[
              "Google Workspace: USD 17",
              "Supabase: gratis",
              "Resend / Vercel / PostHog: gratis",
            ]}
            highlight
          />
          <CostCard
            title="Mensual con escala"
            big="~USD 42"
            sub="/ mes"
            items={[
              "Google Workspace: USD 17",
              "Supabase: USD 25 (cuando crezca el volumen)",
              "Resto: sigue gratis",
            ]}
          />
          <CostCard
            title="Costo anual fijo"
            big="$20.000"
            sub="ARS / año"
            items={["Don Web (dominio alsfc.com)"]}
          />
        </div>

        <div className="mt-6 card p-6 bg-ink-900/60 flex items-center gap-6">
          <div className="size-14 rounded-full bg-gold-400/15 grid place-items-center">
            <Wallet size={22} className="text-gold-400" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
              Costo variable
            </div>
            <div className="heading text-2xl mt-1 text-white">
              Mercado Pago: 3% a 6% sobre cada venta o suscripción procesada.
            </div>
          </div>
        </div>
      </Slide>

      {/* 11 — Alcance del MVP */}
      <Slide n={11} eyebrow="Alcance del MVP" title="Qué incluye y qué no">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <CheckCircle2 className="text-gold-400" size={22} />
              <h3 className="heading text-2xl text-white">Incluye</h3>
            </div>
            <ul className="space-y-2.5 text-white/85 text-sm">
              <Li>Landing con identidad de marca.</Li>
              <Li>Sistema de socios con planes (Mercado Pago).</Li>
              <Li>Acceso mediante Signup y Google Auth.</Li>
              <Li>Tienda con catálogo + checkout.</Li>
              <Li>Mail automático al proveedor por cada venta.</Li>
              <Li>Sección de estadísticas conectada al Excel/Sheet.</Li>
              <Li>Login de socios y acceso restringido al Discord.</Li>
              <Li>Panel simple para cargar productos y partidos.</Li>
              <Li>Planilla para actualización de imágenes publicitarias.</Li>
              <Li>Creación y configuración de Google Workspace.</Li>
              <Li>Compra y configuración del dominio web.</Li>
              <Li>Espacios publicitarios listos para activar.</Li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <XCircle className="text-white/40" size={22} />
              <h3 className="heading text-2xl text-white/70">
                No incluye en esta etapa
              </h3>
            </div>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <Li dim>Sistema de envíos propio (es dropshipping).</Li>
              <Li dim>Integración automática con proveedores vía API.</Li>
              <Li dim>Estadísticas en tiempo real (son semanales).</Li>
            </ul>

            <div className="mt-10 card p-5 bg-ink-900/60">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
                Importante
              </div>
              <p className="mt-2 text-sm text-white/80">
                Todo lo que queda "fuera" se puede sumar en una segunda etapa
                cuando el club valide el funcionamiento del MVP.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 12 — Inversión */}
      <Slide n={12} eyebrow="Inversión" title="Tiempos y honorarios">
        <div className="grid grid-cols-[auto_1fr_1fr] gap-5 h-full">
          <div className="card p-6 bg-ink-900/60 w-64">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80 flex items-center gap-2">
              <Clock size={12} /> Tiempos
            </div>
            <div className="heading text-5xl mt-3 gold-text">10-14</div>
            <div className="text-xs text-white/60 mt-1">días de entrega</div>
            <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
              Honorarios
            </div>
            <div className="heading text-3xl mt-2 text-white">$50.000 / hr</div>
            <div className="text-xs text-white/60 mt-1">
              × 20 hs = <b className="text-white">$1.000.000 ARS</b>
            </div>
          </div>

          <PlanCard
            name="Plan 1"
            subtitle="Entrega puntual"
            total="$1.000.000 ARS"
            payment={[
              { label: "Al inicio (50%)", amount: "$500.000" },
              { label: "Al entregar (50%)", amount: "$500.000" },
            ]}
            includes={[
              "Desarrollo completo del MVP",
              "Capacitación al equipo",
              "15 días de soporte post-entrega",
            ]}
          />

          <PlanCard
            name="Plan 2"
            subtitle="Con seguimiento anual"
            total="$1.300.000 ARS"
            recommended
            payment={[
              { label: "Al inicio (50% + fee anual)", amount: "$800.000" },
              { label: "Al entregar (50%)", amount: "$500.000" },
            ]}
            includes={[
              "Todo lo del Plan 1",
              "Reparación de bugs durante el año",
              "Pequeños cambios estéticos",
              "Asesoramiento técnico de eCommerce vía WhatsApp y videollamadas",
            ]}
          />
        </div>
      </Slide>

      {/* 13 — Próximos pasos */}
      <Slide n={13} eyebrow="Próximos pasos" title="Si arrancamos hoy…">
        <div className="grid grid-cols-[1.3fr_1fr] gap-12 items-center h-full">
          <ol className="space-y-5">
            {[
              "Aprobación de la propuesta.",
              "Firma y seña inicial.",
              "Setup de cuentas (Google Workspace, Mercado Pago, Don Web).",
              "Kickoff de desarrollo.",
              "Entrega, capacitación y go-live.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-5">
                <div className="size-12 shrink-0 rounded-full border border-gold-400/40 bg-ink-900/60 grid place-items-center heading text-xl gold-text">
                  {i + 1}
                </div>
                <div className="pt-2 text-xl text-white/85">{t}</div>
              </li>
            ))}
          </ol>

          <div className="card p-8 bg-gradient-to-br from-gold-400/10 via-ink-900 to-ink-950 shadow-gold">
            <Logo size={56} />
            <div className="mt-6 heading text-3xl text-white">
              Francisco Mana
            </div>
            <div className="text-gold-300 text-sm mt-1">
              Desarrollo Web · eCommerce
            </div>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400" />
                Mail directo
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-gold-400" />
                WhatsApp directo
              </div>
            </div>
            <div className="mt-8 hairline" />
            <div className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
              Listos para arrancar
            </div>
          </div>
        </div>
      </Slide>
    </main>
  );
}

/* -------- small helpers -------- */

function Big({ stat, sub }: { stat: string; sub: string }) {
  return (
    <div className="card p-6 bg-ink-900/60">
      <div className="heading text-5xl gold-text">{stat}</div>
      <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-2">
        {sub}
      </div>
    </div>
  );
}

function ObjCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="card p-7 bg-ink-900/60 flex flex-col">
      <div className="size-12 rounded-xl bg-gold-400/15 grid place-items-center mb-5">
        <Icon size={22} className="text-gold-400" />
      </div>
      <h3 className="heading text-3xl text-white">{title}</h3>
      <p className="mt-3 text-white/70 text-base">{text}</p>
    </div>
  );
}

function FlowDiagram({
  steps,
}: {
  steps: { label: string; icon: LucideIcon; note: string }[];
}) {
  return (
    <div className="flex items-center gap-3">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 flex-1">
          <div className="card p-5 bg-ink-900/60 flex-1">
            <div className="size-10 rounded-full bg-gold-400/15 grid place-items-center mb-3">
              <s.icon size={18} className="text-gold-400" />
            </div>
            <div className="heading text-xl text-white">{s.label}</div>
            <div className="text-xs text-white/55 mt-1">{s.note}</div>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={20} className="text-gold-400/60 shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

function Li({
  children,
  dim,
}: {
  children: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-2 size-1.5 rounded-full shrink-0 ${
          dim ? "bg-white/30" : "bg-gold-400"
        }`}
      />
      <span>{children}</span>
    </li>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-9 shrink-0 rounded-full bg-gold-400/15 border border-gold-400/40 grid place-items-center heading gold-text">
        {n}
      </div>
      <div className="pt-1">{text}</div>
    </div>
  );
}

function AdBox({
  label,
  big,
  wide,
}: {
  label: string;
  big?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-dashed border-gold-400/40 bg-gold-400/5 grid place-items-center text-gold-300/80 text-xs uppercase tracking-[0.3em] ${
        big ? "row-span-2 h-full" : "h-28"
      } ${wide ? "col-span-2" : ""}`}
    >
      Tu sponsor acá
      <div className="text-white/40 normal-case tracking-normal text-[10px] mt-1">
        {label}
      </div>
    </div>
  );
}

function Tool({
  name,
  desc,
  cost,
  highlight,
}: {
  name: string;
  desc: string;
  cost: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card p-4 flex flex-col ${
        highlight ? "border-gold-400/50 bg-gold-400/5" : "bg-ink-900/60"
      }`}
    >
      <div className="heading text-base text-white leading-tight">{name}</div>
      <p className="mt-1.5 text-white/65 leading-snug text-[11px] flex-1">
        {desc}
      </p>
      <div className="mt-2 hairline" />
      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold-300 leading-tight">
        {cost}
      </div>
    </div>
  );
}

function CostCard({
  title,
  big,
  sub,
  items,
  highlight,
}: {
  title: string;
  big: string;
  sub: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`card p-6 ${
        highlight ? "border-gold-400/60 bg-gold-400/5" : "bg-ink-900/60"
      }`}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
        {title}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="heading text-5xl gold-text">{big}</span>
        <span className="text-sm text-white/50">{sub}</span>
      </div>
      <ul className="mt-4 space-y-1.5 text-xs text-white/70">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 size-1 rounded-full bg-gold-400 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanCard({
  name,
  subtitle,
  total,
  payment,
  includes,
  recommended,
}: {
  name: string;
  subtitle: string;
  total: string;
  payment: { label: string; amount: string }[];
  includes: string[];
  recommended?: boolean;
}) {
  return (
    <div
      className={`card p-6 flex flex-col relative ${
        recommended
          ? "border-gold-400/60 bg-gradient-to-b from-gold-400/10 via-ink-900 to-ink-950 shadow-gold"
          : "bg-ink-900/60"
      }`}
    >
      {recommended && (
        <span className="absolute top-4 right-4 bg-gold-400 text-ink-950 text-[9px] font-bold tracking-widest px-2 py-1 uppercase">
          Recomendado
        </span>
      )}
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">
        {name}
      </div>
      <h3 className="heading text-3xl mt-1 text-white">{subtitle}</h3>
      <div className="mt-3 heading text-4xl gold-text">{total}</div>

      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Forma de pago
        </div>
        <div className="mt-2 space-y-1.5 text-sm">
          {payment.map((p) => (
            <div key={p.label} className="flex justify-between text-white/80">
              <span>{p.label}</span>
              <b className="text-gold-300">{p.amount}</b>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 hairline" />

      <div className="mt-4">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
          Incluye
        </div>
        <ul className="space-y-1.5 text-sm text-white/80">
          {includes.map((i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-gold-400 mt-0.5 shrink-0" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
