import React, { useState, useEffect } from "react";
// import Particles from "react-particles-js";
// import params from "../particles.js";
import Navigation from "../Navbar/Navbar.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "../../pages/ContactPage/ContactPage.jsx";
import NotFound from "../../pages/NotFound.jsx";
import "./Portfolio.css";
import { Route, Switch } from "react-router-dom";
import CityDay from "../../assets/Images/City/City-day/City-day.gif";
import CityNight from "../../assets/Images/City/City-night/City-night.gif";
import CitySunset from "../../assets/Images/City/City-sunset/City-sunset.gif";

const Portfolio = () => {
  const [background, setBackground] = useState(CitySunset);
  const [backgroundColor, setBackgroundColor] = useState("#292a2c");
  const [textColor, setTextColor] = useState("#FDFCE6");
  const [hours, setHours] = useState(6);

  useEffect(() => {
    // Set Animated Background Image from Time at user's location
    const getTime = () => {
      const current = new Date();
      setHours(current.getHours());
      switch (true) {
        case hours >= 18 && hours <= 20:
          setBackground(CitySunset);
          setBackgroundColor("#D4AA78");
          setTextColor("#FDFCE6");
          break;
        case hours >= 6 && hours < 18:
          setBackgroundColor("#98D2EE");
          setTextColor("#193353");
          setBackground(CityDay);

          break;
        default:
          setBackgroundColor("#193353");
          setTextColor("#FDFCE6");
          setBackground(CityNight);
          break;
      }
    };

    getTime();
  }, [hours]);

  return (
    <div
      className='Portfolio'
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        backgroundColor: `${backgroundColor}`,
        color: `${textColor}`,
      }}>
      {/* <Particles params={params} /> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            path='/about'
            component={() => (
              <AboutPage
                backgroundColor={backgroundColor}
                textColor={textColor}
              />
            )}
          />
          <Route
            path='/projects'
            component={() => (
              <ProjectsPage
                backgroundColor={backgroundColor}
                textColor={textColor}
              />
            )}
          />
          <Route
            path='/contact'
            component={() => (
              <ContactPage
                backgroundColor={backgroundColor}
                textColor={textColor}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
