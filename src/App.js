import React from "react";
import backgroundImage from "./assets/background.png";
import "./styles/App.css";
import HomeSection from "./components/sections/HomeSection";
import BooksSection from "./components/sections/BooksSection";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <HomeSection />
        <BooksSection />
      </div>
    </div>
  );
}

export default App;
