import React from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <h1>
        <i className="fas fa-id-card"></i>
      </h1>
      <h1>ARE YOU INTERESTED?</h1>
      <h3 className="contact-text">
        If you like my profile and are interested to talk to me,you can leave me
        an e-mail. Check Out my Github and LinkedIn links below.
      </h3>

      <div className="links">
        <a href="mailto:anisha.0612@gmail.com" className="social-links">
          <i class="fas fa-envelope"></i>
        </a>
        <Link to="https://github.com/anisha0612" className="social-links">
          <i class="fab fa-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/anisha-potteti-48b77872/"
          className="social-links"
        >
          <i class="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
