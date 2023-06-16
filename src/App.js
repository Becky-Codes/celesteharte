import React from "react";
import backgroundImage from "./assets/background.png";
import "./styles/App.css";
import HomeSection from "./components/sections/HomeSection";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <HomeSection />
    </div>
  );
}

export default App;
