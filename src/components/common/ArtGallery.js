import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import PopUpWindow from "./PopUpWindow";
import GalleryItemOne from "../../assets/art-gallery-items/1.jpg";
import GalleryItemTwo from "../../assets/art-gallery-items/2.jpg";
import GalleryItemThree from "../../assets/art-gallery-items/3.png"
import "../../styles/Gallery.css";
import "../../styles/GalleryItems.css"

function ArtGallery () {
    const galleryItems = [
        {
          galleryItemText: "Jashi",
          imageSrc: GalleryItemOne,
          title: "Jashi Anyua Omah",
          subtitle: "Faresha of K'sundi",
          description: ["Jashi Anyua Omah. Faresha (Queen) of K'sundi, wife to Kahmel Axon Kai of the Omah clan. A hot head with abilities that match. She can be reckless at times, but she's quick on her feet and her instincts are usually correct."]
        },
        {
          galleryItemText: "Kahmel",
          imageSrc: GalleryItemTwo,
          title: "Kahmel Axon Kai of the Omah Clan",
          subtitle: "Faresh of K'sundi",
          description: ["Kahmel Axon Kai of the Omah Clan. Faresh (king) of K'sundi, husband to Jashi Anyua Omah. He has a generally cool, almost cold demeanor, but when he's angry, he's a force to be reckoned with. His secret? He's always angry."],
        },
        {
          galleryItemText: "Jashi and Ocean",
          imageSrc: GalleryItemThree,
          title: "Jashi and Ocean Set Fire to the Night",
          subtitle: "Ocean, Jashi's adolescent blue dragon",
          description: ["When Jashi was in danger, her dragon, Ocean, was the only one that could save her from an otherwise terrible fate. Ocean is an adolescent dragon, but she has bite."],
        },
      ];
    
      const [selectedMedia, setSelectedMedia] = useState(null);
    
      const handleMediaClick = (media) => {
        setSelectedMedia(media);
      };
    
      const closePopup = () => {
        setSelectedMedia(null);
      };
    
      return (
        <div className="gallery-position">
          {galleryItems.map((item, index) => (
            <div key={index} onClick={() => handleMediaClick(item)}>
              <GalleryItem
                galleryItemText={item.galleryItemText}
                imageSrc={item.imageSrc}
              />
            </div>
          ))}
          
          {selectedMedia && (
            <PopUpWindow media={selectedMedia} onClose={closePopup} />
          )}
        </div>
      );
}

export default ArtGallery;