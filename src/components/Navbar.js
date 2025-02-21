import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

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
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
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
            <Nav.Link as={Link} to="/about">About 🤔</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects 📂</Nav.Link> {/* Redirect to Projects Page */}
            <Nav.Link as={Link} to="/contact">Contact ☎️</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;