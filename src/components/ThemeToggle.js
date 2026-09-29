import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = ({ theme, toggleTheme, className = "" }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle-switch ${isDark ? "theme-dark" : "theme-light"} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="toggle-track">
        <span className="toggle-icon-wrap sun" aria-hidden="true">
          <FaSun size={11} />
        </span>
        <span className="toggle-icon-wrap moon" aria-hidden="true">
          <FaMoon size={11} />
        </span>
        <div className="toggle-thumb">
          {isDark ? (
            <FaMoon size={11} className="thumb-icon moon-icon" />
          ) : (
            <FaSun size={11} className="thumb-icon sun-icon" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
