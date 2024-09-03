// import React from 'react'
// import BlogCardComponent from '../Components/BlogCardComponent'
// import bgImg from '../assets/asset 50.jpeg'
// import img1 from '../assets/asset 1.jpeg'
// import img2 from '../assets/asset 2.jpeg'
// import img3 from '../assets/asset 3.jpeg'
// import HomeFooter from '../Components/Footer2'
// import ScrollToTopButton from '../Components/TopButton'

// const BlogCard = (props) => {
//   return (
//     <>
//     <section className='w-full h-auto flex justify-center items-center'>
//       <img className='w-full h-full' src={bgImg} alt="not found" /> 
//       <div className='absolute flex-col justify-center items-center z-10 mt-28'>
//         <p className='tips-text text-[2.75rem] font-bold'>Business Tips</p>
//         <p className='text-[15px] ml-24'>Home / <span className='text-red-600'>Business Tips</span></p>
//       </div>
//     </section><br />
//     <div className='w-full flex justify-center gap-4 flex-wrap py-16'>
//        <BlogCardComponent img= {img1} text = "Top Ice Cream Flavors To Sell This Years"/>    
//        <BlogCardComponent img= {img2} text = "The Art Of Crafting Gourment Ice Cream"/>    
//        <BlogCardComponent img= {img3} text = "Ice Cream Treand That Drive More Sales"/>    
//        {/* <BlogCardComponent img= {img3} text = "Ice Cream Treand That Drive More Sales"/>      */}
//     </div><br/><br/>
//     {/* <HomeFooter/> */}
//     <ScrollToTopButton/>
//     </>

//   )
// }

// export default BlogCard

import React from 'react';
import BlogCardComponent from '../Components/BlogCardComponent';
import bgImg from '../assets/asset 50.jpeg';
import img1 from '../assets/asset 1.jpeg';
import img2 from '../assets/asset 2.jpeg';
import img3 from '../assets/asset 3.jpeg';
import HomeFooter from '../Components/Footer2';
import ScrollToTopButton from '../Components/TopButton';

const BlogCard = () => {
  return (
    <>
      <section className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] flex justify-center items-center'>
        <img className='w-full h-full object-cover' src={bgImg} alt="Background" />
        <div className='absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center z-10 text-center px-4'>
          <p className='tips-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>Business Tips</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
            Home / <span className='text-red-600'>Business Tips</span>
          </p>
        </div>
      </section>

      <div className='w-full flex justify-center gap-4 flex-wrap py-8 sm:py-12 md:py-16 lg:py-20 px-4'>
        <BlogCardComponent img={img1} text="Top Ice Cream Flavors To Sell This Year" />
        <BlogCardComponent img={img2} text="The Art Of Crafting Gourmet Ice Cream" />
        <BlogCardComponent img={img3} text="Ice Cream Trends That Drive More Sales" />
      </div>

      <HomeFooter />
      <ScrollToTopButton />
    </>
  );
};

export default BlogCard;
