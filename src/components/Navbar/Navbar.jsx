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
      {/* <nav className="navbar">
        <ul className="ul">
          <li>
            <a href={HomePage}>Home</a>
          </li>
          <li>
            <a href={AboutPage}>About</a>
          </li>
          <li>
            <a href={ProjectsPage}>Projects</a>
          </li>
          <li>
            <a href={ContactPage}>Contact</a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
