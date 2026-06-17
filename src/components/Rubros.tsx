import Image from "next/image";
import Reveal from "./Reveal";

const casos = [
  {
    slug: "turnos-pilates",
    rubro: "Estudios de Pilates",
    caso: "Caso real · Mixtura",
    text: "Reservas online, pagos y recordatorios automáticos por WhatsApp. Tus alumnas reservan solas y vos das la clase.",
    image: "/portfolio/mixtura.jpg",
    imageAlt: "Sistema de turnos de Mixtura",
  },
  {
    slug: "inmobiliarias",
    rubro: "Inmobiliarias",
    caso: "Caso real · Crestodina Propiedades",
    text: "Tu cartera de propiedades en tu propia web, con buscador por zona y precio, tasaciones y consultas directas.",
    image: "/portfolio/crestodina.jpg",
    imageAlt: "Web de Crestodina Propiedades",
  },
];

export default function Rubros() {
  return (
    <section
      id="soluciones"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        background: "rgba(212,175,55,0.02)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
              SOLUCIONES POR RUBRO
            </span>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
            >
              Sistemas a medida para tu negocio
            </h2>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "#999999",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto 64px",
            }}
          >
            Algunos de los sistemas que ya desarrollamos. Entrá y mirá cómo funcionan.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {casos.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <a href={`/${c.slug}`} className="portfolio-card" style={{ display: "block", textDecoration: "none" }}>
                <div
                  style={{
                    height: 200,
                    border: "1px solid rgba(212,175,55,0.15)",
                    borderRadius: "2px 2px 0 0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div className="portfolio-card-body">
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "#D4AF37",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {c.caso.toUpperCase()}
                  </span>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 10 }}
                  >
                    {c.rubro}
                  </h3>
                  <p style={{ fontSize: 14, color: "#888888", lineHeight: 1.7, marginBottom: 18 }}>
                    {c.text}
                  </p>
                  <span style={{ fontSize: 12, letterSpacing: "0.1em", color: "#D4AF37", fontWeight: 600 }}>
                    Ver la página →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#aaaaaa",
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "48px auto 0",
            }}
          >
            ¿Tu rubro no está acá? También desarrollamos sistemas para canchas, hoteles, comercios
            y más.{" "}
            <a href="#contacto" style={{ color: "#D4AF37", fontWeight: 600 }}>
              Contanos el tuyo
            </a>{" "}
            y lo armamos a medida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
