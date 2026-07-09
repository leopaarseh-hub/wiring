import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
