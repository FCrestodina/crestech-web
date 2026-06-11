"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(212,175,55,0.15)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Logo size={32} />
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.2em",
              color: "#D4AF37",
            }}
          >
            CRESTECH
          </span>
        </a>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: 32 }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="2" x2="20" y2="20" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="2" x2="2" y2="20" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <div style={{ width: 22, height: 2, background: "#D4AF37", marginBottom: 5 }} />
              <div style={{ width: 22, height: 2, background: "#D4AF37", marginBottom: 5 }} />
              <div style={{ width: 22, height: 2, background: "#D4AF37" }} />
            </>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(212,175,55,0.15)",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "#cccccc",
                textDecoration: "none",
                fontSize: 16,
                padding: "12px 0",
                borderBottom: "1px solid rgba(212,175,55,0.1)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
