import React from "react";
import HomeCard from "./components/home-card/home-card";

const Home = () => {
  return (
    <main className="mt-12 flex flex-col space-y-12">
      <HomeCard
        title="Make your Rewards merrier"
        description="Starbucks® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1 mile per $1* spent at Starbucks."
        link="/"
        bgImg="bg-home-sec1"
        buttonContent="Link now"
        col1Bgc="bg-red-900"
        col2Bgc="bg-green-900"
      />
      <HomeCard
        isReversed
        title="Starbucks for Life"
        description="Prizes and fun await! Play now for your chance to win coffee, merch and more. **"
        link="/"
        bgImg="bg-home-sec2"
        buttonContent="Play now"
        col1Bgc="bg-green-900"
        col2Bgc="bg-green-900"
      />
      <HomeCard
        title="Cozy caramel"
        description="Our creamy and comforting Caramel Brulée Latte is the gift you give yourself."
        link="/"
        bgImg="bg-home-sec3"
        buttonContent="Order now"
        col1Bgc="bg-red-900"
        col2Bgc="bg-red-900"
      />
      <HomeCard
        isReversed
        title="30% off for a limited time***"
        description="Save on the crowd-pleasing Cranberry Bliss® Bar Tray with dried cranberries and cream-cheese icing."
        link="/"
        bgImg="bg-home-sec4"
        buttonContent="Order now"
        col1Bgc="bg-green-900"
        col2Bgc="bg-green-900"
      />
      <HomeCard
        isReversed
        title="Warm and hearty"
        description="The Impossible™ Breakfast Sandwich will keep you going with an Impossible Sausage patty made from plants, egg and Cheddar. ****"
        link="/"
        bgImg="bg-home-sec5"
        buttonContent="Order now"
        col1Bgc="bg-green-700"
        col2Bgc="bg-green-700"
      />
      <HomeCard
        isReversed
        title="Let the holiday cheer come to you"
        description="Make the moment merry. Order Starbucks® holiday favorites on Uber Eats*****."
        link="/"
        bgImg="bg-home-sec6"
        buttonContent="Order now"
        col1Bgc="bg-green-900"
        col2Bgc="bg-green-900"
      />
    </main>
  );
};
export default Home;
