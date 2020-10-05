import React from "react";
import Particles from "react-particles-js";
import params from "../particles.js";
import Navigation from "../Navbar/Navbar.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "../../pages/ContactPage/ContactPage.jsx";
import NotFound from "../../pages/NotFound.jsx";
import "./Portfolio.css";
import { Route, Switch } from "react-router-dom";
// import PageContent from "../PageContent";

function Portfolio() {
  return (
    <div className="Portfolio">
      {/* <PageContent> */}
      <Particles params={params} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      {/* </PageContent> */}
    </div>
  );
}

export default Portfolio;
