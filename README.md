# Alces FC — Dummy / Propuesta

Demo de la web para **Alces FC** (alsfc.com), pensado como propuesta visual
para mostrarle al equipo. Está armado en Next.js 14 + Tailwind, con datos
mockeados pero la estructura real de lo que se va a construir.

## Lo que ya incluye este dummy

- **Hero** con identidad del club (paleta negro + dorado, tipografía display).
- **Próximo partido** con marcador estilo "AFC vs Rival".
- **Suscripción de socios** (3 tiers — Cría / Alce / Manada) con CTA a
  Mercado Pago (cuotas mensuales, sin permanencia).
- **Tienda oficial** con filtros por categoría — modelo dropshipping,
  pagos con Mercado Pago.
- **Plantel** con cards de jugadores (foto, dorsal, posición, stats).
- **Estadísticas** alimentadas (en el dummy) por datos mock con la misma
  forma que tendría el Google Sheet: gráficos de barras y de líneas con
  Recharts + tabla por jugador.
- **Comunidad / Discord** con CTA al servidor privado.
- **Sponsors**, **Footer** y navegación mobile.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Stack propuesto para producción

| Capa | Tecnología |
| --- | --- |
| Frontend | Next.js 14 (App Router) + Tailwind |
| Hosting | Vercel (alsfc.com) |
| Pagos / Suscripciones | Mercado Pago (Subscriptions API) |
| Tienda | Productos en DB + checkout MP + webhook al proveedor (dropshipping) |
| Estadísticas | Google Sheets como CMS → Sheets API → cache en Vercel |
| Auth socios | Magic links (Resend) o login con Google Workspace |
| Comunidad | Discord OAuth → invite automático tras pagar la cuota |
| Mail | Resend / Google Workspace |
| Analítica | PostHog |

## Estructura

```
app/                 → rutas (App Router)
components/          → Hero, Tienda, Estadísticas, etc.
lib/data.ts          → datos mock (jugadores, productos, planes, partidos)
tailwind.config.ts   → paleta y tipografía del club
```

Todas las imágenes son placeholders de Unsplash; al ir a producción se
reemplazan por las fotos reales del Instagram (@losalcesfc) y los drops
de indumentaria.
