import React from "react";
import CelesteHarteAuthorHeader from "../common/CelesteHarteAuthorHeader";
import FeaturedBook from "../common/FeaturedBook";
import "../../styles/HomeSection.css";

function HomeSection() {
  return (
    <div className="home-section">
      <div className="home-section__content">
        <FeaturedBook />
        <CelesteHarteAuthorHeader title="Celeste Harte" subtitle="Author" />
      </div>
    </div>
  );
}

export default HomeSection;
