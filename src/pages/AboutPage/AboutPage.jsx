import React from "react";
import Profile from "../../assets/profile-img.png";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <img src={Profile} alt="profile" />
      <h1 className="about-header">HI THERE</h1>
      <h3 class="about-text">
        I am an Aspiring <strong>Web Developer</strong> based in Wilmington,DE.
        I am skillful at building Responsive Web applications. I am{" "}
        <strong>passionate</strong> to learn and bring ideas to life . I believe
        that one would <strong>pursue their passion</strong> and building Web
        applications is mine. I also believe that one should{" "}
        <strong>learn everyday</strong> to be better at what we do.
      </h3>
    </div>
  );
};

export default AboutPage;
