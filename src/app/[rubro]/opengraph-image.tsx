import { ogImage, ogSize, ogContentType } from "@/lib/og";
import { getLanding, landingSlugs } from "@/data/landings";

export function generateStaticParams() {
  return landingSlugs.map((rubro) => ({ rubro }));
}

export const dynamicParams = false;

export const size = ogSize;
export const contentType = ogContentType;

export const alt = "Crestech Studio";

export default async function Image({
  params,
}: {
  params: Promise<{ rubro: string }>;
}) {
  const { rubro } = await params;
  const config = getLanding(rubro);
  const title = config?.ogTitle ?? "Crestech Studio";
  return ogImage(title, "Crestech Studio");
}
