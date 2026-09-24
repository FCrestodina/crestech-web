import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Crestech Studio | Diagnóstico, sistemas y marca para pymes";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Crestech Studio", "Diagnóstico · Sistemas · Marca");
}
