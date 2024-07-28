// BookPopup.js

import React from 'react';
import "../../styles/PopUpWindow.css";

const PopUpWindow = ({ media, onClose }) => {
  return (
    <div className="popup-window">
      <div className="popup-content">
        <img src={media.imageSrc} alt={media.galleryItemText} className="popup-art" />
        <div className="art-description">
          <h2>{media.title}</h2>
          <h3>{media.subtitle}</h3>
          {media.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopUpWindow;
