import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Status & Brand Row */}
        <div className="footer-top-row">
          <div className="footer-brand-wrap">
            <span className="footer-logo">GOKUL S</span>
            <div className="footer-status-indicator">
              <span className="footer-status-dot" />
              <span className="footer-status-label">Open to SDE Roles</span>
            </div>
          </div>

          <div className="footer-actions-wrap">
            <button
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FaArrowUp size={11} />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Line */}
        <div className="footer-bottom-row">
          <div className="footer-identity-col">
            <p className="footer-tagline">
              Software Development Engineer · Designed with an editorial engineering aesthetic.
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href="https://github.com/GokulS-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-a"
              aria-label="GitHub"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-s-b9a392259/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-a"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="footer-copyright-col">
            <span className="footer-copy">© 2026 GOKUL S</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
