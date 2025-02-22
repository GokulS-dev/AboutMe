import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar"; // Import the Navbar
import Landing from "./components/Landing";
import About from "./components/AboutMe";
import Projects from "./components/Projects"; // Import Projects component
import Contact from "./components/Contact"; // ✅ Import Contact component

function App() {
  return (
    <Router>
      <MyNavbar /> {/* Navbar should be present on all pages */}
      <div style={{ paddingTop: "80px" }}> {/* Add padding to avoid overlap */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> {/* Add Projects Route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;