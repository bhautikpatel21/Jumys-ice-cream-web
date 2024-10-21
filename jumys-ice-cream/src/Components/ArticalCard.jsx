import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import assent1 from '../assets/asset 1.jpeg';
import assent2 from '../assets/asset 2.jpeg';
import assent3 from '../assets/asset 3.jpeg';
import assent45 from '../assets/asset 45.jpeg';
import assent46 from '../assets/asset 46.jpeg';
import assent47 from '../assets/asset 47.jpeg';

const ArticleCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articles = [
    {
      image: assent1,
      title: "Top Ice Cream Flavors To Sell This Year",
      date: "April 3, 2024",
    },
    {
      image: assent2,
      title: "The Art Of Crafting Gourmet Ice Cream",
      date: "April 2, 2024",
    },
    {
      image: assent3,
      title: "Ice Cream Trends That Drive More Sales",
      date: "March 8, 2024",
    },
    {
      image: assent45,
      title: "Post Format Video Blogs Dessert Recipes",
      date: "February 8, 2024",
    },
    {
      image: assent46,
      title: "Sustainable Packaging Flavor Trends",
      date: "February 4, 2024",
    },
    {
      image: assent47,
      title: "How To Market Seasonal Flavors",
      date: "December 10, 2023",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + 3).concat(
    articles.slice(0, Math.max(0, currentIndex + 3 - articles.length))
  );

  return (
    <div className='flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8 drop-shadow-2xl'>
      <button
        className="bg-white hover:bg-red-500 rounded-full w-10 h-10 p-2 shadow text-gray-900 hover:text-white"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      <div className='flex w-full justify-center items-center overflow-x-auto hide-scrollbar space-x-4'>
        {visibleArticles.map((article, index) => (
          <div key={index} className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
                src={article.image}
                alt={article.title}
              />
            </div>

            <div className="p-4">
              <div className="text-gray-500 text-sm font-medium">
                BUSINESS TIPS <span className="text-red-500 mx-2">•</span>
                <span className="text-red-500 mx-2">{article.date}</span>
              </div>
              <h2 className="font-serif home-slider-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 font-semibold  text-black hover:text-red-500">
                {article.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-white hover:bg-red-500 rounded-full w-10 h-10 p-2 shadow text-gray-900 hover:text-white"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ArticleCard;
