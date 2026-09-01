import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import SpaceBackground from "./components/ui/SpaceBackground";
import { SmoothCursor } from "./components/lightswind/smooth-cursor";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <LazyMotion features={domAnimation}>
        <SmoothCursor />
        <SpaceBackground />
        <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      </LazyMotion>
    </div>
  );
}

