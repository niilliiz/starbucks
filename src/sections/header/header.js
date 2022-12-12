/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { List, MapPin } from "phosphor-react";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 space-x-4 md:justify-stretch">
      <Logo width="40" />

      {/*less than medium size screen  */}
      <button className="block md:hidden">
        <List color="rgba(0,0,0,.58)" className="" width="32" height="40" />
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
            <MapPin weight="fill" width="40" height="24" />
            <span>Find a store</span>
          </a>
          <Button className="rounded-2xl border border-gray-900 px-3  py-1 hover:bg-gray-200">
            Sign in
          </Button>
          <Button className="rounded-2xl border border-gray-900 px-3 bg-gray-900 text-gray-100  py-1 hover:bg-gray-800 hover:border-gray-800 ">
            Join now
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
