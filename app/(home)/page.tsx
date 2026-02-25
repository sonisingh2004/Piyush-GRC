
import Hero from "@/app/(home)/Hero";
import About from "@/app/(home)/About";
import Features from "@/app/(home)/Features";
import Contact from "@/app/(home)/Contact";
import Projects from "@/app/(home)/Projects";
import TechSpecs from "./TechSpecs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects/>
      <TechSpecs/>
      <Features />
      <Contact />
    </>
  );
}
