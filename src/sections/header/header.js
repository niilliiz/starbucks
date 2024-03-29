/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MapPin } from "phosphor-react";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import NavSlider from "./component/nav-slider/nav-slider";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative h-20 flex justify-between items-center px-8 py-2  shadow-bottom border-gray-300 md:border-b md:justify-stretch md:shadow-none md:space-x-4">
      <Logo width="40" />

      {/*less than medium size screen  */}
      <button
        className={`hamburger flex md:hidden ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="hamburger-top"></div>
        <div className="hamburger-middle"></div>
        <div className="hamburger-bottom"></div>
      </button>

      {/*more than medium size screen  */}
      <div className="hidden justify-between items-center grow md:flex">
        <nav>
          <ul className="flex space-x-4 font-500">
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">REWARD</a>
            </li>
            <li>
              <a href="#">GIFT CARDS</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5 text-14 font-500">
          <a href="#" className="flex items-center ">
            <MapPin weight="fill" width="40" height="26" />
            <span>Find a store</span>
          </a>
          <Button className="button border border-gray-900 hover:bg-gray-200">
            Sign in
          </Button>
          <Button className="button bg-gray-900 text-gray-100 hover:bg-gray-800 ">
            Join now
          </Button>
        </div>
      </div>
      <NavSlider isOpen={open} />
    </header>
  );
};
export default Header;
