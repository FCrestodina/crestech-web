import Script from "next/script";

// Umami Cloud (plan Hobby, sin cookies). Se activa seteando la env var
// NEXT_PUBLIC_UMAMI_WEBSITE_ID (el website ID que da cloud.umami.is).
// Umami captura los parámetros utm_* de la URL como campañas automáticamente,
// así que el tráfico del Prospector (utm_source=prospector, utm_campaign=<rubro>)
// aparece segmentado sin código extra.
export default function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC ?? "https://cloud.umami.is/script.js";

  if (!websiteId) return null;

  return <Script defer src={src} data-website-id={websiteId} strategy="afterInteractive" />;
}
