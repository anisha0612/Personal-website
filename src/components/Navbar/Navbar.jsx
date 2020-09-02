import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuBarsActive: false,
      overlayActive: false,
    };
  }

  handleClick = () => {
    this.setState({ menuBarsActive: true, overlayActive: true });
  };
  slideOverlay = () => {
    this.setState({ overlayActive: false, menuBarsActive: false });
  };

  render() {
    return (
      <div>
        <div
          className={`overlay ${
            this.state.overlayActive
              ? "overlay-slide-right"
              : "overlay-slide-left"
          } `}
        >
          <nav>
            <ul>
              <NavLink
                exact
                to="/"
                className="link"
                activeClassName="active"
                onClick={this.slideOverlay}
              >
                {" "}
                Home{" "}
              </NavLink>
              <NavLink
                to="/about"
                className="link"
                activeClassName="active"
                onClick={this.slideOverlay}
              >
                {" "}
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="link"
                activeClassName="active"
                onClick={this.slideOverlay}
              >
                Projects{" "}
              </NavLink>
              <NavLink
                to="/contact"
                className="link"
                activeClassName="active"
                onClick={this.slideOverlay}
              >
                Contact{" "}
              </NavLink>
            </ul>
          </nav>
        </div>

        <div
          className={` ${this.state.menuBarsActive ? "change" : "menu-bars"}`}
          onClick={this.handleClick}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      // <div className="navbar">
      //   <NavLink exact to="/" className="link" activeClassName="active">
      //     Home
      //   </NavLink>
      //   <NavLink to="/about" className="link" activeClassName="active">
      //     About
      //   </NavLink>
      //   <NavLink to="/projects" className="link" activeClassName="active">
      //     Projects
      //   </NavLink>
      //   <NavLink to="/contact" className="link" activeClassName="active">
      //     Contact
      //   </NavLink>
      // </div>
    );
  }
}
export default Navigation;
