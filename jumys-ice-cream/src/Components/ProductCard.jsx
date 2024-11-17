import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaEye, FaCompressAlt } from 'react-icons/fa';
import PaymentMethodImg from "../assets/paymentMethod.png";
import ProductData from '../Products.json';

const ProductCard = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const foundProduct = ProductData.find(
      (p) => p.ProductId === parseInt(productId)
    );

    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.imageList[0]); // Set the first image as active
      setImages(foundProduct.imageList);
    }
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container mx-auto max-w-[1400px] xl px-4 py-1 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* lg:flex-col lg:w-[140px] lg:h-[620px] */}
          <div id="sideImages" className="flex flex-row lg:flex-col lg:w-[140px] lg:h-[620px] overflow-x-auto gap-2 m-2">
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[118px] lg:h-[118px] cursor-pointer items-center justify-center overflow-hidden transition ${activeImage === image ? "border-black border-2" : ""}`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    alt={`Product ${index}`}
                    src={image}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6 flex justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
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
                    onClick={() => setActiveImage(images[Math.max(images.indexOf(activeImage) - 1, 0)])}
                  >
                    <ChevronLeft className="w-8 h-8 ml-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
                  </button>
                  <button
                    onClick={() => setActiveImage(images[Math.min(images.indexOf(activeImage) + 1, images.length - 1)])}
                  >
                    <ChevronRight className="w-8 h-8 mr-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
                  </button>
                </div>
              </div>
            </div>



            <div className="flex shrink-0 px-1 flex-col lg:w-[500px] xl:w-[470px] 2xl:w-[480px] lg:h-[702px]">
              <div className="pb-2">
                <h2 className="text-lg pb-1 mt-4 font-serif font-semibold md:text-xl xl:text-2xl">
                  {product.name}
                </h2>
                <p className="text-2xl mb-2 font-semibold font-Kalnia">
                  {product.price}
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
                </div><br />

                <div className="mb-4 mt-2">
                  <div className="flex items-center space-x-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <div
                        key={size}
                        className={`w-10 h-10 flex justify-center items-center border border-black cursor-pointer hover:bg-red-600 hover:text-white hover:duration-500 ${
                          product && product.size && product.size.includes(size.toLowerCase()) ? (selectedSize === size ? 'bg-red-600 text-white' : '') : 'opacity-50 border-gray-400 cursor-not-allowed'
                        }`}
                        onClick={() => {
                          if (product && product.size && product.size.includes(size.toLowerCase())) {
                            setSelectedSize(size); 
                          }
                        }}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
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
              <div className="text-gray-600 flex gap-3">
                Categories:
                <div className="space-x-1 gap-4 flex">
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
