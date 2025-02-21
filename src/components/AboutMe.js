import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css"; // Import custom styles
import aboutImg from "../assets/me2.jpeg"; // Replace with your actual image
import { FaJava, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiCplusplus, SiDart, SiFlutter, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import HomeButton from "./HomeBtn"; // Import Home Button

const About = () => {
  // Education Data
  var educationData = [
    { percentage: 71.16, degree: "B.E in Computer Science", school: "Kongu Engineering College", year: "2022 - 2026" },
    { percentage: 80, degree: "HSC", school: "Kongu Vellelar Matric Higher Secondary School", year: "2021 - 2022" },
    { percentage: 63, degree: "SSLC", school: "Kongu Vellelar Matric Higher Secondary School", year: "2019 - 2020" }
  ];

  return (
    <div id="about" className="about-container section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Stretched Image */}
          <Col md={6} className="text-center">
            <img src={aboutImg} alt="About" className="img-fluid about-img animated-image" />
          </Col>

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
              {educationData.map((edu, index) => (
                <div className="education-item" key={index}>
                  {/* Circular Progress Bar */}
                  <div className="circle" style={{
                    background: `conic-gradient(#0056b3 ${edu.percentage}%, #ddd 0%)`
                  }}>
                    <span className="percentage">{edu.percentage}%</span>
                  </div>
                  {/* Education Details */}
                  <p className="education-text">
                    <strong>{edu.degree}</strong><br />
                    {edu.school}. {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* ✅ Home Button (Fixed Bottom-Right) */}
      <HomeButton />
    </div>
  );
};

export default About;