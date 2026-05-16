import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NextMatch } from "@/components/NextMatch";
import { Suscripciones } from "@/components/Suscripciones";
import { Tienda } from "@/components/Tienda";
import { Plantel } from "@/components/Plantel";
import { Estadisticas } from "@/components/Estadisticas";
import { Comunidad } from "@/components/Comunidad";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NextMatch />
      <Suscripciones />
      <Tienda />
      <Plantel />
      <Estadisticas />
      <Comunidad />
      <Sponsors />
      <Footer />
    </main>
  );
}
