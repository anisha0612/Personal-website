import React from "react";
import Profile from "../../assets/Images/profile-img.png";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="AboutPage">
      <img src={Profile} alt="profile" />
      <h1 className="about-header">Hi There</h1>
      <h3 className="about-text">
        I am a <strong>Web Developer</strong> based in Wilmington,DE. I am
        skillful at building Responsive Web applications. I am{" "}
        <strong>passionate</strong> to learn and bring ideas to life . I believe
        that one should <strong>pursue their passion</strong> and building Web
        applications is mine. I also believe that one should{" "}
        <strong>learn everyday</strong> to be better at what we do.
      </h3>
      <h2
        className="center about-header"
        style={{ paddingTop: "0.5em", fontSize: "2em" }}
      >
        Skills
      </h2>
      <div className="row">
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/javascript.png"
            alt="Javascript"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/plasticine/200/000000/react.png"
            alt="React.js"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/html-5.png"
            alt="HTML5"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/css3.png"
            alt="CSS3"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/bootstrap.png"
            alt="Bootstrap"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/ultraviolet/120/000000/database-export.png"
            alt="SQL"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/nodejs.png"
            alt="Node.js"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/color/144/000000/mongodb.png"
            alt="MongoDB"
          />
        </div>
        <div className="column">
          <img
            src="https://img.icons8.com/nolan/128/api-settings.png"
            alt="REST API"
          />
        </div>
      </div>

      <Link to="/projects" className="button">
        <i className="fas fa-laptop-code"></i> View My Work
      </Link>
    </div>
  );
};

export default About;
