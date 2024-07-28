import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className='w-full h-28 flex gap-2 justify-between'>

      <div className='w-64 h-full'>
        <img className='w-[60%] py-3' src={logo} alt="not found" />
      </div>

      <div className='w-[600px] h-full flex items-center justify-around font-semibold' id='divvvv'>
        <a id='underline-animate' href="">Home</a>
        <a id='underline-animate' href="">Shop</a>
        <a id='underline-animate' href="">Products</a>
        <a id='underline-animate' href="">Blog</a>
        <a id='underline-animate' href="">Page</a>
      </div>
      <div className='w-64 h-full bg-yellow-200'></div>
    </div>
    </>
  )
}

export default Navbar
