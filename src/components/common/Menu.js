import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Menu.css";
import { HashLink } from "react-router-hash-link";

function Menu({ scrollToSection }) {
  return (
    <nav className="menu">
      <div className="menu_item">
        <Link
          to="/books"
          className="menu_text"
          onClick={() => scrollToSection("books-section")}
        >
          Books
        </Link>
      </div>
      <div className="menu_item">
        <Link
          to="/characters"
          className="menu_text"
          onClick={() => scrollToSection("characters-section")}
        >
          Meet the Characters
        </Link>
      </div>
      <div className="menu_item">
        <Link
          to="/about"
          className="menu_text"
          onClick={() => scrollToSection("about-me-section")}
        >
          About Me
        </Link>
      </div>
      <div className="menu_item">
        <Link
          to="/contact"
          className="menu_text"
          onClick={() => scrollToSection("contact-section")}
        >
          Contact
        </Link>
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
