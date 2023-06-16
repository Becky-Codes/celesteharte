import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu_item">
        <Link to="/books" className="menu_text">
          Books
        </Link>
      </div>
      <div className="menu_item">
        <Link to="/characters" className="menu_text">
          Meet the Characters
        </Link>
      </div>
      <div className="menu_item">
        <Link to="/about" className="menu_text">
          About Me
        </Link>
      </div>
      <div className="menu_item">
        <Link to="/contact" className="menu_text">
          Contact
        </Link>
      </div>
      <div className="menu_item">
        <a href="/blog" className="menu_text">
          Blog
        </a>
      </div>
    </div>
  );
}

export default Menu;
