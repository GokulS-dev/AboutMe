import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub, FaExternalLinkAlt,
  FaHtml5, FaCss3Alt, FaBootstrap, FaPython,
  FaReact, FaNodeJs, FaCloudSun,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiFirebase,
  SiDart, SiFlutter, SiApachekafka,
} from "react-icons/si";
import P1 from "../assets/Gemini_Generated_Image_e248t3e248t3e248.jpeg";
import P2 from "../assets/p2.jpeg";
import P3 from "../assets/p3.jpeg";
import P4 from "../assets/p4.jpeg";
import P5 from "../assets/p5.jpeg";
import P6 from "../assets/p6.jpeg";
import "./Projects.css";

const projectData = [
  {
    title: "Streamline Processing",
    subtitle: "Using Apache Kafka",
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      { icon: <SiApachekafka />, name: "Kafka", color: "#a0aec0" },
    ],
    description:
      "Leverage Apache Kafka for real-time data streaming and efficient processing. Enhance scalability, reliability, and fault tolerance in your data pipeline.",
    github: "https://github.com/GokulS-dev/StreamlineProcessing_Using_KAFKA",
    image: P1,
    badge: { emoji: "🥇", label: "1st Prize · Thinkathon'24" },
    category: "Data Engineering",
  },
  {
    title: "ISTE Events Portal",
    subtitle: "Event Discovery Platform",
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
    ],
    description:
      "Stay updated with the latest ISTE events — workshops, hackathons, seminars, and competitions. Explore opportunities to enhance your skills!",
    github: "https://github.com/GokulS-dev/ISTE-Events",
    link: "https://iste-events.netlify.app/",
    image: P4,
    badge: { emoji: "🥇", label: "1st Prize · ISTE Web Design" },
    category: "Web App",
  },
  {
    title: "Activity Point Calculator",
    subtitle: "Student Performance Tracker",
    techStack: [
      { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
    ],
    description:
      "A tool to calculate student activity points based on participation in events, projects, and extracurriculars. Helps track and manage student engagement.",
    github: "https://github.com/GokulS-dev/Student_Activity_Point_Calc",
    image: P2,
    badge: { emoji: "🥈", label: "2nd Prize · KEC Hackathon'24" },
    category: "Web App",
  },
  {
    title: "Online Exam Portal",
    subtitle: "MERN Stack Assessment Platform",
    techStack: [
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiExpress />, name: "Express.js", color: "#a0aec0" },
      { icon: <FaReact />, name: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    ],
    description:
      "A secure online exam portal for conducting tests, assessments, and quizzes. Supports automated grading, scheduling, and real-time monitoring.",
    github: "https://github.com/GokulS-dev/online_exam_portal",
    image: P3,
    category: "Full Stack",
  },
  {
    title: "Weather Monitoring",
    subtitle: "Real-Time Climate Dashboard",
    techStack: [
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiExpress />, name: "Express.js", color: "#a0aec0" },
      { icon: <FaReact />, name: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <FaCloudSun />, name: "Weather API", color: "#FDB813" },
    ],
    description:
      "A real-time system that collects, analyzes, and displays weather data — temperature, humidity, and rainfall — for accurate environmental monitoring.",
    github: "https://github.com/GokulS-dev/Weather-Monitoring",
    link: "https://weather-monitoring-we31.onrender.com/",
    image: P5,
    category: "Full Stack",
  },
  {
    title: "SmartEzyGo",
    subtitle: "Flutter Mobile Application",
    techStack: [
      { icon: <SiDart />, name: "Dart", color: "#0175C2" },
      { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
      { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    ],
    description:
      "A mobile application built with Flutter and Firebase to streamline everyday processes and solve real societal problems with a modern user interface.",
    github: "https://github.com/GokulS-dev/SmartEzyGo",
    image: P6,
    category: "Mobile",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projectData.map((p) => p.category))];
  const filtered = filter === "All"
    ? projectData
    : projectData.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".fade-in-section");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-inner">
        {/* Header */}
        <div className="fade-in-section projects-header">
          <span className="section-label">02. Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A curated collection of projects built with passion — from hackathon
            winners to full-stack applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="fade-in-section filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects-grid fade-in-section">
          {filtered.map((project, index) => (
            <div key={index} className="project-card-new glass-card">
              {/* Image */}
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-img-overlay" />

                {/* Badge */}
                {project.badge && (
                  <div className="project-badge">
                    {project.badge.emoji} {project.badge.label}
                  </div>
                )}

                {/* Category tag */}
                <span className="project-category-tag">{project.category}</span>

                {/* Links on hover */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    aria-label="GitHub"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div>
                  <h3 className="project-title-new">{project.title}</h3>
                  <p className="project-subtitle-new">{project.subtitle}</p>
                </div>
                <p className="project-desc">{project.description}</p>

                {/* Tech stack */}
                <div className="project-tech-row">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="tech-pill"
                      title={tech.name}
                    >
                      <span style={{ color: tech.color, display: "flex", alignItems: "center" }}>
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;