// import React from 'react'
// import slider1_img from '../assets/asset 5.png'
// import img_plant from '../assets/asset 38.png'
// import spin from '../assets/asset 4.svg'

// const HomeSlider1 = () => {
//   return (
//   <>
//   <div className='w-full h-[800px] flex justify-center items-center gap-11 m-auto' id='slider'>

//         <div className='w-[500px] h-[350px] mt-20'>
//             <h4 className='text-[1.1rem] font-semibold'>ICE CREAM SMILES</h4>
//             <h1 id='Nav-text'>Frosty Delights: Treat Yourself To Creamy</h1><br />
//             <button className='home-bt-shop duration-200'>Shop Now</button>
//             <button className='home-bt2-shop duration-200'>See more</button>
//         </div>

//         <div className='w-[450px] h-full flex items-end'>
//             {/* <div className="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center  -ml-14 ">
//                 <img className='spin_of' src={spin} alt="" />
//                 <h1 id='spin-text'>Get 30% <br />off</h1>
//             </div> */}
//             <div className='w-full h-[85%]'>
//             <img className='w-full h-full'  src={slider1_img} alt="not found" />
//             </div>
//         </div>

//         {/* <div className='w-[300px] h-[620px] overflow-hidden -mr-48'>
//             <div className='flip-vertical-right' id='good-root'></div>
//             <img className='mt-80 ml-44' src={img_plant} alt="not found" />
//         </div> */}

//     </div><br/><br/>
//   </>
//   )
// }

// export default HomeSlider1

import React from 'react';
import slider1_img from '../assets/asset 5.png';
import img_plant from '../assets/asset 38.png';
import spin from '../assets/asset 4.svg';

const HomeSlider1 = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-4 md:p-8' id='slider'>
      {/* Content Section */}
      <div className='flex-1 max-w-lg'>
        <h4 className='text-lg md:text-xl font-semibold'>ICE CREAM SMILES</h4>
        <h1 className='text-xl md:text-3xl font-bold mt-2 md:mt-4' id='Nav-text'>
          Frosty Delights: Treat Yourself To Creamy
        </h1>
        <div className='mt-4 flex flex-col md:flex-row gap-4'>
          <button className='home-bt-shop duration-200 px-8 py-3 text-base md:text-lg'>Shop Now</button>
          <button className='home-bt2-shop duration-200 px-8 py-3 text-base md:text-lg'>See more</button>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex-1 max-w-xs md:max-w-sm'>
        <img className='w-full h-auto object-cover' src={slider1_img} alt="Ice Cream" />
      </div>

    
    </div>
  );
};

export default HomeSlider1;
