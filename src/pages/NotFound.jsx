import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h4>Oops! Page not found</h4>
      <p>Sorry, but the page you are looking for is not found.</p>
      <Link to="/" className="link-home">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
