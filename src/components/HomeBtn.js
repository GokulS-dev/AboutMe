import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import Home Icon

const HomeBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px",
        fontSize: "20px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "50%", // Make it circular
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background 0.3s ease-in-out, transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} // Hover effect
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      onMouseDown={(e) => (e.target.style.transform = "scale(0.9)")} // Click effect
      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
    >
      <FaHome size={24} />
    </button>
  );
};

export default HomeBtn;