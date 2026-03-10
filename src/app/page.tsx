import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Contact from "@/features/contact/Contact";
import About from "@/features/about/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
