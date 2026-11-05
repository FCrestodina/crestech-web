import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Logo size={56} />
        </div>

        <div style={{ marginTop: 32, marginBottom: 12 }}>
          <span className="eyebrow" style={{ fontSize: 15 }}>Socio digital de la pyme</span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#ffffff", display: "block", marginBottom: 8 }}>Crestech</span>
          <span className="gold-text" style={{ display: "block" }}>Studio</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#cccccc",
            letterSpacing: "0.04em",
            lineHeight: 1.7,
            marginBottom: 52,
            textWrap: "balance",
          }}
        >
          Entendemos cómo funciona tu negocio, te armamos el sistema y lo hacemos crecer.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-gold">Pedí un primer vistazo</a>
          <a href="#servicios" className="btn-outline">Cómo trabajamos</a>
        </div>
      </div>
    </section>
  );
}
