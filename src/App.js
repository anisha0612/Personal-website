import React from "react";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}

export default App;
