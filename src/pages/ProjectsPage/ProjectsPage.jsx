import React from "react";
import Card from "../../components/Card/Card.jsx";
import Projects from "../../components/Projects.js";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="ProjectsPage">
        <h1>Projects</h1>
        <div className="projects">
          {Projects.map((project) => (
            <Card key={project.id} project={project} className="card-project" />
          ))}
        </div>
        <Link to="/contact" className="button">
          <i class="fas fa-phone-square-alt"></i> Contact Me
        </Link>
      </div>
    );
  }
}

export default ProjectsPage;
