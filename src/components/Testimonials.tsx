import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Franco transformó nuestra identidad visual en tiempo récord. El manual de marca que entregó nos permitió comunicar con coherencia en todos los canales desde el primer día.",
    name: "María González",
    role: "Fundadora · Nómade Store",
    initials: "MG",
  },
  {
    quote:
      "La landing page superó nuestras expectativas. En el primer mes, la tasa de conversión subió un 40% respecto a la página anterior. Trabajo prolijo y comunicación impecable.",
    name: "Luciano Paz",
    role: "CEO · Delta Capital",
    initials: "LP",
  },
  {
    quote:
      "Claridad, velocidad y criterio estético. El bot de reportes que desarrolló nos ahorra 6 horas semanales de trabajo manual. Ya le encargamos el siguiente proyecto.",
    name: "Valentina Ríos",
    role: "Directora de Operaciones · EcoFlow Agro",
    initials: "VR",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        background: "rgba(212,175,55,0.02)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
              TESTIMONIOS
            </span>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
            >
              Lo que dicen los clientes
            </h2>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="testimonial-card">
                {/* Quote mark */}
                <div
                  className="font-serif gold-gradient-text"
                  style={{ fontSize: 64, lineHeight: 0.8, marginBottom: 20, opacity: 0.4 }}
                >
                  "
                </div>

                <p
                  style={{
                    fontSize: 15,
                    color: "#cccccc",
                    lineHeight: 1.8,
                    marginBottom: 32,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    className="font-serif"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(212,175,55,0.12)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D4AF37",
                      fontSize: 14,
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, color: "#ffffff", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#666666", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
