import React from 'react';

const BlogCardComponent = (props) => {
  return (
    <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
      <div className='relative overflow-hidden rounded-lg shadow-lg'>
        <img className='w-full h-auto object-cover' src={props.img} alt="Blog" />
        <div className='absolute top-5 left-4 bg-white rounded-full py-1 px-4 text-center z-10 transition-colors duration-300 hover:bg-red-600 hover:text-white'>
          <a href="#" className='text-sm font-semibold'>Business Tips</a>
        </div>
        <div className=' absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white py-4 px-6'>
          <p className='text-xs md:text-sm'>June 20, 2024</p>
          <p className='text-xl md:text-2xl font-bold mt-2' id='blog-card1-text'>{props.text}</p>
          <button className='mt-4 bg-black text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCardComponent;
