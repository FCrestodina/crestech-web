import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { SECUENCIAS } from "@/data/secuencias-didacticas";

// Captura de cada secuencia. Vive acá y no en `secuencias-didacticas.ts`
// porque ese archivo es copia del catálogo de didakt y conviene no desviarlo.
const PORTADAS: Record<string, { src: string; alt: string }> = {
  "stem-primer-ciclo": {
    src: "/didactico/stem.jpg",
    alt: "Pantalla del Robot mensajero: la grilla con el robot y el botón para activar el micrófono",
  },
  "billetera-virtual": {
    src: "/didactico/billetera.jpg",
    alt: "Billetera del estudiante con el saldo y la pantalla de confirmar un pago con QR",
  },
  "mundialito-escolar": {
    src: "/didactico/mundialito.jpg",
    alt: "Tabla de posiciones y fixture de un grupo del Mundialito Escolar",
  },
};

/**
 * Bloque de la landing que presenta Crestech Didáctico y manda a `/didactico`.
 * Deliberadamente corto: el detalle de cada secuencia vive en esa página.
 */
export default function Didactico() {
  return (
    <section id="didactico" style={{ padding: "40px 16px 100px" }}>
      <div className="didactico-panel">
        <Reveal>
          <div className="didactico-head">
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
                EDUCACIÓN
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(30px, 4.5vw, 46px)",
                  fontWeight: 500,
                  marginTop: 14,
                  color: "#ffffff",
                }}
              >
                Crestech Didáctico
              </h2>
              <p
                style={{
                  marginTop: 16,
                  maxWidth: 560,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                Secuencias didácticas para el aula: recursos web que se abren con un link, sin
                instalar nada y sin cuentas para los chicos. Cada una viene con su manual del docente.
              </p>
            </div>
            <Link href="/didactico" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
              Ver las secuencias
            </Link>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {SECUENCIAS.map((s, i) => {
            const portada = PORTADAS[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 80}>
                <div className="didactico-card" style={{ "--acento": s.acento } as React.CSSProperties}>
                  {portada && (
                    <div className="didactico-card-media">
                      <Image
                        src={portada.src}
                        alt={portada.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
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
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", flex: 1 }}>
                      {s.bajada}
                    </p>
                    <span style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 16 }}>
                      {s.recursos.length} recurso{s.recursos.length !== 1 ? "s" : ""}
                      {s.manual || s.manualSinPublicar ? " · manual del docente" : ""}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
