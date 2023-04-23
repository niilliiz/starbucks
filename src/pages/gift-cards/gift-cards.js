import React from "react";
import { giftCategories } from "../../data/gift-card-data";
import Categories from "./components/categories/categories";

const GiftCards = () => {
  return (
    <main className="my-12 flex flex-col space-y-24">
      {giftCategories.map((category) => (
        <Categories key={category.title} category={category} />
      ))}
    </main>
  );
};
export default GiftCards;
