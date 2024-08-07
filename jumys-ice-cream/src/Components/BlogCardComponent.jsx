import React from 'react'
import img1 from '../assets/asset 1.jpeg'
import img2 from '../assets/asset 2.jpeg'
import img3 from '../assets/asset 3.jpeg'
import img4 from '../assets/blogDiv.png'

const BlogCardComponent = () => {
  return (
    <>
    <div className='w-full h-[420px]overflow-hidden'>
      <div className='w-1/4 h-[350px] bg-black pb-3'>
      <div className='absolute w-36 rounded-3xl mt-5  ml-4 h-10 bg-white flex justify-center items-center hover:bg-red-600 hover:duration-500 hover:text-white'>Business Tips</div>
      <img className='w-full h-[350px]' src={img1} alt="not found" />
      <div className='slide-top w-full px-9 -mt-[150px] relative bottom-10'>
        <p className='text-white text-[20px]'>June 20,2024</p>
        <p className='text-white text-[35px]' id='blog-card1-text'>Top Ice Cream Flavors To Sell This Years</p>
        <button className='bg-black text-white w-28 h-9 rounded-full mt-3'>Read More</button>
      </div>
      <div className='w-1/4 h-16 bg-red-500 -mt-[145px] absolute'>
      <img src={img4} alt="" />
      </div>
      </div>
    </div>
    </>
  )
}

export default BlogCardComponent