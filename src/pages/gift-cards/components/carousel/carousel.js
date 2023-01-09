/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GiftCard from "../gift-card/gift-card";

const Carousel = React.forwardRef(({ gifts }, ref) => {
  return (
    <div className="carousel_container overflow-x-auto sm:overflow-hidden">
      <div ref={ref} className="carousel flex items-center space-x-8">
        {gifts.map((gift) => (
          <GiftCard key={gift.id} bgImg={gift.url} link={gift.link} />
        ))}
      </div>
    </div>
  );
});
export default Carousel;
