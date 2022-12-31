import React from "react";
import { giftCategories } from "../../data/gift-card-data";
import Categories from "./components/categories/categories";

const GiftCards = () => {
  return (
    <main className="my-12 flex flex-col space-y-24">
      {giftCategories.map((category) => (
        <Categories category={category} key={category.title} />
      ))}
    </main>
  );
};
export default GiftCards;
