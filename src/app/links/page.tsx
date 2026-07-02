import Link from "next/link";
import type { Metadata } from "next";
import { landings, waLink } from "@/data/landings";

export const metadata: Metadata = {
  title: "Crestech — Links",
  description: "Todo Crestech en un lugar: WhatsApp, Cupio y soluciones por rubro.",
  robots: { index: false }, // hub para la bio de IG, no para buscadores
};

// Etiquetas cortas por rubro para los botones (el copy largo vive en cada landing).
const RUBRO_LABEL: Record<string, string> = {
  "turnos-pilates": "Turnos para estudios de pilates",
  "reservas-canchas": "Reservas para canchas",
  hoteles: "Reservas para hoteles",
  inmobiliarias: "Gestión para inmobiliarias",
};

const CUPIO_URL = "https://cupio.com.ar";
const IG_URL = "https://instagram.com/crestech.studio";
const WA = waLink("Hola, quiero saber más sobre Crestech.");

const linkStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "16px 20px",
  borderRadius: 14,
  border: "1px solid rgba(var(--gold-rgb),0.28)",
  background: "rgba(255,255,255,0.02)",
  color: "#f5f3ee",
  fontSize: 15,
  fontWeight: 500,
  textAlign: "center",
  textDecoration: "none",
};

export default function LinksPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "56px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 440, textAlign: "center" }}>
        <h1
          className="font-serif gold-gradient-text"
          style={{ fontSize: 40, fontWeight: 500, marginBottom: 4 }}
        >
          Crestech
        </h1>
        <p style={{ fontSize: 12, letterSpacing: "0.26em", color: "#8a8577", marginBottom: 36 }}>
          SOFTWARE · CONTENIDO · MARKETING
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold" data-umami-event="links-whatsapp">
            Escribinos por WhatsApp
          </a>

          <a href={CUPIO_URL} target="_blank" rel="noopener noreferrer" style={linkStyle} data-umami-event="links-cupio">
            Cupio — sistema de turnos online
          </a>

          {landings.map((l) => (
            <Link key={l.slug} href={`/${l.slug}`} style={linkStyle} data-umami-event={`links-rubro-${l.slug}`}>
              {RUBRO_LABEL[l.slug] ?? l.slug}
            </Link>
          ))}

          <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={linkStyle} data-umami-event="links-instagram">
            Instagram @crestech.studio
          </a>

          <Link href="/" style={{ ...linkStyle, border: "none", color: "#8a8577", fontSize: 13 }} data-umami-event="links-home">
            Ver el sitio completo →
          </Link>
        </div>
      </div>
    </main>
  );
}
