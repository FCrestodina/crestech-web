import { Barlow_Condensed, Cormorant_Garamond, Fraunces, Instrument_Sans, Manrope } from "next/font/google";
import type { LandingTheme } from "@/data/landings";

export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-fraunces",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-instrument",
});

// Tipografías de display por tema. Sin preload: comparten ruta ([rubro]) y
// precargarlas haría bajar las tres en cada landing aunque use una sola.
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-barlow",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600"],
  display: "swap",
  preload: false,
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: false,
  variable: "--font-manrope",
});

const themeFont: Record<LandingTheme, string> = {
  calma: "",
  cancha: barlow.variable,
  hotel: cormorant.variable,
  inmo: manrope.variable,
};

export function landingFontVars(theme: LandingTheme): string {
  return [fraunces.variable, instrumentSans.variable, themeFont[theme]].filter(Boolean).join(" ");
}
