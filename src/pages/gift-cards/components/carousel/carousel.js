/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GiftCard from "../gift-card/gift-card";

const Carousel = React.forwardRef(({ gifts }, ref) => {
  return (
    <div className="carousel_container">
      <div ref={ref} className="carousel">
        {gifts.map((gift) => (
          <GiftCard key={gift.id} bgImg={gift.url} link={gift.link} />
        ))}
      </div>
    </div>
  );
});
export default Carousel;
