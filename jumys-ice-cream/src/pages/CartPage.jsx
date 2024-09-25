import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import HomeFooter from '../Components/Footer2';

const CartPage = () => {
  return (
    <>
      <div className='min-h-[500px] flex flex-col justify-center items-center px-4 py-8'>
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
      <HomeFooter/>
    </>
  );
};

export default CartPage;
