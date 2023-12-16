import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
// import BookPopup from "./BookPopup"; // Assuming you have a BookPopup component
import PopUpWindow from "./PopUpWindow";
import GalleryItemOne from "../../assets/gallery-items/gallery-item-1.jpg";
import GalleryItemTwo from "../../assets/gallery-items/rising.jpg";
import GalleryItemThree from "../../assets/gallery-items/uproar.jpg";
import "../../styles/Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      galleryItemText: "Conquest",
      itemLink: "https://www.amazon.com/Conquest-Dragon-Bones-Book-1-ebook/dp/B083JY95R5",
      imageSrc: GalleryItemOne,
      description: ["Jashi Anyua has been arranged to be married to the leader of her nation, the Great Faresh. To help her escape the unwanted engagement, her future husband's enemies offer her an out – if she agrees to spy on her intended, they’ll give her a new identity and a life somewhere the Faresh will never find her.", "Yet as Jashi gets to know the Faresh, she wonders if she put her loyalties in the right place; especially when she realizes that he shares the abilities she's had to keep secret her whole life. What’s more, he might be the only one who can train her to use them."]
    },
    {
      galleryItemText: "Rising",
      itemLink: "https://www.amazon.com/Rising-Celeste-Harte/dp/1953491189",
      imageSrc: GalleryItemTwo,
      description: ["Jashi betrayed them. Kahmel protected them. Together, they must unite them.", "Nothing is more important to Jashi than proving her worth to her country. But her new role as Faresha and rebel member is both uncomfortable and daunting. Perhaps it’s the gap of trust between her and Kahmel that bothers her most. With Jashi’s naïve reputation, winning back the trust of Kahmel and her people will take something drastic. As drastic as finding the remaining Dragon Kings before K’sundi loses their fight for freedom.", "Kahmel is a decisive protector, level-headed leader, and—completely unrelatable to his people. Winning the trust of K’sundi is the only way to free them from the Zendaalans. But that means being more vulnerable and learning to trust others—even the woman he wants to trust most, but can’t."],
    },
    {
      galleryItemText: "Uproar",
      itemLink: "https://www.amazon.com/Rising-Celeste-Harte/dp/1953491189",
      imageSrc: GalleryItemThree,
      description: ["Jashi Anyua Omah has been kidnapped by the Zendaalans and taken to Zendaal. And what's more, one of her captors is a strange man the Zendaalans call Deklas, but who calls himself Dekaar -- he's clearly K'sundii and dragon tribe, but has cybernetic implants like a Zendaalan. Not only that, but he appears to recognize Jashi somehow. He's a mad man, and he seems to have the Zendaalans wrapped around his finger. And he's obsessed with Jashi.", "Kahmel Axon Kai of the Omah clan has lost his wife, and he's no longer feeling merciful enough to think about anything but getting her back. But when he rescinds the throne and the Zendaalans suddenly decide not to give Jashi back in return, Kahmel realizes that he's going to need to strike a new deal with the Dragon Kings to save her.", "Kahmel and Jashi have made promises to each other that they intend to keep by any means necessary, no matter what comes in their way. They're changing plans, thinking only of those that have proven their loyalty and their combined futures.", "No one else matters."],
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
            itemLink={item.itemLink}
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

export default Gallery;
