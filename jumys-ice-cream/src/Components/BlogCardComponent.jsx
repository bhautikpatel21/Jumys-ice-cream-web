import React from 'react'

const BlogCardComponent = (props) => {
  return (
    <>
      <div className='w-1/4 h-[337px] overflow-hidden' id='blog-image'>
      <div className='absolute w-36 rounded-3xl mt-5  ml-4 h-10 bg-white z-10 flex justify-center items-center hover:bg-red-600 hover:duration-500 hover:text-white'><a href="">Business Tips </a></div>
      <img className='w-full h-[337px]' src={props.img} alt="not found" />
      <div className='slide-top w-full h-[400px] drop-shadow-2xl px-9 -mt-[300px] pt-12 relative bottom-10 ' id='shadow-effect'>
        <p className='text-white text-[20px] pt-14 mt-[130px]'>June 20,2024</p>
        <p className='text-white text-[30px] font-bold' id='blog-card1-text'>{props.text}</p>
        <button className='bg-black text-white w-32 h-11 rounded-full hover:bg-red-600 duration-200'>Read More</button>
      </div>
      </div>
    </>
  )
}

export default BlogCardComponent