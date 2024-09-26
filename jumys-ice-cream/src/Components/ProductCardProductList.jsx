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

import React from 'react';
import { Pagination, Stack } from '@mui/material';
import FilterComponent from "../Components/FilterComponent";
import ProductCardProductList from "../Components/ProductCardProductList";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/TopButton";

const ShopList = () => {
  return (
    <div className="">
      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Page Header */}
      <div className="relative w-full h-[400px]" id="shopbg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center text-white mt-28">
            <h1 className="text-4xl font-bold text-black">Shop List</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">Home</a>
              <span className="text-black mx-3">/</span>
              <span className="text-red-500">Shop List</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full px-4 py-8 space-y-8 md:space-y-0 md:space-x-8">
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <FilterComponent />
        </div>

        {/* Product List */}
        <div className="w-full md:w-3/4">
          <ProductCardProductList />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex my-5 justify-center">
        <Stack spacing={2}>
          <Pagination count={3} variant="outlined" color="primary" className="custom-pagination" />
        </Stack>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopList;
