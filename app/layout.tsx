import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alces FC — Más que un equipo, una manada",
  description:
    "Alces FC: club de fútbol amateur. Socios, tienda oficial, estadísticas y comunidad.",
  metadataBase: new URL("https://alsfc.com"),
  openGraph: {
    title: "Alces FC",
    description: "Más que un equipo, una manada.",
    url: "https://alsfc.com",
    siteName: "Alces FC",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ink-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
