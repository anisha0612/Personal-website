import React from "react";
import Profile from "../../assets/Images/profile-img.png";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const About = () => {
  return (
    <div className='AboutPage'>
      <img src={Profile} alt='profile' />
      <h1 className='about-header'>Hi There</h1>
      <h3 className='about-text'>
        What makes me unique is I am self-driven. I have taught myself to build
        and design websites. I am always learning, trying to build something
        from scratch, researching the tools and technologies I use. I am
        passionate about creating beautiful,responsive,scalable.and performant applications with good
        user experiences.
      </h3>
      <h2
        className='center about-header'
        style={{ paddingTop: "0.5em", fontSize: "2em" }}>
        Skills
      </h2>
      <div className='row'>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/javascript.png'
            alt='Javascript'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/plasticine/200/000000/react.png'
            alt='React.js'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/html-5.png'
            alt='HTML5'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/css3.png'
            alt='CSS3'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/bootstrap.png'
            alt='Bootstrap'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/ultraviolet/120/000000/database-export.png'
            alt='SQL'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/nodejs.png'
            alt='Node.js'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/color/144/000000/mongodb.png'
            alt='MongoDB'
          />
        </div>
        <div className='column'>
          <img
            src='https://img.icons8.com/nolan/128/api-settings.png'
            alt='REST API'
          />
        </div>
      </div>

      <Link to='/projects' className='button'>
        <i className='fas fa-laptop-code'></i> View My Work
      </Link>
    </div>
  );
};

export default About;
