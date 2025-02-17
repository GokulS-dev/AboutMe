import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing image and icons
import profilePic from "../assets/Profile.jpg"; // Replace with your actual photo
import pythonLogo from "../icons/python.png";
import javaLogo from "../icons/java.png";
import dartLogo from "../icons/dart.png";
import jsLogo from "../icons/javascript.png";
import cLogo from "../icons/c.png";
import sqlLogo from "../icons/mysql.png";
import mongodbLogo from "../icons/mongodb.png";
import reactLogo from "../icons/react.png";
import flutterLogo from "../icons/flutter.png";
import tailwindLogo from "../icons/tailwindcss.png";
import bootstrapLogo from "../icons/bootstrap.png";
import nodeLogo from "../icons/nodejs.png";
import expressLogo from "../icons/express.png";
import firebaseLogo from "../icons/firebase.png";
import dockerLogo from "../icons/docker.png";
import awsLogo from "../icons/aws.png";

const skills = [
  { name: "Python", logo: pythonLogo },
  { name: "Java", logo: javaLogo },
  { name: "Dart", logo: dartLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "C++", logo: cLogo },
];

const databases = [
  { name: "SQL", logo: sqlLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Firebase", logo: firebaseLogo },
];

const frontend = [
  { name: "React.js", logo: reactLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Flutter", logo: flutterLogo },
];

const backend = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
];

const devOps = [
  { name: "Docker", logo: dockerLogo },
  { name: "AWS", logo: awsLogo },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Main section with photo & skills side by side */}
      <div className="about-content">
        {/* Left Section: Profile Picture */}
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>

        {/* Right Section: Skills */}
        <div className="skills-section">
          <h2 className="fw-bold">Things I Know</h2>

          {/* Programming Languages */}
          <h3>Programming Languages</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <img src={skill.logo} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Below the Image */}
      <div className="additional-skills">
        {/* Databases */}
        <h3>Databases</h3>
        <div className="skills-container">
          {databases.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.logo} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Frontend */}
        <h3>Frontend</h3>
        <div className="skills-container">
          {frontend.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.logo} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Backend */}
        <h3>Backend</h3>
        <div className="skills-container">
          {backend.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.logo} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* DevOps */}
        <h3>DevOps</h3>
        <div className="skills-container">
          {devOps.map((skill, index) => (
            <div key={index} className="skill">
              <img src={skill.logo} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;