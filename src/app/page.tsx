import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clientes from "@/components/Clientes";
import Didactico from "@/components/Didactico";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clientes />
        <Services />
        <Process />
        <Portfolio />
        <Didactico />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
