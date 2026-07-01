import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingRubro from "@/components/landing/LandingRubro";
import { getLanding, landingSlugs } from "@/data/landings";

export function generateStaticParams() {
  return landingSlugs.map((rubro) => ({ rubro }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ rubro: string }>;
}): Promise<Metadata> {
  const { rubro } = await params;
  const config = getLanding(rubro);
  if (!config) return {};

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: `/${config.slug}` },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      siteName: "Crestech Studio",
      type: "website",
      url: `/${config.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ rubro: string }>;
}) {
  const { rubro } = await params;
  const config = getLanding(rubro);
  if (!config) notFound();

  return <LandingRubro config={config} />;
}
