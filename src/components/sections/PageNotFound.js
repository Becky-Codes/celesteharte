import React from 'react';
import backgroundImage from "../../assets/404-img.png"
import '../../styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div id='page-not-found' className="not-found-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-container">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
        <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
