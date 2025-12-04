import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll al navegar
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    } else if (sectionId === "home") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  // Detectar sección activa durante el scroll
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Si está en el top, marcar home como activo
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const {offsetTop, offsetHeight} = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <div id="home">
          <Hero
            onNavigateToProjects={() =>
              handleNavigate("projects")
            }
          />
        </div>

        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>

      <Footer/>
    </div>
  );
}
