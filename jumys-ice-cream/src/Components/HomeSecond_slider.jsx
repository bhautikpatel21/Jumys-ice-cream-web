import React from 'react';
import img1 from '../assets/asset 36.png';
import img2 from '../assets/asset 37.png';
import img3 from '../assets/asset 59.svg';
import img4 from '../assets/asset 60.svg';
import img5 from '../assets/asset 61.svg';
import img6 from '../assets/asset 40.png';
import img7 from '../assets/asset 38.png';
import img8 from '../assets/asset 39.png';
import { FaArrowRight } from 'react-icons/fa';

const HomeSecond_slider = () => {
  return (
    <div className='w-full overflow-hidden h-auto flex flex-col lg:flex-row' id='Home-slider-main-com'>

    <div className='hidden lg:block home-slider2-1 h-full w-auto pt-52 -mt-20'>
        <img src={img1} alt="not found" className='w-[400px] -ml-32' />
        <img src={img2} alt="not found" className='w-[100px]'/>
    </div>   

      <div className='flex-1 lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:px-8 py-8 lg:-ml-16'>
        <h1 className='slider-font text-2xl lg:text-6xl font-bold mb-4'>Make Every Day a Sweet Day</h1>
        <p className='text-gray-500 mb-6'>But incorporating liquor into ice cream seems like nothing when you consider how inventive…</p>

        <div className='flex items-center justify-center lg:justify-start mb-4'>
          <img src={img3} alt="not found" className='mr-3' />
          <span>Guaranteed frozen delivery</span>
        </div>

        <div className='flex items-center justify-center lg:justify-start mb-4'>
          <img src={img4} alt="not found" className='mr-3' />
          <span>Guaranteed frozen delivery</span>
        </div>

        <div className='flex items-center justify-center lg:justify-start'>
          <img src={img5} alt="not found" className='mr-3' />
          <span>Guaranteed frozen delivery</span>
        </div>

        <button className='mt-6 w-full max-w-xs h-10 bg-white flex items-center justify-center rounded-full border border-gray-300' id='home-slider-button'>
          View More <FaArrowRight className='ml-2'/>
        </button>
      </div>

      <div className='hidden lg:flex flex-1 lg:w-1/4 items-center justify-center px-4 lg:px-8 py-8 lg:py-24'>
        <img src={img6} alt="not found" className='w-full' />
      </div>

      <div className='hidden lg:flex flex-col items-end justify-evenly w-96 px-4 lg:px-8 py-8 lg:py-24 -mr-48'>
        <img src={img7} alt="not found" className='w-full mb-4' />
        <img src={img8} alt="not found" className='w-full' />
      </div>

    </div>
  );
};

export default HomeSecond_slider;
