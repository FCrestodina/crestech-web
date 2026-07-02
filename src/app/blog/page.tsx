import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Crestech Studio",
  description: "Ideas concretas para hacer crecer tu negocio: turnos, marca, web y contenido.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const ordenados = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main style={{ minHeight: "100dvh", padding: "80px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>BLOG</span>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, margin: "12px 0 44px", color: "#ffffff" }}
        >
          Ideas para tu negocio
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {ordenados.map((p) => (
            <article key={p.slug}>
              <Link href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <h2 className="font-serif" style={{ fontSize: 24, color: "#f5f3ee", marginBottom: 8 }}>
                  {p.title}
                </h2>
                <p style={{ color: "#999999", lineHeight: 1.7, marginBottom: 8 }}>{p.description}</p>
                <span style={{ color: "var(--gold-mid)", fontSize: 13, fontWeight: 600 }}>Leer →</span>
              </Link>
            </article>
          ))}
        </div>

        <p style={{ marginTop: 56 }}>
          <Link href="/" style={{ color: "#8a8577", fontSize: 13 }}>
            ← Volver al sitio
          </Link>
        </p>
      </div>
    </main>
  );
}
