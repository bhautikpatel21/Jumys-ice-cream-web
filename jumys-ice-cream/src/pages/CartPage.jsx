import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import HomeFooter from '../Components/Footer2';
import ScrollToTopButton from '../Components/TopButton';
import Home from '../pages/Home';
import { NavLink,Outlet } from 'react-router-dom';

const CartPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`min-h-[500px] flex flex-col justify-center items-center px-4 py-8 ${isPageLoaded ? 'fade-in' : ''}`}>
        <h1 className='text-2xl md:text-4xl font-semibold text-center'>
          Your Cart Is Currently Empty
        </h1>
        <br />
        <NavLink to="/">
        <button className='flex items-center bg-black text-white px-5 py-3 md:px-7 md:py-4 gap-3 rounded-full hover:bg-red-600 hover:duration-500'>
          <FaArrowLeft className='mt-1' />
          <span className="text-sm md:text-base">BACK TO HOME PAGE</span>
        </button>
        </NavLink>
      </div>
      <HomeFooter />
      <ScrollToTopButton/>
    </>
  );
};

export default CartPage;