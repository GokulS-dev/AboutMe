import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaReact, FaNodeJs, FaCloudSun } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiDart, SiFlutter, SiApachekafka } from "react-icons/si";
import "./Projects.css"; // Import CSS for styling
import HomeButton from "./HomeBtn"; // Import Home Button

// Import images
import P1 from "../assets/Gemini_Generated_Image_e248t3e248t3e248.jpeg";
import P2 from "../assets/p2.jpeg";
import P3 from "../assets/p3.jpeg";
import P4 from "../assets/p4.jpeg";
import P5 from "../assets/p5.jpeg";
import P6 from "../assets/p6.jpeg";

const projectData = [
  {
    techStack: [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaPython color="#3776AB" />, 
      <SiApachekafka color="#231F20" />
    ],
    description: "Leverage Apache Kafka for real-time data streaming and efficient processing. Enhance scalability, reliability, and fault tolerance in your data pipeline.",
    github: "https://github.com/GokulS-dev/StreamlineProcessing_Using_KAFKA",
    image: P1,
    prize: "🥇 1st Prize Thinkathon'24",
  },
  {
    techStack: [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaBootstrap color="#7952B3" />
    ],
    description: "Stay updated with the latest ISTE events, including workshops, hackathons, seminars, and competitions. Explore opportunities to enhance your skills, collaborate with peers, and innovate with technology!",
    github: "https://github.com/GokulS-dev/ISTE-Events",
    link: "https://iste-events.netlify.app/",
    image: P4,
    prize: "🥇 1st Prize ISTE Web Designing",
  },
  {
    techStack: [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaBootstrap color="#7952B3" />, 
      <FaPython color="#3776AB" />
    ],
    description: "A tool to calculate student activity points based on participation in events, projects, and extracurricular activities. Helps track and manage student engagement efficiently.",
    github: "https://github.com/GokulS-dev/Student_Activity_Point_Calc",
    image: P2,
    prize: "🥈 2nd Prize KEC Hackathon'24",
  },
  
  {
    techStack: [
      <SiMongodb color="#47A248" />, 
      <SiExpress color="#000000" />, 
      <FaReact color="#61DAFB" />, 
      <FaNodeJs color="#339933" />
    ],
    description: "A secure and user-friendly online exam portal for conducting tests, assessments, and quizzes. Supports automated grading, scheduling, and real-time monitoring.",
    github: "https://github.com/GokulS-dev/online_exam_portal",
    image: P3,
  },
  
  {
    techStack: [
      <SiMongodb color="#47A248" />, 
      <SiExpress color="#000000" />, 
      <FaReact color="#61DAFB" />, 
      <FaNodeJs color="#339933" />, 
      <FaCloudSun color="#FDB813" />
    ],
    description: "A real-time system that collects, analyzes, and displays weather data such as temperature, humidity, and rainfall. Helps in accurate forecasting and environmental monitoring.",
    github: "https://github.com/GokulS-dev/Weather-Monitoring",
    link: "https://weather-monitoring-we31.onrender.com/",
    image: P5,
    
  },
  {
    techStack: [
      <SiDart color="#0175C2" />, 
      <SiFlutter color="#02569B" />, 
      <SiFirebase color="#FFCA28" />
    ],
    description: "A mobile application developed using Flutter and Firebase to streamline processes and improve user experience while solving real problems faced by people in society.",
    github: "https://github.com/GokulS-dev/SmartEzyGo",
    image: P6,
    
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt="Project Preview" />
              <Card.Body>
                {/* Display Tech Stack Icons */}
                <div className="tech-icons">{project.techStack.map((icon, i) => <span key={i} className="icon">{icon}</span>)}</div>
                
                {/* Project Description */}
                <Card.Text>{project.description}</Card.Text>
                
                {/* Prize Badge */}
                <div className="prize-badge">{project.prize}</div>
              </Card.Body>
              <div className="overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="icon" />
                  </a>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <HomeButton/>
    </Container>
  );
};

export default Projects;