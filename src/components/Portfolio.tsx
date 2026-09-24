import Image from "next/image";
import Reveal from "./Reveal";

interface Project {
  category: string;
  title: string;
  challenge: string;
  description: string;
  result: string;
  example?: string;
  tags: string[];
  color: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

const projects: Project[] = [
  {
    category: "Producto propio · SaaS",
    title: "Cupio",
    challenge: "Quien da clases o atiende con turno pierde horas coordinando por WhatsApp, y los huecos que deja una cancelación no se llenan.",
    description: "Nuestro sistema de turnos online: cada profesional crea su agenda y sus clientes reservan solos desde el celular, con cupo por clase, turnos fijos, lista de espera y recordatorios. Suscripción mensual con Mercado Pago y 7 días de prueba gratis.",
    result: "Está online y cualquier profesional lo prueba gratis, sin hablar con nadie.",
    example: "Si en un mes se cancelan 30 lugares y la lista de espera llena la mitad, son 15 clases cobradas que antes quedaban vacías.",
    tags: ["SaaS multi-tenant", "Turnos online", "Suscripción Mercado Pago", "PWA instalable"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    image: "/cupio/portada.jpg",
    imageAlt: "Logo de Cupio y dos pantallas del sistema: la reserva de turnos y la agenda del profesional",
    url: "https://cupio.com.ar?utm_source=crestech&utm_medium=web&utm_campaign=portfolio",
  },
  {
    category: "Software a medida",
    title: "Mixtura",
    challenge: "Un estudio de pilates con dos sedes necesitaba tener abonos, recuperaciones, cobros y facturación en un solo lugar.",
    description: "Sistema hecho a medida para un estudio de pilates con dos sedes, adaptado a su forma de trabajar: las alumnas ven sus clases y su abono, cancelan y recuperan solas; el estudio maneja horarios, abonos, cobros, reportes y facturación electrónica ARCA desde su propio panel.",
    result: "Ya está en producción y el estudio lo está sumando a su día a día.",
    tags: ["A medida", "Panel de admin", "Facturación ARCA", "Recuperaciones"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    image: "/mixtura/portada.jpg",
    imageAlt: "Logo de Mixtura sobre una foto de la sala del estudio, con la app de las alumnas",
    url: "https://mixturapilates.com.ar",
  },
  {
    category: "Diseño Web",
    title: "Crestodina Propiedades",
    challenge: "Una inmobiliaria con más de 40 años en Caballito necesitaba mostrar su cartera en su propia web, sin depender de los portales.",
    description: "Plataforma inmobiliaria con listado de propiedades en venta y alquiler, buscador por barrio, sistema de tasaciones online y consultas integradas.",
    result: "Cargan y ordenan las propiedades desde su propio panel, y cada consulta llega directo por WhatsApp.",
    tags: ["Búsqueda por zona", "Fichas para compartir", "Tasaciones online", "Consultas directas"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
    image: "/crestodina/portada.jpg",
    imageAlt: "Logo de Crestodina Propiedades con la home del sitio y el panel de carga de propiedades",
    url: "https://crestodinapropiedades.com.ar",
  },
];

function hostOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div className="portfolio-head">
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 500, color: "#ffffff", lineHeight: 1 }}
            >
              Proyectos
              <br />
              <span className="gold-gradient-text">seleccionados</span>
            </h2>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              CASOS · {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {projects.map((p, i) => {
            const CardTag = p.url ? "a" : "div";
            const cardProps = p.url
              ? {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Ver ${p.title} (abre en una pestaña nueva)`,
                }
              : {};
            return (
            <Reveal key={p.title}>
              <CardTag
                {...cardProps}
                className={`case-row${i % 2 ? " case-row-flip" : ""}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="case-media" style={{ background: p.color }}>
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>

                <div className="case-body">
                  <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold-mid)", display: "block", marginBottom: 12 }}>
                    {String(i + 1).padStart(2, "0")} · {p.category.toUpperCase()}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, color: "#ffffff", marginBottom: 20, lineHeight: 1.1 }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 14 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold-mid)", fontWeight: 600 }}>DESAFÍO </span>
                    {p.challenge}
                  </p>
                  <p style={{ fontSize: 15, color: "#888888", lineHeight: 1.7, marginBottom: 14 }}>
                    {p.description}
                  </p>
                  <p style={{ fontSize: 15, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 14 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold-mid)", fontWeight: 600 }}>RESULTADO </span>
                    {p.result}
                  </p>
                  {p.example && (
                    <p style={{ fontSize: 13, color: "#888888", lineHeight: 1.7, marginBottom: 14, fontStyle: "italic" }}>
                      <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold-mid)", fontWeight: 600, fontStyle: "normal" }}>EJEMPLO </span>
                      {p.example}
                    </p>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.1em",
                          color: "var(--gold-mid)",
                          border: "1px solid rgba(var(--gold-rgb),0.25)",
                          padding: "3px 8px",
                          borderRadius: 2,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <span className="case-visit">
                      {hostOf(p.url)} <span aria-hidden="true">↗</span>
                    </span>
                  )}
                </div>
              </CardTag>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 88 }}>
            <a href="#contacto" className="btn-outline">
              HABLEMOS DE TU PROYECTO
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
