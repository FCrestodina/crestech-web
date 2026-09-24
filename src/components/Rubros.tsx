import Link from "next/link";
import Reveal from "./Reveal";
import { cupioLink } from "@/data/landings";

const casos = [
  {
    slug: "turnos-pilates",
    rubro: "Estudios de pilates",
    caso: "Con Cupio · sistema de turnos",
    text: "Tus alumnas reservan solas desde el celular, con cupo por clase, lugar fijo semanal y recordatorios antes de cada clase.",
  },
  {
    slug: "reservas-canchas",
    rubro: "Canchas de pádel y fútbol",
    caso: "A medida",
    text: "Reservas online por cancha y horario, con la seña por Mercado Pago al momento de reservar.",
  },
  {
    slug: "hoteles",
    rubro: "Hoteles y alojamientos",
    caso: "A medida",
    text: "Motor de reservas directas en tu propia web: disponibilidad online y pago al reservar, sin comisión de portales.",
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
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div className="rubros-head">
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
                SOLUCIONES POR RUBRO
              </span>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff", lineHeight: 1.1 }}
              >
                Sistemas a medida para tu negocio
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "#999999", lineHeight: 1.7, maxWidth: 340 }}>
              Algunos de los sistemas que ya desarrollamos. Entrá y mirá cómo funcionan.
            </p>
          </div>
        </Reveal>

        <ul className="rubro-list">
          {casos.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={i * 60}>
                <Link href={`/${c.slug}`} className="rubro-row">
                  <span className="rubro-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-display rubro-name">{c.rubro}</span>
                    <span style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold-mid)", marginTop: 8 }}>
                      {c.caso.toUpperCase()}
                    </span>
                  </span>
                  <span style={{ fontSize: 14, color: "#999999", lineHeight: 1.7 }}>{c.text}</span>
                  <span className="rubro-arrow" aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <p
            style={{
              fontSize: 15,
              color: "#aaaaaa",
              lineHeight: 1.8,
              maxWidth: 620,
              marginTop: 40,
            }}
          >
            Para turnos en otros rubros, probá{" "}
            <a
              href={cupioLink("/", "home-rubros")}
              target="_blank"
              rel="noopener"
              style={{ color: "var(--gold-mid)", fontWeight: 600 }}
              data-umami-event="home-cupio"
            >
              Cupio
            </a>{" "}
            gratis 7 días. Para otro tipo de sistema,{" "}
            <a href="#contacto" style={{ color: "var(--gold-mid)", fontWeight: 600 }}>
              Contanos tu caso
            </a>{" "}
            y lo armamos a medida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
