import React from "react";
import Card from "../../components/Card/Card.jsx";
import Projects from "../../components/Projects.js";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

const ProjectsPage = ({ backgroundColor, textColor }) => {
  return (
    <div
      className='ProjectsPage'
      style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}>
      <h1>Projects</h1>
      <div className='projects'>
        {Projects.map((project) => (
          <Card key={project.id} project={project} className='card-project' />
        ))}
      </div>
      <Link to='/contact' className='button'>
        <i className='fas fa-phone-square-alt'></i> Contact Me
      </Link>
    </div>
  );
};

export default ProjectsPage;
