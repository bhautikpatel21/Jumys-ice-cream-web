import React from "react";
import logo from "../assets/asset 0.svg";
// import { Outlet } from "react-router-dom";
import { FaAngleDown, FaBars,FaGripVertical, FaHeart, FaSearch, FaShoppingBasket, FaUser, } from "react-icons/fa";
import { i,useState } from "react";
import navImg1 from '../assets/asset 1.jpeg'
import navImg2 from '../assets/asset 2.jpeg'
import navImg3 from '../assets/asset 3.jpeg'

const Navbarr = () => {

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
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Standard</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Full</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Only Category</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Icon Category</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Image Category</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Image Category 2</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Sub Category</i>
              <i to="" className="text-gray-500 block hover:text-red-500">ShopList</i>
              </div>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Filter Layout</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Sidebar</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Filter Side Out</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Filter DropDown</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Filter On Top</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Filter Drawer</i>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Shop Loader</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Pagination</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Infinity</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Shop Load More</i>
              </div>
              </div>
             
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Hover Style</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Icon On Hover</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Quick View Button</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Add To Cart Button</i>
              <i to="" className="text-gray-500 block hover:text-red-500">WhishList Icon</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Quick Shop Light</i>
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Woo Pages</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Order Tracking</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Login</i>
              <i to="" className="text-gray-500 block hover:text-red-500">WishList</i>
              </div>
              </div>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Mini Cart</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Side Out Light</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Side Out Dark</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Dropdown</i>
              <i to="" className="text-gray-500 block hover:text-red-500">Cart Page</i>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Checkout Style</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">Check out Classis</i> 
              <i to="" className="text-gray-500 block hover:text-red-500">Check out Modern</i>
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
      <ul className="flex justify-around">
        <div className="absolute bg-gray-50 text-black h-[400px] w-[900px]">
         
          <div className="flex justify-around">
            <div className="space-y-5  mt-5">
           <h1 className="font-bold text-[20px]">Blog Layout</h1>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Left Sidebar</i> 
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Right Sidebar</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Without Sidebar</i>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Style</h1>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog List </i> 
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Grid</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Card</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Modern</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Blog Standar</i>
            </div>
            </div>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Format</h1>
            <i to="" className="text-gray-500 block hover:text-red-500">Post Format Gallery</i> 
            <i to="" className="text-gray-500 block hover:text-red-500">Post Format video</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Audio</i>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Post Layout</h1>
            <i to="" className="text-gray-500 block hover:text-red-500">Sidebar</i> 
            <i to="" className="text-gray-500 block hover:text-red-500">One Column</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Prallax Image</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Simple Title</i>
            <i to="" className="text-gray-500 block hover:text-red-500">Sticky Title</i>
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
  };

  const PageMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="absolute bg-gray-50 text-gray-500 flex justify-around w-[150px] h-[220px]">
          <div className="mt-5 grid">
           <i to="about" className="hover:text-red-500">About Us</i>
           <i to="contact" className="hover:text-red-500">Contact</i>
           <i to="" className="hover:text-red-500">Faq</i>
           <i to="Faq2" className="hover:text-red-500">Faq2</i>
           <i to="page404" className="hover:text-red-500">Page 404</i>
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
          <i to="" id="Menu" className="text-[20px]">
            <i class="fa-solid fa-bars"></i>
          </i>
          <i to="home" className="rtl:space-x-reverse">
            <img
              id="logo"
              className=" size-16 md:size-24 "
              src={logo}
              alt="Not Found"
            />
          </i>

          <div className="items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex lg:space-x-6 list-none text-[20px]">
              <i to="/search" className=" hover:text-red-500">
                <i className="fa-solid fa-magnifying-glass" id="icon"></i>
              </i>

              <i to="/account" className=" hover:text-red-500">
                <i className="fa-regular fa-user" id="icon"></i>
              </i>

              <i to="/wishlist" className=" hover:text-red-500">
                <i className="fa-regular fa-heart" id="icon"></i>
              </i>

              <i to="/cart" className=" hover:text-red-500">
                <i className="fa-solid fa-basket-shopping"></i>
              </i>
            </div>
          </div>
          <div
            className="items-center justify-between space-x-10 none w-full md:flex md:w-auto md:order-1"
            id="navbar"
          >
            <ul className="flex text-[16px] space-x-12 font-semibold md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-600">
              <i to="home"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Home <i className="fa-solid fa-angle-down"></i>
                {HomeVisible && HomeMenu()}
              </i>

              <i to="shop"
                onMouseEnter={shophandleMouseEnter}
                onMouseLeave={shophandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Shop {" "}
                <i className="fa-solid fa-angle-down"></i>
                  {shopVisible && ShopMenu()}
              </i>

              <i to=""
                onMouseEnter={producthandleMouseEnter}
                onMouseLeave={producthandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Product <i className="fa-solid fa-angle-down"></i>
                {productVisible && ProductMenu()}
              </i>

              <i to="blog"
                onMouseEnter={bloghandleMouseEnter}
                onMouseLeave={bloghandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Blog <i className="fa-solid fa-angle-down"></i>
                {blogVisible && BlogMenu()}
              </i>

              <i to="about"
                onMouseEnter={pagehandleMouseEnter}
                onMouseLeave={pagehandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Page <i className="fa-solid fa-angle-down"></i>
                {pageVisible && PageMenu()}
              </i>
            </ul>
          </div>
        </div>
      </div>


     <div className='w-full h-[60px] fixed bottom-0 flex justify-around bg-white z-20' id='Mobile'>
      <i to="shop" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-solid fa-magnifying-glass"></i>Shop</i>
      <i to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-regular fa-user"></i> Account</i>
      <i to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-solid fa-magnifying-glass"></i> Search</i>
      <i to="" className=' w-24 h-full flex flex-col justify-center items-center  hover:text-red-600'><i class="fa-regular fa-heart"></i> Wishlist</i>
    </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default Navbarr;