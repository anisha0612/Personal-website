import React from "react";
import Profile from "../../assets/profile-img.png";
import skills from "../../components/skills.js";
import EachSkill from "../../components/EachSkill/EachSkill.jsx";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <img src={Profile} alt="profile" />
      <h1 className="about-header">HI THERE</h1>
      <h3 class="about-text">
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
        SKILLS
      </h2>
      <div className="skills">
        {skills.map((skill) => (
          <EachSkill key={skill.id} {...skill} />
        ))}
      </div>
      <Link to="/projects" className="button">
        <i class="fas fa-laptop-code"></i> View My Work
      </Link>
    </div>
  );
};

export default AboutPage;
