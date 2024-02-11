import React from "react";
import "../../styles/Gallery.css";
import "../../styles/ContactForm.css";
import ContactForm from "../common/ContactForm";

function Contact () {

    return (
        <div id="contact-section" className="contact-me-section">
            <h1 className="gallery-header" style={{ marginTop: 0 }}>CONTACT</h1>
            <div className="horizontal-line"></div>
            <ContactForm/>
        </div>
        
        );

}

export default Contact;