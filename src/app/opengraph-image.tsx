import { ImageResponse } from "next/og";

export const alt = "Crestech Studio — Branding, Contenido & Desarrollo Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

const logoDataUri = `data:image/svg+xml,${encodeURIComponent(logoSvg)}`;

const goldGradient = "linear-gradient(135deg, #F5DC7B 0%, #D4AF37 40%, #8B6914 100%)";

export default function Image() {
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
          padding: "64px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={120} height={120} alt="" />
        <div
          style={{
            marginTop: "36px",
            fontSize: "82px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            backgroundImage: goldGradient,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Crestech Studio
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "34px",
            color: "#cccccc",
          }}
        >
          Branding · Contenido · Desarrollo Digital
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "26px",
            color: "#D4AF37",
            letterSpacing: "0.04em",
          }}
        >
          crestech.com.ar
        </div>
      </div>
    ),
    { ...size },
  );
}
