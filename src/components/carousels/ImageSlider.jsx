import React, { useState } from 'react';
import './Carousel.css';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { IoMdRadioButtonOn } from 'react-icons/io';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onLeftArrowHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onRightArrowHandler = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const onWishHandler = (index) => {
    setCurrentIndex(index);
  };

  const slider = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${slides[currentIndex].img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="my_images">
      <div className="left_arrow" onClick={onLeftArrowHandler}>
        <FaRegArrowAltCircleLeft />
      </div>
      <div className="slider" style={slider}></div>
      <div className="right_arrow" onClick={onRightArrowHandler}>
        <FaRegArrowAltCircleRight />
      </div>
      <div className="slide_access">
        {slides.map((value, index) => {
          return (
            <div
              className="dot"
              key={index}
              onClick={() => onWishHandler(index)}
            >
              <IoMdRadioButtonOn />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
