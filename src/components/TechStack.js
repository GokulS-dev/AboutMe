import React from "react";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import javaIcon from "../icons/java.png";
import jsIcon from "../icons/javascript.png";
import reactIcon from "../icons/react.png";
import nodeIcon from "../icons/nodejs.png";
import expressIcon from "../icons/express.png";
import mongoIcon from "../icons/mongodb.png";
import mysqlIcon from "../icons/mysql.png";
import awsIcon from "../icons/aws.png";
import gitIcon from "../icons/git.png";
import "./TechStack.css";

const techCategories = [
  {
    id: "languages",
    num: "01",
    title: "Core Languages",
    icon: FaCode,
    accentColor: "#f59e0b",
    skills: [
      { name: "Java", role: "Enterprise OOP", icon: javaIcon },
      { name: "JavaScript", role: "ES6+ Async", icon: jsIcon },
      { name: "SQL", role: "Relational Queries", icon: mysqlIcon },
      { name: "Python", role: "Data & Scripts", textIco: "Py" }
    ]
  },
  {
    id: "frontend",
    num: "02",
    title: "Frontend Systems",
    icon: FaDesktop,
    accentColor: "#38bdf8",
    skills: [
      { name: "React.js", role: "Component Architecture", icon: reactIcon },
      { name: "Context API", role: "State Management", textIco: "Ctx" },
      { name: "Responsive UI", role: "Cross-Device Systems", textIco: "UI" },
      { name: "REST Integration", role: "Client-Side APIs", textIco: "API" }
    ]
  },
  {
    id: "backend",
    num: "03",
    title: "Backend & APIs",
    icon: FaServer,
    accentColor: "#10b981",
    skills: [
      { name: "Node.js", role: "Event-Driven Runtime", icon: nodeIcon },
      { name: "Express.js", role: "REST Microservices", icon: expressIcon },
      { name: "Apache Kafka", role: "Event Streaming", textIco: "Kafka" },
      { name: "JWT & RBAC", role: "Auth Security", textIco: "Auth" }
    ]
  },
  {
    id: "data-cloud",
    num: "04",
    title: "Databases & DevOps",
    icon: FaDatabase,
    accentColor: "#a855f7",
    skills: [
      { name: "SQL Server", role: "Enterprise Schema", icon: mysqlIcon },
      { name: "MongoDB", role: "Document Pipelines", icon: mongoIcon },
      { name: "Git", role: "Version Control", icon: gitIcon },
      { name: "AWS Cloud", role: "EC2 & S3 Deployment", icon: awsIcon }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="stack" className="tech-section">
      <div className="tech-container">
        {/* Section Header */}
        <div className="tech-header-compact">
          <div className="tech-meta-pill">
            <span className="meta-index">02</span>
            <span className="meta-divider">{"//"}</span>
            <span className="meta-title">PRODUCTION STACK</span>
          </div>
          <h2 className="tech-compact-heading">Technical Arsenal</h2>
          <p className="tech-compact-sub">
            Curated production technologies across languages, frontend, backend, and cloud databases.
          </p>
        </div>

        {/* ── COMPACT 4-QUADRANT BENTO MATRIX ── */}
        <div className="tech-bento-grid">
          {techCategories.map((cat) => {
            const CatIcon = cat.icon;

            return (
              <div
                key={cat.id}
                className="tech-bento-card"
                style={{ "--cat-accent": cat.accentColor }}
              >
                {/* Quadrant Header */}
                <div className="bento-card-header">
                  <div className="header-left-group">
                    <span className="bento-num-tag">{cat.num}</span>
                    <h3 className="bento-cat-title">{cat.title}</h3>
                  </div>
                  <div className="bento-icon-badge">
                    <CatIcon size={14} style={{ color: cat.accentColor }} />
                  </div>
                </div>

                {/* Skills Compact List */}
                <div className="bento-skills-list">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-row">
                      <div className="skill-identity">
                        {skill.icon ? (
                          <img src={skill.icon} alt={skill.name} className="skill-ico-img" />
                        ) : (
                          <span className="skill-text-ico">{skill.textIco}</span>
                        )}
                        <span className="skill-name-text">{skill.name}</span>
                      </div>
                      <span className="skill-role-badge">{skill.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
