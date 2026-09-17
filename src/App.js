import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";


// Loading Screen
const LoadingScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">G/S</div>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loading-text">Initializing Portfolio... {progress}%</p>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      {!loading && (
        <div className="app-wrapper">
          <Navbar activeSection={activeSection} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="site-footer">
            <p>
              Crafted with ❤️ by{" "}
              <span className="footer-name">Gokul S</span> · {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;