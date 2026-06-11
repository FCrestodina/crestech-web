import type { Metadata } from "next";
import LandingRubro from "@/components/landing/LandingRubro";
import { getLanding } from "@/data/landings";

const config = getLanding("turnos-pilates")!;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical: "/turnos-pilates" },
  openGraph: {
    title: config.ogTitle,
    description: config.ogDescription,
    siteName: "Crestech Studio",
    type: "website",
    url: "/turnos-pilates",
  },
};

export default function Page() {
  return <LandingRubro config={config} />;
}
