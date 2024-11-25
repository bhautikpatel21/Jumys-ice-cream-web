import React, { useState } from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';
import Img from '../assets/asset 48.svg';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
      setSubscribed(true);
      setEmail('');
      setError(''); 
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-black text-white w-full relative">
      <div className="px-4 pb-5 pt-14 md:py-5 lg:pb-5 lg:pt-14">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" id='footer-text1'>
            Sign up for our newsletter!
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">
            Be the first to know about new flavors and more
          </p>
          
          {!subscribed ? (
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                className="w-full md:w-80 p-3 border border-gray-600 rounded-lg bg-gray-800 placeholder-gray-400"
                placeholder="Your Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button
                className="mt-4 md:mt-0 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
                type="submit"
                onClick={handleSubscribe} 
              >
                Subscribe
              </button>
            </div>
          ) : (
            <p className="mt-4 text-lg text-green-400">Thank You for subscribing!</p>
          )}
          {error && <p className="mt-2 text-red-500">{error}</p>} {/* Error message */}
        </div>

        <div className='w-full h-px bg-gray-800 opacity-80 mb-8'></div>

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
        </div><br />
        <h1 className='text-red-200'>Created By Bhautik Dudhat 💻</h1>
      </div>
    </footer>
  );
}

export default Footer;
