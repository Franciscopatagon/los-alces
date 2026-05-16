"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { players, seasonResults, topScorers } from "@/lib/data";
import { Sheet } from "lucide-react";

export function Estadisticas() {
  const total = seasonResults.reduce(
    (acc, m) => {
      acc.gf += m.gf;
      acc.gc += m.gc;
      acc.pts += m.puntos;
      if (m.puntos === 3) acc.w++;
      else if (m.puntos === 1) acc.d++;
      else acc.l++;
      return acc;
    },
    { gf: 0, gc: 0, pts: 0, w: 0, d: 0, l: 0 }
  );

  return (
    <section
      id="estadisticas"
      className="py-24 md:py-32 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950 border-y border-white/5"
    >
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-gold-300/80">
              Estadísticas
            </div>
            <h2 className="heading text-5xl md:text-7xl mt-3">
              La <span className="gold-text">data</span> no miente
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Datos en vivo desde nuestro Google Sheet interno. Cada partido
              se carga manualmente y la web se actualiza sola.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Sheet size={16} className="text-gold-400" />
            Sincronizado con Google Sheets · actualizado hoy
          </div>
        </div>

        {/* Totales */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4">
          <Big label="Puntos" value={total.pts} />
          <Big label="Ganados" value={total.w} />
          <Big label="Empates" value={total.d} />
          <Big label="Perdidos" value={total.l} />
          <Big label="Goles a favor" value={total.gf} />
          <Big label="Goles en contra" value={total.gc} />
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          {/* Line chart */}
          <div className="card p-6 lg:col-span-3">
            <h3 className="heading text-xl text-white">Rendimiento por fecha</h3>
            <p className="text-xs text-white/50 mt-1">
              Goles a favor vs en contra
            </p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonResults}>
                  <CartesianGrid stroke="#1a1a1a" />
                  <XAxis dataKey="fecha" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "#0a0a0a",
                      border: "1px solid #D4AF37",
                      borderRadius: 8,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line
                    type="monotone"
                    dataKey="gf"
                    name="GF"
                    stroke="#D4AF37"
                    strokeWidth={3}
                    dot={{ fill: "#D4AF37" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="gc"
                    name="GC"
                    stroke="#B0271F"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ fill: "#B0271F" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar chart */}
          <div className="card p-6 lg:col-span-2">
            <h3 className="heading text-xl text-white">Goleadores</h3>
            <p className="text-xs text-white/50 mt-1">Top 5 de la temporada</p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topScorers}>
                  <CartesianGrid stroke="#1a1a1a" />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "#0a0a0a",
                      border: "1px solid #D4AF37",
                      borderRadius: 8,
                    }}
                  />
                  <Bar
                    dataKey="goles"
                    fill="#D4AF37"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="mt-10 card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ink-900 text-gold-300/80 uppercase text-[11px] tracking-widest">
                <tr>
                  <th className="text-left px-5 py-3">#</th>
                  <th className="text-left px-5 py-3">Jugador</th>
                  <th className="text-left px-5 py-3">Pos</th>
                  <th className="text-right px-5 py-3">PJ</th>
                  <th className="text-right px-5 py-3">G</th>
                  <th className="text-right px-5 py-3">A</th>
                  <th className="text-right px-5 py-3">TA</th>
                  <th className="text-right px-5 py-3">TR</th>
                  <th className="text-right px-5 py-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {players.map((p, i) => (
                  <tr
                    key={p.id}
                    className="border-t border-white/5 hover:bg-ink-900/40"
                  >
                    <td className="px-5 py-3 heading text-gold-300">
                      {p.number}
                    </td>
                    <td className="px-5 py-3">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-white/40">
                        {p.nickname}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-white/70">{p.position}</td>
                    <td className="px-5 py-3 text-right">{p.matches}</td>
                    <td className="px-5 py-3 text-right font-semibold">
                      {p.goals}
                    </td>
                    <td className="px-5 py-3 text-right">{p.assists}</td>
                    <td className="px-5 py-3 text-right text-yellow-400/80">
                      {p.yellow}
                    </td>
                    <td className="px-5 py-3 text-right text-red-400/80">
                      {p.red}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block min-w-12 rounded-md bg-gold-400/10 border border-gold-400/30 text-gold-300 px-2 py-0.5">
                        {p.rating.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Big({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-5">
      <div className="heading text-4xl gold-text">{value}</div>
      <div className="text-[11px] uppercase tracking-widest text-white/50 mt-1">
        {label}
      </div>
    </div>
  );
}
