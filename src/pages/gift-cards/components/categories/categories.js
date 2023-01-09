import React, { useRef, useState, useEffect } from "react";
import Button from "../button/button";
import Carousel from "../carousel/carousel";

const unit = 4;
const gap = 32;
const Categories = ({ category }) => {
  const carouselContainer = useRef(null);
  const carouselRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  const [windowSize, setWindowSize] = useState(0);
  const [isFirstChildOnScreen, setIsFirstChildOnScreen] = useState(false);
  const [isLastChildOnScreen, setIsLastChildOnScreen] = useState(false);

  const handleButtonClicked = (e, dir) => {
    const { left } = carouselRef.current.getBoundingClientRect();
    console.dir(carouselRef.current);

    const currentOffset =
      dir === "left"
        ? left + (unit * 320 + (unit - 1) * gap)
        : left - (unit * 320 + (unit - 1) * gap);

    carouselRef.current.style.left = `${currentOffset}px`;

    handleDisplayButton();
    handleActivateElementOnScreen();
    console.dir(carouselRef.current.offsetLeft);
  };

  const handleDisplayButton = () => {
    const length = carouselRef.current.children.length;
    const firstChild = carouselRef.current.children[0];
    const lastChild = carouselRef.current.children[length - 1];

    const isFirstChildOnScreen = handleOnScreenChecking(firstChild);
    // const isLastChildOnScreen = handleOnScreenChecking(lastChild);

    setIsFirstChildOnScreen(isFirstChildOnScreen);
    // setIsLastChildOnScreen(isLastChildOnScreen);
  };

  const handleActivateElementOnScreen = () => {};

  const handleOnScreenChecking = (element) => {
    // const { offsetLeft, offsetWidth } = element;
    // console.log(offsetLeft, offsetWidth);
    // if (offsetLeft + offsetWidth <= windowSize) {
    //   return true;
    // }
    // return false;
  };

  const handleResizeWindow = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    setIsFirstChildOnScreen(true);
    setIsLastChildOnScreen(false);
    setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <section className="flex flex-col space-y-12 px-6">
      <div className="flex justify-between ">
        <h2 className="text-20 font-700 text-green-900">{category.title}</h2>
        <button className="text-green-700 font-500">See all</button>
      </div>
      <div
        className="relative h-56 w-full border border-red-900"
        ref={carouselContainer}
      >
        <Button
          ref={leftButtonRef}
          direction="left"
          left="left-6 md:left-20"
          isOnScreen={!isFirstChildOnScreen}
          onClick={(e) => handleButtonClicked(e, "left")}
        />
        <Carousel gifts={category.gifts} ref={carouselRef} />
        <Button
          ref={rightButtonRef}
          direction="right"
          right="right-6"
          isOnScreen={!isLastChildOnScreen}
          onClick={(e) => handleButtonClicked(e, "right")}
        />
      </div>
    </section>
  );
};
export default Categories;

/**console.log(window.innerWidth);
    console.dir(carouselRef.current.children[0]);

    console.dir(carouselRef.current.children[0].offsetLeft);
    console.dir(carouselRef.current.children[1].offsetLeft);
    console.dir(carouselRef.current.children[2].offsetLeft);
 * 
 *  const {
      left: elementLeft,
      top: elementTop,
      right: elementRight,
      bottom: elementBottom,
    } = element.getBoundingClientRect();

    const {
      left: carouselContainerLeft,
      top: carouselContainerTop,
      right: carouselContainerRight,
      bottom: carouselContainerBottom,
    } = carouselContainer.current.children[1].getBoundingClientRect();
 */
