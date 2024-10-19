import React from "react";
import slider1_img from "../assets/asset 5.png";
import img_plant from "../assets/asset 38.png";
import spin from "../assets/asset 4.svg";

const HomeSlider1 = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center items-center gap-8 p-4 md:p-8 relative lg:pt-24 animate-fade-in"
      id="slider1"
    >
      {/* Content Section */}
      <div className="flex-1 max-w-lg text-center md:text-left">
        <h4 className="text-lg md:text-xl font-semibold font-serif">ICE CREAM SMILES</h4>
        <h1 className="text-xl md:text-3xl font-bold mt-2 md:mt-4" id="Nav-text">
          Frosty Delights: Treat Yourself To Creamy
        </h1>
        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="home-bt-shop duration-200 px-8 py-3 text-base md:text-lg hover:scale-105 hover:bg-red-500 hover:text-white">
            Shop Now
          </button>
          <button className="home-bt2-shop duration-200 px-8 py-3 text-base md:text-lg hidden lg:block hover:scale-105 hover:bg-red-500 hover:text-white">
            See more
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-xs md:max-w-sm relative mx-4 md:mx-12">
        <div className="relative">
          <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center -ml-14 mt-20">
            <img className="spin_of" src={spin} alt="" />
            <h1 id="spin-text">Get 30% <br /> off</h1>
          </div>
          <div
            className="flip-vertical-right sm:hidden lg:block w-32 h-32 absolute rounded-e-md text-[25px] -right-24"
            id="good-root"
          ></div>
          <div className="flip-vertical-right sm:hidden lg:block w-32 h-32 absolute rounded-e-md text-[25px] -right-24"></div>
        </div>
        <div className="max-w-full h-[400px] md:h-[570px]">
          <img
            className="w-full h-full object-cover"
            src={slider1_img}
            alt="Ice Cream"
          />
        </div>
      </div>

      {/* Decorative Plant Image */}
      <img className="absolute right-0 bottom-0 max-w-xs md:max-w-sm" src={img_plant} alt="Plant Decoration" />

      {/* Promotional Text with Bounce Animation */}
      <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center left-10 bottom-10 md:left-36 md:-ml-10 animate-bounce">
        <div>
          <h1 className="text-red-600 text-5xl md:text-8xl font-Playball text-center">1</h1>
          <div className="h-1 w-28 bg-red-500 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider1;
