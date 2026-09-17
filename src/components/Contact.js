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
        <div className="contact-editorial-grid fade-in-section">
          <div className="contact-editorial-left">
            <span className="section-label">03. Contact</span>
            <h2 className="section-title">Let's Work<br/>Together</h2>
            <div className="section-divider" />

            <p className="contact-desc-clean">
              Have a project in mind or just want to say hi? Feel free to reach out.
              I'll get back to you as soon as possible.
            </p>

            <div className="contact-info-clean">
              {contactInfo.map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    <span className="info-label-clean">{item.label}</span>
                    <span className="info-value-clean">{item.value}</span>
                  </a>
                ) : (
                  <div key={i} className="contact-info-link no-hover">
                    <span className="info-label-clean">{item.label}</span>
                    <span className="info-value-clean">{item.value}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="contact-editorial-right">
            {submitted ? (
              <div className="form-success-clean">
                <div className="success-icon-clean">✓</div>
                <h3>Message Sent</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-clean">
                <div className="form-group-clean">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input-clean"
                  />
                </div>

                <div className="form-group-clean">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="form-input-clean"
                  />
                </div>

                <div className="form-group-clean">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="form-input-clean"
                  />
                </div>

                <div className="form-group-clean">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="form-input-clean"
                  />
                </div>

                {errorVisible && (
                  <p className="form-error-clean">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-btn-clean"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;