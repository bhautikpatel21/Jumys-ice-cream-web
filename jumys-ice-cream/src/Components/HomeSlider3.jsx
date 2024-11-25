import React from "react";
import slider3_img from "../assets/asset 11.png";
import leaf from "../assets/asset 13.png";
import leaf2 from "../assets/asset 9.png";
import leaf3 from "../assets/asset 14.png";
import leaf4 from "../assets/asset 15.png";
import { NavLink,Outlet } from "react-router-dom";

const HomeSlider3 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-4 md:p-8 relative lg:pt-24" id="slider3">
      
      {/* Content Section */}
      <div className="flex-1 max-w-lg text-center md:text-left animate-fade-in">
        <h4 className="text-lg md:text-xl font-semibold font-serif">ICE CREAM SMILES</h4>
        <h1 className="text-xl md:text-3xl font-bold mt-2 md:mt-4" id="Nav-text3">
          Cool Confections: Discover The Magic Of Ice Cream
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

      <div className="absolute w-32 h-32 flex justify-center items-center right-20 top-24 md:right-16 md:top-20 animate-scale-up">
        <img src={leaf4} alt="Leaf decoration" />
      </div>

      {/* Image Section */}
      <div className="relative max-w-xs md:max-w-lg mx-4 md:mx-12">
        <div className="absolute w-32 h-32 flex justify-center items-center -ml-20 md:-ml-56 top-0 animate-scale-up">
          <img src={leaf} alt="Leaf decoration" />
        </div>
        <img
          className="w-full h-auto md:h-[570px] lg:-mb-8 object-cover"
          src={slider3_img}
          alt="Ice Cream"
        />
      </div>

      <img className='hidden md:block absolute right-0 bottom-3 animate-fade-in' src={leaf2} alt="Not found" />
      <div className="absolute w-32 h-32 flex justify-center items-center left-0 -ml-10 bottom-44 md:bottom-10">
        <img src={leaf3} alt="Leaf decoration" />
      </div>

      <div className="absolute w-32 h-32 flex justify-center items-center left-36 -ml-10 bottom-10 animate-bounce">
        <div className="text-center">
          <h1 className="text-red-600 text-5xl md:text-8xl font-Playball">3</h1>
          <div className="h-1 w-28 bg-red-500 mx-auto"></div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default HomeSlider3;
