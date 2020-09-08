import React from "react";
import Particles from "react-particles-js";
import params from "./components/particles.js";
import Navigation from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
