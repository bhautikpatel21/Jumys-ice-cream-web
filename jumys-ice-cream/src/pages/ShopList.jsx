import React, { useState, useEffect } from 'react';
import { Pagination, Stack, Button } from '@mui/material';
import FilterComponent from "../Components/FilterComponent";
import ProductCardList from "../Components/ProductCardList";
import Footer from "../Components/Footer";
import ShopProduct from '../Components/ShopProduct';
import ScrollToTopButton from "../Components/TopButton";

const ShopList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [minPrice, setMinPrice] = useState(9);
  const [maxPrice, setMaxPrice] = useState(45); 
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
    // Trigger the animation by setting the state to true when the component mounts
    setIsPageLoaded(true);
  }, []);

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const toggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  return (
    <div className={isPageLoaded ? 'fade-in-animation' : ''}>
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

        {/* Filter Section */}
        <div className={`md:w-1/3 ${showFilter ? 'block' : 'hidden'} md:block mb-4 mt-12 md:mb-0`}>
          <FilterComponent
            onColorSelect={setSelectedColor}
            onPriceChange={handlePriceChange}
            onSizeSelect={setSelectedSize}
            onProductSelect={setSelectedProductId}
          />
        </div>

        {/* Product List Section */}
        <div className="md:w-2/3">
          <ShopProduct
            selectedColor={selectedColor}
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedSize={selectedSize}
            selectedProductId={selectedProductId}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopList;
