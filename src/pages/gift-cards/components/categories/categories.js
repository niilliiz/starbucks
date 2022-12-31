import React from "react";
import Button from "../button/button";
import Carousel from "../carousel/carousel";
const Categories = ({ category }) => {
  return (
    <section className="flex flex-col space-y-12">
      <div className="flex justify-between px-6 md:pl-20 ">
        <h2 className="text-20 font-700 text-green-900">{category.title}</h2>
        <button className="text-green-700 font-500">See all</button>
      </div>
      <div className="relative flex justify-between border-2 border-red-900">
        <Button direction="left" left="left-6 md:left-20" />
        <Carousel gifts={category.gifts} />
        <Button direction="right" right="right-6" />
      </div>
    </section>
  );
};
export default Categories;
