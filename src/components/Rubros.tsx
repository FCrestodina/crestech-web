import Link from "next/link";
import Reveal from "./Reveal";

const casos = [
  {
    slug: "turnos-pilates",
    rubro: "Estudios de Pilates",
    caso: "Caso real · Mixtura",
    text: "Reservas online, pagos y recordatorios automáticos por WhatsApp. Tus alumnas reservan solas y vos das la clase.",
  },
  {
    slug: "inmobiliarias",
    rubro: "Inmobiliarias",
    caso: "Caso real · Crestodina Propiedades",
    text: "Tu cartera de propiedades en tu propia web, con buscador por zona y precio, tasaciones y consultas directas.",
  },
];

export default function Rubros() {
  return (
    <section
      id="soluciones"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
        background: "rgba(var(--gold-rgb),0.02)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              SOLUCIONES POR RUBRO
            </span>
            <h2
              className="font-display"
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
              <Link
                href={`/${c.slug}`}
                className="service-card"
                style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}
              >
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "var(--gold-mid)",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {c.caso.toUpperCase()}
                </span>
                <h3
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 12, lineHeight: 1.3 }}
                >
                  {c.rubro}
                </h3>
                <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
                  {c.text}
                </p>
                <span style={{ fontSize: 12, letterSpacing: "0.1em", color: "var(--gold-mid)", fontWeight: 600 }}>
                  Ver la página →
                </span>
              </Link>
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
            ¿Tu rubro no está acá? También desarrollamos sistemas para{" "}
            <Link href="/reservas-canchas" style={{ color: "var(--gold-mid)", fontWeight: 600 }}>
              canchas
            </Link>
            ,{" "}
            <Link href="/hoteles" style={{ color: "var(--gold-mid)", fontWeight: 600 }}>
              hoteles
            </Link>
            , comercios y más.{" "}
            <a href="#contacto" style={{ color: "var(--gold-mid)", fontWeight: 600 }}>
              Contanos el tuyo
            </a>{" "}
            y lo armamos a medida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
