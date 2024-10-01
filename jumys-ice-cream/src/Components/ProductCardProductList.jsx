// import React, { useState } from "react";
// import { FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";
// import assets66 from "../assets/asset66.webp";
// import assets67 from "../assets/asset67.webp";
// import { Heart } from "lucide-react";

// const ProductCardProductList = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="flex flex-col md:flex-row w-full p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-4">
//       {/* Product Image */}
//       <div
//         className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img
//           src={isHovered ? assets66 : assets67}
//           alt="Product"
//           className="w-full h-full object-cover transition duration-300"
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition duration-300">
//           <FaSearch className="text-white text-3xl" />
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col justify-between w-full">
//         {/* Product Title, Rating, and Price */}
//         <div>
//           <h2 className="text-2xl font-bold text-[#000] hover:text-[#ff0000] duration-500 cursor-pointer">
//             Banana Cream Pudding
//           </h2>
//           <div className="flex items-center mt-2">
//             <span className="text-red-500">★★★★★</span>
//             <span className="ml-2 text-gray-600">1 Review</span>
//           </div>
//           <div className="text-2xl font-bold mt-2">$12.00</div>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center mt-4 space-x-4">
//           <button className="bg-[#000] hover:bg-[#ff0000] duration-500 text-white py-2 px-4 rounded-full flex items-center">
//             <FaShoppingCart className="mr-2" /> Add To Cart
//           </button>
//           <div className="w-10 h-10 flex border border-gray-400 bg-white hover:bg-[#ff0000] items-center justify-center rounded-full text-[#ff0000] cursor-pointer hover:text-white transition duration-500">
//             <Heart />
//           </div>
//           <div className="w-10 h-10 flex border border-gray-400 bg-white hover:bg-[#ff0000] items-center justify-center rounded-full text-[#000] cursor-pointer hover:text-white transition duration-500">
//             <FaExchangeAlt />
//           </div>
//         </div>

//         {/* Product Description */}
//         <p className="mt-4 text-gray-600">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCardProductList;



//|||||||||||||||||||||||||||||||| THIS IS UPDATED COMPONENT TO ADD LIST RENDERING, FILTERING,SHOW ANIMATION WITH PRICE CONTROLL ||||||||||||||||||||||||||||||||||||||||


import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";
import img1A from "../assets/asset66.webp";
import img1B from "../assets/asset67.webp";
import img2A from "../assets/asset 34.webp";
import img2B from "../assets/asset 35.jpeg";
import img3A from "../assets/asset 68.webp";
import img3B from "../assets/asset 69.webp";
import img4A from "../assets/asset 70.webp";
import img4B from "../assets/asset 71.webp";
import img5A from "../assets/asset 72.webp";
import img5B from "../assets/asset 73.webp";
import img6A from "../assets/asset 74.webp";
import img6B from "../assets/asset 75.webp";
import img7A from "../assets/asset 76.webp";
import img7B from "../assets/asset 77.webp";
import img8A from "../assets/asset 78.webp";
import img8B from "../assets/asset 79.webp";
import img9A from "../assets/asset 80.webp";
import img9B from "../assets/asset 81.webp";
import img10A from "../assets/asset 82.webp";
import img10B from "../assets/asset 83.jpeg";
import img11A from "../assets/asset 84.webp";
import img11B from "../assets/asset 85.webp";
import img12A from "../assets/asset 86.webp";
import img12B from "../assets/asset 87.webp";
import { Heart } from "lucide-react";

const ProductCardProductList = () => {

  const [isHovered, setIsHovered] = useState(false);

  const [data, setData] = useState([]);

  console.log("Ice-cream data",data);

  const Product = [
    {
      name : "Banana Cream Pudding",
      rev : "1 Review",
      price : "$12.00",
      img1 : img1A,
      img2 : img1B
    },
    {
      name : "Blackout Chocolate Cake",
      rev : "2 Review",
      price : "$12.00",
      img1 : img2A,
      img2 : img2B
    },
    {
      name : "Brambleberry Crisp",
      rev : "1 Review",
      price : "$10.00",
      img1 : img3A,
      img2 : img3B
    },
    {
      name : "Brown Sugar Cinnamon",
      rev : "0 Review",
      price : "$15.00",
      img1 : img4A,
      img2 : img4B
    },
    {
      name : "Burnt Orange Dreamsicle",
      rev : "0 Review",
      price : "$12.00",
      img1 : img5A,
      img2 : img5B
    },
    {
      name : "Chocolate mud",
      rev : "0 Review",
      price : "$15.00",
      img1 : img6A,
      img2 : img6B
    },
    {
      name : "Cold Brew with Coconut Cream",
      rev : "0 Review",
      price : "$12.00",
      img1 : img7A,
      img2 : img7B
    },
    {
      name : "Cookies in Cream",
      rev : "0 Review",
      price : "$13.00",
      img1 : img8A,
      img2 : img8B
    },
    {
      name : "Creatm puff",
      rev : "1 Review",
      price : "$11.00",
      img1 : img9A,
      img2 : img9B
    },
    {
      name : "Darkest Chocolate",
      rev : "0 Review",
      price : "$13.00",
      img1 : img10A,
      img2 : img10B
    },
    {
      name : "Double Dough",
      rev : "0 Review",
      price : "$10.00",
      img1 : img11A,
      img2 : img11B
    },
    {
      name : "Frosé Sorbet",
      rev : "1 Review",
      price : "$12.00",
      img1 : img12A,
      img2 : img12B
    },
  ]

  useEffect(() => {
    setData(Product);
  })

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col md:flex-row w-full p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-4">
      {/* Product Image */}
      
      <div
        className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? img1A : img1B}
          alt="Product"
          className="w-full h-full object-cover transition duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition duration-300">
          <FaSearch className="text-white text-3xl" />
        </div>
      </div>

      <div className="flex flex-col justify-between w-full">
       
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

       
        <div className="flex items-center mt-4 space-x-4">
          <button className="bg-[#000] hover:bg-[#ff0000] duration-500 text-white py-2 px-4 rounded-full flex items-center">
            <FaShoppingCart className="mr-2" /> Add To Cart
          </button>
          <div className="w-10 h-10 flex border border-gray-400 bg-white hover:bg-[#ff0000] items-center justify-center rounded-full text-[#ff0000] cursor-pointer hover:text-white transition duration-500">
            <Heart />
          </div>
          <div className="w-10 h-10 flex border border-gray-400 bg-white hover:bg-[#ff0000] items-center justify-center rounded-full text-[#000] cursor-pointer hover:text-white transition duration-500">
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

