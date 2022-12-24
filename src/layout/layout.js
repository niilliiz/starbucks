import React from "react";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
const Layout = ({ children }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto my-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
