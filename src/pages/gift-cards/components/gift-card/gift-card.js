import React from "react";
const GiftCard = ({ bgImg, link }) => {
  return (
    <a href={link} className="gift-card" data-status="inActive">
      <div
        className={`card-img ${bgImg} `}
        style={{
          "--gift-bgc": `url(${bgImg})`,
        }}
      />
    </a>
  );
};
export default GiftCard;
