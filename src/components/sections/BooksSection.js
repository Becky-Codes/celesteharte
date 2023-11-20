import React from "react";
import Gallery from "../common/Gallery";
import "../../styles/BooksSection.css";
import "../../styles/Gallery.css";

function BooksSection() {

  const seriesOne = "Dragon Bones Trilogy";
  return (
    // In order to see anything, I had to put in a huge margin. I *think* all I have to do
    // from here is make sure the margin starts somewhere reasonable and start buidling the
    // page from there. I also want to set the background color to match with my color
    // scheme.

    <div className="books-section">
      <h1 className="gallery-header">BOOKS</h1>
      {/* I'm going to try to make a horizontal line that's the size
      of the header in an attempt to make a decent seperater.
      I'll have to make the distance between the subtitle and the 
      header to be after the horizontal line instead of the header
      itself. And then the header itself will have a smaller margin
      more suiting of a slight distance between it and an underline*/}
      <div className="horizontal-line"></div>
      <h2 className="gallery-subheader">{seriesOne}</h2>
      <Gallery />
    </div>
  );
}

export default BooksSection;
