import React from "react";
import Button from "../../../../components/button/button";

const HomeCard = ({
  isReversed = false,
  bgImg,
  title,
  description,
  link,
  buttonContent,
  col1Bgc,
  col2Bgc,
}) => {
  const rowPosition = isReversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section className={`flex flex-col ${rowPosition} md:h-600 `}>
      <div
        className={`${bgImg} ${col1Bgc} bg-center bg-cover bg-no-repeat w-full h-450 md:w-1/2 md:h-full`}
      />
      <div
        className={`flex flex-col justify-center items-center text-center space-y-6 p-10 text-gray-100 font-500 ${col2Bgc} md:space-y-8 md:w-1/2`}
      >
        <h2 className="font-700 text-24 md:text-28 lg:text-54">{title}</h2>
        <p className="text-18 sm:text-20 md:text-24">{description}</p>
        <Button
          to={link}
          className="font-500 button button--small border border-gray-100 
        md:text-20 hover:bg-gray-700"
        >
          {buttonContent}
        </Button>
      </div>
    </section>
  );
};
export default HomeCard;
