// GalleryItem.js

import React from "react";
import "../../styles/GalleryItems.css";

function GalleryItem(props) {
  const { galleryItemText, itemLink, imageSrc } = props;

  return (
<div>
<div className="gallery-item">
          
            <img
              className="gallery-item-img"
              src={imageSrc}
              alt={galleryItemText}
            />
            <div className="view-description">
              <p>View Description</p>
            </div>
      </div>
      <a href={itemLink}> <p className="gallery-item-text">{galleryItemText}</p></a>
</div>

      
  );
}

export default GalleryItem;
