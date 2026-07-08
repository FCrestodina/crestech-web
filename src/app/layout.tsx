import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import MetaPixel from "@/components/MetaPixel";
import { WHATSAPP_NUMBER } from "@/data/landings";
import { instrumentSans } from "@/lib/landingFonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crestech Studio — Branding, Contenido & Desarrollo Digital",
  description:
    "Equipo digital: branding, fotografía, contenido para redes y desarrollo web. Combinamos los servicios que tu negocio necesita.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Crestech Studio",
  description:
    "Equipo digital: branding, fotografía, contenido para redes sociales y desarrollo web.",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  image: `${siteUrl}/opengraph-image`,
  email: "devfrancocrestodina@gmail.com",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: "AR",
  sameAs: ["https://instagram.com/crestech.studio", "https://t.me/CrestechOK"],
  knowsAbout: [
    "Branding",
    "Fotografía",
    "Contenido para redes sociales",
    "Community management",
    "Diseño web",
    "Marketing digital",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`h-full ${instrumentSans.variable}`}>
      <head>
        {/* Marca que hay JS antes de la hidratación: sin esta clase, el CSS deja
            el contenido de .reveal-init visible (fallback sin JS). Ver globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <MetaPixel />
      </body>
    </html>
  );
}
