import React from "react";
const GiftCard = ({ bgImg, link }) => {
  return (
    <a href={link} className="gift-card" data-status="inActive">
      <img src={bgImg} alt="gift card" className="card-img" />
    </a>
  );
};
export default GiftCard;
