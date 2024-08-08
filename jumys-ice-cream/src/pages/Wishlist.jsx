import React from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import { FaFacebookF, FaTwitter, FaShareAlt, FaEnvelope } from "react-icons/fa";
import Footer2 from "../Components/Footer2";

const Wishlist = () => {
  return (
    <div className="mt-24">
      <div className="relative w-full h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center text-white mt-28">
            <h1 className="text-4xl font-bold text-black">Wishlist</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Wishlist</span>
            </p>
          </div>
        </div>
      </div>

      {/* Whishlist Sesction */}
      <div className="flex my-20 justify-between px-5">
        <div className="flex flex-col ml-28 space-y-4 ">
          <p className="text-lg mb-3 text-gray-600">There Are No Products On The Wishlist!</p>
          <div className="flex items-center space-x-2">
            <span className="text-lg">Share On:</span>
            <a href="https://www.facebook.com" className="text-blue-700">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-500">
              <FaShareAlt size={24} />
            </a>
            <a href="mailto:" className="text-red-600">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2 mr-11">
          <span className="text-lg">Wishlist Link:</span>
          <input
            type="text"
            value="https://wpbingosite.com/wordpress/jumystore"
            readOnly
            className="border rounded-xl px-4 py-3  w-96"
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "https://wpbingosite.com/wordpress/jumystore"
              )
            }
            className="bg-black text-white rounded-full px-8 py-3"
          >
            Copy
          </button>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Wishlist;