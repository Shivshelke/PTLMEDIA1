import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CreativeToolkit from "@/components/sections/CreativeToolkit";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CreativeProcess from "@/components/sections/CreativeProcess";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import JoinCreativeTeam from "@/components/sections/JoinCreativeTeam";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <About />
        <Services />
        <CreativeToolkit />
        <Portfolio />
        <WhyChooseUs />
        <CreativeProcess />
        <Statistics />
        <Testimonials />
        <FAQ />
        <JoinCreativeTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
