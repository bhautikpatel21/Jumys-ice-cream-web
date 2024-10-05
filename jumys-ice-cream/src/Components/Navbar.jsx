import React, { useRef } from 'react'
import logo from '../assets/logo.png'
import { FaAngleDown, FaBars, FaGripVertical, FaHeart, FaSearch, FaShoppingBasket, FaUser, } from "react-icons/fa";
import { useState, useEffect } from 'react';
import navImg1 from '../assets/asset 1.jpeg'
import navImg2 from '../assets/asset 2.jpeg'
import navImg3 from '../assets/asset 3.jpeg'
import { NavLink,Outlet } from 'react-router-dom';

const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [shopdownVisible, setShopdownVisible] = useState(false);

  const [productdownVisible, setProductdownVisible] = useState(false);

  const [blogdownVisible, setBlogdownVisible] = useState(false);

  const [pagedownVisible, setPagedownVisible] = useState(false);

  const HomeMenu = () => {

    return (
      <div className="">
        <ul className="set-font flex justify-center ">
          <div className="absolute shadow-xl pt-3 bg-white z-50 rounded-lg -ml-10 text-gray-400 w-[150px] h-[330px] flex flex-col items-center space-y-3">
            <i to="" className="hover:text-red-500">
              <li className="mt-5">Home 1</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 2</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 3</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 4</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 5</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 6</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 7</li>
            </i>
            <i to="" className="hover:text-red-500">
              <li className="">Home 8</li>
            </i>
          </div>
        </ul>
      </div>
    )
  }

  const ShopMenu = () => {
    return (
      <div className="">
        <ul className="set-font flex justify-center">
          <div className="absolute shadow-xl bg-white z-50 rounded-lg text-black h-[450px] w-[1000px] pt-5">
            <div className="flex justify-around">
              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Shop Style</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Standard</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Full</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Only Category</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Icon Category</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Image Category</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Image Category 2</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Sub Category</i>
                <NavLink to="/shop" className="text-gray-900 block hover:text-red-500">ShopList</NavLink>
              </div>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Filter Layout</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Sidebar</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Filter Side Out</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Filter DropDown</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Filter On Top</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Filter Drawer</i>
                <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Shop Loader</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Pagination</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Infinity</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Shop Load More</i>
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Hover Style</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Icon On Hover</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Quick View Button</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Add To Cart Button</i>
                <i to="" className="text-gray-400 block hover:text-red-500">WhishList Icon</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Quick Shop Light</i>
                <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Woo Pages</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Order Tracking</i>
                <NavLink to="/login" className="text-gray-900 block hover:text-red-500">Login</NavLink>
                <NavLink to="/wishlist" className="text-gray-900 block hover:text-red-500">WishList</NavLink>
                </div>
              </div>
              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Mini Cart</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Side Out Light</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Side Out Dark</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Dropdown</i>
                <NavLink to="/cart" className="text-gray-900 block hover:text-red-500">Cart Page</NavLink>
                <div className="space-y-2 mt-5">
                  <h1 className="font-bold text-[20px]">Checkout Style</h1>
                  <i to="" className="text-gray-400 block hover:text-red-500">Check out Classis</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Check out Modern</i>
                </div>
              </div>


            </div>
          </div>
        </ul>
      </div>
    )
  }

  const ProductMenu = () => {
    return (
      <div className="">
        <ul className="set-font flex justify-center">
          <div className="absolute shadow-xl bg-white z-50 rounded-lg text-black h-[450px] w-[1000px] pt-5">
            <div className="flex flex-wrap justify-around">

              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Product Featured</h1>
                <i to="" className="text-gray-500 block hover:text-red-500">Sticky Add TO Cart</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Video Inner </i>
                <i to="" className="text-gray-500 block hover:text-red-500">Video PopUp</i>
                <i to="" className="text-gray-500 block hover:text-red-500">360 Degree</i>
                <i to="" className="text-gray-500 block hover:text-red-500">CountDown</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Buy Together</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Notify Me</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Real Time Visitor</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Products Recently Viewed</i>
                <i to="" className="text-gray-500 block hover:text-red-500">trust Badge </i>
                <i to="" className="text-gray-500 block hover:text-red-500">Pre Order_Product</i>
              </div>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Product Type</h1>
                <i to="" className="text-gray-500 block hover:text-red-500">Simple Product</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Simple Slider</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Group Product</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Variable Product</i>
                <i to="" className="text-gray-500 block hover:text-red-500">External & Affiliat Product</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Sold Out</i>
                <div className="space-y-3 mt-5">
                  <h1 className="font-bold text-[20px]">Zoom Effect</h1>
                  <i to="" className="text-gray-500 block hover:text-red-500">AutoZoom </i>
                  <i to="" className="text-gray-500 block hover:text-red-500">Lens Zoom </i>
                  <i to="" className="text-gray-500 block hover:text-red-500">Magic Zoom</i>
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Product Gallery</h1>
                <i to="" className="text-gray-500 block hover:text-red-500">Gird Sticky </i>
                <i to="" className="text-gray-500 block hover:text-red-500">Gird Mix</i>
                <i to="" className="text-gray-500 block hover:text-red-500">One Column</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Grid 2 Column</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Slider </i>
                <i to="" className="text-gray-500 block hover:text-red-500">Large Gallery</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Left Thumbnail</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Right Thumbnail</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Bottom Thumbnail</i>
                <i to="" className="text-gray-500 block hover:text-red-500">OutSide Thumbnail</i>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Product Style</h1>
                <i to="" className="text-gray-500 block hover:text-red-500">Clean </i>
                <i to="" className="text-gray-500 block hover:text-red-500">Modern</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Full Width</i>
                <i to="" className="text-gray-500 block hover:text-red-500">Background Color</i>
                <div className="space-y-2 mt-5">
                  <h1 className="font-bold text-[20px]">Description Style</h1>
                  <i to="" className="text-gray-500 block hover:text-red-500">Description Tab</i>
                  <i to="" className="text-gray-500 block hover:text-red-500">Description According</i>
                  <i to="" className="text-gray-500 block hover:text-red-500">Description Full Content</i>
                  <i to="" className="text-gray-500 block hover:text-red-500">Description Vertical</i>
                </div>
              </div>


            </div>
          </div>
        </ul>
      </div>

    )
  }

  const BlogMenu = () => {
    return (
      <div className="">
        <ul className="set-font flex justify-around">
          <div className="absolute shadow-xl bg-white rounded-lg z-50 text-black h-[440px] w-[900px] pt-5">

            <div className="flex justify-around">
              <div className="space-y-5  mt-5">
                <h1 className="font-bold text-[20px]">Blog Layout</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Blog Left Sidebar</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Blog Right Sidebar</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Blog Without Sidebar</i>
                <div className="space-y-3 mt-5">
                  <h1 className="font-bold text-[20px]">Blog Style</h1>
                  <i to="" className="text-gray-400 block hover:text-red-500">Blog List </i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Blog Grid</i>
                  <NavLink to="/blogCard" className="text-gray-900 block hover:text-red-500">Blog Card</NavLink>
                  <i to="" className="text-gray-400 block hover:text-red-500">Blog Modern</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Blog Standar</i>
                </div>
              </div>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Blog Format</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">Post Format Gallery</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Post Format video</i>
                <i to="" className="text-gray-400 block hover:text-red-500">Audio</i>
                <div className="space-y-3 mt-5">
                  <h1 className="font-bold text-[20px]">Post Layout</h1>
                  <i to="" className="text-gray-400 block hover:text-red-500">Sidebar</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">One Column</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Prallax Image</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Simple Title</i>
                  <i to="" className="text-gray-400 block hover:text-red-500">Sticky Title</i>
                </div>
              </div>
              <div className="grid space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Recent Post</h1>
                <div className="flex gap-5">
                  <div >
                    <i to="" className=""><img className="h-[80px] w-[160px]" src={navImg1} alt="Not Found" /></i>
                  </div>
                  <div>
                    <i to="" className="hover:text-red-500">
                      <h1 className="text-gray-400">April 3, 2024</h1>
                      <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
                    </i>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div >
                    <i to="" className=""><img className="h-[80px] w-[160px]" src={navImg2} alt="Not Found" /> </i>
                  </div>
                  <div>
                    <i to="" className="hover:text-red-500">
                      <h1 className="text-gray-400">April 3, 2024</h1>
                      <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
                    </i>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div >
                    <i to=""> <img className="h-[80px] w-[160px]" src={navImg3} alt="Not Found" /> </i>
                  </div>
                  <div>
                    <i to="" className="hover:text-red-500">
                      <h1 className="text-gray-400">April 3, 2024</h1>
                      <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );

  }

  const PageMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="set-font absolute shadow-xl rounded-lg bg-white z-50 -ml-10 text-gray-900 flex justify-around w-[150px] h-[220px] pt-5">
            <div className="mt-5 grid">
              <NavLink to="/about" className="hover:text-red-500">About Us</NavLink>
              <NavLink to="/contact" className="hover:text-red-500">Contact</NavLink>
              <NavLink to="/faq2" className="hover:text-red-500">Faq2</NavLink>
              <NavLink to="/error" className="hover:text-red-500">Page 404</NavLink>
            </div>
          </div>
        </ul>
      </div>
    )
  }

  const handleMouseEnter = () => {
    setTimeout(() => setDropdownVisible(true),150);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  // Shop Page

  const shophandleMouseEnter = () => {
    setTimeout(() => setShopdownVisible(true),150);
  };

  const shophandleMouseLeave = () => {
    setShopdownVisible(false);
  };

  // Product page

  const producthandleMouseEnter = () => {
    setTimeout(() => setProductdownVisible(true),150);
  };

  const producthandleMouseLeave = () => {
    setProductdownVisible(false);
  };

  // Blog Page 

  const bloghandleMouseEnter = () => {
    setTimeout(() => setBlogdownVisible(true),150);
  };

  const bloghandleMouseLeave = () => {
    setBlogdownVisible(false);
  };

  // Pages Page 

  const pagehandleMouseEnter = () => {
    setTimeout(() => setPagedownVisible(true),150)
  };

  const pagehandleMouseLeave = () => {
    setPagedownVisible(false);
  };


  return (
    <div>
      <div className='w-full h-28 flex gap-2 justify-around' id='layout'>
        <div className='w-11 h-full flex justify-center items-center text-[30px]' id='menuBar'>
          <FaBars />
        </div>

        <div className='w-64 h-full' id='logo'>
          <img className='w-[60%] py-3' src={logo} alt="not found" />
        </div>

        <div className='w-[600px] h-full flex items-center justify-around font-semibold' id='pages'>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[90px]'>
            <NavLink to="/" className='flex' id='underline-animate' href="">Home<FaAngleDown className='mt-[5px] ml-1' /></NavLink>
            {dropdownVisible && HomeMenu()}
          </div>

          <div onMouseEnter={shophandleMouseEnter} onMouseLeave={shophandleMouseLeave} className='w-[90px]'>
            <NavLink to="/shop" className='flex' id='underline-animate' href="">Shop<FaAngleDown className='mt-[5px] ml-1' /></NavLink>
            {shopdownVisible && ShopMenu()}
          </div>

          <div onMouseEnter={producthandleMouseEnter} onMouseLeave={producthandleMouseLeave} className='w-[90px]'>
            <a className='flex' id='underline-animate' href="">Products<FaAngleDown className='mt-[5px] ml-1' /></a>
            {productdownVisible && ProductMenu()}
          </div>

          <div onMouseEnter={bloghandleMouseEnter} onMouseLeave={bloghandleMouseLeave} className='w-[90px]'>
            <a className='flex' id='underline-animate' href="">Blog<FaAngleDown className='mt-[5px] ml-1' /></a>
            {blogdownVisible && BlogMenu()}
          </div>

          <div onMouseEnter={pagehandleMouseEnter} onMouseLeave={pagehandleMouseLeave} className='w-[90px]'>
            <a className='flex' id='underline-animate' href="">Page<FaAngleDown className='mt-[5px] ml-1' /></a>
            {pagedownVisible && PageMenu()}
          </div>

        </div>
        <div className='w-[190px] h-full flex justify-around items-center text-[22px]' id='icons'>
          <a className='icon1 text-red' href=""><FaSearch /></a>
          <NavLink to='/signup' className='icon2 text-red' href=""><FaUser /></NavLink>
          <a className='icon3 text-red' href=""><FaHeart /></a>
          <a className='icon4 text-red' href=""><FaShoppingBasket /></a>
        </div>
      </div>
      <div className='w-full h-[80px] fixed bottom-0 flex justify-around bg-white z-20' id='header-footer'>
        <a className='w-24 h-full flex flex-col justify-center items-center  text-red'><FaGripVertical className='text-[30px]' /><p>Shop</p></a>
        <a className='w-24 h-full flex flex-col justify-center items-center  text-red'><FaUser className='text-[30px]' /><p>Account</p></a>
        <a className='w-24 h-full flex flex-col justify-center items-center  text-red'><FaSearch className='text-[30px]' /><p>Search</p></a>
        <a className='w-24 h-full flex flex-col justify-center items-center  text-red'><FaHeart className='text-[30px]' /><p>Wishlist</p></a>
      </div>

      <Outlet/>
    </div>
  )
}

export default Navbar