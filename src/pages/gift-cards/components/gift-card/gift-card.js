import React from "react";
const GiftCard = ({ bgImg, link }) => {
  console.log(bgImg);
  return (
    <a href={link}>
      <div
        className={`gift-card ${bgImg} w-32 h-24 bg-cover bg-center bg-no-repeat`}
        style={{
          "--gift-card": `url(${bgImg})`,
        }}
      />
    </a>
  );
};
export default GiftCard;
