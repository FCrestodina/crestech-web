import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crestech Studio — Branding, Contenido & Desarrollo Digital",
  description:
    "Estudio digital especializado en branding, contenido para redes sociales, diseño web y automatización. Fundado por Franco Crestodina.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crestech Studio",
    description: "Branding, Contenido & Desarrollo Digital",
    siteName: "Crestech Studio",
    url: "/",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crestech Studio",
    description: "Branding, Contenido & Desarrollo Digital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
