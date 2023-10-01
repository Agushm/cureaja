"use client";
import Image from "next/image";
import Container from "../containers/Container";

import heroImg from "../../../public/img/hero2.png";

const Hero2 = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:h-screen md:flex-row">
          <div className="w-full md:w-1/2 my-5 md:my-auto ">
            <h1 className="text-xl md:text-6xl font-medium mb-5 md:mb-10">
              <span className="text-orange-500">Program </span>Diet Sehat
              Dipandu <span className="text-orange-500">Ahli Gizi</span>
            </h1>
            <h3 className="text-md md:text-2xl font-light">
              Kami siap membantu anda memiliki bentuk tubuh impian
            </h3>
          </div>
          <div className="w-full md:w-1/2 my-auto relative">
           
            <Image
              src={heroImg}
              className={"object-cover w-full h-full"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
            <div className="absolute bg-white dark:bg- py-3 px-4 shadow-xl rounded-md w-48 md:w-72 left-0 top-10 md:top-24">
                <p className="text-gray-900 mb-2 text-sm md:text-lg">
                  Makan banyak tidak takut gemuk
                </p>
                <span className="text-gray-600 text-xs md:text-sm">Alyssa, Pejuang Diet</span>
              </div>
          </div>
         
        </div>
      </Container>
    </>
  );
};

export default Hero2;
