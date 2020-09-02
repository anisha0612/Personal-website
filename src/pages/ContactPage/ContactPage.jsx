import React from "react";
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
        an e-mail. Check out my Github and LinkedIn links below.
      </h3>

      <div className="links">
        <a href="mailto:anisha.potteti@gmail.com" className="social-links">
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/anisha0612"
          className="social-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anisha-potteti-48b77872/"
          className="social-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
