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
    url: "/turnos-pilates",
  },
  {
    category: "Producto propio · Inmobiliarias",
    title: "Crestech House",
    challenge: "Una inmobiliaria carga la misma propiedad en su web, en Zonaprop, en Argenprop, en MercadoLibre y en Instagram, y cada cambio de precio o venta hay que repetirlo en todos.",
    description: "Nuestro sistema para inmobiliarias: sitio con la marca y el diseño de cada una, un panel donde se carga cada propiedad una sola vez y sale en los portales, un asistente al que se le piden los cambios como por WhatsApp, y consultas que llegan al WhatsApp con la propiedad ya identificada.",
    result: "La demo está online: entrá y mirá el sitio de una inmobiliaria de ejemplo. Planes mensuales desde $35.000.",
    tags: ["Publicación en portales", "Asistente IA", "Diseño por inmobiliaria", "Consultas por WhatsApp"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
    image: "/crestech-house/portada.jpg",
    imageAlt: "Crestech House: el sitio de la inmobiliaria demo en escritorio y en el celular",
    url: "/inmobiliarias",
  },
];

function hostOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

const esInterno = (url: string) => url.startsWith("/");

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid var(--hairline)",
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
              <span className="gold-text">seleccionados</span>
            </h2>
            <span className="eyebrow">{projects.length} {projects.length === 1 ? "caso" : "casos"}</span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {projects.map((p, i) => {
            const CardTag = p.url ? "a" : "div";
            const cardProps = !p.url
              ? {}
              : esInterno(p.url)
                ? { href: p.url, "aria-label": `Ver ${p.title}` }
                : {
                    href: p.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `Ver ${p.title} (abre en una pestaña nueva)`,
                  };
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
                  <span className="eyebrow" style={{ display: "block", marginBottom: 12 }}>
                    <span className="case-num">{String(i + 1).padStart(2, "0")}</span> · {p.category}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, color: "#ffffff", marginBottom: 20, lineHeight: 1.1 }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 14 }}>
                    <span className="lead-in">Desafío </span>
                    {p.challenge}
                  </p>
                  <p style={{ fontSize: 15, color: "#888888", lineHeight: 1.7, marginBottom: 14 }}>
                    {p.description}
                  </p>
                  <p style={{ fontSize: 15, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 14 }}>
                    <span className="lead-in">Resultado </span>
                    {p.result}
                  </p>
                  {p.example && (
                    <p style={{ fontSize: 13, color: "#888888", lineHeight: 1.7, marginBottom: 14 }}>
                      <span className="lead-in">Ejemplo </span>
                      {p.example}
                    </p>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <span className="case-visit">
                      {esInterno(p.url) ? (
                        <>
                          Ver qué incluye <span aria-hidden="true">→</span>
                        </>
                      ) : (
                        <>
                          {hostOf(p.url)} <span aria-hidden="true">↗</span>
                        </>
                      )}
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
              Hablemos de tu proyecto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
