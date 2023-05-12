import React, { useRef } from 'react';
import Button from '../button/button';
import Carousel from '../carousel/carousel';

const Categories = ({ category }) => {
  const carouselRef = useRef(null);

  const handleClick = (e, dir) => {
    const sliderIndex = parseInt(
      getComputedStyle(carouselRef.current).getPropertyValue('--slider-index')
    );
    const itemCounts = carouselRef.current.children.length;
    const itemPerScreen = parseInt(
      getComputedStyle(carouselRef.current).getPropertyValue(
        '--items-per-screen'
      )
    );
    const unit = Math.ceil(itemCounts / itemPerScreen);

    if (dir === 'left') {
      if (sliderIndex - 1 < 0) {
        carouselRef.current.style.setProperty('--slider-index', +unit - 1);
      } else {
        carouselRef.current.style.setProperty(
          '--slider-index',
          +sliderIndex - 1
        );
      }
    }

    // joda kon ghesmate define unut rom unit mitune state bashe, baraye neshun dadane button ha bayad ye jur dg benevisi

    if (dir === 'right') {
      if (sliderIndex + 1 >= unit) {
        carouselRef.current.style.setProperty('--slider-index', 0);
      } else {
        carouselRef.current.style.setProperty(
          '--slider-index',
          +sliderIndex + 1
        );
      }
    }
  };

  return (
    <section className='flex flex-col space-y-4 px-6'>
      <div className='flex justify-between mx-3'>
        <h2 className='text-20 font-700 text-green-900'>{category.title}</h2>
        <button className='text-green-700 font-500'>See all</button>
      </div>
      <div className='relative w-full h-56 overflow-hidden'>
        <Button
          direction='left'
          left='left-6'
          onClick={(e) => handleClick(e, 'left')}
        />
        <Carousel gifts={category.gifts} ref={carouselRef} />
        <Button
          direction='right'
          right='right-6'
          onClick={(e) => handleClick(e, 'right')}
        />
      </div>
    </section>
  );
};
export default Categories;
