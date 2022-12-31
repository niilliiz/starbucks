import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const Button = ({ direction, left = "", right = "" }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center   w-11 h-11 rounded-circle shadow-sm top-2/4 -translate-y-2/4 ${left} ${right}`}
    >
      {direction === "left" ? (
        <CaretLeft size={24} />
      ) : (
        <CaretRight size={24} />
      )}
    </div>
  );
};
export default Button;
