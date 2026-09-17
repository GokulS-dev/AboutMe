import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaLinkedin, FaGithub, FaCode, FaDownload, FaArrowDown, FaTimes, FaEye } from "react-icons/fa";
import profileImg from "../assets/m3.jpeg";
import cv from "../assets/Gokul_BE .pdf";
import "./Hero.css";

const Hero = () => {
    const [cvModalOpen, setCvModalOpen] = useState(false);

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
                <div className="hero-inner">
                    {/* Left content */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            FULL-STACK DEVELOPER · DIGITAL BUILDER
                        </div>

                        <h1 className="hero-title">
                            Gokul S.
                        </h1>

                        <p className="hero-desc">
                            I build digital products, experiences and systems that turn ideas into useful technology. Passionate about writing meaningful, maintainable code.
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
                        <img src={profileImg} alt="Gokul S" className="hero-profile-img" />
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
