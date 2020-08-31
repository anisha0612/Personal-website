import React from "react";
import Card from "../../components/Card/Card.jsx";
import Projects from "../../components/Projects.js";
import "./ProjectsPage.css";

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="ProjectsPage">
        {Projects.map((project) => (
          <Card key={project.id} project={project} className="card-project" />
        ))}
      </div>
    );
  }
}

export default ProjectsPage;
