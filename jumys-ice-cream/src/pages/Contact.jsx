import React from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import Map from "../Components/Map";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import Footer2 from "../Components/Footer2";
import ScrollToTopButton from "../Components/TopButton";

function Contact() {
  return (
    <div>
      <div>
        <div className="relative w-full h-[430px]">
          <img
            src={backgroundImage}
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center mt-13">
            <div className="text-center text-white">
              <h1 className="text-[50px] font-bold text-black mt-10" id="conPage-t1">Contact</h1>
              <p className="mt-2">
                <a href="#" className="text-[#000] hover:text-[#ff0000]">
                  Home
                </a>{" "}
                <span className="text-black">/</span>
                <span className="text-red-500">Contact</span>
              </p>
            </div>
          </div>
        </div>
      </div>

<Map/>

{/* Get Informations */}
<div className="mt-5 flex flex-row w-full items-center justify-center pl-32 pt-20">
      <div className="w-full h-[480px] px-5">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold font-serif mb-4">Get In Touch</h2>
          <div className="grid gap-1 text-lg font-serif">
            <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
            <p>(02) 6188 8062</p>
            <p>Jumysicecream@Gmail.Com</p>
          </div>
          <div className="mt-9 font-serif">
            <p>Open Hours:</p>
            <p className="text-gray-500 mt-3">Contact Our Customer Happiness Team</p>
            <p className="text-gray-500">Monday-Friday 9am-5pm</p>
          </div>

            <p className="font-semibold font-mono text-xl my-2">Follow us:</p>
          <div className="flex ">
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
            <FaFacebook/>
            </a>
         
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaTwitter/>
            </a>

            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaYoutube/>
            </a>
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaInstagram/>
            </a>
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <BiLogoBehance/>
            </a>
            

          </div>
        </div>
      </div>

      <div className=" w-full h-[480px] ">
        <form className="w-full ">
          <div className="flex w-full">
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                placeholder="Your Name *"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="email"
                placeholder="Your Email *"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-full"
              type="text"
              placeholder="Number Phone *"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-2xl"
              placeholder="Comment or Message *"
              rows="7"
            ></textarea>
          </div>
          <div className="">
            <button className="px-10 py-3 bg-[#ff0000] hover:bg-[#000] text-[#fff]  duration-700 font-bold rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
<br />

{/* Footer 2 */}
<Footer2/>
<ScrollToTopButton/>
    </div>
  );
}

export default Contact;