import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Crestech Studio — Branding, Contenido & Desarrollo Digital";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Crestech Studio", "Branding · Contenido · Desarrollo Digital");
}
