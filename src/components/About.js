import React, { useEffect, useRef } from "react";
import {
    FaJava, FaJs, FaReact, FaNodeJs, FaPython,
} from "react-icons/fa";
import {
    SiCplusplus, SiExpress, SiMongodb, SiMysql,
    SiHtml5, SiCss3, SiFlutter, SiFirebase,
} from "react-icons/si";
import "./About.css";

const skills = [
    {
        label: "Languages", items: [
            { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
            { icon: <FaJava />, name: "Java", color: "#007396" },
            { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
            { icon: <FaPython />, name: "Python", color: "#3776AB" },
        ]
    },
    {
        label: "Frontend", items: [
            { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
            { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
            { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
            { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
        ]
    },
    {
        label: "Backend", items: [
            { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
            { icon: <SiExpress />, name: "Express.js", color: "#ffffff" },
        ]
    },
    {
        label: "Database", items: [
            { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
            { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
            { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
        ]
    },
];

const education = [
    {
        degree: "B.E in Computer Science",
        institution: "Kongu Engineering College",
        year: "2022 – 2026",
        score: "7.56",
        scoreLabel: "CGPA",
    },
    {
        degree: "Higher Secondary (HSC)",
        institution: "Kongu Vellelar Matric HSS",
        year: "2021 – 2022",
        score: "80%",
        scoreLabel: "Score",
    },
    {
        degree: "Secondary (SSLC)",
        institution: "Kongu Vellelar Matric HSS",
        year: "2019 – 2020",
        score: "63%",
        scoreLabel: "Score",
    },
];

const experiences = [
    {
        role: "Freelance - Backend Developer",
        company: "Sakthi Auto Component Limited",
        location: "Tiruppur, India",
        duration: "Nov 2025 – Present",
        details: [
            "Developed a backend system using Node.js and MySQL to manage multi-department approval workflows.",
            "Implemented JWT authentication and role-based access control to ensure secure and structured data handling.",
            "Added automated notifications and stage-transition logic to streamline request movement between departments."
        ]
    },
    {
        role: "Freelance - Backend Developer",
        company: "Global Matriculation Higher Secondary School",
        location: "Kangayam, India",
        duration: "Jan 2025 – Apr 2025",
        details: [
            "Designed and managed application databases using Supabase and MongoDB.",
            "Developed optimized backend APIs ensuring smooth and secure data flow.",
            "Built an Admin Dashboard enabling staff to easily add, update, and manage website content."
        ]
    }
];

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
        );

        const items = sectionRef.current?.querySelectorAll(".fade-in-section, .journey-item");
        items?.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-inner">
                {/* Header */}
                <div className="fade-in-section about-header">
                    <span className="section-label">01. About</span>
                    <h2 className="section-title">
                        <span className="gradient-text"> Who I Am</span>
                    </h2>
                    <div className="section-divider" />
                </div>

                {/* Bio */}
                <div className="about-top fade-in-section">
                    <div className="about-bio">
                        <h3 className="bio-title">Passionate Developer &amp; Builder</h3>
                        <p className="bio-text">
                            I&apos;m a Computer Science student at Kongu Engineering College with
                            a deep passion for building scalable web and mobile applications.
                            I love turning complex problems into clean, elegant solutions.
                        </p>
                        <p className="bio-text">
                            With hands-on experience in the MERN stack and a background
                            in competitive hackathons, I thrive in fast-paced environments
                            where I can learn and contribute meaningfully.
                        </p>

                        {/* Stats */}
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Hackathon Wins</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Coding</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills grid */}
                <div className="skills-section fade-in-section">
                    <h3 className="skills-heading">Tech Stack</h3>
                    <div className="skills-grid">
                        {skills.map((category) => (
                            <div key={category.label} className="skills-category-card glass-card">
                                <h4 className="skills-category-label">{category.label}</h4>
                                <div className="skills-icons">
                                    {category.items.map((item) => (
                                        <div key={item.name} className="skill-chip" title={item.name}>
                                            <span
                                                className="skill-chip-icon"
                                                style={{ color: item.color }}
                                            >
                                                {item.icon}
                                            </span>
                                            <span className="skill-chip-name">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience section */}
                <div className="experience-section">
                    <div className="journey-header fade-in-section" style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h3 className="skills-heading justify-center">Experience</h3>
                    </div>
                    <div className="education-timeline-modern">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`edu-timeline-item journey-item ${index % 2 === 0 ? "left" : "right"}`}>
                                <div className="edu-timeline-dot"></div>
                                <div className="edu-timeline-content glass-card exp-card">
                                    <div className="edu-timeline-header">
                                        <div className="edu-year-badge">{exp.duration}</div>
                                        <div className="edu-score-badge">
                                            <span className="edu-score-label">Location</span>
                                            <span className="edu-score-value" style={{ fontSize: "0.8rem" }}>{exp.location}</span>
                                        </div>
                                    </div>
                                    <h4 className="edu-degree">{exp.role}</h4>
                                    <p className="edu-institution">{exp.company}</p>
                                    <ul className="exp-details">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx} className="exp-detail-item">{detail}</li>
                                        ))}
                                    </ul>
                                    <div className="edu-number">{String(index + 1).padStart(2, "0")}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education section */}
                <div className="education-section" style={{ marginTop: "40px" }}>
                    <div className="journey-header fade-in-section" style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h3 className="skills-heading justify-center">Education Journey</h3>
                    </div>
                    <div className="education-timeline-modern">
                        {education.map((edu, index) => (
                            <div key={index} className={`edu-timeline-item journey-item ${index % 2 === 0 ? "left" : "right"}`}>
                                <div className="edu-timeline-dot"></div>
                                <div className="edu-timeline-content glass-card">
                                    <div className="edu-timeline-header">
                                        <div className="edu-year-badge">{edu.year}</div>
                                        <div className="edu-score-badge">
                                            <span className="edu-score-label">{edu.scoreLabel}</span>
                                            <span className="edu-score-value">{edu.score}</span>
                                        </div>
                                    </div>
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    <p className="edu-institution">{edu.institution}</p>
                                    <div className="edu-number">{String(index + 1).padStart(2, "0")}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
