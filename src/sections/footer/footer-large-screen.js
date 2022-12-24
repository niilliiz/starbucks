import React from "react";
const LargeScreenFooter = ({ links }) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-5 space-x-2 pb-8 xl:space-x-4 odd:border-b-2 odd:border-gray-300 ">
      {links.map((link) => (
        <div className="flex flex-col space-y-6" key={link.title}>
          <h3 className="text-20">{link.title}</h3>

          <ul className="flex flex-col space-y-2">
            {link.subLinks.map((subLink) => (
              <li key={subLink.title}>
                <a className="text-gray-600 leading-9" href={subLink.link}>
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
export default LargeScreenFooter;
