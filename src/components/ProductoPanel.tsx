import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export interface ProductoCard {
  titulo: string;
  texto: string;
  imagen: string;
  alt: string;
}

interface ProductoPanelProps {
  id: string;
  eyebrow: string;
  titulo: string;
  bajada: string;
  cta: { href: string; label: string; externo?: boolean; umami?: string };
  acento: string;
  cards: ProductoCard[];
}

/**
 * Bloque de un producto propio en la home, con el mismo formato que Crestech Didáctico:
 * título, bajada, un botón a su página y una tarjeta con captura por cada parte del producto.
 */
export default function ProductoPanel({ id, eyebrow, titulo, bajada, cta, acento, cards }: ProductoPanelProps) {
  const boton = { className: "btn-gold", style: { textDecoration: "none", whiteSpace: "nowrap" as const } };
  return (
    <section id={id} style={{ padding: "40px 16px 60px" }}>
      <div className="didactico-panel">
        <Reveal>
          <div className="didactico-head">
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>{eyebrow}</span>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 500, marginTop: 14, color: "#ffffff" }}
              >
                {titulo}
              </h2>
              <p style={{ marginTop: 16, maxWidth: 560, fontSize: 16, lineHeight: 1.7, color: "var(--text-secondary)" }}>
                {bajada}
              </p>
            </div>
            {cta.externo ? (
              <a href={cta.href} target="_blank" rel="noopener" data-umami-event={cta.umami} {...boton}>
                {cta.label}
              </a>
            ) : (
              <Link href={cta.href} data-umami-event={cta.umami} {...boton}>
                {cta.label}
              </Link>
            )}
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: 20,
          }}
        >
          {cards.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 80}>
              <div className="didactico-card" style={{ "--acento": acento } as React.CSSProperties}>
                <div className="didactico-card-media">
                  <Image src={c.imagen} alt={c.alt} fill sizes="(max-width: 900px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 8 }}>
                    {c.titulo}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", flex: 1 }}>{c.texto}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
