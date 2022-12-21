import React, { useState } from "react";

import { CaretDown } from "phosphor-react";

const TRANSITION = "ease-in-out duration-300";
const TRANSITION_PROPERTY = "transition-height transition-opacity";
const classListItems = "opacity-100 space-y-4 mt-4 h-auto block";

const ShortScreenFooter = ({ links }) => {
  const [classList, setClassList] = useState("");
  const handleOpenAccordion = (e, index) => {
    const ulElement = e.target.parentElement.parentElement.children[1];

    // if ([...ulElement.classList].includes("opacity-100")) {
    //   ulElement.classList.add("hidden");
    //   setClassList("");
    // } else {
    //   ulElement.classList.remove("hidden");

    //   setClassList(classListItems);
    // }

    ulElement.classList.toggle("opacity-100");
    ulElement.classList.toggle("opacity-0");
    ulElement.classList.toggle("space-y-4");
    ulElement.classList.toggle("mt-4");
    ulElement.classList.toggle("h-auto");
    ulElement.classList.toggle("h-0");
    ulElement.classList.toggle("hidden");
    ulElement.classList.toggle("block");
  };

  return (
    <div className="flex flex-col space-y-6 lg:hidden even:border-b-2 even:border-gray-300 pb-8">
      {links.map((link, index) => (
        <div className="flex flex-col" key={link.title}>
          <div className="flex items-center justify-between font-500 text-16 cursor-pointer">
            <h3
              className="text-gray-800 grow-2"
              onClick={(e) => handleOpenAccordion(e, index)}
            >
              {link.title}
            </h3>
            <CaretDown
              size={22}
              weight="bold"
              // onClick={(e) => handleOpenAccordion(e, index)}
            />
          </div>
          <ul
            className={`hidden opacity-0 h-0 ${TRANSITION} ${TRANSITION_PROPERTY}`}
          >
            {link.subLinks.map((subLink) => (
              <li key={subLink.title}>
                <a className="text-gray-600" href={subLink.link}>
                  {subLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ShortScreenFooter;
