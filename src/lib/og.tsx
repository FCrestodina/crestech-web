import { ImageResponse } from "next/og";

// Helper compartido para generar imágenes Open Graph (1200x630) con la marca
// Crestech: fondo negro, glow dorado, logo, título en degradé y subtítulo.
// Lo usan el OG del home y el de cada landing por rubro.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const logoSvg = `<svg width="120" height="120" viewBox="-60 -60 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5DC7B"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#8B6914"/>
    </linearGradient>
  </defs>
  <path d="M 32 -42 A 50 50 0 1 0 32 42 L 24 24 A 33 33 0 1 1 24 -24 Z" fill="url(#g)"/>
  <rect x="-12" y="-8" width="36" height="5" fill="url(#g)"/>
  <rect x="3" y="-8" width="6" height="28" fill="url(#g)"/>
</svg>`;

export const logoDataUri = `data:image/svg+xml,${encodeURIComponent(logoSvg)}`;
const goldGradient = "linear-gradient(135deg, #F5DC7B 0%, #D4AF37 40%, #8B6914 100%)";

// Icono cuadrado (favicon / apple-icon) con el logo dorado sobre fondo negro.
export function iconImage(px: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={Math.round(px * 0.78)} height={Math.round(px * 0.78)} alt="" />
      </div>
    ),
    { width: px, height: px },
  );
}

export function ogImage(title: string, subtitle: string) {
  // El título de las landings es una frase larga; el del home es la marca.
  const titleSize = title.length > 28 ? 60 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 38%, rgba(212,175,55,0.16), transparent 60%)",
          fontFamily: "sans-serif",
          padding: "64px 80px",
          textAlign: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={108} height={108} alt="" />
        <div
          style={{
            marginTop: "32px",
            fontSize: `${titleSize}px`,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            maxWidth: "1000px",
            backgroundImage: goldGradient,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "32px",
            color: "#cccccc",
            maxWidth: "900px",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: "44px",
            fontSize: "24px",
            color: "#D4AF37",
            letterSpacing: "0.04em",
          }}
        >
          crestech.com.ar
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
