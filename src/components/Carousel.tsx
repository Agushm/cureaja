"use client";
import React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Container from "./containers/Container";

interface CarouselState {
  images: any;
}
const Carousel = () => {
  const images = [
    {
      title:"Pre-Order Ebela Abon",
      src:"/img/banner2.jpg"
    },
    {
      title:"Open Launching Cureaja",
      src:"/img/banner1.jpg"
    },
    {
      title:"Pre-Order Ebela Abon",
      src:"/img/banner2.jpg"
    },
    {
      title:"Open Launching Cureaja",
      src:"/img/banner1.jpg"
    },
  ];

  return (
    <Container>
      <div className="max-w-full carousel carousel-center space-x-4 mt-10">
        {images.map((img: any, index: number) => (
          // <div key={index} className="carousel-item w-[35rem] h-[35rem]">
          //   <img src={img} className="rounded-box object-cover hover:scale-110 transition duration-500 cursor-pointer object-cover" />
          // </div>
          <div className="carousel-item relative md:w-[35rem] md:h-[35rem] w-60 h-60 overflow-hidden">
            <img
              src={img.src}
              alt="Image"
              className="rounded-box w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="rounded-box absolute inset-0 flex items-center justify-center bg-black opacity-0 bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
              <p className="text-white text-center text-3xl font-bold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Carousel;
