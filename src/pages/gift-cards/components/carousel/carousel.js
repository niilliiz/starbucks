import React from "react";
import GiftCard from "../gift-card/gift-card";
const Carousel = ({ gifts }) => {
  return (
    <div className="flex space-x-12 items-center border-gray-800 border-2 grow ">
      {gifts.map((gift) => {
        const bgImg = `bg-giftCard-${gift.id}`;

        return <GiftCard key={gift.id} bgImg={gift.url} link={gift.link} />;
      })}
    </div>
  );
};
export default Carousel;
