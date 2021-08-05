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
import TropicalDay from "../../assets/Images/Tropical/Tropical-day/Tropical-day.gif";
import TropicalNight from "../../assets/Images/Tropical/Tropical-night/Tropical-night.gif";
import TropicalSunset from "../../assets/Images/Tropical/Tropical-sunset/Tropical-sunset.gif";

const Portfolio = () => {
  const [background, setBackground] = useState(TropicalSunset);
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
          setBackground(TropicalSunset);
          setBackgroundColor("#292a2c");
          setTextColor("#FDFCE6");
          break;
        case hours >= 6 && hours < 18:
          setBackgroundColor("#98D2EE");
          setTextColor("#292a2c");
          setBackground(TropicalDay);

          break;
        default:
          setBackgroundColor("#292a2c");
          setTextColor("#FDFCE6");
          setBackground(TropicalNight);
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
          <Route path='/contact' component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
