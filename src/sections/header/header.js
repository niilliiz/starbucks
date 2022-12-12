import React from "react";
import Logo from "../../components/logo/logo";
const Header = (props) => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Logo width="40" />
      <div className="hidden md:flex">large screen header</div>
      <div className="flex md:hidden">medium screen header</div>
    </header>
  );
};
export default Header;
