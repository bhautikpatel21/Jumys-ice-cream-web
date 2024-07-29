import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { FaAngleDown, FaBars,FaGripVertical, FaHeart, FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import { useState } from 'react';


const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const HomeMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
          <li>Home 1</li>
          <li>Home 2</li>
          <li>Home 3</li>
          <li>Home 4</li>
          <li>Home 5</li>
          <li>Home 6</li>
          <li>Home 7</li>
          <li>Home 8</li>
        </ul>
      </div>
    )
  }
  
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
    <div className='w-full h-28 flex gap-2 justify-around bg-white ' id='layout'>
      <div className='w-11 h-full flex justify-center items-center text-[30px]' id='menuBar'>
        <FaBars/>
      </div>

      <div className='w-64 h-full' id='logo'>
        <img className='w-[60%] py-3' src={logo} alt="not found" />
      </div>

      <div className='w-[600px] h-full flex items-center justify-around font-semibold' id='pages'>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a className='flex' id='underline-animate' href="">Home<FaAngleDown className='mt-[5px] ml-1'/></a>
        {/* {HomeMenu()} */}
        {dropdownVisible && HomeMenu()}
        </div>

        <a className='flex' id='underline-animate' href="">Shop<FaAngleDown className='mt-[5px] ml-1'/></a>
        <a className='flex' id='underline-animate' href="">Products<FaAngleDown className='mt-[5px] ml-1'/></a>
        <a className='flex' id='underline-animate' href="">Blog<FaAngleDown className='mt-[5px] ml-1'/></a>
        <a className='flex' id='underline-animate' href="">Page<FaAngleDown className='mt-[5px] ml-1'/></a>
        
      </div>
      <div className='w-[190px] h-full flex justify-around items-center text-[22px]' id='icons'>
        <a className='icon1' href=""><FaSearch/></a>
        <a className='icon2' href=""><FaUser/></a>
        <a className='icon3' href=""><FaHeart/></a>
        <a className='icon4' href=""><FaShoppingBasket/></a>
      </div>
    </div>
    <div className='w-full h-[80px] fixed bottom-0 flex justify-around bg-white' id='header-footer'>
      <a className='w-24 h-full flex flex-col justify-center items-center'><FaGripVertical className='text-[30px]'/><p>Shop</p></a>
      <a className='w-24 h-full flex flex-col justify-center items-center'><FaUser className='text-[30px]'/><p>Account</p></a>
      <a className='w-24 h-full flex flex-col justify-center items-center'><FaSearch className='text-[30px]'/><p>Search</p></a>
      <a className='w-24 h-full flex flex-col justify-center items-center'><FaHeart className='text-[30px]'/><p>Wishlist</p></a>
    </div>
    </>
  )
}

export default Navbar
