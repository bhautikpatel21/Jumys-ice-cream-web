import React, { useState } from "react";
import {
  FaShoppingCart,
  FaExchangeAlt,
  FaSearch,
} from "react-icons/fa";
import assets66 from "../assets/asset66.webp";
import assets67 from "../assets/asset67.webp";
import { Heart } from "lucide-react";

const ProductCardProductList = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-row w-full  p-4 rounded-lg ">
      <div
        className="relative w-full md:w-1/2 h-64 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? assets66 : assets67}
          alt="Product"
          className="w-64 h-64 object-cover transition duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition duration-300">
          <FaSearch className="text-white text-3xl" />
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold text-[#000] hover:text-[#ff0000] duration-500 cursor-pointer">
            Banana Cream Pudding
          </h2>
          <div className="flex items-center mt-2">
            <span className="text-red-500">★★★★★</span>
            <span className="ml-2 text-gray-600">1 Review</span>
          </div>
          <div className="text-2xl font-bold mt-2">$12.00</div>
        </div>
        <div className="flex items-center mt-4">
          <button className="bg-[#000] hover:bg-[#ff0000] duration-500 text-white py-2 px-4 rounded-full flex items-center">
            <FaShoppingCart className="mr-2" /> Add To Cart
          </button>
          <div className="w-10 h-10 flex border border-t-gray-400  bg-[#fff] hover:bg-[#ff0000]  items-center text-center justify-center rounded-full ml-4 text-xl text-[#ff0000] cursor-pointer hover:text-[#fff] transition duration-500">
            <Heart />
          </div>
          <div className="w-10 h-10 flex border border-t-gray-400  bg-[#fff] hover:bg-[#ff0000]  items-center text-center justify-center rounded-full ml-4 text-xl text-[#000] cursor-pointer hover:text-[#fff] transition duration-500">
            <FaExchangeAlt />
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default ProductCardProductList;