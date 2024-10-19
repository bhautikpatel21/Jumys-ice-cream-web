import React from "react";
import slider3_img from "../assets/asset 11.png";
// import img_plant from "../assets/asset 38.png";
import leaf from "../assets/asset 13.png";
import leaf2 from "../assets/asset 9.png";
import leaf3 from "../assets/asset 14.png";
import leaf4 from "../assets/asset 15.png";

const HomeSlider3 = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-4 md:p-8 relative lg:pt-24" id="slider">
        
      {/* Content Section */}
      <div className="flex-1 max-w-lg">
        <h4 className="text-lg md:text-xl font-semibold font-serif">ICE CREAM SMILES</h4>
        <h1
          className="text-xl md:text-3xl font-bold mt-2 md:mt-4"
          id="Nav-text"
        >
          Frosty Delights: Treat Yourself To Creamy
        </h1>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <button className="home-bt-shop duration-200 px-8 py-3 text-base md:text-lg">
            Shop Now
          </button>
          <button className="home-bt2-shop duration-200 px-8 py-3 text-base md:text-lg hidden lg:block">
            See more
          </button>
        </div>
      </div>

      <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center right-20 top-24">
            <img className="" src={leaf4} alt="" />
        </div>
      

      {/* Image Section */}
      <div className="max-w-xs md:max-w-sm relative mx-12">
        <div className="">

          <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center -ml-56">
            <img className="" src={leaf} alt="" />
          </div>

          {/* <div
            className="flip-vertical-right sm:hidden lg:block w-32 h-32 absolute rounded-e-md text-[25px] -right-24"
            id="good-root"
          ></div> */}
          
        </div>
        <div className="w-[700px] h-[570px] object-contain -ml-16 pt-14">
          <img
            className="w-[600px] h-auto object-cover"
            src={slider3_img}
            alt="Ice Cream"
          />
        </div>
      </div>
      <img className='mt-80 ml-44 absolute right-0 bottom-3' src={leaf2} alt="not found" />
       
      <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center left-0 -ml-10 bottom-44">
            <img className="" src={leaf3} alt="" />
          </div>

    </div>
  );
};

export default HomeSlider3;