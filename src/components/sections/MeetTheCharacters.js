import React from "react";
import "../../styles/BooksSection.css";
import "../../styles/Gallery.css";
import "../../styles/MeetTheCharacters.css";
import ArtGallery from "../common/ArtGallery";

function MeetTheCharacters () {
    return (
    <div id="characters-section" className="meet-the-characters-section">
        <h1 className="gallery-header" style={{ marginTop: 0 }}>MEET THE CHARACTERS</h1>
        <div className="horizontal-line"></div>
        <ArtGallery/>
    </div>
    
    );
}

export default MeetTheCharacters;