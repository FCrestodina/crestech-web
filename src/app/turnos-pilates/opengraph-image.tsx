import { ogImage, ogSize, ogContentType } from "@/lib/og";
import { getLanding } from "@/data/landings";

const config = getLanding("turnos-pilates")!;

export const alt = config.ogTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(config.ogTitle, "Crestech Studio");
}
