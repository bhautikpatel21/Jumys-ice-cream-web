import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import { FaFacebookF, FaTwitter, FaShareAlt, FaEnvelope } from "react-icons/fa";
import Footer2 from "../Components/Footer2";
import ScrollToTopButton from "../Components/TopButton";

const Wishlist = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${isPageLoaded ? 'fade-in' : ''}`}>
      <div className="relative w-full h-60 md:h-[400px]">
        <img
          src={backgroundImage}
          alt="Wishlist Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 py-6">
            <h1 className="text-2xl md:text-4xl font-bold text-black">Wishlist</h1>
            <p className="mt-2 text-sm md:text-base">
              <a href="#" className="text-black hover:text-red-500">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Wishlist</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col md:flex-row justify-between px-4 md:px-10 my-10 md:my-20 ${isPageLoaded ? 'slide-up' : ''}`}>
        <div className="flex flex-col space-y-4 mb-8 md:mb-0 md:w-1/2">
          <p className="text-base md:text-lg text-gray-600">There Are No Products On The Wishlist!</p>
          <div className="flex items-center space-x-3">
            <span className="text-base md:text-lg">Share On:</span>
            <a href="https://www.facebook.com" className="text-blue-700 hover:text-blue-900">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <FaShareAlt size={24} />
            </a>
            <a href="mailto:" className="text-red-600 hover:text-red-800">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 md:w-1/2">
          <span className="text-base md:text-lg">Wishlist Link:</span>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              value="https://wpbingosite.com/wordpress/jumystore"
              readOnly
              className="border rounded-xl px-4 py-2 md:py-3 flex-1"
            />
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "https://wpbingosite.com/wordpress/jumystore"
                )
              }
              className="bg-black text-white rounded-full px-4 py-2 md:px-8 md:py-3 hover:bg-red-500 transition duration-300"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <Footer2 />
      <ScrollToTopButton/>
    </div>
  );
};

export default Wishlist;
