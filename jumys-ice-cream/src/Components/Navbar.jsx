import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  FaAngleDown,
  FaBars,
  FaGripVertical,
  FaHeart,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import navImg1 from "../assets/asset 1.jpeg";
import navImg2 from "../assets/asset 2.jpeg";
import navImg3 from "../assets/asset 3.jpeg";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shopdownVisible, setShopdownVisible] = useState(false);
  const [productdownVisible, setProductdownVisible] = useState(false);
  const [blogdownVisible, setBlogdownVisible] = useState(false);
  const [pagedownVisible, setPagedownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeAllDropdowns = () => {
    setDropdownVisible(false);
    setShopdownVisible(false);
    setProductdownVisible(false);
    setBlogdownVisible(false);
    setPagedownVisible(false);
  };

  const HomeMenu = () => (
    <div className="">
      <ul className="set-font flex justify-center">
        <div className="absolute shadow-xl pt-8 bg-white z-50 rounded-lg -ml-10 text-gray-400 w-[150px] h-[330px] flex flex-col items-center space-y-3">
          <li className="hover:text-red-500">Home 1</li>
          <li className="hover:text-red-500">Home 2</li>
          <li className="hover:text-red-500">Home 3</li>
          <li className="hover:text-red-500">Home 4</li>
          <li className="hover:text-red-500">Home 5</li>
          <li className="hover:text-red-500">Home 6</li>
          <li className="hover:text-red-500">Home 7</li>
          <li className="hover:text-red-500">Home 8</li>
        </div>
      </ul>
    </div>
  );

  const ShopMenu = () => (
    <div className="">
      <ul className="set-font flex justify-center">
        <div className="absolute shadow-xl bg-white z-50 rounded-lg text-black h-[450px] w-[1000px] pt-5">
          <div className="flex justify-around">
            <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Shop Style</h1>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Standard
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Full
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Only Category
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Icon Category
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Image Category
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Image Category 2
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Shop Sub Category
              </i>
              <NavLink
                to="/shop"
                className="text-gray-950 block hover:text-red-500"
                onClick={closeAllDropdowns}
              >
                ShopList
              </NavLink>
            </div>
            <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Filter Layout</h1>
              <i className="text-gray-400 block hover:text-red-500">Sidebar</i>
              <i className="text-gray-400 block hover:text-red-500">
                Filter Side Out
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Filter DropDown
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Filter On Top
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Filter Drawer
              </i>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Shop Loader</h1>
                <i className="text-gray-400 block hover:text-red-500">
                  Shop Pagination
                </i>
                <i className="text-gray-400 block hover:text-red-500">
                  Shop Infinity
                </i>
                <i className="text-gray-400 block hover:text-red-500">
                  Shop Load More
                </i>
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Hover Style</h1>
              <i className="text-gray-400 block hover:text-red-500">
                Icon On Hover
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Quick View Button
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Add To Cart Button
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                WhishList Icon
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Quick Shop Light
              </i>
              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Woo Pages</h1>
                <i className="text-gray-400 block hover:text-red-500">
                  Order Tracking
                </i>
                <NavLink
                  to="/login"
                  className="text-gray-950 block hover:text-red-500"
                  onClick={closeAllDropdowns}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/wishlist"
                  className="text-gray-950 block hover:text-red-500"
                  onClick={closeAllDropdowns}
                >
                  WishList
                </NavLink>
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Mini Cart</h1>
              <i className="text-gray-400 block hover:text-red-500">
                Side Out Light
              </i>
              <i className="text-gray-400 block hover:text-red-500">
                Side Out Dark
              </i>
              <i className="text-gray-400 block hover:text-red-500">Dropdown</i>
              <NavLink
                to="/cart"
                className="text-gray-950 block hover:text-red-500"
                onClick={closeAllDropdowns}
              >
                Cart Page
              </NavLink>
              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Checkout Style</h1>
                <i className="text-gray-400 block hover:text-red-500">
                  Check out Classis
                </i>
                <i className="text-gray-400 block hover:text-red-500">
                  Check out Modern
                </i>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );

  const ProductMenu = () => (
    <div className="">
      <ul className="set-font flex justify-center">
        <div className="absolute shadow-xl bg-white z-50 rounded-lg text-black h-[450px] w-[1000px] pt-5">
          <div className="flex flex-wrap justify-around">
            <div className="space-y-2 mt-5">
              {" "}
              <h1 className="font-bold text-[20px]">Product Featured</h1>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Sticky Add TO Cart{" "}
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Video Inner{" "}
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                Video PopUp
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                360 Degree
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                CountDown
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Buy Together
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Notify Me
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Real Time Visitor
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Products Recently Viewed{" "}
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                trust Badge{" "}
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                {" "}
                Pre Order_Product{" "}
              </i>{" "}
            </div>{" "}
            <div className="space-y-3 mt-5">
              {" "}
              <h1 className="font-bold text-[20px]">Product Type</h1>{" "}
              <NavLink
                to="/shop"
                className="text-gray-950 block hover:text-red-500"
                onClick={closeAllDropdowns}
              >
                Simple Product
              </NavLink>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                Simple Slider
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                Group Product
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                Variable Product
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                External & Affiliat Product
              </i>{" "}
              <i to="" className="text-gray-500 block hover:text-red-500">
                Sold Out
              </i>{" "}
              <div className="space-y-3 mt-5">
                {" "}
                <h1 className="font-bold text-[20px]">Zoom Effect</h1>{" "}
                <i to="" className="text-gray-500 block hover:text-red-500">
                  AutoZoom{" "}
                </i>{" "}
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Lens Zoom{" "}
                </i>{" "}
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Magic Zoom
                </i>{" "}
              </div>{" "}
            </div>
            <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Product Gallery</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Gird Sticky{" "}
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Gird Mix
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                One Column
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Grid 2 Column
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Slider{" "}
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Large Gallery
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Left Thumbnail
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Right Thumbnail
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Bottom Thumbnail
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                OutSide Thumbnail
              </i>
            </div>
            <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Product Style</h1>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Clean{" "}
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Modern
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Full Width
              </i>
              <i to="" className="text-gray-500 block hover:text-red-500">
                Background Color
              </i>
              <div className="space-y-2 mt-5">
                <h1 className="font-bold text-[20px]">Description Style</h1>
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Description Tab
                </i>
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Description According
                </i>
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Description Full Content
                </i>
                <i to="" className="text-gray-500 block hover:text-red-500">
                  Description Vertical
                </i>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );

  const BlogMenu = () => (
    <div className="">
      <ul className="set-font flex justify-around">
        <div className="absolute shadow-xl bg-white rounded-lg z-50 text-black h-[440px] w-[900px] pt-5">
          <div className="flex justify-around">
            <div className="space-y-5  mt-5">
              <h1 className="font-bold text-[20px]">Blog Layout</h1>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Blog Left Sidebar
              </i>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Blog Right Sidebar
              </i>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Blog Without Sidebar
              </i>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Blog Style</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Blog List{" "}
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Blog Grid
                </i>
                <NavLink
                  to="/blogCard"
                  className="text-gray-950 block hover:text-red-500"
                  onClick={closeAllDropdowns}
                >
                  Blog Card
                </NavLink>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Blog Modern
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Blog Standar
                </i>
              </div>
            </div>
            <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Blog Format</h1>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Post Format Gallery
              </i>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Post Format video
              </i>
              <i to="" className="text-gray-400 block hover:text-red-500">
                Audio
              </i>
              <div className="space-y-3 mt-5">
                <h1 className="font-bold text-[20px]">Post Layout</h1>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Sidebar
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  One Column
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Prallax Image
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Simple Title
                </i>
                <i to="" className="text-gray-400 block hover:text-red-500">
                  Sticky Title
                </i>
              </div>
            </div>
            <div className="grid space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Recent Post</h1>
              <div className="flex gap-5">
                <div>
                  <i to="" className="">
                    <img
                      className="h-[80px] w-[160px]"
                      src={navImg1}
                      alt="Not Found"
                    />
                  </i>
                </div>
                <div>
                  <i to="" className="hover:text-red-500">
                    <h1 className="text-gray-400">April 3, 2024</h1>
                    <h1 className="font-bold">
                      Top Icecream Flavor TO Sell <br /> This Year
                    </h1>
                  </i>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <i to="" className="">
                    <img
                      className="h-[80px] w-[160px]"
                      src={navImg2}
                      alt="Not Found"
                    />{" "}
                  </i>
                </div>
                <div>
                  <i to="" className="hover:text-red-500">
                    <h1 className="text-gray-400">April 3, 2024</h1>
                    <h1 className="font-bold">
                      Top Icecream Flavor TO Sell <br /> This Year
                    </h1>
                  </i>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <i to="">
                    {" "}
                    <img
                      className="h-[80px] w-[160px]"
                      src={navImg3}
                      alt="Not Found"
                    />{" "}
                  </i>
                </div>
                <div>
                  <i to="" className="hover:text-red-500">
                    <h1 className="text-gray-400">April 3, 2024</h1>
                    <h1 className="font-bold">
                      Top Icecream Flavor TO Sell <br /> This Year
                    </h1>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );

  const PageMenu = () => (
    <div className="">
      <ul>
        <div className="set-font absolute shadow-xl rounded-lg bg-white z-50 -ml-10 text-gray-950 flex justify-around w-[150px] h-[220px] pt-5">
          <div className="mt-5 grid">
            <NavLink
              to="/about"
              className="hover:text-red-500"
              onClick={closeAllDropdowns}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-red-500"
              onClick={closeAllDropdowns}
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq2"
              className="hover:text-red-500"
              onClick={closeAllDropdowns}
            >
              Faq2
            </NavLink>
            <NavLink
              to="/error"
              className="hover:text-red-500"
              onClick={closeAllDropdowns}
            >
              Page 404
            </NavLink>
                <NavLink to="/redux" onClick={toggleMenu}>
                  Redux
                </NavLink>
          </div>
        </div>
      </ul>
    </div>
  );



  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <div>
      <div className="w-full h-28 flex gap-2 justify-around" id="layout">
        <div
          className="w-11 h-full flex justify-center items-center text-[30px]"
          id="menuBar"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>

        <div className="w-64 h-full" id="logo">
          <img className="w-[60%] py-3" src={logo} alt="not found" />
        </div>

        <div
          className="w-[600px] h-full flex items-center justify-around font-semibold"
          id="pages"
        >
          <div
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            className="w-[90px]"
          >
            <NavLink
              to="/"
              className="flex"
              id="underline-animate"
              onClick={closeAllDropdowns}
            >
              Home
              <FaAngleDown className="mt-[5px] ml-1" />
            </NavLink>
            {dropdownVisible && HomeMenu()}
          </div>
          <div
            onMouseEnter={() => setShopdownVisible(true)}
            onMouseLeave={() => setShopdownVisible(false)}
            className="w-[90px]"
          >
            <a className="flex" id="underline-animate">
              Shop
              <FaAngleDown className="mt-[5px] ml-1" />
            </a>
            {shopdownVisible && ShopMenu()}
          </div>
          <div
            onMouseEnter={() => setProductdownVisible(true)}
            onMouseLeave={() => setProductdownVisible(false)}
            className="w-[90px]"
          >
            <a className="flex" id="underline-animate">
              Products
              <FaAngleDown className="mt-[5px] ml-1" />
            </a>
            {productdownVisible && ProductMenu()}
          </div>
          <div
            onMouseEnter={() => setBlogdownVisible(true)}
            onMouseLeave={() => setBlogdownVisible(false)}
            className="w-[90px]"
          >
            <a className="flex" id="underline-animate">
              Blog
              <FaAngleDown className="mt-[5px] ml-1" />
            </a>
            {blogdownVisible && BlogMenu()}
          </div>
          <div
            onMouseEnter={() => setPagedownVisible(true)}
            onMouseLeave={() => setPagedownVisible(false)}
            className="w-[90px]"
          >
            <a className="flex" id="underline-animate">
              Page
              <FaAngleDown className="mt-[5px] ml-1" />
            </a>
            {pagedownVisible && PageMenu()}
          </div>
        </div>

        <div
          className="w-[190px] h-full flex justify-around items-center text-[22px]"
          id="icons"
        >
          <NavLink to="/login" className="icon2 text-red">
            <FaUser />
          </NavLink>
          <NavLink to="/wishlist" className="icon3 text-red">
            <FaHeart />
          </NavLink>
          <NavLink to="/cart" className="icon4 text-red">
            <FaShoppingBasket />
          </NavLink>
        </div>
      </div>

      {isOpen && isMobile && (
        <div className="menu-toggle">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              {/* <li><NavLink to="/shop" onClick={toggleMenu}>Shop List</NavLink></li> */}
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogCard" onClick={toggleMenu}>
                  Blog card{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq2" onClick={toggleMenu}>
                  Faq 2{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/error" onClick={toggleMenu}>
                  Page 404
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div
        className="w-full h-[80px] fixed bottom-0 flex justify-around bg-white z-20"
        id="header-footer"
      >
        {/* Footer content */}
        <div
          className="w-full h-[80px] fixed bottom-0 flex justify-around bg-white z-20"
          id="header-footer"
        >
          <NavLink
            to="/shop"
            className="w-24 h-full flex flex-col justify-center items-center text-red"
          >
            <FaGripVertical className="text-[30px]" />
            <p>Shop</p>
          </NavLink>
          <NavLink
            to="/login"
            className="w-24 h-full flex flex-col justify-center items-center text-red"
          >
            <FaUser className="text-[30px]" />
            <p>Account</p>
          </NavLink>
          <NavLink
            to="/wishlist"
            className="w-24 h-full flex flex-col justify-center items-center text-red"
          >
            <FaHeart className="text-[30px]" />
            <p>Wishlist</p>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
