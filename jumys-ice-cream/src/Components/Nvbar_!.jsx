import React from "react";
import logo from "../assets/asset 0.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import navImg1 from '../assets/asset 1.jpeg'
import navImg2 from '../assets/asset 2.jpeg'
import navImg3 from '../assets/asset 3.jpeg'

const Navbar = () => {
  const [HomeVisible, setHomeVisible] = useState(false);

  const [shopVisible, setShopVisible] = useState(false);

  const [productVisible, setProductVisible] = useState(false);

  const [blogVisible, setBlogVisible] = useState(false);

  const [pageVisible, setPageVisible] = useState(false);

  const HomeMenu = () => {
    return (
      <div className="">
        <ul className="duration-1000 flex justify-center">
          <div className="absolute bg-gray-50 text-black w-[150px] h-[300px] flex flex-col items-center space-y-3">
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-5">Home 1</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 2</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 3</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 4</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 5</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 6</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 7</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 8</li>
            </NavLink>
          </div>
        </ul>
      </div>
    );
  };

  const ShopMenu = () => {
    return (
      <div className="">
        <ul className="flex justify-center">
          <div className="absolute bg-gray-50 text-black h-[450px] w-[1000px]">
            <div className="flex justify-around">
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Shop Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Standard</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Full</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Only Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Icon Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Image Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Image Category 2</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Sub Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">ShopList</NavLink>
              </div>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Filter Layout</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Sidebar</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter Side Out</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter DropDown</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter On Top</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter Drawer</NavLink>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Shop Loader</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Pagination</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Infinity</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Load More</NavLink>
              </div>
              </div>
             
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Hover Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Icon On Hover</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Quick View Button</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Add To Cart Button</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">WhishList Icon</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Quick Shop Light</NavLink>
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Woo Pages</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Order Tracking</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Login</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">WishList</NavLink>
              </div>
              </div>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Mini Cart</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Side Out Light</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Side Out Dark</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Dropdown</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Cart Page</NavLink>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Checkout Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Check out Classis</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Check out Modern</NavLink>
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
      <ul className="flex justify-center">
        <div className="absolute bg-gray-50 text-black h-[450px] w-[1000px]">
          <div className="flex flex-wrap justify-around">

            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Featured</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sticky Add TO Cart</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Video Inner </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Video PopUp</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">360 Degree</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">CountDown</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Buy Together</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Notify Me</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Real Time Visitor</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Products Recently Viewed</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">trust Badge </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Pre Order_Product</NavLink>
            </div>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Product Type</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Product</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Slider</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Group Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Variable Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">External & Affiliat Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sold Out</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Zoom Effect</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">AutoZoom </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Lens Zoom </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Magic Zoom</NavLink>
            </div>
            </div>
          
            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Gallery</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Gird Sticky </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Gird Mix</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">One Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Grid 2 Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Slider </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Large Gallery</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Left Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Right Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Bottom Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">OutSide Thumbnail</NavLink>
            </div>

            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Clean </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Modern</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Full Width</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Background Color</NavLink> 
            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Description Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Tab</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description According</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Full Content</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Vertical</NavLink> 
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
      <ul className="flex justify-around">
        <div className="absolute bg-gray-50 text-black h-[400px] w-[900px]">
         
          <div className="flex justify-around">
            <div className="space-y-5  mt-5">
           <h1 className="font-bold text-[20px]">Blog Layout</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Left Sidebar</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Right Sidebar</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Without Sidebar</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog List </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Grid</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Card</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Modern</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Standar</NavLink>
            </div>
            </div>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Format</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Post Format Gallery</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Post Format video</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Audio</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Post Layout</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sidebar</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">One Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Prallax Image</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Title</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sticky Title</NavLink>
            </div>
            </div>
            <div className="grid space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Recent Post</h1>
            <div className="flex gap-5">
            <div > 
               <NavLink to="" className=""><img className="h-[80px] w-[160px]" src={navImg1} alt="Not Found" /></NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            <div className="flex gap-5">
            <div > 
                <NavLink to="" className=""><img className="h-[80px] w-[160px]" src={navImg2} alt="Not Found" /> </NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            <div className="flex gap-5">
            <div > 
              <NavLink to=""> <img className="h-[80px] w-[160px]" src={navImg3} alt="Not Found" /> </NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            </div>
            </div>
            </div>  
      </ul>
    </div>
    );
  };

  const PageMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="absolute bg-gray-50 text-gray-500 flex justify-around w-[150px] h-[220px]">
          <div className="mt-5 grid">
           <NavLink to="about" className="hover:text-red-500">About Us</NavLink>
           <NavLink to="contact" className="hover:text-red-500">Contact</NavLink>
           <NavLink to="" className="hover:text-red-500">Faq</NavLink>
           <NavLink to="Faq2" className="hover:text-red-500">Faq2</NavLink>
           <NavLink to="page404" className="hover:text-red-500">Page 404</NavLink>
           </div>
          </div>
        </ul>
      </div>
    );
  };

  // HOME Page

  const handleMouseEnter = () => {
    setHomeVisible(true);
  };

  const handleMouseLeave = () => {
    setHomeVisible(false);
  };

  // Shop Page

  const shophandleMouseEnter = () => {
    setShopVisible(true);
  };

  const shophandleMouseLeave = () => {
    setShopVisible(false);
  };

  // Product page

  const producthandleMouseEnter = () => {
    setProductVisible(true);
  };

  const producthandleMouseLeave = () => {
    setProductVisible(false);
  };

  // Blog Page

  const bloghandleMouseEnter = () => {
    setBlogVisible(true);
  };

  const bloghandleMouseLeave = () => {
    setBlogVisible(false);
  };

  // Pages Page

  const pagehandleMouseEnter = () => {
    setPageVisible(true);
  };

  const pagehandleMouseLeave = () => {
    setPageVisible(false);
  };

  return (
    <div className="overflow-hidden">
      <div className="z-20 fixed w-full bg-white border-gray-200 dark:bg-gray-900 px-10 h-[100px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="" id="Menu" className="text-[20px]">
            <i class="fa-solid fa-bars"></i>
          </NavLink>
          <NavLink to="home" className="rtl:space-x-reverse">
            <img
              id="logo"
              className=" size-16 md:size-24 "
              src={logo}
              alt="Not Found"
            />
          </NavLink>

          <div className="items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex lg:space-x-6 list-none text-[20px]">
              <NavLink to="/search" className=" hover:text-red-500">
                <i className="fa-solid fa-magnifying-glass" id="icon"></i>
              </NavLink>

              <NavLink to="/account" className=" hover:text-red-500">
                <i className="fa-regular fa-user" id="icon"></i>
              </NavLink>

              <NavLink to="/wishlist" className=" hover:text-red-500">
                <i className="fa-regular fa-heart" id="icon"></i>
              </NavLink>

              <NavLink to="/cart" className=" hover:text-red-500">
                <i className="fa-solid fa-basket-shopping"></i>
              </NavLink>
            </div>
          </div>
          <div
            className="items-center justify-between space-x-10 none w-full md:flex md:w-auto md:order-1"
            id="navbar"
          >
            <ul className="flex text-[16px] space-x-12 font-semibold md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-600">
              <NavLink to="home"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Home <i className="fa-solid fa-angle-down"></i>
                {HomeVisible && HomeMenu()}
              </NavLink>

              <NavLink to=""
                onMouseEnter={shophandleMouseEnter}
                onMouseLeave={shophandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Shop {" "}
                <i className="fa-solid fa-angle-down"></i>
                  {shopVisible && ShopMenu()}
              </NavLink>

              <NavLink to=""
                onMouseEnter={producthandleMouseEnter}
                onMouseLeave={producthandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Product <i className="fa-solid fa-angle-down"></i>
                {productVisible && ProductMenu()}
              </NavLink>

              <NavLink to="blog"
                onMouseEnter={bloghandleMouseEnter}
                onMouseLeave={bloghandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Blog <i className="fa-solid fa-angle-down"></i>
                {blogVisible && BlogMenu()}
              </NavLink>

              <NavLink to="about"
                onMouseEnter={pagehandleMouseEnter}
                onMouseLeave={pagehandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Page <i className="fa-solid fa-angle-down"></i>
                {pageVisible && PageMenu()}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>


     <div className='w-full h-[60px] fixed bottom-0 flex justify-around bg-white z-20' id='Mobile'>
      <NavLink to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-solid fa-table-cells"></i>Shop</NavLink>
      <NavLink to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-regular fa-user"></i> Account</NavLink>
      <NavLink to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-solid fa-magnifying-glass"></i> Search</NavLink>
      <NavLink to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-regular fa-heart"></i> Wishlist</NavLink>
    </div>

      <Outlet />
    </div>
  );
};

export default Navbar;