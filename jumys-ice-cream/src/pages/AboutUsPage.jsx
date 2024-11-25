import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import iceCreamImage1 from '../assets/asset 64.jpg';
import iceCreamImage2 from '../assets/asset 65.jpg';
import { ArrowRight } from 'lucide-react';
import avtar1 from "../assets/avatar-1.jpg";
import avtar2 from "../assets/avatar-2.jpg";
import avtar3 from "../assets/avatar-3.jpg";
import ScrollToTopButton from "../Components/TopButton";
import ArticleCard from "../Components/ArticalCard";
import Footer2 from "../Components/Footer2";
import NumberCounter from "../Components/NumberCounter";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowCounter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="relative w-full h-auto">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-center text-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold" id="about-page-name">About Us</h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              <a href="#" className="text-black hover:text-red-500">Home</a> <span className="text-black">/</span>
              <span className="text-red-500">About Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Manufacture 1 */}
      <div className="flex flex-col md:flex-row items-center my-5 py-10 px-5 md:px-10 lg:px-20 gap-4 md:gap-10">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-2xl font-semibold mb-2" id="sweet">Sweet Escape</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" id="manufacture">Manufacture</h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            Once the ingredients have cooled enough, it's time to pour them into molds and freeze in a brine bath. After that, the ice cream sticks are dried and packaged in the freezer in square boxes. From here, this cool ice cream is ready to be delivered to visitors...
          </p>
          <button className="bg-red-600 hover:bg-black text-white px-6 py-3 rounded-full flex items-center duration-300 font-medium">
            View More <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden">
          <img src={iceCreamImage1} alt="Ice Cream" className="w-full h-auto object-cover hover:scale-105 duration-700" />
        </div>
      </div>

      {/* Number Counter */}
      {showCounter && <NumberCounter startCounting={showCounter} />}

      {/* Manufacture 2 */}
      <div className="flex flex-col md:flex-row items-center my-5 py-10 px-5 md:px-10 lg:px-20 gap-4 md:gap-10">
        <div className="w-full md:w-1/2 overflow-hidden">
          <img src={iceCreamImage2} alt="Ice Cream" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-2xl font-semibold mb-2" id="sweet">Frozen Joy</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" id="manufacture">History Begin</h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            On hot summer days like today, in addition to a glass of cool beverage, a glass of ice cream can also help relieve some of the heat. Ice cream is popular not only among children but also loved by many people of many different ages…
          </p>
          <button className="bg-red-600 hover:bg-black text-white px-6 py-3 rounded-full flex items-center duration-300 font-medium">
            View More <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="text-center py-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-red-600 text-3xl font-serif" id="sweet">Testimonial</h2>
        <h1 className="text-black text-4xl md:text-5xl font-serif mt-2" id="manufacture">Ice Cream Shop</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-5 py-10">
        {/* 1st card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar1} alt="Anana" />
          </div>
          <h3 className="text-xl font-bold">Anana</h3>
          <p className="text-gray-600">Photographer</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “I absolutely love this place! The variety of flavors is impressive, and each scoop is packed with deliciousness....”
          </p>
        </div>
        {/* 2nd card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar2} alt="Ana Smith" />
          </div>
          <h3 className="text-xl font-bold">Ana Smith</h3>
          <p className="text-gray-600">CEO & Founder</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.”
          </p>
        </div>
        {/* 3rd card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar3} alt="Linda" />
          </div>
          <h3 className="text-xl font-bold">Linda</h3>
          <p className="text-gray-600">Designer</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “I have never been disappointed, either for myself or as gifts, the pieces are lovely, reasonably priced, and shipped quickly.”
          </p>
        </div>
      </div>

      <div className="text-center py-10 px-5 md:px-10 lg:px-20">
        <p className="text-red-600 text-3xl" id="sweet">Our News</p>
        <p className="text-black text-4xl md:text-5xl mt-2" id="manufacture">Testiest Updates</p>
      </div>

      <ArticleCard />
      <Footer2 />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUs;
