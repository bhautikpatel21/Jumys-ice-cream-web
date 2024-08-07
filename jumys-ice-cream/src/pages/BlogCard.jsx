import React from 'react'
import BlogCardComponent from '../Components/BlogCardComponent'
import bgImg from '../assets/asset 50.jpeg'
import img1 from '../assets/asset 1.jpeg'
import img2 from '../assets/asset 2.jpeg'
import img3 from '../assets/asset 3.jpeg'

const BlogCard = (props) => {
  return (
    <>
    <section className='w-full h-auto flex justify-center items-center object-cover'>
      <img className='w-full h-full' src={bgImg} alt="not found" /> 
      <div className='absolute flex-col justify-center items-center z-10 mt-28'>
        <p className='tips-text text-[45px] font-bold'>Business Tips</p>
        <p className='text-[15px] ml-14'>Home / <span className='text-red-600'>Business Tips</span></p>
      </div>
    </section><br />
    <div className='w-full flex justify-center gap-4 flex-wrap'>
       <BlogCardComponent img= {img1} text = "Top Ice Cream Flavors To Sell This Years"/>    
       <BlogCardComponent img= {img2} text = "The Art Of Crafting Gourment Ice Cream"/>    
       <BlogCardComponent img= {img3} text = "Ice Cream Treand That Drive More Sales"/>    
       {/* <BlogCardComponent img= {img3} text = "Ice Cream Treand That Drive More Sales"/>      */}
    </div><br /><br />
    </>

  )
}

export default BlogCard