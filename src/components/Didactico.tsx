import Link from "next/link";
import Reveal from "./Reveal";
import { SECUENCIAS } from "@/data/secuencias-didacticas";

/**
 * Bloque de la landing que presenta Crestech Didáctico y manda a `/didactico`.
 * Deliberadamente corto: el detalle de cada secuencia vive en esa página.
 */
export default function Didactico() {
  return (
    <section
      id="didactico"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              EDUCACIÓN
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 500,
                marginTop: 16,
                color: "#ffffff",
              }}
            >
              Crestech Didáctico
            </h2>
            <p
              style={{
                marginTop: 20,
                maxWidth: 640,
                margin: "20px auto 0",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              Secuencias didácticas para el aula: recursos web que se abren con un link, sin
              instalar nada y sin cuentas para los chicos. Cada una viene con su manual del docente.
            </p>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {SECUENCIAS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div
                className="portfolio-card"
                style={{ borderTop: `2px solid ${s.acento}`, borderRadius: "2px 2px 4px 4px" }}
              >
                <div className="portfolio-card-body">
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: s.acento,
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {s.grados.toUpperCase()}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 8 }}
                  >
                    {s.titulo}
                  </h3>
                  <p
                    className="portfolio-card-desc"
                    style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}
                  >
                    {s.bajada}
                  </p>
                  <span style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 16 }}>
                    {s.recursos.length} recurso{s.recursos.length !== 1 ? "s" : ""}
                    {s.manual || s.manualSinPublicar ? " · manual del docente" : ""}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ textAlign: "center" }}>
            <Link href="/didactico" className="btn-gold" style={{ textDecoration: "none" }}>
              Ver las secuencias
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
