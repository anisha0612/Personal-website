import React from "react";
import "./Card.css";

const Card = ({ project }) => {
  return (
    <div class="container">
      <img src={project.imgSrc} alt="project" className="image" />
      <div class="middle">
        <h2>{project.title}</h2>
        <p class="content">{project.content}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          Visit the Website
        </a>
      </div>
    </div>
  );
};

export default Card;
