import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import HomeFooter from '../Components/Footer2';
// import './CartPage.css'; // Assuming you add styles in a separate CSS file

const CartPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component is mounted
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Delay to allow for the transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`min-h-[500px] flex flex-col justify-center items-center px-4 py-8 ${isPageLoaded ? 'fade-in' : ''}`}>
        {/* Title */}
        <h1 className='text-2xl md:text-4xl font-semibold text-center'>
          Your Cart Is Currently Empty
        </h1>
        <br />
        {/* Button */}
        <button className='flex items-center bg-black text-white px-5 py-3 md:px-7 md:py-4 gap-3 rounded-full hover:bg-red-600 hover:duration-500'>
          <FaArrowLeft className='mt-1' />
          <span className="text-sm md:text-base">Return To Shop</span>
        </button>
      </div>
      <HomeFooter />
    </>
  );
};

export default CartPage;