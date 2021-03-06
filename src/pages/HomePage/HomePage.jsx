import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="content">
        <h1 className="text">
          Hello! I&#39;m <span>Anisha</span>
        </h1>
        <h3
          style={{
            marginTop: "2em",
            fontSize: "1.5rem",
            marginBottom: "5em",
            color: "var(--contrast)",
          }}
        >
          A Web Developer
        </h3>

        <Link to="/about" className="button">
          <i className="fas fa-user-alt"></i> Know More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
