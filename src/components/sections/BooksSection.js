import React from "react";
import Gallery from "../common/Gallery";
import "../../styles/BooksSection.css";
import "../../styles/Gallery.css";

function BooksSection() {

  const seriesOne = "Dragon Bones Trilogy";
  return (

    <div id="books-section" className="books-section">
      <h1 className="gallery-header">BOOKS</h1>

      <div className="horizontal-line"></div>
      <h2 className="gallery-subheader">{seriesOne}</h2>
      <Gallery />
    </div>
  );
}

export default BooksSection;
