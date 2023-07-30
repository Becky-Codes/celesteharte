import React from "react";
import Gallery from "../common/Gallery";
import "../../styles/BooksSection.css";
import "../../styles/Gallery.css";

function BooksSection() {
  return (
    // In order to see anything, I had to put in a huge margin. I *think* all I have to do
    // from here is make sure the margin starts somewhere reasonable and start buidling the
    // page from there. I also want to set the background color to match with my color
    // scheme.
    <div className="books-section">
      <h1 className="gallery-header">Books</h1>
      <Gallery />
    </div>
  );
}

export default BooksSection;
