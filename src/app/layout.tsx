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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Crestech Studio",
  description:
    "Estudio digital especializado en branding, contenido para redes sociales, diseño web y automatización.",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  image: `${siteUrl}/opengraph-image`,
  email: "devfrancocrestodina@gmail.com",
  telephone: "+5491164578484",
  founder: { "@type": "Person", name: "Franco Crestodina" },
  areaServed: "AR",
  sameAs: ["https://instagram.com/crestech.studio"],
  knowsAbout: [
    "Branding",
    "Contenido para redes sociales",
    "Diseño web",
    "Automatización",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
