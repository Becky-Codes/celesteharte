import React from "react";
import { HashLink } from "react-router-hash-link";
import "../../styles/Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu_item">
        <HashLink smooth to="/#books-section" className="menu_text">
          Books
        </HashLink>
      </div>
      <div className="menu_item">
        <HashLink smooth to="/#characters-section" className="menu_text">
          Meet the Characters
        </HashLink>
      </div>
      <div className="menu_item">
        <HashLink smooth to="/#about-me-section" className="menu_text">
          About Me
        </HashLink>
      </div>
      <div className="menu_item">
        <HashLink smooth to="/#contact-section" className="menu_text">
          Contact
        </HashLink>
      </div>
      <div className="menu_item">
        <a href="/blog" className="menu_text">
          Blog
        </a>
      </div>
    </nav>
  );
}

export default Menu;
