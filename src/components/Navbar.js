import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Function to smoothly scroll to a section while keeping navbar visible
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = navRef.current.offsetHeight; // Get navbar height
      window.scrollTo({
        top: element.offsetTop - navbarHeight, // Offset to prevent overlap
        behavior: "smooth",
      });
    }
    setExpanded(false); // Close navbar after clicking (for mobile)
  };

  // Close the navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expanded]);

  return (
    <Navbar
      ref={navRef}
      className="navbar-custom fixed-top"
      expand="lg"
      bg="light"
      expanded={expanded}
    >
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/" className="navbar-brand-custom">
          {"<< G/S >>"}
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto pushes items to the right */}
          <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("achievements")}>Achievements</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
