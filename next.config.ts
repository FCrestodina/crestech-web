import type { NextConfig } from "next";

// Content-Security-Policy: sitio estático (SSG). El App Router de Next emite ~26 scripts
// inline por página para la hidratación/streaming de React; sin middleware-nonce (que forzaría
// render dinámico y perdería el SSG) la única forma de no bloquearlos es 'unsafe-inline' en
// script-src. Sigue siendo una CSP útil: acota los ORÍGENES de scripts a 'self' + Umami, así un
// <script src> externo inyectado (p.ej. un NEXT_PUBLIC_UMAMI_SRC malicioso, hallazgo B11) queda
// bloqueado; y frame-ancestors 'none' corta el clickjacking (el objetivo principal del hallazgo).
// El sitio no renderiza contenido de usuario como HTML, así que la superficie de inyección inline
// es mínima. Endurecer a nonce+'strict-dynamic' queda como mejora futura si se agrega un CDN/edge.
// Umami Cloud carga el script de cloud.umami.is pero ENVÍA los eventos a gateway.umami.is;
// el wildcard cubre ambos (y endpoints regionales) para que las métricas no se bloqueen.
const scriptSrc = ["'self'", "'unsafe-inline'", "https://cloud.umami.is"];
const connectSrc = ["'self'", "https://*.umami.is"];

// El pixel de Meta solo se habilita (y afloja la CSP hacia Facebook) si está la env var.
// Sin ella, ni el script carga ni Facebook entra en la CSP.
if (process.env.NEXT_PUBLIC_META_PIXEL_ID) {
  scriptSrc.push("https://connect.facebook.net");
  connectSrc.push("https://www.facebook.com");
}

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  `connect-src ${connectSrc.join(" ")}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
