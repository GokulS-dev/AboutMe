import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRoute,
  FaCompass
} from "react-icons/fa";
import "./Experience.css";

const roadMilestones = [
  {
    id: "sakthi",
    milePost: "KM 2025",
    routeCode: "ROUTE 25",
    period: "2025 — 2026",
    role: "Backend Developer (Freelance)",
    company: "Sakthi Auto Component Limited",
    location: "Tiruppur, India",
    type: "Contract",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: "srivyn",
    milePost: "KM 2026",
    routeCode: "ROUTE 26",
    period: "2026",
    role: "Software Engineer — Frontend Developer",
    company: "Srivyn Platforms Pvt Ltd",
    location: "Hyderabad, Telangana",
    type: "Contract / Internship",
    accentColor: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.35)",
  }
];

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(1); // default spotlight on most recent role (Srivyn Platforms)

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header-strip">
          <div className="header-meta-tag">
            <FaRoute size={12} className="route-icon" />
            <span className="meta-text">01 // CAREER HIGHWAY</span>
            <span className="meta-sep">·</span>
            <span className="meta-sub">CHRONOLOGICAL ROAD</span>
          </div>
          <h2 className="experience-main-heading">The Engineering Road</h2>
          <p className="experience-lead-text">
            Chronological milestones across industrial automation, API integrations, and healthcare web platforms.
          </p>
        </div>

        {/* ── THE ROAD HIGHWAY STRIP (Left to Right) ── */}
        <div className="career-highway-wrapper">
          {/* Highway Asphalt Roadbed */}
          <div className="highway-asphalt-track">
            {/* Top Shoulder Curb Line */}
            <div className="highway-curb-line curb-top" />

            {/* Road Center with Animated Traveling Lane Dashes */}
            <div className="highway-lane-divider">
              <div className="lane-stripes-pattern" />
              {/* Traveling Light Vehicle / Pulse */}
              <div className="highway-speed-pulse" />
            </div>

            {/* Bottom Shoulder Curb Line */}
            <div className="highway-curb-line curb-bottom" />

            {/* Highway Mile Markers / Waypoint Signs */}
            <div className="highway-milestones-row">
              {roadMilestones.map((exp, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={exp.id}
                    className={`highway-milestone-sign ${isActive ? "sign-active" : ""}`}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Jump to ${exp.company} milestone`}
                    style={{
                      "--road-accent": exp.accentColor,
                      "--road-glow": exp.accentGlow
                    }}
                  >
                    {/* Highway Signpost Pill */}
                    <div className="highway-sign-box">
                      <div className="sign-post-metal" />
                      <div className="sign-board">
                        <div className="sign-top-row">
                          <span className="sign-km">{exp.milePost}</span>
                          <span className="sign-route">{exp.routeCode}</span>
                        </div>
                        <span className="sign-company">{exp.company.split(" ")[0]}</span>
                        {exp.isCurrent && (
                          <div className="sign-live-tag">
                            <span className="live-dot-pulse" />
                            <span>YOU ARE HERE</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Connecting Vertical Road Stem down to Job Card */}
                    <div className="highway-road-stem">
                      <div className="stem-neon-wire" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 3 ROAD DESTINATION CARDS (Company Name & Designation Only) ── */}
          <div className="highway-cards-grid">
            {/* Mobile Vertical Highway Road Spine (Visible exclusively on mobile) */}
            <div className="mobile-vertical-road-spine">
              <div className="vertical-road-asphalt">
                <div className="vertical-lane-stripes" />
                <div className="vertical-speed-pulse" />
              </div>
            </div>

            {roadMilestones.map((exp, idx) => {
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={exp.id}
                  className={`highway-job-card ${isSelected ? "card-spotlight" : ""} ${exp.isCurrent ? "card-destination-summit" : ""}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  style={{
                    "--card-accent": exp.accentColor,
                    "--card-glow": exp.accentGlow
                  }}
                >
                  {/* ── CURRENT ROLE STATUS PILL ATOP PRESENT CARD ── */}
                  {exp.isCurrent && (
                    <div className="present-card-status-badge">
                      <div className="working-here-pill">
                        <span className="speech-live-blip" />
                        <span className="speech-text">WORKING HERE 📍</span>
                      </div>
                    </div>
                  )}

                  {/* Card Header with Route Indicator */}
                  <div className="card-highway-header">
                    <div className="card-route-capsule">
                      <FaCompass size={11} className="compass-ico" />
                      <span>{exp.routeCode}</span>
                    </div>
                    <span className="card-period-tag">{exp.period}</span>
                  </div>

                  {/* Company Name & Designation Core */}
                  <div className="card-content-core">
                    <span className="card-company-label">{exp.company}</span>
                    <h3 className="card-designation-title">{exp.role}</h3>
                    <div className="card-location-row">
                      <FaMapMarkerAlt size={11} className="location-ico" />
                      <span>{exp.location}</span>
                      <span className="loc-sep">·</span>
                      <span className="type-badge">{exp.type}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
