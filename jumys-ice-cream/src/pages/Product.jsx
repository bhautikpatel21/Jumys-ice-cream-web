import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Footer2 from "../Components/Footer2";
import HomeProductCardMid from "../Components/Card";

const Product = () => {
  const [activeTab, setActiveTab] = useState('reviews');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ProductCard />

      <div className="my-5">
        <div className="flex justify-center border-b border-gray-200" id="nav-tab">
          <a
            className={`nav-item nav-link cursor-pointer px-4 py-2 text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300 text-xl font-Kalnia ${activeTab === 'description' ? 'text-[#000] border-blue-600' : ''}`}
            onClick={() => handleTabClick('description')}
          >
            Description
          </a>
          <a
            className={`nav-item cursor-pointer nav-link px-4 py-2 text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300 text-xl font-Kalnia ${activeTab === 'reviews' ? 'text-[#000] border-blue-600' : ''}`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews
          </a>
        </div>

        <div className="tab-content m-3" id="nav-tabContent">
          {activeTab === 'description' && (
            <div className="p-4" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
            <p className="decoration-none ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
          
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="tab-pane fade show active p-4" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
              <div>
              </div>
              <div className="reviews-content">
                <h2 className="text-xl font-bold mb-4">Reviews</h2>
                <p>There Are No Reviews Yet.</p>
                <button className="rounded-full bg-gray-800 hover:bg-[#ff0000] duration-700 text-white px-4 py-2 mt-4">
                  Write a review
                </button>
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>

<div className="flex justify-center my-5">
  <h1 className="text-3xl font-Kalnia">Releted Product</h1>
</div>

<div className="gap-5">

<HomeProductCardMid/>
</div>

<div className="container text-center flex justify-center my-5">
  <h1 className="text-3xl font-Kalnia">Recently Viewed Products</h1>
</div>

<HomeProductCardMid/>

<div className="mt-5"></div>
      <Footer2 />
    </div>
  );
};

export default Product;