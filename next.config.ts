import type { NextConfig } from "next";

// Content-Security-Policy: sitio estático (SSG). El App Router de Next emite ~26 scripts
// inline por página para la hidratación/streaming de React; sin middleware-nonce (que forzaría
// render dinámico y perdería el SSG) la única forma de no bloquearlos es 'unsafe-inline' en
// script-src. Sigue siendo una CSP útil: acota los ORÍGENES de scripts a 'self' + Umami, así un
// <script src> externo inyectado (p.ej. un NEXT_PUBLIC_UMAMI_SRC malicioso, hallazgo B11) queda
// bloqueado; y frame-ancestors 'none' corta el clickjacking (el objetivo principal del hallazgo).
// El sitio no renderiza contenido de usuario como HTML, así que la superficie de inyección inline
// es mínima. Endurecer a nonce+'strict-dynamic' queda como mejora futura si se agrega un CDN/edge.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cloud.umami.is",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "connect-src 'self' https://cloud.umami.is",
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
