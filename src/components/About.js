import React, { useState } from "react";
import {
  FaGraduationCap,
  FaTerminal,
  FaRoute,
  FaCompass,
  FaUniversity,
  FaCheckCircle
} from "react-icons/fa";
import "./About.css";

const educationMilestones = [
  {
    id: "sslc",
    milePost: "KM 2019",
    routeCode: "ROUTE 10",
    period: "2019 — 2020",
    level: "Secondary (SSLC)",
    degree: "Secondary School Leaving Certificate",
    institution: "Kongu Vellalar Matric Higher Secondary School",
    location: "Tamil Nadu, India",
    score: "63%",
    note: "General academic curriculum with foundational science & mathematics.",
    statusBadge: "COMPLETED",
    accentColor: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.35)",
  },
  {
    id: "hsc",
    milePost: "KM 2021",
    routeCode: "ROUTE 12",
    period: "2021 — 2022",
    level: "Higher Secondary (HSC)",
    degree: "Higher Secondary Certificate",
    institution: "Kongu Vellalar Matric Higher Secondary School",
    location: "Tamil Nadu, India",
    score: "80%",
    note: "Computer Science, Advanced Mathematics, Physics & Chemistry focus.",
    statusBadge: "COMPLETED",
    accentColor: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.35)",
  },
  {
    id: "engineering",
    milePost: "KM 2026",
    routeCode: "DEGREE SUMMIT",
    period: "2022 — 2026",
    level: "Undergraduate (B.E.)",
    degree: "B.E. in Computer Science & Engineering",
    institution: "Kongu Engineering College",
    location: "Perundurai, Erode",
    score: "7.56 CGPA",
    note: "Data Structures, Algorithms, DBMS, Cloud Computing & SDE Foundations.",
    isGraduated: true,
    statusBadge: "GRADUATED 🎓",
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.4)",
  }
];

const About = () => {
  const [activeEduIdx, setActiveEduIdx] = useState(2); // default spotlight on graduated engineering summit

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-meta-strip">
            <span className="section-index">04</span>
            <span className="section-label-text">BACKGROUND</span>
          </div>
          <h2 className="section-headline">About & Foundation</h2>
          <div className="section-sub-strip">
            Software Development Engineer with a focus on resilient web architecture and human-centric design.
          </div>
        </div>

        {/* Top Profile / Editorial Grid */}
        <div className="about-editorial-grid">
          {/* Left: Bio Column */}
          <div className="about-bio-column">
            <h3 className="about-bio-lead">
              Computer Science Engineering graduate with professional experience in frontend and full-stack software development.
            </h3>

            <p className="about-bio-p">
              I specialize in bridging the gap between rigorous system backend architecture and fluid, responsive user experiences. Having built enterprise workflow management tools, examination portals, and school SaaS platforms, I am passionate about crafting maintainable, high-impact software.
            </p>

            <p className="about-bio-p">
              My engineering philosophy revolves around simplicity, type-safety, database efficiency, and thoughtful interactions. When I am not designing APIs or refining UI components, I actively solve algorithmic challenges on LeetCode and explore distributed systems.
            </p>

            {/* Metrics Grid */}
            <div className="about-metrics-grid">
              <div className="metric-box">
                <span className="metric-val">3+</span>
                <span className="metric-lbl">Years Coding</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">6+</span>
                <span className="metric-lbl">Systems Shipped</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">2+</span>
                <span className="metric-lbl">Hackathon Wins</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Production Reliability</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Facts Card (Replacing Image in Exact Footprint) */}
          <div className="about-aside-column">
            <div className="about-quick-facts-card">
              {/* Terminal / Dossier Header */}
              <div className="facts-card-header">
                <div className="terminal-dots">
                  <span className="tdot tdot-red" />
                  <span className="tdot tdot-yellow" />
                  <span className="tdot tdot-green" />
                </div>
                <div className="facts-header-tag">
                  <FaTerminal size={11} className="facts-terminal-ico" />
                  <span>GOKUL.SPEC {"//"} QUICK FACTS</span>
                </div>
                <span className="facts-live-blip">ONLINE</span>
              </div>

              {/* Key Facts Matrix */}
              <div className="facts-grid-body">
                <div className="fact-row-item">
                  <span className="fact-label">ROLE</span>
                  <span className="fact-val">Software Development Engineer</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">CURRENT</span>
                  <span className="fact-val highlight-green">Full Stack Dev @ JAC MediaLand</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">EDUCATION</span>
                  <span className="fact-val">B.E. Computer Science (7.56 CGPA)</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">ALMA MATER</span>
                  <span className="fact-val">Kongu Engineering College</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">LOCATION</span>
                  <span className="fact-val">Tamil Nadu, India</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">SPECIALTY</span>
                  <span className="fact-val">Full Stack · APIs · DB Architecture</span>
                </div>
                <div className="fact-row-item">
                  <span className="fact-label">CORE TOOLS</span>
                  <span className="fact-val tech-inline-tags">Java · React · Node.js · SQL · Kafka</span>
                </div>
              </div>

              {/* Bottom Status Ribbon */}
              <div className="facts-card-footer">
                <div className="status-indicator-beacon">
                  <span className="beacon-ping" />
                  <span className="beacon-dot" />
                </div>
                <span className="footer-status-text">AVAILABLE FOR FULL-TIME SDE ROLES</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── THE EDUCATION ROAD (Chronological Academic Pathway) ── */}
        <div className="about-education-road">
          {/* Road Header */}
          <div className="edu-road-header">
            <div className="edu-road-meta-tag">
              <FaRoute size={12} className="edu-route-icon" />
              <span>04 // ACADEMIC HIGHWAY</span>
              <span className="edu-meta-sep">·</span>
              <span className="edu-meta-sub">CHRONOLOGICAL ROAD 2019 — 2026</span>
            </div>
            <div className="edu-road-title-row">
              <div className="edu-road-title-group">
                <FaGraduationCap size={24} className="edu-cap-icon" />
                <h3 className="edu-road-heading">The Academic Road</h3>
              </div>
              <span className="edu-grad-badge">COLLEGE COMPLETED 🎓</span>
            </div>
            <p className="edu-road-lead">
              Chronological milestones from foundational sciences and computer programming to graduating with a Bachelor of Engineering.
            </p>
          </div>

          {/* ── HORIZONTAL HIGHWAY TRACK (Desktop) ── */}
          <div className="edu-highway-wrapper">
            <div className="edu-asphalt-track">
              {/* Curbs */}
              <div className="edu-curb-line edu-curb-top" />

              {/* Lane Divider with Animated Flowing Stripes */}
              <div className="edu-lane-divider">
                <div className="edu-lane-stripes-pattern" />
                <div className="edu-speed-pulse" />
              </div>

              <div className="edu-curb-line edu-curb-bottom" />

              {/* Waypoint Mile Markers / Signs */}
              <div className="edu-milestones-row">
                {educationMilestones.map((edu, idx) => {
                  const isActive = activeEduIdx === idx;
                  return (
                    <div
                      key={edu.id}
                      className={`edu-milestone-sign ${isActive ? "sign-active" : ""}`}
                      onClick={() => setActiveEduIdx(idx)}
                      onMouseEnter={() => setActiveEduIdx(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Jump to ${edu.level} milestone`}
                      style={{
                        "--edu-accent": edu.accentColor,
                        "--edu-glow": edu.accentGlow
                      }}
                    >
                      <div className="edu-sign-box">
                        <div className="edu-sign-post-metal" />
                        <div className="edu-sign-board">
                          <div className="edu-sign-top-row">
                            <span className="edu-sign-km">{edu.milePost}</span>
                            <span className="edu-sign-route">{edu.routeCode}</span>
                          </div>
                          <span className="edu-sign-level">{edu.level}</span>
                          {edu.isGraduated ? (
                            <div className="edu-sign-grad-tag">
                              <span className="grad-star">🎓</span>
                              <span>ALUMNUS</span>
                            </div>
                          ) : (
                            <span className="edu-sign-passed">COMPLETED</span>
                          )}
                        </div>
                      </div>

                      {/* Connecting vertical road stem down to the card */}
                      <div className="edu-road-stem">
                        <div className="edu-stem-neon-wire" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── 3 EDUCATION MILESTONE CARDS (Left to Right / Vertical on Mobile) ── */}
            <div className="edu-highway-cards-grid">
              {/* Mobile Vertical Highway Road Spine */}
              <div className="mobile-vertical-edu-road-spine">
                <div className="vertical-edu-asphalt">
                  <div className="vertical-edu-lane-stripes" />
                  <div className="vertical-edu-speed-pulse" />
                </div>
              </div>

              {educationMilestones.map((edu, idx) => {
                const isSelected = activeEduIdx === idx;

                return (
                  <div
                    key={edu.id}
                    className={`edu-milestone-card ${isSelected ? "card-spotlight" : ""} ${edu.isGraduated ? "card-degree-summit" : ""}`}
                    onMouseEnter={() => setActiveEduIdx(idx)}
                    style={{
                      "--card-accent": edu.accentColor,
                      "--card-glow": edu.accentGlow
                    }}
                  >
                    {/* Header: Route capsule + Period + Score Pill */}
                    <div className="edu-card-top-bar">
                      <div className="edu-route-capsule">
                        <FaCompass size={11} className="compass-ico" />
                        <span>{edu.routeCode}</span>
                      </div>
                      <span className="edu-period-pill">{edu.period}</span>
                      <span className="edu-score-pill">{edu.score}</span>
                    </div>

                    {/* Degree & Institution */}
                    <div className="edu-card-core">
                      <span className="edu-card-sublabel">{edu.level}</span>
                      <h4 className="edu-card-degree-title">{edu.degree}</h4>
                      <div className="edu-institution-row">
                        <FaUniversity size={12} className="uni-icon" />
                        <span className="edu-institution-name">{edu.institution}</span>
                      </div>
                      <p className="edu-card-note">{edu.note}</p>
                    </div>

                    {/* Card Footer: Status Ribbon */}
                    <div className="edu-card-footer">
                      <div className="edu-status-pill">
                        <FaCheckCircle size={11} className="check-icon" />
                        <span>{edu.statusBadge}</span>
                      </div>
                      <span className="edu-loc-text">{edu.location}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
