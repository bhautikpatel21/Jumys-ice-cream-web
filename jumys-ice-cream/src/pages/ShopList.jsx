
import React, { useState } from 'react';
import { Pagination, Stack, Button } from '@mui/material';
import FilterComponent from "../Components/FilterComponent";
import ProductCardList from "../Components/ProductCardList";
import Footer from "../Components/Footer";
import ShopProduct from '../Components/ShopProduct';
import ScrollToTopButton from "../Components/TopButton";

const ShopList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const toggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  return (
    <div>
      <ScrollToTopButton />
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

      <div className="flex flex-col md:flex-row p-4">
        {/* Toggle Button for Filter on Small Screens */}
        <div className="md:hidden mb-4">
          <Button variant="outlined" onClick={toggleFilter}>
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Information */}
        <div className={`md:w-1/3 ${showFilter ? 'block' : 'hidden'} md:block mb-4 mt-12 md:mb-0`}>
        <FilterComponent onColorSelect={setSelectedColor} />
        </div>

        {/* Product List */}
        <div className="md:w-2/3">
          {/* <ProductCardList/> */}
          <ShopProduct selectedColor={selectedColor} />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopList;
