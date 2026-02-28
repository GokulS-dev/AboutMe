import React, { useRef, useEffect, useState } from "react";
import {
  FaLinkedin, FaGithub, FaEnvelope,
  FaMapMarkerAlt, FaCode, FaPaperPlane,
} from "react-icons/fa";
import contactImg from "../assets/contactImg.jpg";
import emailjs from "emailjs-com";
import "./Contact.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "gokulsoffl@gmail.com",
    href: "mailto:gokulsoffl@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Gokul S",
    href: "https://www.linkedin.com/in/gokul-s-b9a392259/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "GokulS-dev",
    href: "https://github.com/GokulS-dev",
  },
  {
    icon: <FaCode />,
    label: "LeetCode",
    value: "S_Gokul19",
    href: "https://leetcode.com/u/S_Gokul19/",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".fade-in-section");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with YOUR actual EmailJS IDs from your dashboard
    // Service ID: service_xxxxxx
    // Template ID: template_xxxxxx
    // User ID: user_xxxxxx
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_default";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_contact";
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "USER_PUBLIC_KEY";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setIsSending(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, (err) => {
        console.log("FAILED...", err);
        setIsSending(false);
        setErrorVisible(true);
        setTimeout(() => setErrorVisible(false), 5000);
        // Fallback: even if it fails (due to missing keys), we'll let the user see a success message for UI purposes,
        // but we normally wouldn't do this in production without real keys.
        // Actually, let's just show an error if it fails.
      });
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-inner">
        {/* Header */}
        <div className="fade-in-section contact-header">
          <span className="section-label">03. Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: info */}
          <div className="contact-left fade-in-section">
            <div className="contact-image-wrapper">
              <img src={contactImg} alt="Contact" className="contact-img" />
              <div className="contact-img-overlay" />
            </div>

            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-item"
                  >
                    <span className="contact-info-icon">{item.icon}</span>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-info-item no-link">
                    <span className="contact-info-icon">{item.icon}</span>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-right fade-in-section">
            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="form-input form-textarea"
                    />
                  </div>

                  {errorVisible && (
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginBottom: "15px" }}>
                      Oops! Something went wrong. Please check your network or try again later.
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn-primary-custom form-submit-btn ${isSending ? 'loading' : ''}`}
                    id="contact-submit"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '8px' }}></span>
                    ) : (
                      <FaPaperPlane size={14} style={{ marginRight: '8px' }} />
                    )}
                    {isSending ? "Sending..." : "Send Message"}
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