import React from 'react';
import Footerlogo from "../assets/asset 0.svg";
import { FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    
    <footer className="bg-black text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold font-sana-seriDm   ">Sign up for our newsletter!</h2>
            <p className="mt-4  text-gray-400">Be the first to know about new flavors and more</p>
          </div><br />


          <div className="custom-search font-Kalnia"> 
  <input type="text" className="custom-search-input" placeholder="Your Email..."/> 
  <button className="custom-search-botton font-Kalnia" type="submit">Subscribe</button>   
</div>

      
 
        </div>

        <div className="pt-32 md:mt-0 flex justify-between items-center">
          <div className="flex left-0 space-x-5 items-center">
            <div className="mb-1 ">
              <img id='logo' className='w-24 text-white' src={Footerlogo} alt="Logo" />
            </div>
            <p className="text-base text-white text-center sm:text-left">
              &copy; 2024 – Jumys. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a className="text-2xl cursor-pointer"><FaFacebook/></a>
            <a className="text-2xl cursor-pointer"><FaUser/></a>
            <a className="text-2xl cursor-pointer"><FaYoutube/></a>
            <a className="text-2xl cursor-pointer"><FaInstagram/></a>
            <a className="text-2xl cursor-pointer"><FaBeer/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;