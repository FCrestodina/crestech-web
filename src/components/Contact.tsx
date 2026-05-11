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
          Si tenés un proyecto en mente o simplemente querés saber más sobre cómo puedo ayudarte, escribime.
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
            href="https://linkedin.com/in/franco-crestodina"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LINKEDIN
          </a>

          <a
            href="mailto:hola@crestech.studio"
            className="contact-link-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hola@crestech.studio
          </a>
        </div>
      </div>
    </section>
  );
}
