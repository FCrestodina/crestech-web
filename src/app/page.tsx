import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
