import React from "react";
import "./Contact.css"; // Optional custom styles
import contactImage from "../assets/contactImg.jpg";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5 pb-5"> {/* Added mb-5 pb-5 to push footer down */}
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img src={contactImage} alt="Contact" className="img-fluid rounded" />
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Contact Me</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 p-3 bg-white ">
        <p>© 2025 | Designed & Maintained by Gokul</p>
      </footer>
    </div>
  );
};

export default Contact;