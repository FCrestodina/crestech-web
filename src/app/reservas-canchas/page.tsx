import type { Metadata } from "next";
import LandingRubro from "@/components/landing/LandingRubro";
import { getLanding } from "@/data/landings";

const config = getLanding("reservas-canchas")!;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical: "/reservas-canchas" },
  openGraph: {
    title: config.ogTitle,
    description: config.ogDescription,
    siteName: "Crestech Studio",
    type: "website",
    url: "/reservas-canchas",
  },
};

export default function Page() {
  return <LandingRubro config={config} />;
}
