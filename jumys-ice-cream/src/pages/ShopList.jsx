import React, { useState, useEffect } from 'react';
import { Pagination, Stack, Button } from '@mui/material';
import FilterComponent from "../Components/FilterComponent";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false); 
      setIsPageLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const toggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className={isPageLoaded ? 'fade-in-animation slide-in' : ''}>
          <ScrollToTopButton />
          <div className="relative w-full h-[400px] object-cover" id="shopbg">
            <div className="absolute inset-0 flex items-center justify-center bounce-in">
              <div className="flex flex-col text-center items-center justify-center text-white mt-28">
                <h1 className="text-4xl font-bold text-black" id='manufacture'>Shop List</h1>
                <p className="mt-2">
                  <a href="#" className="text-[#000] hover:text-[#ff0000]">Home</a>
                  <span className="text-black mx-3">/</span>
                  <span className="text-red-500">Shop List</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-4">
            <div className="md:hidden mb-4 scale-up">
              <Button variant="outlined" onClick={toggleFilter}>
                {showFilter ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            <div className={`md:w-1/3 ${showFilter ? 'block' : 'hidden'} md:block mb-4 mt-12 md:mb-0 scale-up`}>
              <FilterComponent
                onColorSelect={setSelectedColor}
                onPriceChange={handlePriceChange}
                onSizeSelect={setSelectedSize}
                onProductSelect={setSelectedProductId}
              />
            </div>

            <div className="md:w-2/3 scale-up">
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
      )}
    </div>
  );
};

export default ShopList;
