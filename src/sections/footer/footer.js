import React from "react";
import { LINKS } from "../../data/footer-links";
import LargeScreenFooter from "./footer-large-screen";
import ShortScreenFooter from "./footer-short-screen";

const Footer = () => {
  return (
    <footer className="border-2 border-gray-300 py-18 px-4 space-y-8">
      <LargeScreenFooter links={LINKS} />
      <ShortScreenFooter links={LINKS} />
      <div>bottom footer</div>
    </footer>
  );
};
export default Footer;
