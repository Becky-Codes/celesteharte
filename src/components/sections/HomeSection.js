import React from "react";
import CelesteHarteAuthorHeader from "../common/CelesteHarteAuthorHeader";
import FeaturedBook from "../common/FeaturedBook";
import "../../styles/HomeSection.css";
import Menu from "../common/Menu";

function HomeSection() {
  return (
    <div className="home-section" style={{ marginBottom: 500 }}>
      <Menu />
      <div className="home-section__content">
        <FeaturedBook /* props */ />
        <CelesteHarteAuthorHeader title="Celeste Harte" subtitle="Author" />
      </div>
    </div>
  );
}

export default HomeSection;
