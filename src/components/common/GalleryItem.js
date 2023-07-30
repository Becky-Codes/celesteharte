import React from "react";
import galleryItem from "../../assets/gallery-items/gallery-item-1.jpg";
import "../../styles/GalleryItems.css";

function GalleryItem() {
  const galleryItemText = "Conquest";
  const firstItemLink =
    "https://www.amazon.com/Conquest-Dragon-Bones-Book-1-ebook/dp/B083JY95R5";

  return (
    <div className="gallery-item">
      <a href={firstItemLink}>
        <img src={galleryItem} alt={galleryItemText} />
      </a>
    </div>
  );
}

export default GalleryItem;
