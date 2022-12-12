import React from "react";

const Button = ({ className = "", children, to = "#" }) => {
  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
};

export default Button;
