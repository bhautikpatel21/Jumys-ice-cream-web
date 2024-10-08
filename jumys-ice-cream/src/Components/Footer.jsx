import React from 'react';
import Footerlogo from "../assets/asset 0.svg";
import { FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';
import Img from '../assets/asset 48.svg';

function Footer() {
  return (
    <footer className="bg-black text-white w-full relative">
      <div className="px-4 py-10 md:py-16 lg:py-24">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" id='footer-text1'>
            Sign up for our newsletter!
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">
            Be the first to know about new flavors and more
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              className="w-full md:w-80 p-3 border border-gray-600 rounded-lg bg-gray-800 placeholder-gray-400"
              placeholder="Your Email..."
            />
            <button
              className="mt-4 md:mt-0 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-px bg-gray-800 opacity-80 mb-8'></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-6">
            <img id='logo' className='w-20 md:w-24' src={Img} alt="Logo" />
            <p className="text-sm md:text-base text-center md:text-left">
              &copy; 2024 - Jumys. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xl md:text-2xl hover:text-red-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl md:text-2xl hover:text-red-500 transition duration-300">
              <FaUser />
            </a>
            <a href="#" className="text-xl md:text-2xl hover:text-red-500 transition duration-300">
              <FaYoutube />
            </a>
            <a href="#" className="text-xl md:text-2xl hover:text-red-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl md:text-2xl hover:text-red-500 transition duration-300">
              <FaBeer />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
