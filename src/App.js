import React from "react";
import backgroundImage from "./assets/background.png";
import "./styles/App.css";
import HomeSection from "./components/sections/HomeSection";
import BooksSection from "./components/sections/BooksSection";
import MeetTheCharacters from "./components/sections/MeetTheCharacters";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Menu from "./components/common/Menu";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <Menu />
        <HomeSection />
        <BooksSection />
        <MeetTheCharacters/>
        <AboutMe/>
        <Contact/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;
