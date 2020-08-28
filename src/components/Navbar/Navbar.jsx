import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/projects" className="link" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="/contact" className="link" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
