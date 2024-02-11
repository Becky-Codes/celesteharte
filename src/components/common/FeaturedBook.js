import React from "react";
import featuredBookImage from "../../assets/featured-book.jpg";
import "../../styles/FeaturedBook.css";
import Button from "./Button";

function FeaturedBook() {
  const bookAltText = "Dragon Bones Trilogy available now!";
  const buttonLink =
    "https://www.amazon.com/stores/Celeste-Harte/author/B084MND3LT?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true";

  return (
    <div className="featured-book">
      <img src={featuredBookImage} alt={bookAltText} />
      <Button text="BUY NOW" link={buttonLink} />
    </div>
  );
}

export default FeaturedBook;
