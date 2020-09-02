import React from "react";
import Card from "../../components/Card/Card.jsx";
import Projects from "../../components/Projects.js";
import "./ProjectsPage.css";

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="ProjectsPage">
        <h1>PROJECTS</h1>
        <div className="projects">
          {Projects.map((project) => (
            <Card key={project.id} project={project} className="card-project" />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
