import React from "react";
import "./Card.css";

const Card = ({ project }) => {
  return (
    <div className="container">
      <img src={project.imgSrc} alt="project" className="image" />
      <div className="middle">
        <h2>{project.title}</h2>
        <p className="content">{project.content}</p>
        <p className="tools">{project.tools}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          Visit the Website
        </a>
      </div>
    </div>
  );
};

export default Card;
