import React, { useState, useEffect } from "react";
import { FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, onOpenResume, theme, toggleTheme, visible = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 30 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""} ${!visible ? "header-hidden" : ""}`}>
      <div className="header-container">
        {/* Brand */}
        <div className="header-brand-group">
          <button
            className="brand-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Gokul S - Back to top"
          >
            <span className="brand-title">GOKUL S</span>
          </button>
          <span className="brand-badge">SDE</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-pill" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="header-actions">
          {/* Dark / Light Theme Toggle Switch */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Resume Modal Trigger */}
          <button
            className="resume-nav-btn"
            onClick={onOpenResume}
            aria-label="View Resume"
          >
            <span className="resume-text">Resume</span>
            <span className="resume-arrow">↗</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <button
                  className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="mobile-link-num">0{navItems.indexOf(item) + 1}</span>
                  <span className="mobile-link-label">{item.label}</span>
                  <span className="mobile-link-arrow">→</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Theme Appearance</span>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <button
              className="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FaFileAlt size={14} />
              <span>View Resume (PDF)</span>
              <span className="mobile-arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
