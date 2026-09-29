import React, { useState, useEffect } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import MobileDock from "./components/MobileDock";
import useAnimatedFavicon from "./utils/useAnimatedFavicon";
import "./App.css";

function App() {
  useAnimatedFavicon();
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Dark & Light Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Track active section for navigation highlighting
  useEffect(() => {
    const sections = ["hero", "experience", "work", "stack", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1
    };

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, observerOptions);
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Cinematic Intro:
          Present on initial page load / refresh.
          Once the user starts scrolling, GOKUL S zooms closer into the camera/screen,
          the hero reveals, and once the animation is done, it never comes back again
          until the page is refreshed. */}
      {!introDone && (
        <CinematicIntro onComplete={() => setIntroDone(true)} />
      )}

      {/* Navigation (reveals once intro zoom is done) */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        visible={introDone}
      />

      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <About />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      <Footer />

      {/* Floating Mobile Phone Bottom Dock (Reference: emp.jacmedialand.com) */}
      <MobileDock activeSection={activeSection} />

      {/* Accessible Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;