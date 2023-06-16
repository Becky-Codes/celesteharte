import React from "react";
import "../../styles/CelesteHarteAuthorHeader.css";
function CelesteHarteAuthorHeader(props) {
  return (
    <div className="celeste-harte">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}

export default CelesteHarteAuthorHeader;
