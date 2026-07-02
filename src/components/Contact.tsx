"use client";

import { useState } from "react";
import { waLink } from "@/data/landings";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [sentLink, setSentLink] = useState<string | null>(null);
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "sending" | "ok" | "unavailable" | "error"
  >("idle");

  const canSubmit = nombre.trim().length > 0 && mensaje.trim().length > 0;

  async function handleEmailLead() {
    if (!canSubmit || leadStatus === "sending") return;
    setLeadStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          mensaje: mensaje.trim(),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (json.ok) setLeadStatus("ok");
      else if (json.error === "no_configurado") setLeadStatus("unavailable");
      else setLeadStatus("error");
    } catch {
      setLeadStatus("error");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const lines = [`Hola, soy ${nombre.trim()}.`, mensaje.trim()];
    if (email.trim()) lines.push(`Mi mail: ${email.trim()}`);

    const link = waLink(lines.join("\n"));
    setSentLink(link);

    // Los in-app browsers (Instagram/WhatsApp) suelen bloquear window.open y
    // devolver null: en ese caso navegamos en la misma pestaña como plan B.
    const win = window.open(link, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = link;
    }
  }

  return (
    <section
      id="contacto"
      style={{ padding: "100px 24px", textAlign: "center" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>CONTACTO</span>

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
          Contanos tu proyecto y te respondemos por WhatsApp. También estamos en Instagram y Telegram.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-nombre">NOMBRE</label>
            <input
              id="contact-nombre"
              className="contact-input"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-email">EMAIL (OPCIONAL)</label>
            <input
              id="contact-email"
              className="contact-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="contact-mensaje">MENSAJE</label>
            <textarea
              id="contact-mensaje"
              className="contact-input"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Contanos qué necesitás"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-gold"
            disabled={!canSubmit}
            data-umami-event="contact-form-submit"
          >
            ENVIAR POR WHATSAPP
          </button>

          {sentLink && (
            <p
              role="status"
              style={{
                fontSize: 14,
                color: "#cccccc",
                lineHeight: 1.6,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              Abriendo WhatsApp… Si no se abre solo,{" "}
              <a
                href={sentLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold-mid)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                tocá acá para escribirnos
              </a>
              .
            </p>
          )}

          <button
            type="button"
            onClick={handleEmailLead}
            disabled={!canSubmit || leadStatus === "sending"}
            data-umami-event="contact-email-lead"
            style={{
              background: "none",
              border: "none",
              color: "#8a8577",
              fontSize: 13,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              cursor: canSubmit ? "pointer" : "default",
              marginTop: 4,
            }}
          >
            {leadStatus === "sending" ? "Enviando…" : "Prefiero que me escriban por mail"}
          </button>

          {leadStatus === "ok" && (
            <p role="status" style={{ fontSize: 14, color: "#cccccc", marginTop: 4 }}>
              ¡Listo! Te vamos a escribir por mail a la brevedad.
            </p>
          )}
          {leadStatus === "unavailable" && (
            <p role="status" style={{ fontSize: 14, color: "#cccccc", marginTop: 4 }}>
              Por ahora escribinos por WhatsApp o al mail de abajo 👇
            </p>
          )}
          {leadStatus === "error" && (
            <p role="status" style={{ fontSize: 14, color: "#cccccc", marginTop: 4 }}>
              No pudimos enviarlo. Probá por WhatsApp o al mail de abajo.
            </p>
          )}
        </form>

        <div className="gold-line" style={{ width: 120, margin: "0 auto 40px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <a
            href="https://instagram.com/crestech.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ width: "100%", maxWidth: 320 }}
            data-umami-event="contact-instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            INSTAGRAM
          </a>

          <a
            href="https://t.me/CrestechOK"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-outline"
            data-umami-event="contact-telegram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
            TELEGRAM
          </a>
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: "#8a8a8a", lineHeight: 1.6 }}>
          ¿Preferís mail?{" "}
          <a
            href="mailto:devfrancocrestodina@gmail.com"
            data-umami-event="contact-email"
            style={{ color: "#999999", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            Escribinos por correo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
