import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-brand">
            <span className="eyebrow" style={{ fontSize: 15 }}>Crestech Studio</span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "0.01em",
              marginBottom: 28,
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>Sistemas a medida</span>
            <span className="gold-text" style={{ display: "block" }}>para pymes</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "#cccccc",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
              textWrap: "pretty",
            }}
          >
            Entendemos cómo funciona tu negocio, te armamos el sistema y lo hacemos crecer.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="btn-gold">Pedí un primer vistazo</a>
            <a href="#servicios" className="btn-outline">Cómo trabajamos</a>
          </div>
        </div>

        <figure className="hero-shot">
          <Image
            src="/sistemas-internos/escritorio-dashboard.webp"
            alt="Panel de gestión de un estudio de pilates: alumnos activos, clases del día, reservas y abonos sin pagar"
            width={2160}
            height={1350}
            priority
            sizes="(min-width: 1024px) 640px, 100vw"
          />
          <figcaption>Panel de un estudio de pilates: reservas, abonos y cobros en una sola pantalla.</figcaption>
        </figure>
      </div>
    </section>
  );
}
