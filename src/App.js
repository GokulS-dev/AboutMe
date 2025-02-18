import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar"; // Import the Navbar
import Landing from "./components/Landing";
import About from "./components/AboutMe";

function App() {
  return (
    <Router>
      <MyNavbar /> {/* Navbar should be present on all pages */}
      <div style={{ paddingTop: "80px" }}> {/* Add padding to avoid overlap */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;