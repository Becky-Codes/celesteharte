import React from 'react';
import "../../styles/SocialMedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    const instagramUrl = "https://www.instagram.com/celeste_harte/";
    const twitterUrl = "https://twitter.com/celesteharte";
    const tiktokUrl = "https://www.tiktok.com/@celesteharte";
    const threadsUrl = "https://www.threads.net/@celeste_harte";

    // Define colors as variables
    const defaultColor = "#e8cbed";
    const hoverColor = "#9294DD";

    const handleMouseEnter = (id) => {
        document.getElementById(id).style.color = hoverColor;
    };

    const handleMouseLeave = (id) => {
        document.getElementById(id).style.color = defaultColor;
    };

    return (
        <div>
            <div className='footer'>
                {/* Link icons to social media URLs */}
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                   onMouseEnter={() => handleMouseEnter("instagramIcon")}
                   onMouseLeave={() => handleMouseLeave("instagramIcon")}>
                    <FontAwesomeIcon id="instagramIcon" icon={faInstagram} size="xl" style={{color: defaultColor}} />
                </a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer"
                   onMouseEnter={() => handleMouseEnter("tiktokIcon")}
                   onMouseLeave={() => handleMouseLeave("tiktokIcon")}>
                    <FontAwesomeIcon id="tiktokIcon" icon={faTiktok} size="xl" style={{color: defaultColor}} />
                </a>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer"
                   onMouseEnter={() => handleMouseEnter("twitterIcon")}
                   onMouseLeave={() => handleMouseLeave("twitterIcon")}>
                    <FontAwesomeIcon id="twitterIcon" icon={faXTwitter} size="xl" style={{color: defaultColor}} />
                </a>
                <a href={threadsUrl} target="_blank" rel="noopener noreferrer"
                   onMouseEnter={() => handleMouseEnter("threadsIcon")}
                   onMouseLeave={() => handleMouseLeave("threadsIcon")}>
                    <FontAwesomeIcon id="threadsIcon" icon={faThreads} size="xl" style={{color: defaultColor}} />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
