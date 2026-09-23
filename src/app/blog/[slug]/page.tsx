import type { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, postSlugs } from "@/data/posts";
import { waLink } from "@/data/landings";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

const linkStyle = { color: "var(--gold-mid)", textDecoration: "underline" };

// Párrafos con links markdown: [texto](/ruta) → <Link>, [texto](https://…) → <a> externo.
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href} style={linkStyle}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener" style={linkStyle}>
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function fechaLarga(iso: string): string {
  return new Date(`${iso}T12:00:00-03:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Crestech`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: "Crestech Studio",
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const wa = waLink(`Hola, leí "${post.title}" y quiero saber más sobre Crestech.`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${siteUrl}/blog/${slug}`,
    inLanguage: "es-AR",
    author: { "@type": "Organization", name: "Crestech Studio", url: siteUrl },
    publisher: { "@type": "Organization", name: "Crestech Studio", url: siteUrl },
  };

  return (
    <main style={{ minHeight: "100dvh", padding: "80px 24px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link href="/blog" style={{ color: "var(--gold-mid)", fontSize: 13, fontWeight: 600 }}>
          Blog
        </Link>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 500,
            margin: "16px 0 12px",
            color: "#ffffff",
            lineHeight: 1.15,
          }}
        >
          {post.title}
        </h1>
        <p style={{ color: "#8a8577", fontSize: 13, marginBottom: 28 }}>
          <time dateTime={post.date}>{fechaLarga(post.date)}</time> · Crestech Studio
        </p>

        {post.body.map((b, i) =>
          b.type === "h2" ? (
            <h2
              key={i}
              className="font-display"
              style={{ fontSize: 22, color: "#f5f3ee", margin: "30px 0 10px" }}
            >
              {b.text}
            </h2>
          ) : (
            <p key={i} style={{ color: "#cfcabb", lineHeight: 1.85, marginBottom: 14 }}>
              {inline(b.text)}
            </p>
          )
        )}

        <div style={{ marginTop: 44 }}>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold" data-umami-event="blog-whatsapp">
            Hablar con Crestech
          </a>
        </div>
      </article>
    </main>
  );
}
