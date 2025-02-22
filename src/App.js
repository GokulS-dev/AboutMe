import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar"; // Import the Navbar
import Landing from "./components/Landing";
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Loading Screen with MP4 Video
const LoadingScreen = () => (
  <div style={{
    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
    display: "flex", justifyContent: "center", alignItems: "center",
    backgroundColor: "white", zIndex: 9999, overflow: "hidden"
  }}>
    <img 
      src="/load.gif"  
      alt="Loading..."
      style={{ width: "100px", height: "100px", objectFit: "cover" }}
    />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect (change this logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust this time to match your video duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <MyNavbar />
          <div style={{ paddingTop: "80px" }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;