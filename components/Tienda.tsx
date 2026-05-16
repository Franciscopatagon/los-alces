"use client";

import { useState } from "react";
import { ShoppingBag, Truck } from "lucide-react";
import { products } from "@/lib/data";
import clsx from "clsx";

const fmt = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const categories = ["Todos", "Camisetas", "Buzos", "Accesorios"] as const;

export function Tienda() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Todos");
  const filtered =
    cat === "Todos" ? products : products.filter((p) => p.category === cat);

  return (
    <section
      id="tienda"
      className="py-24 md:py-32 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950 border-y border-white/5"
    >
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-gold-300/80">
              Tienda oficial
            </div>
            <h2 className="heading text-5xl md:text-7xl mt-3">
              Vestí los <span className="gold-text">colores</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Producción y envío directo del proveedor (dropshipping). Pagás
              con Mercado Pago, recibís en tu casa.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={clsx(
                  "px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition",
                  c === cat
                    ? "bg-gold-400 text-ink-950 border-gold-400"
                    : "border-white/10 text-white/70 hover:border-gold-400/40"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="card group hover:border-gold-400/50 transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-gold-400 text-ink-950 text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase">
                    {p.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-white/70 bg-ink-950/60 backdrop-blur px-2 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-gold-300 mt-1">
                    {fmt.format(p.price)}
                  </p>
                </div>
                <button className="size-11 rounded-full bg-gold-400 text-ink-950 grid place-items-center hover:bg-gold-300 transition">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-white/40">
          <Truck size={14} className="text-gold-400" />
          Envíos a todo el país · Producción 5-7 días hábiles
        </div>
      </div>
    </section>
  );
}
