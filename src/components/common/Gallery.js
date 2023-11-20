import React from "react";
import GalleryItem from "./GalleryItem";
import GalleryItemOne from "../../assets/gallery-items/gallery-item-1.jpg";
import GalleryItemTwo from "../../assets/gallery-items/rising.jpg";
import GalleryItemThree from "../../assets/gallery-items/uproar.jpg";
import "../../styles/Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      galleryItemText: "Conquest",
      itemLink:
        "https://www.amazon.com/Conquest-Dragon-Bones-Book-1-ebook/dp/B083JY95R5",
      imageSrc: GalleryItemOne,
    },
    {
      galleryItemText: "Rising",
      itemLink: "https://www.amazon.com/Rising-Celeste-Harte/dp/1953491189",
      imageSrc: GalleryItemTwo,
    },
    {
      galleryItemText: "Uproar",
      itemLink: "https://www.amazon.com/Rising-Celeste-Harte/dp/1953491189",
      imageSrc: GalleryItemThree,
    },
  ];

  return (
    <div className="gallery-position">
      {galleryItems.map((item, index) => (
        <GalleryItem
          key={index}
          galleryItemText={item.galleryItemText}
          itemLink={item.itemLink}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
}

export default Gallery;