import React from 'react';
import HomeFooter from '../Components/Footer2';

function Error404() {
  return (
    <>
    <div className='w-full h-lvh flex flex-col justify-center items-center '>
        <h1 className='text-[300px] font-semibold -mb-11 -mt-24'>404</h1>
        <p className='text-[50px] mb-5'>Oops! That page can't be found.</p>
        <div className='w-64 h-[1px] bg-gray-600'></div> <br />
        <p className='text-gray-500 text-[25px]'>We're really sorry but we can't seem to </p>
        <p className='text-gray-500 text-[25px]'>find the page you were looking for.</p><br />
        <button className='w-60 rounded-full h-16 text-[20px] bg-black text-white hover:bg-red-600 duration-300'>Back The HomePage</button>
    </div>
    <HomeFooter/>
    </>
  );
}

export default Error404;