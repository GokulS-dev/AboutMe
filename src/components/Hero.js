import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaArrowDown } from "react-icons/fa";
import profilePhoto from "../assets/IMG_5165.jpeg";
import "./Hero.css";

const heroTech = ["Java", "JavaScript", "React", "Node.js", "Express", "SQL Server"];

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient-mesh" />

      <div className="hero-inner">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          {/* Engineering status tag */}
          <div className="hero-status-tag">
            <span className="status-dot-pulse" />
            <span className="status-text">Available for SDE & Full Stack Roles</span>
          </div>

          {/* Primary Role Heading */}
          <h1 className="hero-title">
            Software Development Engineer
          </h1>

          {/* Core Elevator Pitch */}
          <p className="hero-description">
            I build reliable web applications, APIs and database-driven systems.
          </p>

          {/* Key Tech Badges */}
          <div className="hero-tech-strip">
            {heroTech.map((tech, i) => (
              <span key={tech} className="hero-tech-item">
                <span className="tech-badge">{tech}</span>
                {i < heroTech.length - 1 && <span className="tech-separator">·</span>}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <button
              className="btn-primary-hero"
              onClick={() => scrollToSection("experience")}
              aria-label="Explore experience and work"
            >
              <span>Explore my work</span>
              <FaArrowDown size={12} className="btn-icon" />
            </button>
          </div>

          {/* Social Proof & Profiles */}
          <div className="hero-socials">
            <a
              href="https://github.com/GokulS-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-s-b9a392259/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/S_Gokul19/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LeetCode Profile"
            >
              <FaCode size={16} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Portrait & Engineering Card */}
        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-frame-inner">
              <img
                src={profilePhoto}
                alt="Gokul S — Software Development Engineer"
                className="hero-portrait"
                loading="eager"
              />
              <div className="hero-frame-gradient" />
            </div>

            {/* Floating Telemetry Badge */}
            <div className="hero-floating-card">
              <div className="card-header-mono">
                <span className="mono-dot" />
                <span>GOKUL S // DEV-NODE</span>
              </div>
              <div className="card-body-mono">
                <div className="mono-row">
                  <span className="mono-key">Role:</span>
                  <span className="mono-val">Full Stack & Systems</span>
                </div>
                <div className="mono-row">
                  <span className="mono-key">Location:</span>
                  <span className="mono-val">Tamil Nadu, India</span>
                </div>
                <div className="mono-row">
                  <span className="mono-key">Status:</span>
                  <span className="mono-val highlight">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="hero-scroll-indicator">
        <button
          className="scroll-cue-btn"
          onClick={() => scrollToSection("experience")}
          aria-label="Scroll down to experience"
        >
          <span className="cue-label">SCROLL</span>
          <span className="cue-line" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
