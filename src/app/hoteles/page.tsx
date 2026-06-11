import type { Metadata } from "next";
import LandingRubro from "@/components/landing/LandingRubro";
import { getLanding } from "@/data/landings";

const config = getLanding("hoteles")!;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical: "/hoteles" },
  openGraph: {
    title: config.ogTitle,
    description: config.ogDescription,
    siteName: "Crestech Studio",
    type: "website",
    url: "/hoteles",
  },
};

export default function Page() {
  return <LandingRubro config={config} />;
}
