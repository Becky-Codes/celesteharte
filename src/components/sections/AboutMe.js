import React from "react";
import "../../styles/AboutMe.css";
import "../../styles/Gallery.css";
import ProfilePic from "../common/ProfilePic";


function AboutMe() {
  
  return (
    <div id="about-me-section" className="about-me-section">
      <h1 className="gallery-header" style={{ marginTop: 0 }}>ABOUT ME</h1>
      <div className="horizontal-line"></div>
      <ProfilePic />
      <div className="about-me-position">
        <p className="about-me-description">Celeste Harte is out here making worlds and taking names. She writes books, does professional illustrating under her alter ego, Becky Brown, and even makes video games. Her favorite way to relax is with a good anime or manga, and her favorite games to play range from farming sims to RPG and action games.</p>
      </div>
    </div>
  );
}

export default AboutMe;