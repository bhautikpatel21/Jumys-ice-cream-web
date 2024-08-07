import React from 'react'

const BlogCardComponent = (props) => {
  return (
    <>
      <div className='w-1/4 h-[400px] pb-3 overflow-hidden'>
      <div className='absolute w-36 rounded-3xl mt-5  ml-4 h-10 bg-white flex justify-center items-center hover:bg-red-600 hover:duration-500 hover:text-white'><a href="">Business Tips </a></div>
      <img className='w-full h-[350px]' src={props.img} alt="not found" />
      <div className='slide-top w-full drop-shadow-2xl px-9 -mt-[150px] relative bottom-10'>
        <p className='text-white text-[20px] -mt-4'>June 20,2024</p>
        <p className='text-white text-[35px] font-bold' id='blog-card1-text'>{props.text}</p>
        <button className='bg-black text-white w-32 h-11 rounded-full'>Read More</button>
      </div>
      </div>
    </>
  )
}

export default BlogCardComponent