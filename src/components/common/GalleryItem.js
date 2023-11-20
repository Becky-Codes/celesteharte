// GalleryItem.js

import React from "react";
import "../../styles/GalleryItems.css";

function GalleryItem(props) {
  const { galleryItemText, itemLink, imageSrc } = props;

  return (
    <div className="gallery-item">
      <a href={itemLink}>
        <img
          className="gallery-item-img"
          src={imageSrc}
          alt={galleryItemText}
        />
        <div className="read-description">
          <p>Read Description</p>
        </div>
      </a>
      <p className="gallery-item-text">{galleryItemText}</p>
    </div>
  );
}

export default GalleryItem;
