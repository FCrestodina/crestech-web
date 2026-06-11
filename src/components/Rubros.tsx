import Reveal from "./Reveal";
import { landings } from "@/data/landings";

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
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            Cada rubro tiene su sistema, con su propia página. Entrá a la tuya y mirá cómo funcionaría.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {landings.map((l, i) => (
            <Reveal key={l.slug} delay={i * 80}>
              <a
                href={`/${l.slug}`}
                className="service-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <h3
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 12, lineHeight: 1.3 }}
                >
                  {l.homeCard.label}
                </h3>
                <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
                  {l.homeCard.pain}
                </p>
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: "#D4AF37",
                    fontWeight: 600,
                  }}
                >
                  Ver la página →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
