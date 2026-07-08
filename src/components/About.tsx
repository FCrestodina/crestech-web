const team = [
  "Desarrollador Web",
  "Fotógrafa",
  "Diseñadora Gráfica",
  "Especialista en Marketing",
  "Community Manager",
];

export default function About() {
  return (
    <section
      id="nosotros"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
        borderBottom: "1px solid rgba(var(--gold-rgb),0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Equipo */}
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>EL EQUIPO</span>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {team.map((role) => (
              <span
                key={role}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(var(--gold-rgb),0.3)",
                  background: "rgba(var(--gold-rgb),0.05)",
                  fontSize: 14,
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold-mid)" }} />
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>SOBRE NOSOTROS</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, marginTop: 16, marginBottom: 24, color: "#ffffff", lineHeight: 1.2 }}
          >
            El equipo detrás
            <br />
            <span className="gold-gradient-text">de tu marca</span>
          </h2>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 16 }}>
            Crestech es un equipo de especialistas: community manager, fotografía, marketing, diseño gráfico y desarrollo web. Cada proyecto lo trabaja quien sabe del tema, bajo una misma identidad visual.
          </p>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 32 }}>
            Nos adaptamos a lo que necesites: solo la web, web y fotos, web y manejo de redes, o todo junto. La mayor parte del trabajo es remota; cuando el proyecto incluye fotografía, vamos a tu local a producirla.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              borderTop: "1px solid rgba(var(--gold-rgb),0.15)",
              paddingTop: 28,
            }}
          >
            {[
              { title: "A medida", desc: "Servicios según lo que necesites" },
              { title: "Equipo", desc: "Especialistas por área" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  paddingLeft: 16,
                  borderLeft: "2px solid var(--gold-mid)",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 16, color: "#ffffff" }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: "#8a8a8a", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
