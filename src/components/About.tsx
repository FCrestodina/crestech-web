const team = [
  "Community Manager",
  "Fotógrafa",
  "Especialista en Marketing",
  "Diseñadora Gráfica",
  "Desarrollador Web",
];

export default function About() {
  return (
    <section
      id="nosotros"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
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
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>EL EQUIPO</span>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {team.map((role, i) => (
              <div
                key={role}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 0",
                  borderBottom:
                    i < team.length - 1 ? "1px solid rgba(212,175,55,0.12)" : "none",
                }}
              >
                <span
                  className="font-serif gold-gradient-text"
                  style={{ fontSize: 20, fontWeight: 500, minWidth: 36 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 17, color: "#ffffff", letterSpacing: "0.02em" }}>
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>SOBRE NOSOTROS</span>
          <h2
            className="font-serif"
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
              display: "flex",
              gap: 32,
              borderTop: "1px solid rgba(212,175,55,0.15)",
              paddingTop: 28,
            }}
          >
            {[
              { num: "A medida", label: "Servicios según lo que necesites" },
              { num: "Equipo", label: "Especialistas por área" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-serif gold-gradient-text"
                  style={{ fontSize: 32, fontWeight: 500 }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: 12, color: "#8a8a8a", letterSpacing: "0.1em", marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
