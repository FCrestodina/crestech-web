import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestech Studio — Branding, Contenido & Desarrollo Digital",
  description:
    "Estudio digital especializado en branding, contenido para redes sociales, diseño web y automatización. Fundado por Franco Crestodina.",
  openGraph: {
    title: "Crestech Studio",
    description: "Branding, Contenido & Desarrollo Digital",
    siteName: "Crestech Studio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
