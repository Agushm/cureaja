"use client";
import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

interface CarouselState {
  images: any;
}
const Carousel = (args: CarouselState) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mx-auto max-w-2xl h-100">
      <Slider {...settings}>
        {args.images.map((image: any, index: number) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index}`} width={150}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
