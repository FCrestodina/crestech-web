export default function Contact() {
  return (
    <section
      id="contacto"
      style={{ padding: "100px 24px", textAlign: "center" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>CONTACTO</span>

        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 500,
            marginTop: 16,
            marginBottom: 20,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Trabajemos
          <br />
          <span className="gold-gradient-text">juntos</span>
        </h2>

        <p style={{ fontSize: 16, color: "#999999", lineHeight: 1.7, marginBottom: 48 }}>
          Si tenés un proyecto en mente o simplemente querés saber más sobre cómo podemos ayudarte, escribinos.
        </p>

        <div className="gold-line" style={{ width: 120, margin: "0 auto 48px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <a
            href="https://instagram.com/crestech.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ width: "100%", maxWidth: 320 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            INSTAGRAM
          </a>

          <a
            href="mailto:devfrancocrestodina@gmail.com"
            className="contact-link-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            devfrancocrestodina@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
