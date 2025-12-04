import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/**
 * The main App component that serves as the root of the application.
 * It manages the active section state and handles smooth scrolling
 * and active section detection during user interaction.
 */
export default function App() {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState("home");

  /**
   * Handles smooth scrolling to a specific section of the page.
   * If the section is "home", scrolls to the top of the page.
   *
   * @param {string} sectionId - The ID of the section to navigate to.
   */
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    } else if (sectionId === "home") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  /**
   * Effect to detect the active section during scrolling.
   * Updates the `activeSection` state based on the user's scroll position.
   */
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact",];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // If at the top of the page, set "home" as the active section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Loop through sections to determine the active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const {offsetTop, offsetHeight} = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<div className="min-h-screen">
      {/* Header component with navigation and active section highlighting */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero section with a callback to navigate to the Projects section */}
        <div id="home">
          <Hero
            onNavigateToProjects={() => handleNavigate("projects")}
          />
        </div>

        {/* Other sections of the page */}
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>

      {/* Footer component */}
      <Footer/>
    </div>);
}
