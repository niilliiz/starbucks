import React from "react";

import { CaretDown } from "phosphor-react";

const ShortScreenFooter = ({ links }) => {
  const handleOpenAccordion = (e) => {
    // ------------Show & Hide  List
    const accordion = e.target.parentElement.parentElement;
    const accordion_list_container = accordion.children[1];
    const expander = accordion_list_container.children[0];

    accordion_list_container.classList.toggle(
      "accordion_list_container--closed"
    );
    accordion_list_container.classList.toggle(
      "accordion_list_container--opened"
    );

    expander.classList.toggle("accordion_list_expander");

    // ------------Rotate CaretIcon
    const caretIcon = e.target.parentElement.children[1];
    caretIcon.classList.toggle("caret_icon--down");
    caretIcon.classList.toggle("caret_icon--up");
  };

  return (
    <div className="flex flex-col space-y-6 pb-8 lg:hidden even:border-b-2 even:border-gray-300">
      {links.map((link) => (
        <div className="accordion flex flex-col" key={link.title}>
          <div
            className="accordion-header flex items-center justify-between font-400 text-16 cursor-pointer"
            onClick={handleOpenAccordion}
          >
            <h3 className="text-18 py-1 grow-2">{link.title}</h3>
            <CaretDown size={22} className="caret_icon caret_icon--down" />
          </div>
          <div className="accordion_list_container accordion_list_container--closed">
            <div className="accordion_list_expander">
              <ul className="accordion_list flex flex-col space-y-2">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.title}>
                    <a className="text-gray-600 leading-9" href={subLink.link}>
                      {subLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShortScreenFooter;
