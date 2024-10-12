import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaEye, FaCompressAlt } from 'react-icons/fa';

import PaymentMethodImg from "../assets/paymentMethod.png";
import img1 from "../assets/product-8-1.webp"
import img2 from "../assets/product-8-2.webp"
import img3 from "../assets/product-8-3.webp"
import img4 from "../assets/product-8-4.webp"

const ProductCard = () => {
  const [activeImage, setActiveImage] = useState(
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20.webp"
  );

  const images = [
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-1.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-2.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-3.webp",
  ];

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container mx-auto max-w-[1400px] xl px-4 py-1 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-6 flex justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative w-full shrink-0 overflow-hidden rounded-md md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Product gallery"
                      src={activeImage}
                      className="object-cover md:h-[300px] md:w-full lg:w-[675px] lg:h-[628px]"
                      id="mainIMG"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setActiveImage(
                          images[Math.max(images.indexOf(activeImage) - 1, 0)]
                        )
                      }
                    >
                      <ChevronLeft className="w-8 h-8 ml-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImage(
                          images[
                            Math.min(
                              images.indexOf(activeImage) + 1,
                              images.length - 1
                            )
                          ]
                        )
                      }
                    >
                      <ChevronRight className="w-8 h-8 mr-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
                    </button>
                  </div>
                </div>
                <div className="flex  m-2 gap-2 xl:flex-col">
                  {images.map((image, index) => (
                    <div
                      key={image}
                      className={`mr-4 flex w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[118px] lg:h-[118px] hover:border-gray-950 hover:border cursor-pointer items-center justify-center overflow-hidden transition ${
                        activeImage === image ? "border-black" : ""
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img
                        alt={`Product ${index}`}
                        src={image}
                        className="object-cover hover:p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 px-3 flex-col lg:w-[600px] xl:w-[470px] 2xl:w-[480px] lg:h-[702px]">
              <div className="pb-2">
                <h2 className="text-lg pb-1 mt-4 font-sans font-semibold md:text-xl xl:text-2xl">
                  Cold Brew with Coconut Cream
                </h2>
                <p className="text-2xl mb-2 font-semibold font-Kalnia">
                  $12.00
                </p>
                <hr />
              </div>

              <div className="mb-4 mt-2">
                <div className="flex items-center text-lg mb-4">
                  <FaEye />
                  <p className="ml-2 text-base text-gray-500">
                    37 People Are Viewing This Right Now
                  </p>
                </div>

                <p className="text-gray-400 mb-4">
                  Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse
                  Cillum Dolore Eu Fugiat Nulla Pariatur.
                </p>

                <div className="flex items-center space-x-2">
                  <button
                    className="px-4 py-2 rounded-full border text-lg hover:text-[#ff0000]"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="px-4 py-2 rounded-full border text-lg hover:text-[#ff0000]"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 bg-black w-full mt-4 py-2 text-white rounded-full hover:bg-[#ff0000]">
                  Add to Cart
                </button>
              </div>

              <div className="flex space-x-4 mb-4">
                <button className="flex-1 border py-2 rounded-full text-black hover:text-white bg-white hover:bg-[#ff0000]">
                  Buy Now
                </button>
              </div>

              {/* Icons Section */}
              <div className="m-1 p-1 space-x-1 flex justify-center">
                <div className="flex flex-row">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
                  >
                    <FaHeart />
                  </a>
                  <button className="py-2 px-2 rounded-full text-black">
                    Browse Wishlist
                  </button>
                </div>

                <div className="flex flex-row">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
                  >
                    <FaCompressAlt />
                  </a>
                  <button className="py-2 px-2 rounded-full text-black">
                    Compare
                  </button>
                </div>

                <div className="flex flex-row">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
                  >
                    <FaShareAlt />
                  </a>
                  <button className="py-2 px-2 rounded-full text-black">
                    Share
                  </button>
                </div>
              </div>

              {/* Payment & Shipping Info */}
              <div className="mb-4 bg-gray-200 p-4">
                <div className="flex space-x-2 mt-2 justify-center">
                  <img src={PaymentMethodImg} alt="payment method" />
                </div>
                <p className="text-black text-center mt-2">
                  Guaranteed Checkout
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  Free Worldwide Shipping On All Orders Over $100
                </p>
                <p className="text-gray-600">
                  Delivers In: 3-7 Working Days{" "}
                  <a
                    href="#"
                    className="text-black cursor-pointer underline hover:text-[#ff0000]"
                  >
                    Shipping & Return
                  </a>
                </p>
              </div>
              <div className="text-gray-600 flex">
                Categories:
                <div className="space-x-1">
                  <span className="text-black hover:text-[#ff0000] cursor-pointer">
                    Chocolate
                  </span>
                  <span className="text-black hover:text-[#ff0000] cursor-pointer">
                    Milkshakes
                  </span>
                  <span className="text-black hover:text-[#ff0000] cursor-pointer">
                    Strawberry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;