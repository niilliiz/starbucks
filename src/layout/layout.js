import React from "react";
import Header from "../sections/header/header";
const Layout = ({ children }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto my-0">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
