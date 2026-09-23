import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SECUENCIAS } from "@/data/secuencias-didacticas";

export const metadata: Metadata = {
  title: "Crestech Didáctico | Secuencias didácticas para el aula",
  description:
    "Recursos web que desarrollamos para trabajar en clase: se entra con un link, no hay que instalar nada y ningún chico necesita una cuenta. Cada secuencia viene con su manual del docente.",
  alternates: { canonical: "/didactico" },
  openGraph: {
    title: "Crestech Didáctico",
    description: "Secuencias didácticas para el aula, desarrolladas a medida.",
    url: "/didactico",
    type: "website",
    locale: "es_AR",
  },
};

export default function DidacticoPage() {
  // Igual que /blog: las páginas secundarias de este sitio no montan Nav ni
  // Footer — el nav de la landing son anclas que acá no existirían.
  return (
    <main>
        <section style={{ padding: "96px 24px 72px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <Reveal>
              <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
                CRESTECH DIDÁCTICO
              </span>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(34px, 6vw, 60px)",
                  fontWeight: 500,
                  marginTop: 20,
                  color: "#ffffff",
                  lineHeight: 1.1,
                }}
              >
                Secuencias didácticas
                <br />
                <span className="gold-gradient-text">para el aula</span>
              </h1>
              <p
                style={{
                  marginTop: 28,
                  maxWidth: 680,
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                Recursos web que desarrollamos para trabajar en clase: se entra con un link, no hay
                que instalar nada y ningún chico necesita una cuenta. Cada secuencia viene con su
                manual del docente.
              </p>
              <div className="gold-line" style={{ width: 200, marginTop: 48 }} />
            </Reveal>
          </div>
        </section>

        <section style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gap: 32 }}>
            {SECUENCIAS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <article
                  className="portfolio-card"
                  style={{ borderTop: `2px solid ${s.acento}`, borderRadius: "2px 2px 4px 4px" }}
                >
                  <div className="portfolio-card-body" style={{ gap: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 14,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          color: s.acento,
                          background: `${s.acento}1f`,
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {s.nivel.toUpperCase()}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--text-dim)" }}>{s.grados}</span>
                      {s.programa && (
                        <span style={{ fontSize: 12, color: "var(--text-dim)" }}>
                          · Programa {s.programa}
                        </span>
                      )}
                    </div>

                    <h2
                      className="font-display"
                      style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 500, color: "#ffffff" }}
                    >
                      {s.titulo}
                    </h2>
                    <p style={{ marginTop: 6, fontSize: 16, color: s.acento }}>{s.bajada}</p>
                    <p
                      style={{
                        marginTop: 18,
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {s.descripcion}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                      {s.areas.map((a) => (
                        <span
                          key={a}
                          style={{
                            fontSize: 11,
                            color: "var(--text-dim)",
                            border: "1px solid rgba(var(--gold-rgb),0.18)",
                            padding: "3px 10px",
                            borderRadius: 3,
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: 32, display: "grid", gap: 14 }}>
                      {s.recursos.map((r) => (
                        <div
                          key={r.nombre}
                          style={{
                            border: "1px solid rgba(var(--gold-rgb),0.12)",
                            background: "rgba(0,0,0,0.25)",
                            borderRadius: 3,
                            padding: "20px 22px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "baseline",
                              gap: 10,
                            }}
                          >
                            <h3
                              style={{ fontSize: 16, fontWeight: 600, color: "#ffffff", margin: 0 }}
                            >
                              {r.nombre}
                            </h3>
                            {r.momento && (
                              <span style={{ fontSize: 12, color: s.acento }}>{r.momento}</span>
                            )}
                          </div>
                          <p
                            style={{
                              marginTop: 8,
                              fontSize: 14,
                              lineHeight: 1.65,
                              color: "var(--text-secondary)",
                            }}
                          >
                            {r.descripcion}
                          </p>
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              marginTop: 14,
                              fontSize: 13,
                              fontWeight: 600,
                              color: s.acento,
                              textDecoration: "none",
                              borderBottom: `1px solid ${s.acento}66`,
                              paddingBottom: 2,
                            }}
                          >
                            Probar {r.nombre}
                          </a>
                        </div>
                      ))}
                    </div>

                    {s.manualSinPublicar && (
                      <span
                        style={{ marginTop: 22, fontSize: 13, color: "var(--text-dim)" }}
                      >
                        Incluye manual del docente: {s.manualSinPublicar}
                      </span>
                    )}
                    {s.manual && (
                      <a
                        href={s.manual.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: 22,
                          fontSize: 13,
                          color: "var(--gold-mid)",
                          textDecoration: "none",
                        }}
                      >
                        Manual del docente: {s.manual.detalle}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section style={{ padding: "0 24px 110px", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", marginBottom: 24 }}>
              Llevamos tu secuencia en papel al aula digital.
            </p>
            <Link href="/#contacto" className="btn-gold" style={{ textDecoration: "none" }}>
              Hablemos
            </Link>
            <p style={{ marginTop: 56 }}>
              <Link href="/" style={{ color: "#8a8577", fontSize: 13 }}>
                Volver al sitio
              </Link>
            </p>
          </Reveal>
        </section>
    </main>
  );
}
