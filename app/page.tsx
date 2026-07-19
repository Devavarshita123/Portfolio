import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Footer from "../components/layout/Footer";
import Achievements from "../components/sections/Achievements";
import Resume from "../components/sections/Resume";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}