import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css"; // Import custom styles
import aboutImg from "../assets/Profile.jpg"; // Replace with your actual image
import { FaJava, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiCplusplus, SiDart, SiFlutter, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="about-container section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Stretched Image */}
          <Col md={6} className="text-center">
          <img src={aboutImg} alt="About" className="img-fluid about-img animated-image" />          </Col>

          {/* Right Side: Skills & Education */}
          <Col md={6} className="text-left fade-in-right">
            {/* Skills Section */}
            <h3 className="sub-title">Skills</h3>
            
            {/* Programming Languages */}
            <h4 className="skills-category">Programming Languages</h4>
            <div className="skills-icons">
              <SiCplusplus className="skill-icon cpp" title="C++" />
              <FaJava className="skill-icon java" title="Java" />
              <FaJs className="skill-icon js" title="JavaScript" />
              <FaPython className="skill-icon python" title="Python" />
              <SiDart className="skill-icon dart" title="Dart" /> 
            </div>

            {/* Frontend */}
            <h4 className="skills-category">Frontend</h4>
            <div className="skills-icons">
              <FaReact className="skill-icon react" title="React.js" />
              <SiFlutter className="skill-icon flutter" title="Flutter" />
            </div>

            {/* Backend */}
            <h4 className="skills-category">Backend</h4>
            <div className="skills-icons">
              <SiExpress className="skill-icon express" title="Express.js" />
              <FaNodeJs className="skill-icon node" title="Node.js" />
            </div>

            {/* Database */}
            <h4 className="skills-category">Database</h4>
            <div className="skills-icons">
              <SiMysql className="skill-icon mysql" title="MySQL" />
              <SiMongodb className="skill-icon mongodb" title="MongoDB" />
            </div>

            {/* Education Section */}
            <h3 className="sub-title">Education</h3>
            <div className="education-container">
              <div className="education-item">
                <div className="circle">
                  <span className="percentage">71.16%</span>
                </div>
                <p className="education-text"><strong>B.E in Computer Science</strong><br />Kongu Engineering College. 2022 - 2026</p>
              </div>

              <div className="education-item">
                <div className="circle">
                  <span className="percentage">80%</span>
                </div>
                <p className="education-text"><strong>HSC</strong><br />Kongu Vellelar Matric Higher Secondary School. 2021 - 2022</p>
              </div>

              <div className="education-item">
                <div className="circle">
                  <span className="percentage">63%</span>
                </div>
                <p className="education-text"><strong>SSLC</strong><br />Kongu Vellelar Matric Higher Secondary School. 2019 - 2020</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;