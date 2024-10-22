import React, { useEffect, useState } from 'react';
import HomeFooter from '../Components/Footer2';
import { NavLink,Outlet } from 'react-router-dom';
import ScrollToTopButton from '../Components/TopButton';

function Error404() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`w-full h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 ${isPageLoaded ? 'fade-in' : ''}`}>
        <h1 className='text-8xl md:text-0xl lg:text-[250px] font-semibold mb-4 md:mb-8 lg:mb-12'>
          404
        </h1>
        <p className='text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8'>
          Oops! That page can't be found.
        </p>
        <div className='w-32 md:w-48 lg:w-64 h-[1px] bg-gray-600 mb-4 md:mb-6 lg:mb-8'></div>
        <p className='text-gray-500 text-lg md:text-xl lg:text-2xl mb-2 md:mb-4'>
          We're really sorry but we can't seem to
        </p>
        <p className='text-gray-500 text-lg md:text-xl lg:text-2xl mb-6'>
          find the page you were looking for.
        </p>
        <NavLink to="/">
        <button className='w-48 md:w-60 lg:w-64 rounded-full h-12 md:h-14 lg:h-16 text-base md:text-lg lg:text-xl bg-black text-white hover:bg-red-600 transition duration-300'>
          Back To HomePage
        </button>
        </NavLink>
      </div>
      <HomeFooter />
      <ScrollToTopButton/>
    </>
  );
}

export default Error404;
