import React from "react";
import slider2_img from "../assets/asset 8.png";
import leaf from "../assets/asset 10.png";
import leaf2 from "../assets/asset 9.png";
import spin from "../assets/asset 4.svg";
import { NavLink,Outlet } from "react-router-dom";

const HomeSlider2 = () => {
  return (
    <div
      className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-4 md:p-8 relative lg:pt-24 animate-fade-in"
      id="slider2"
    >
      {/* Content Section */}
      <div className="flex-1 max-w-lg text-center md:text-left">
        <h4 className="text-lg md:text-xl font-semibold font-serif">ICE CREAM SMILES</h4>
        <h1 className="text-xl md:text-3xl font-bold mt-2 md:mt-4" id="Nav-text3">
          Frosty Delights: Treat Yourself To Creamy
        </h1>
        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">

        <NavLink to="/shop">
          <button className="home-bt-shop duration-200 px-8 py-3 text-base md:text-lg hover:scale-105 hover:bg-black hover:text-white">
            Shop Now
          </button>
          </NavLink>

          <NavLink to="/shop">
          <button className="home-bt2-shop duration-200 px-8 py-3 text-base md:text-lg hidden lg:block hover:scale-105 hover:bg-red-500 hover:text-white">
            See more
          </button>
          </NavLink>

        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-xs md:max-w-sm relative mx-4 md:mx-12">
        <div className="relative">
          <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center -ml-14 mt-44">
            <img className="spin_of" src={spin} alt="" />
            <h1 className="font-serif" id="spin-text">Get 30% <br /> off</h1>
          </div>

          <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center -ml-56">
            <img src={leaf} alt="Leaf Decoration" />
          </div>

          <div className="flip-vertical-right sm:hidden lg:block w-32 h-32 absolute rounded-e-md text-[25px] -right-24"></div>
        </div>
        <div className="max-w-full h-[400px] lg:-mb-8 md:h-[570px] pt-20">
          <img className="w-full h-full object-cover" src={slider2_img} alt="Ice Cream" />
        </div>
      </div>

      <img className="absolute right-0 bottom-0 max-w-xs md:max-w-sm" src={leaf2} alt="Plant Decoration" />

      <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center left-10 bottom-10 md:left-36 md:-ml-10 animate-bounce">
        <div>
          <h1 className="text-red-600 text-5xl md:text-8xl font-Playball text-center">2</h1>
          <div className="h-1 w-28 bg-red-500 mx-auto"></div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default HomeSlider2;
