import React from "react";
import profilePicImage from "../../assets/about-me/CelesteHarte.jpg";
import "../../styles/ProfilePic.css";

function ProfilePic () {
    const profileAltText = "Celeste Harte, fantasy and sci-fi author, smiling and looking at the camera in a sunny, outdoor background.";
    return (
        <div className="profile-pic">
          <img src={profilePicImage} alt={profileAltText} />
        </div>
      );
}

export default ProfilePic;