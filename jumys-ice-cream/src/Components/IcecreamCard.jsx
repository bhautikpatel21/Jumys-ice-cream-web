import React from "react";
import { FaArrowRight } from "react-icons/fa";
import asset41 from "../assets/asset_41-removebg-preview.png"
import asset42 from "../assets/asset_42-removebg-preview.png";
import asset43 from "../assets/asset_43-removebg-preview.png";
import asset44 from "../assets/asset_44-removebg-preview.png";
import { NavLink,Outlet } from "react-router-dom";

const IceCreamCard = () => {
  return (
    <div className="flex flex-wrap gap-5 m-16">
      {/* 1st card */}
      <div className="bg-[#dff6e8] mb-20 p-6 text-center max-w-xs mx-auto shadow-2xl rounded-xl hover:scale-105 duration-300">
        <div
          className="w-44 h-44 border mx-auto rounded-full mb-4 font-Kalnia"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset41}
            alt="Matcha Ice Cream"
            className="w-full h-full hover:scale-150 duration-700"
          />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">Matcha</h3>
        <p className="cardt text-gray-700 mb-4">
          Matcha Ice Cream Needs The Absolute Balance Between Sweetness, Fatness
          And Bitterness That Is Very...
        </p>
        <div className="flex justify-center">
        <NavLink to="/shop"> 
          <button className=" bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight/>
          </button>
          </NavLink>
        </div>
      </div>

      {/* 2nd card */}
      <div className="bg-[#ffe4e9] mt-20 p-6 text-center max-w-xs mx-auto shadow-2xl rounded-xl hover:scale-105 duration-300">
        <div
          className="w-44 h-44 border   mx-auto rounded-full mb-4 font-Kalnia"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset42}
            alt="Matcha Ice Cream"
            className="w-full h-full hover:scale-150 duration-700"
          />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">Strawberry</h3>
        <p className="cardt text-gray-700 mb-4">
          The main ingredient is pureed fresh strawberries, so it's not the same
          as other strawberry-flavored milk...
        </p>
        <div className="flex justify-center">
        <NavLink to="/shop"> 
        <button className=" bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
           <FaArrowRight/>
          </button>
          </NavLink>
        </div>
      </div>

      {/* 3rd card */}
      <div className="bg-[#f4eac9] mb-20 p-6 text-center max-w-xs mx-auto  shadow-2xl rounded-xl hover:scale-105 duration-300">
        <div
          className="w-44 h-44 border   mx-auto rounded-full overflow-hidden hover:overflow-visible mb-4 font-Kalnia z-20"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset43}
            alt="Matcha Ice Cream"
            className="w-full h-full hover:scale-125 duration-700"
          />
        </div>
        <h3 className="font-heading text-2xl  font-bold mb-2">Orange</h3>
        <p className="cardt text-gray-700 mb-4">
          The ice cream has the sweet taste of honey and the scent of orange
          combined with the fatty milk that is...
        </p>
        <div className="flex justify-center">
        <NavLink to="/shop"> 
        <button className=" bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
           <FaArrowRight/>
          </button>
          </NavLink>
        </div>
      </div>

      {/* 4th card */}
      <div className="bg-[#ead6c0] mt-20 p-6 text-center max-w-xs mx-auto  shadow-2xl rounded-xl hover:scale-105 duration-300 ">
        <div
          className="w-44 h-44 border mx-auto rounded-full mb-4 font-Kalnia z-20 "
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset44}
            alt="Matcha Ice Cream"
            className="w-full h-full hover:scale-150 duration-700 "
          />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">Chocolate</h3>
        <p className="cardt text-gray-700 mb-4">  
          Each piece of melted chocolate blends with fresh milk and rich, thick
          butter to create surprisingly...
        </p>
        <div className="flex justify-center">
        <NavLink to="/shop">
        <button className=" bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight/> 
          </button>   
          </NavLink>                        
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default IceCreamCard;
