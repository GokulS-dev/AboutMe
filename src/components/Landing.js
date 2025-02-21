import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Landing.css"; // Import custom styles
import profileImg from "../assets/Profile.jpg";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import cv from "../assets/Gokul_Resume.docx";

const Landing = () => {
  // Function to scroll slightly above the "About Me" section
  const scrollToHome = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = aboutSection.offsetTop - 80; // Adjust this value as needed
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="landing-container d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <h1 className="title">
                Hi, I'm <span className="highlight name-lazy-load">Gokul S 🧑🏻‍💻</span>
              </h1>
              <h2 className="subtitle">
                A Passionate <span className="highlight role-lazy-load">Web 🧑🏻‍💻 and Mobile 📱 Application Developer</span>
              </h2>
              <p className="description">
                I specialize in building modern, responsive websites and applications that provide a seamless user experience.
              </p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/gokul-s-b9a392259/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/GokulS-dev" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/S_Gokul19/" target="_blank" rel="noopener noreferrer" className="social-icon leetcode">
                  <FaCode />
                </a>
                <Button variant="primary" className="get-cv-btn" href={cv} download="Gokul_Resume.docx">
                  Get CV
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <img src={profileImg} alt="Gokul S" className="img-fluid profile-img" />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default Landing;