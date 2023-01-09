import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const Button = React.forwardRef(
  ({ direction, isOnScreen, left = "", right = "", onClick }, ref) => {
    const display = isOnScreen
      ? "opacity-70 pointer-events-auto"
      : "opacity-0 pointer-events-none";

    return (
      <div
        className={` hidden ${display}  flex-col items-center justify-center  absolute ${left} ${right} -translate-y-2/4 bg-gray-200 w-11 h-11 rounded-circle shadow-sm top-2/4   cursor-pointer  z-10 transition-opacity hover:opacity-95 sm:flex`}
        onClick={onClick}
        ref={ref}
      >
        {direction === "left" ? (
          <CaretLeft size={24} />
        ) : (
          <CaretRight size={24} />
        )}
      </div>
    );
  }
);

export default Button;
