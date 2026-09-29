import React from "react";
import {
  FaHome,
  FaRoute,
  FaLaptopCode,
  FaLayerGroup,
  FaPaperPlane
} from "react-icons/fa";
import "./MobileDock.css";

const MobileDock = ({ activeSection }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: FaHome },
    { id: "experience", label: "Road", icon: FaRoute },
    { id: "work", label: "Work", icon: FaLaptopCode, isCenter: true },
    { id: "stack", label: "Stack", icon: FaLayerGroup },
    { id: "contact", label: "Contact", icon: FaPaperPlane }
  ];

  return (
    <nav className="mobile-dock-wrapper" aria-label="Mobile Navigation Dock">
      <div className="mobile-dock-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              className={`dock-tab-item ${item.isCenter ? "dock-tab-featured" : ""} ${isActive ? "dock-active" : ""}`}
              onClick={() => scrollTo(item.id)}
              aria-label={`Go to ${item.label}`}
            >
              <div className="dock-icon-shield">
                <Icon size={item.isCenter ? 18 : 16} />
              </div>
              <span className="dock-tab-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileDock;
