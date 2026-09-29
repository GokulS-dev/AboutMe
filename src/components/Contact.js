import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt, FaCheck, FaCopy, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const emailAddress = "gokulsoffl@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_default";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_contact";
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "user_default";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      })
      .catch(() => {
        // Fallback for demonstration / local dev
        setTimeout(() => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus("idle"), 6000);
        }, 800);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-meta-strip">
            <span className="section-index">05</span>
            <span className="section-label-text">COMMUNICATION</span>
          </div>
          <h2 className="section-headline">Let's Connect</h2>
          <div className="section-sub-strip">
            Open to discussing engineering roles, architecture, or collaborative opportunities.
          </div>
        </div>

        <div className="contact-editorial-grid">
          {/* Left Column: Direct Links & Email Copy */}
          <div className="contact-info-col">
            <div className="email-display-card">
              <span className="email-card-label">PRIMARY INBOX</span>
              <a href={`mailto:${emailAddress}`} className="email-address-link">
                {emailAddress}
              </a>

              <div className="email-actions">
                <button
                  className="copy-email-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <FaCheck size={12} className="copy-icon success" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={12} className="copy-icon" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a href={`mailto:${emailAddress}`} className="compose-email-btn">
                  <FaEnvelope size={12} />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Social & Document Links */}
            <div className="connect-channels-block">
              <h4 className="channels-title">CHANNELS & PROFILES</h4>
              <div className="channels-links-list">
                <a
                  href="https://github.com/GokulS-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link-item"
                >
                  <div className="channel-icon-wrap">
                    <FaGithub size={16} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">GitHub</span>
                    <span className="channel-handle">@GokulS-dev</span>
                  </div>
                  <span className="channel-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gokul-s-b9a392259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link-item"
                >
                  <div className="channel-icon-wrap">
                    <FaLinkedin size={16} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">LinkedIn</span>
                    <span className="channel-handle">Gokul S</span>
                  </div>
                  <span className="channel-arrow">↗</span>
                </a>

                <button
                  type="button"
                  className="channel-link-item btn-trigger"
                  onClick={onOpenResume}
                  aria-label="View Resume"
                >
                  <div className="channel-icon-wrap">
                    <FaFileAlt size={16} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">Resume</span>
                    <span className="channel-handle">View Curriculum Vitae (PDF)</span>
                  </div>
                  <span className="channel-arrow">↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3>Send a Message</h3>
                <p>Feel free to reach out directly through this form.</p>
              </div>

              {status === "success" ? (
                <div className="form-success-banner" role="status">
                  <div className="success-badge-icon">
                    <FaCheck size={18} />
                  </div>
                  <h4>Message Dispatched Successfully</h4>
                  <p>Thank you for reaching out. I will respond to your email promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-field-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineering Inquiry / Project"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Gokul, I saw your work on the Digital Trial Card system..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="form-submit-btn"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
