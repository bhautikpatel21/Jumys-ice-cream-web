import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { FaAngleDown, FaBars,FaGripVertical, FaHeart, FaSearch, FaShoppingBasket, FaUser, } from "react-icons/fa";
import { useState } from 'react';


const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [shopdownVisible, setShopdownVisible] = useState(false);

  const [productdownVisible, setProductdownVisible] = useState(false);

  const [blogdownVisible, setBlogdownVisible] = useState(false);

  const [pagedownVisible, setPagedownVisible] = useState(false);

  const HomeMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
        <a className='flex -mt-[10px]' id='underline-animate' href="">Home<FaAngleDown className='mt-[5px] ml-1'/></a>
        <div className='bg-white mt-3  text-gray-400 shadow-lg' id='child-menu'>
          <a href=""><li>Home 1</li></a>
          <a href=""><li>Home 2</li></a>
          <a href=""><li>Home 3</li></a>
          <a href=""><li>Home 4</li></a>
          <a href=""><li>Home 5</li></a>
          <a href=""><li>Home 6</li></a>
          <a href=""><li>Home 7</li></a>
          <a href=""><li>Home 8</li></a>
        </div>
        </ul>
      </div>
    )
  }

  const ShopMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
        <a className='flex -mt-[106px]  ' id='underline-animate' href="">Shop<FaAngleDown className='mt-[5px] ml-1'/></a>
        <div className='bg-white mt-3 text-gray-400 shadow-lg' id='child-menu'>
          <a href=""><li>Shop </li></a>
          <a href=""><li>Login</li></a>
          <a href=""><li>Cart</li></a>
          <a href=""><li>Wishlist</li></a>
        </div>
        </ul>
      </div>
    )
  }

  const ProductMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
        <a className='flex -mt-[119px] ' id='underline-animate' href="">Products<FaAngleDown className='mt-[5px] ml-1'/></a>
        <div className='bg-white mt-3 text-gray-400 shadow-lg' id='child-menu'>
          <a className='text-black' href=""><li className='mb-3'>Products</li></a>
          <a  href=""><li>Simpler <br/>products</li></a>
        </div>
        </ul>
      </div>
    )
  }

  const BlogMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
        <a className='flex -mt-[147px]' id='underline-animate' href="">Blog<FaAngleDown className='mt-[5px] ml-1'/></a>
        <div className='bg-white mt-3 text-gray-400 shadow-lg' id='child-menu'>
          <a href=""><li className='mb-2'>Blog</li></a>
          <a href=""><li>Blog Card</li></a>
        </div>
        </ul>
      </div>
    )
  }

  const PageMenu = () => {
    return(
      <div className="dropdown-menu">
        <ul>
        <a className='flex -mt-[83px]' id='underline-animate' href="">Page<FaAngleDown className='mt-[5px] ml-1'/></a>
        <div className=' mt-3 text-gray-400 shadow-lg bg-white' id='child-menu'>
          <a href=""><li>About us</li></a>
          <a href=""><li>Contact us</li></a>
          <a href=""><li>Blog</li></a>
          <a href=""><li>404</li></a>
          <a href=""><li>Faq 2</li></a>
        </div>
        </ul>
      </div>
    )
  }

  // Menu Bar

  // HOME Page
  
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  // Shop Page

  const shophandleMouseEnter = () => {
    setShopdownVisible(true);
  };
  
  const shophandleMouseLeave = () => {
    setShopdownVisible(false);
  };

  // Product page

  const producthandleMouseEnter = () => {
    setProductdownVisible(true);
  };
  
  const producthandleMouseLeave = () => {
    setProductdownVisible(false);
  };

  // Blog Page 

  const bloghandleMouseEnter = () => {
    setBlogdownVisible(true);
  };
  
  const bloghandleMouseLeave = () => {
    setBlogdownVisible(false);
  };

  // Pages Page 

  const pagehandleMouseEnter = () => {
    setPagedownVisible(true);
  };
  
  const pagehandleMouseLeave = () => {
    setPagedownVisible(false);
  };


  return (
    <>
    <div className='w-full h-28 flex gap-2 justify-around' id='layout'>
      <div className='w-11 h-full flex justify-center items-center text-[30px]' id='menuBar'>
        <FaBars/>
      </div>

      <div className='w-64 h-full' id='logo'>
        <img className='w-[60%] py-3' src={logo} alt="not found" />
      </div>

      <div className='w-[600px] h-full flex items-center justify-around font-semibold' id='pages'>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[90px]'>
        <a className='flex' id='underline-animate' href="">Home<FaAngleDown className='mt-[5px] ml-1'/></a>
        {dropdownVisible && HomeMenu()}
        </div>

        <div onMouseEnter={shophandleMouseEnter} onMouseLeave={shophandleMouseLeave} className='w-[90px]'>
        <a className='flex' id='underline-animate' href="">Shop<FaAngleDown className='mt-[5px] ml-1'/></a>
        {shopdownVisible && ShopMenu()}
        </div>
        
        <div onMouseEnter={producthandleMouseEnter} onMouseLeave={producthandleMouseLeave} className='w-[90px]'>
        <a className='flex' id='underline-animate' href="">Products<FaAngleDown className='mt-[5px] ml-1'/></a>
        {productdownVisible && ProductMenu()}
        </div>

        <div onMouseEnter={bloghandleMouseEnter} onMouseLeave={bloghandleMouseLeave} className='w-[90px]'>
        <a className='flex' id='underline-animate' href="">Blog<FaAngleDown className='mt-[5px] ml-1'/></a>
        {blogdownVisible && BlogMenu()}
        </div>

        <div onMouseEnter={pagehandleMouseEnter} onMouseLeave={pagehandleMouseLeave} className='w-[90px]'>
        <a className='flex' id='underline-animate' href="">Page<FaAngleDown className='mt-[5px] ml-1'/></a>
        {pagedownVisible && PageMenu()}
        </div>
        
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