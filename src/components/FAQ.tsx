"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "¿Trabajan presencial o remoto?",
    a: "Depende del servicio. El diseño, el desarrollo web y el manejo de redes los hacemos de forma remota, con reuniones por videollamada y comunicación por WhatsApp o email. Cuando el proyecto incluye fotografía, vamos presencialmente a tu local o negocio a producir las fotos.",
  },
  {
    q: "¿Quiénes forman el equipo?",
    a: "Somos un equipo de especialistas: una community manager, una fotógrafa, una especialista en marketing, una diseñadora gráfica y un desarrollador web. Cada parte del proyecto la trabaja quien sabe del tema.",
  },
  {
    q: "¿Cuánto tiempo lleva un proyecto?",
    a: "Depende del servicio: una identidad visual completa lleva entre 2 y 4 semanas. Una landing page, entre 1 y 3 semanas. Los proyectos de automatización varían según la complejidad. En la propuesta inicial siempre detallamos los tiempos exactos.",
  },
  {
    q: "¿Ofrecen servicios por separado o solo paquetes?",
    a: "Ambas opciones. Podés contratar un servicio puntual (solo logo, solo web, solo automatización) o una solución integral que combine varios. Lo conversamos en la consulta inicial.",
  },
  {
    q: "¿Desde qué presupuesto puedo arrancar?",
    a: "Cupio, nuestro sistema de turnos, arranca desde $4.900 por mes —de lo más barato del mercado— y lo podés probar 7 días gratis. Los proyectos a medida (web, branding, software) los cotizamos según lo que necesites, así no pagás de más por cosas que no vas a usar: en una charla de 15 minutos te pasamos el número exacto, sin compromiso.",
  },
  {
    q: "¿Sirve si mi negocio es chico o recién empiezo?",
    a: "Sí, y muchas veces es cuando más suma: arrancás con una imagen y una organización profesional desde el día uno, en vez de tener que ordenar todo más adelante. Adaptamos el alcance (y el presupuesto) a la etapa en la que estás.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Cada proyecto incluye rondas de revisión durante la producción y 15 días de soporte post-entrega para ajustes menores. Los cambios de mayor alcance se cotizan por separado.",
  },
  {
    q: "¿Cómo se realizan los pagos?",
    a: "50% al inicio del proyecto y 50% contra entrega final. Aceptamos transferencia bancaria y medios digitales. Para clientes del exterior, PayPal o Wise.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
              FAQ
            </span>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
            >
              Preguntas frecuentes
            </h2>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="faq-trigger"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <div className="faq-question">
                    <span style={{ fontSize: 16, color: "#ffffff", textAlign: "left" }}>
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: "#D4AF37",
                        fontSize: 20,
                        lineHeight: 1,
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </div>
                </button>

                {open === i && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: "#999999",
                        lineHeight: 1.8,
                        textAlign: "left",
                        paddingTop: 16,
                        borderTop: "1px solid rgba(212,175,55,0.1)",
                        marginTop: 16,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
