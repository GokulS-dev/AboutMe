import React, { useEffect } from "react";
import { FaDownload, FaExternalLinkAlt, FaTimes, FaFilePdf } from "react-icons/fa";
import "./ResumeModal.css";

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = "/Gokul_BE.pdf";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-backdrop" onClick={onClose}>
      <div
        className="resume-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Header Bar */}
        <div className="resume-header">
          <div className="resume-title-wrap">
            <FaFilePdf size={18} className="pdf-icon" />
            <div>
              <h3 id="resume-title" className="resume-filename">Gokul_BE.pdf</h3>
              <span className="resume-meta">Software Development Engineer · Curriculum Vitae</span>
            </div>
          </div>

          <div className="resume-actions-group">
            <a
              href={resumeUrl}
              download="Gokul_BE.pdf"
              className="resume-btn download"
              aria-label="Download Resume PDF"
            >
              <FaDownload size={12} />
              <span>Download PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn open-tab"
              aria-label="Open Resume in new tab"
            >
              <FaExternalLinkAlt size={12} />
              <span>New Tab</span>
            </a>

            <button
              className="resume-btn close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <FaTimes size={15} />
            </button>
          </div>
        </div>

        {/* PDF Document Viewer Container */}
        <div className="resume-viewport">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            title="Gokul S Resume Preview"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
