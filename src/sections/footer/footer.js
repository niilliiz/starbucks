import React from "react";
import { LINKS } from "../../data/footer-links";
import LargeScreenFooter from "./footer-large-screen";
import ShortScreenFooter from "./footer-short-screen";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t-2 border-gray-300 px-4 pt-8">
      <LargeScreenFooter links={LINKS} />
      <ShortScreenFooter links={LINKS} />
      <p className="self-center py-4 text-14 text-gray-600">
        © 2022 Starbucks Coffee.
      </p>
    </footer>
  );
};
export default Footer;
