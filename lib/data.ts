export type Player = {
  id: string;
  number: number;
  name: string;
  nickname?: string;
  position: "POR" | "DEF" | "MED" | "DEL";
  goals: number;
  assists: number;
  matches: number;
  yellow: number;
  red: number;
  rating: number;
  image: string;
};

export const players: Player[] = [
  {
    id: "queirolo",
    number: 10,
    name: "Omi Queirolo",
    nickname: "El Mago",
    position: "MED",
    goals: 7,
    assists: 9,
    matches: 12,
    yellow: 2,
    red: 0,
    rating: 8.4,
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "larroble",
    number: 4,
    name: "Diego Larroble",
    nickname: "El Capitán",
    position: "DEF",
    goals: 1,
    assists: 2,
    matches: 12,
    yellow: 4,
    red: 1,
    rating: 7.8,
    image:
      "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "raes",
    number: 30,
    name: "Raes NVJ",
    nickname: "Speedy",
    position: "DEL",
    goals: 11,
    assists: 4,
    matches: 11,
    yellow: 1,
    red: 0,
    rating: 8.7,
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "lopez",
    number: 7,
    name: "Mati López",
    nickname: "Pibe Oro",
    position: "MED",
    goals: 5,
    assists: 6,
    matches: 10,
    yellow: 1,
    red: 0,
    rating: 8.1,
    image:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "varela",
    number: 9,
    name: "Varela",
    nickname: "El Toro",
    position: "DEL",
    goals: 9,
    assists: 3,
    matches: 12,
    yellow: 3,
    red: 0,
    rating: 8.2,
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "ssian",
    number: 1,
    name: "Ssian",
    nickname: "El Muro",
    position: "POR",
    goals: 0,
    assists: 1,
    matches: 12,
    yellow: 1,
    red: 0,
    rating: 8.0,
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=900&auto=format&fit=crop",
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Camisetas" | "Buzos" | "Accesorios";
  badge?: "NUEVO" | "AGOTÁNDOSE" | "EDICIÓN LIMITADA";
  image: string;
};

export const products: Product[] = [
  {
    id: "home-26",
    name: "Camiseta Titular 2026",
    price: 38000,
    category: "Camisetas",
    badge: "NUEVO",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "away-26",
    name: "Camiseta Suplente 2026",
    price: 38000,
    category: "Camisetas",
    badge: "EDICIÓN LIMITADA",
    image:
      "https://images.unsplash.com/photo-1593109509252-3def72c4ca20?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "third-26",
    name: "Camiseta Alternativa",
    price: 42000,
    category: "Camisetas",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "hoodie-black",
    name: "Buzo Oversize Negro",
    price: 52000,
    category: "Buzos",
    badge: "AGOTÁNDOSE",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cap-gold",
    name: "Gorra Dorada AFC",
    price: 18000,
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "scarf",
    name: "Bufanda Oficial",
    price: 14000,
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?q=80&w=900&auto=format&fit=crop",
  },
];

export type PlanTier = {
  id: string;
  name: string;
  price: number;
  cadence: "mes" | "año";
  highlight?: boolean;
  perks: string[];
  cta: string;
};

export const plans: PlanTier[] = [
  {
    id: "cria",
    name: "Cría",
    price: 3500,
    cadence: "mes",
    perks: [
      "Acceso al servidor de Discord",
      "Newsletter exclusivo",
      "10% off en la tienda",
      "Votación de jugador del partido",
    ],
    cta: "Sumarme",
  },
  {
    id: "alce",
    name: "Alce",
    price: 6900,
    cadence: "mes",
    highlight: true,
    perks: [
      "Todo lo de Cría",
      "20% off permanente en tienda",
      "Sorteos mensuales de indumentaria",
      "Acceso al vestuario digital (vlogs internos)",
      "Saludo personalizado de un jugador / año",
    ],
    cta: "Quiero ser Alce",
  },
  {
    id: "manada",
    name: "Manada",
    price: 14900,
    cadence: "mes",
    perks: [
      "Todo lo de Alce",
      "Camiseta titular incluida c/temporada",
      "Meet & greet anual con el plantel",
      "Tu nombre en la web de socios",
      "Acceso anticipado a drops",
    ],
    cta: "Unirme a la Manada",
  },
];

// Datos derivados (mock) de Google Sheets para gráficos
export const seasonResults = [
  { fecha: "F1", gf: 3, gc: 1, puntos: 3 },
  { fecha: "F2", gf: 2, gc: 2, puntos: 1 },
  { fecha: "F3", gf: 4, gc: 0, puntos: 3 },
  { fecha: "F4", gf: 1, gc: 2, puntos: 0 },
  { fecha: "F5", gf: 5, gc: 1, puntos: 3 },
  { fecha: "F6", gf: 2, gc: 1, puntos: 3 },
  { fecha: "F7", gf: 3, gc: 3, puntos: 1 },
  { fecha: "F8", gf: 6, gc: 2, puntos: 3 },
  { fecha: "F9", gf: 1, gc: 0, puntos: 3 },
  { fecha: "F10", gf: 4, gc: 2, puntos: 3 },
  { fecha: "F11", gf: 2, gc: 0, puntos: 3 },
  { fecha: "F12", gf: 3, gc: 1, puntos: 3 },
];

export const topScorers = players
  .slice()
  .sort((a, b) => b.goals - a.goals)
  .slice(0, 5)
  .map((p) => ({ name: p.name.split(" ")[0], goles: p.goals }));

export const nextMatch = {
  rival: "Tigres del Oeste",
  fecha: "Sábado 23 May",
  hora: "16:00",
  cancha: "Complejo La Manada",
  competencia: "Fecha 13 — Liga Influencer",
};
