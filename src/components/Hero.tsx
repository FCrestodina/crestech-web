import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Gold corner accents */}
      <div style={{ position: "absolute", top: 40, left: 40, width: 60, height: 60, borderTop: "1px solid rgba(212,175,55,0.25)", borderLeft: "1px solid rgba(212,175,55,0.25)" }} />
      <div style={{ position: "absolute", top: 40, right: 40, width: 60, height: 60, borderTop: "1px solid rgba(212,175,55,0.25)", borderRight: "1px solid rgba(212,175,55,0.25)" }} />
      <div style={{ position: "absolute", bottom: 40, left: 40, width: 60, height: 60, borderBottom: "1px solid rgba(212,175,55,0.25)", borderLeft: "1px solid rgba(212,175,55,0.25)" }} />
      <div style={{ position: "absolute", bottom: 40, right: 40, width: 60, height: 60, borderBottom: "1px solid rgba(212,175,55,0.25)", borderRight: "1px solid rgba(212,175,55,0.25)" }} />

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
        <Logo size={56} />

        <div style={{ marginTop: 32, marginBottom: 12 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.3em",
              color: "#D4AF37",
              fontWeight: 500,
            }}
          >
            ESTUDIO DIGITAL
          </span>
        </div>

        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            color: "#ffffff",
            marginBottom: 8,
          }}
        >
          Crestech
        </h1>
        <h1
          className="font-serif gold-gradient-text"
          style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            marginBottom: 40,
          }}
        >
          Studio
        </h1>

        <div className="gold-line" style={{ width: 200, margin: "0 auto 40px" }} />

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#cccccc",
            letterSpacing: "0.04em",
            lineHeight: 1.7,
            marginBottom: 52,
          }}
        >
          Branding, contenido para redes sociales, diseño web y automatización — todo bajo una misma identidad visual.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#servicios" className="btn-gold">VER SERVICIOS</a>
          <a href="#contacto" className="btn-outline">HABLEMOS</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "#D4AF37" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #D4AF37, transparent)" }} />
      </div>
    </section>
  );
}
