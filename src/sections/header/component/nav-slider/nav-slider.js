/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Button from "../../../../components/button/button";
import { CaretLeft, CaretRight, MapPin } from "phosphor-react";

const NAVITEMS = [
  {
    title: "Menu",
    secondaryLinks: [
      { title: "All products", link: "/" },
      { title: "Featured", link: "/" },
      { title: "Previous orders", link: "/" },
      { title: "Favorite Products", link: "/" },
    ],
  },
  { title: "Rewards", link: "/" },
  { title: "Gift Cards", link: "/" },
];

const TRANSITION = "transition-all ease-in-out duration-300";

const NavSlider = ({ isOpen }) => {
  const [secondaryLinks, setSecondaryLinks] = useState([]);

  const primaryMenuPosition = isOpen ? "right-0" : "-right-800px";
  const secondaryPrimaryPosition =
    secondaryLinks.length > 0 ? "right-0" : "-right-800px";
  const backdropPosition = isOpen ? "left-0" : "left-100%";

  useEffect(() => {
    if (!isOpen) {
      setSecondaryLinks([]);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-81px bottom-0 right-0  bg-backdrop  ${backdropPosition} ${TRANSITION} md:hidden`}
    >
      <div
        className={`absolute flex flex-col space-y-6 w-11/12 bottom-0 top-0 px-8 py-10 bg-gray-100 ${primaryMenuPosition} ${TRANSITION} xsm:w-96`}
      >
        <ul className="flex flex-col text-20 space-y-6 pb-6 border-b border-gray-300">
          {NAVITEMS.map((item) => (
            <li
              key={item.title}
              onClick={() => setSecondaryLinks(item?.secondaryLinks)}
            >
              <a
                href={item.link || "#"}
                className="flex justify-between items-center"
              >
                {item.title}
                {item?.secondaryLinks?.length > 0 && <CaretRight size={20} />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 text-14">
          <Button className="button button--small border border-gray-900 hover:bg-gray-200">
            Sign in
          </Button>
          <Button className="button button--small bg-gray-900 text-gray-100 hover:bg-gray-800 ">
            Join now
          </Button>
        </div>
        <a href="/" className="flex items-center text-14 font-500">
          <MapPin weight="fill" width="40" height="24" />
          <span>Find a store</span>
        </a>
      </div>
      {/* ------------Secondary Links----------- */}
      <div
        className={`absolute flex flex-col space-y-6 w-11/12 bottom-0 top-0 bg-gray-100 ${secondaryPrimaryPosition} ${TRANSITION} xsm:w-96`}
      >
        <button
          className={`grid grid-cols-2 items-center justify-items-start bg-gray-200 px-8 py-4`}
          onClick={() => setSecondaryLinks([])}
        >
          <CaretLeft className="" size={20} />
          <h3 className="font-500 text-20 ">Menu</h3>
        </button>
        <ul className="flex flex-col text-20 space-y-6 px-8">
          {secondaryLinks.map((item) => (
            <li key={item.title} onClick={() => setSecondaryLinks([])}>
              <a href={item.link} className="flex justify-between items-center">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavSlider;
