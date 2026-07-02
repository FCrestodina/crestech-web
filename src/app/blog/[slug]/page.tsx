import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, postSlugs } from "@/data/posts";
import { waLink } from "@/data/landings";

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
    title: `${post.title} — Crestech Studio`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: "Crestech Studio",
      type: "article",
      url: `/blog/${slug}`,
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

  return (
    <main style={{ minHeight: "100dvh", padding: "80px 24px" }}>
      <article style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link href="/blog" style={{ color: "var(--gold-mid)", fontSize: 13, fontWeight: 600 }}>
          ← Blog
        </Link>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 500,
            margin: "16px 0 28px",
            color: "#ffffff",
            lineHeight: 1.15,
          }}
        >
          {post.title}
        </h1>

        {post.body.map((b, i) =>
          b.type === "h2" ? (
            <h2
              key={i}
              className="font-serif"
              style={{ fontSize: 22, color: "#f5f3ee", margin: "30px 0 10px" }}
            >
              {b.text}
            </h2>
          ) : (
            <p key={i} style={{ color: "#cfcabb", lineHeight: 1.85, marginBottom: 14 }}>
              {b.text}
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
