import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaLinkedin, FaGithub, FaCode, FaDownload, FaArrowDown, FaTimes, FaEye } from "react-icons/fa";
import profileImg from "../assets/m3.jpeg";
import cv from "../assets/Gokul_BE .pdf";
import "./Hero.css";

const roles = [
    "Full Stack Developer",
    "React Enthusiast",
    "Problem Solver",
    "MERN Stack Developer",
];


const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const [cvModalOpen, setCvModalOpen] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let charIndex = 0;
        let timeout;

        if (typing) {
            const type = () => {
                if (charIndex <= currentRole.length) {
                    setDisplayed(currentRole.slice(0, charIndex));
                    charIndex++;
                    timeout = setTimeout(type, 60);
                } else {
                    timeout = setTimeout(() => setTyping(false), 1800);
                }
            };
            type();
        } else {
            const erase = () => {
                if (charIndex >= 0) {
                    setDisplayed(currentRole.slice(0, charIndex));
                    charIndex--;
                    timeout = setTimeout(erase, 35);
                } else {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    setTyping(true);
                }
            };
            charIndex = currentRole.length;
            erase();
        }

        return () => clearTimeout(timeout);
    }, [roleIndex, typing]);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = cvModalOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [cvModalOpen]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section id="hero" className="hero-section">
                {/* Gradient orbs */}
                <div className="orb orb-1" />
                <div className="orb orb-2" />

                <div className="hero-inner">
                    {/* Left content */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            Available for opportunities
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm{" "}
                            <span className="hero-name">Gokul S</span>
                        </h1>

                        <div className="hero-role">
                            <span className="role-prefix">I build as a&nbsp;</span>
                            <span className="role-typed">
                                {displayed}
                                <span className="cursor">|</span>
                            </span>
                        </div>

                        <p className="hero-desc">
                            I craft high-quality digital experiences — from clean interfaces
                            to scalable backend systems. Passionate about writing meaningful,
                            maintainable code.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="btn-primary-custom"
                                onClick={() => setCvModalOpen(true)}
                                aria-label="Preview CV"
                            >
                                <FaEye size={14} />
                                View CV
                            </button>
                            <button className="btn-secondary-custom" onClick={scrollToAbout}>
                                Explore More
                            </button>
                        </div>

                        <div className="hero-socials">
                            <a
                                href="https://www.linkedin.com/in/gokul-s-b9a392259/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/GokulS-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://leetcode.com/u/S_Gokul19/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link leetcode"
                                aria-label="LeetCode"
                                title="LeetCode"
                            >
                                <FaCode />
                            </a>
                        </div>
                    </div>

                    {/* Right: profile image */}
                    <div className="hero-image-wrapper">
                        <div className="hero-image-ring" />
                        <div className="hero-image-ring ring-2" />
                        <img src={profileImg} alt="Gokul S" className="hero-profile-img" />
                        <div className="hero-image-glow" />
                    </div>
                </div>

                {/* Scroll cue */}
                <button className="scroll-cue" onClick={scrollToAbout} aria-label="Scroll down">
                    <FaArrowDown />
                </button>
            </section>

            {/* CV Preview Modal — portal renders at document.body, above all stacking contexts */}
            {cvModalOpen && ReactDOM.createPortal(
                <div className="cv-modal-overlay" onClick={() => setCvModalOpen(false)}>
                    <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="cv-modal-header">
                            <div className="cv-modal-title">
                                <FaEye size={16} />
                                <span>Resume Preview</span>
                            </div>
                            <div className="cv-modal-actions">
                                <a
                                    href={cv}
                                    download="Gokul_BE.pdf"
                                    className="cv-download-btn"
                                    aria-label="Download CV"
                                >
                                    <FaDownload size={13} />
                                    Download
                                </a>
                                <button
                                    className="cv-close-btn"
                                    onClick={() => setCvModalOpen(false)}
                                    aria-label="Close preview"
                                >
                                    <FaTimes size={16} />
                                </button>
                            </div>
                        </div>
                        <div className="cv-modal-body">
                            <iframe
                                src={cv}
                                title="CV Preview"
                                className="cv-iframe"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Hero;
