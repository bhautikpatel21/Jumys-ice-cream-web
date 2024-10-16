import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaEye, FaCompressAlt } from 'react-icons/fa';
import PaymentMethodImg from "../assets/paymentMethod.png";

// Product 1 
import img1 from "../assets/product-1-1.webp";
import img2 from "../assets/product-1-2.webp";
import img3 from "../assets/product-1-3.webp";
import img4 from "../assets/product-1-4.webp";

// Product 2
import img5 from "../assets/product-2-1.webp";
import img6 from "../assets/product-2-2.jpg";
import img7 from "../assets/product-2-3.webp";
import img8 from "../assets/product-2-4.webp";

// Product 3
import img9 from "../assets/product-3-1.webp";
import img10 from "../assets/product-3-2.webp";
import img11 from "../assets/product-3-3.webp";
import img12 from "../assets/product-3-4.webp";

// product 4
import img13 from "../assets/product-4-1.webp";
import img14 from "../assets/product-4-2.webp";
import img15 from "../assets/product-4-3.webp";
import img16 from "../assets/product-4-4.webp";

// Product 5
import img17 from "../assets/product-5-1.webp";
import img18 from "../assets/product-5-2.webp";
import img19 from "../assets/product-5-3.webp";
import img20 from "../assets/product-5-4.webp";

// Product 6
import img21 from "../assets/product-6-1.webp";
import img22 from "../assets/product-6-2.webp";
import img23 from "../assets/product-6-3.webp";
import img24 from "../assets/product-6-4.webp";

// Product 7
import img25 from "../assets/product-7-1.webp";
import img26 from "../assets/product-7-2.webp";
import img27 from "../assets/product-7-3.webp";
import img28 from "../assets/product-7-4.webp";

// Product 8
import img29 from "../assets/product-8-1.webp";
import img30 from "../assets/product-8-2.webp";
import img31 from "../assets/product-8-3.webp";
import img32 from "../assets/product-8-4.webp";

// Product 9
import img33 from "../assets/product-9-1.webp";
import img34 from "../assets/product-9-2.webp";
import img35 from "../assets/product-9-3.webp";
import img36 from "../assets/product-9-4.webp";

// Product 10
import img37 from "../assets/product-10-1.webp";
import img38 from "../assets/product-10-2.jpg";
import img39 from "../assets/product-10-3.webp";
import img40 from "../assets/product-10-4.webp";

// Product  11
import img41 from "../assets/product-11-1.webp";
import img42 from "../assets/product-11-2.webp";
import img43 from "../assets/product-11-3.webp";
import img44 from "../assets/product-11-4.webp";

// Product 12
import img45 from "../assets/product-12-1.webp";
import img46 from "../assets/product-12-2.webp";
import img47 from "../assets/product-12-3.webp";
import img48 from "../assets/product-12-4.webp";
import img49 from "../assets/product-12-5.webp";
import img50 from "../assets/product-12-6.webp";

// Product 13
import img51 from "../assets/product-13-1.webp";
import img52 from "../assets/product-13-2.webp";
import img53 from "../assets/product-13-3.webp";
import img54 from "../assets/product-13-4.webp";

// Product 14
import img55 from "../assets/product-14-1.webp";
import img56 from "../assets/product-14-2.webp";
import img57 from "../assets/product-14-3.webp";
import img58 from "../assets/product-14-4.webp";

// Product 15
import img59 from "../assets/product-15-1.webp";
import img60 from "../assets/product-15-2.webp";
import img61 from "../assets/product-15-3.webp";
import img62 from "../assets/product-15-4.webp";

// Product 16
import img63 from "../assets/product-16-1.jpg";
import img64 from "../assets/product-16-2.jpg";
import img65 from "../assets/product-16-3.jpg";
import img66 from "../assets/product-16-4.jpg";
import img67 from "../assets/product-16-5.jpg";
import img68 from "../assets/product-16-6.jpg";
import img69 from "../assets/product-16-7.jpg";
import img70 from "../assets/product-16-8.jpg";
import img71 from "../assets/product-16-9.jpg";
import img72 from "../assets/product-16-10.jpg";
import img73 from "../assets/product-16-11.jpg";
import img74 from "../assets/product-16-12.jpg";
import img75 from "../assets/product-16-13.jpg";
import img76 from "../assets/product-16-14.jpg";
import img77 from "../assets/product-16-15.jpg";
import img78 from "../assets/product-16-16.jpg";
import img79 from "../assets/product-16-17.jpg";
import img80 from "../assets/product-16-18.jpg";
import img81 from "../assets/product-16-19.jpg";
import img82 from "../assets/product-16-21.jpg";
import img83 from "../assets/product-16-22.jpg";
import img84 from "../assets/product-16-23.jpg";
import img85 from "../assets/product-16-24.jpg";
import img86 from "../assets/product-16-25.jpg";
import img87 from "../assets/product-16-26.jpg";
import img88 from "../assets/product-16-27.jpg";
import img89 from "../assets/product-16-28.jpg";
import img90 from "../assets/product-16-29.jpg";
import img91 from "../assets/product-16-30.jpg";
import img92 from "../assets/product-16-31.jpg";
import img93 from "../assets/product-16-32.jpg";
import img94 from "../assets/product-16-33.jpg";
import img95 from "../assets/product-16-34.jpg";
import img96 from "../assets/product-16-35.jpg";
import img97 from "../assets/product-16-36.jpg";
import img98 from "../assets/product-16-37.jpg";
import img99 from "../assets/product-16-38.jpg";
import img100 from "../assets/product-16-39.jpg";
import img101 from "../assets/product-16-40.jpg";
import img102 from "../assets/product-16-41.jpg";
import img103 from "../assets/product-16-42.jpg";
import img104 from "../assets/product-16-43.jpg";
import img105 from "../assets/product-16-44.jpg";
import img106 from "../assets/product-16-45.jpg";
import img107 from "../assets/product-16-46.jpg";
import img108 from "../assets/product-16-47.jpg";
import img109 from "../assets/product-16-48.jpg";
import img110 from "../assets/product-16-49.jpg";
import img111 from "../assets/product-16-50.jpg";

// Product 17
import img112 from "../assets/product-17-1.webp";
import img113 from "../assets/product-17-2.webp";
import img114 from "../assets/product-17-3.webp";
import img115 from "../assets/product-17-4.webp";

// Product 18
import img116 from "../assets/product-18-1.webp";
import img117 from "../assets/product-18-2.webp";
import img118 from "../assets/product-18-3.webp";
import img119 from "../assets/product-18-4.webp";

// Product 19
import img120 from "../assets/product-19-1.webp";
import img121 from "../assets/product-19-2.webp";
import img122 from "../assets/product-19-3.webp";
import img123 from "../assets/product-19-4.webp";

// Product 20
import img124 from "../assets/product-20-1.webp";
import img125 from "../assets/product-20-2.webp";
import img126 from "../assets/product-20-3.webp";

// Product 21
import img127 from "../assets/product-21-1.webp";
import img128 from "../assets/product-21-2.webp";
import img129 from "../assets/product-21-3.webp";
import img130 from "../assets/product-21-4.webp";

// Product 22
import img131 from "../assets/product-22-1.webp";
import img132 from "../assets/product-22-2.webp";
import img133 from "../assets/product-22-3.webp";
import img134 from "../assets/product-22-4.webp";

// Product 23
import img135 from "../assets/product-23-1.webp";
import img136 from "../assets/product-23-2.webp";
import img137 from "../assets/product-23-3.webp";
import img138 from "../assets/product-23-4.webp";

// Product 24
import img139 from "../assets/product-24-1.webp";
import img140 from "../assets/product-24-2.webp";
import img141 from "../assets/product-24-3.webp";
import img142 from "../assets/product-24-4.webp";

// Product 25
import img143 from "../assets/product-25-1.jpg";
import img144 from "../assets/product-25-2.jpg";
import img145 from "../assets/product-25-3.jpg";
import img146 from "../assets/product-25-4.jpg";

const ProductCard = () => {
  const [activeImage, setActiveImage] = useState(img1);

  const images = [img1, img2, img3, img4];

  const [quantity, setQuantity] = useState(1);

  const Product = [
    {
      name: "Banana Cream Pudding",
      rev: "1 Review", 
      price: "$12.00", 
      img1: img1, 
      img2: img2,
      img3: img3,
      img4: img4,
      ProductId : 1
    },
    { 
      name: "Blackout Chocolate Cake", 
      rev: "2 Reviews", 
      price: "$12.00", 
      img1: img5, 
      img2: img6,
      img3: img7,
      img4: img8,
      ProductId : 2
    },
    { 
      name: "Brambleberry Crisp", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img9, 
      img2: img10,
      img3: img11,
      img4: img12,
      ProductId : 3
    },
    { 
      name: "Brown Sugar Cinnamon", 
      rev: "0 Reviews", 
      price: "$15.00", 
      img1: img13, 
      img2: img14,
      img3: img15,
      img4: img16,
      ProductId : 4
    },
    { 
      name: "Burnt Orange Dreamsicle", 
      rev: "0 Reviews", 
      price: "$12.00", 
      img1: img17, 
      img2: img18,
      img3: img19,
      img4: img20,
      ProductId : 5
    },
    { 
      name: "Chocolate Mud", 
      rev: "0 Reviews", 
      price: "$15.00", 
      img1: img21, 
      img2: img22,
      img3: img23,
      img4: img24,
      ProductId : 6
    },
    { 
      name: "Cold Brew with Coconut Cream", 
      rev: "0 Reviews", 
      price: "$12.00", 
      img1: img25, 
      img2: img26,
      img3: img27,
      img4: img28,
      ProductId : 7
    },
    {
      name: "Cookies in Cream", 
      rev: "0 Reviews", 
      price: "$13.00", 
      img1: img29, 
      img2: img30,
      img3: img31,
      img4: img32,
      ProductId : 8
    },
    { 
      name: "Cream Puff", 
      rev: "1 Review", 
      price: "$11.00", 
      img1: img33, 
      img2: img34,
      img3: img35,
      img4: img36,
      ProductId : 9
    },
    { 
      name: "Darkest Chocolate", 
      rev: "0 Reviews", 
      price: "$13.00", 
      img1: img37, 
      img2: img38,
      img3: img39,
      img4: img40,
      ProductId : 10
    },
    { 
      name: "Double Dough", 
      rev: "0 Reviews", 
      price: "$10.00", 
      img1: img41, 
      img2: img42,
      img3: img43,
      img4: img44,
      ProductId : 11
    },
    { 
      name: "Frosé Sorbet", 
      rev: "1 Review", 
      price: "$12.00", 
      img1: img45,
      img2: img46,
      img3: img47,
      img4: img48,
      img5: img49,
      img6: img50,
      ProductId : 12
    },
    { 
      name: "Golden Nectar", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img51, 
      img2: img52,
      img3: img53,
      img4: img54,
      ProductId : 13
    },
    { 
      name: "Green Mint Chip", 
      rev: "1 Review", 
      price: "$9.00", 
      img1: img55, 
      img2: img56,
      img3: img57,
      img4: img58,
      ProductId : 14
    },
    { 
      name: "Hot Toddy Sorbet", 
      rev: "0 Review", 
      price: "$12.00", 
      img1: img59, 
      img2: img60,
      img3: img61,
      img4: img62,
      ProductId : 15
    },
    { 
      name: "Pei Apple Crisp", 
      rev: "1 Review", 
      price: "$13.00", 
      img1: img63, 
      img2: img64, 
      img3: img65, 
      img4: img66, 
      img5: img67, 
      img6: img68, 
      img7: img69, 
      img8: img70, 
      img9: img71, 
      img10: img72, 
      img11: img73, 
      img12: img74, 
      img13: img75, 
      img14: img76, 
      img15: img77, 
      img16: img78, 
      img17: img79, 
      img18: img80, 
      img19: img81, 
      img20: img82, 
      img21: img83, 
      img22: img84, 
      img23: img85, 
      img24: img86, 
      img25: img87, 
      img26: img88, 
      img27: img89, 
      img28: img90, 
      img29: img91, 
      img30: img92, 
      img31: img93, 
      img32: img94, 
      img33: img95, 
      img34: img96, 
      img35: img97, 
      img36: img98, 
      img37: img99, 
      img38: img100,
      img39: img101,
      img40: img102,
      img41: img103,
      img42: img104,
      img43: img105,
      img44: img106,
      img45: img107,
      img46: img108,
      img47: img109,
      img49: img110,
      img49: img111,
      ProductId : 16
    },
    { 
      name: "Powdered Jelly Donut", 
      rev: "0 Review", 
      price: "$9.00", 
      img1: img112, 
      img2: img113,
      img3: img114,
      img4: img115,
      ProductId : 17
    },
    { 
      name: "Salty Caramel", 
      rev: "0 Review", 
      price: "$11.00", 
      img1: img116, 
      img2: img117,
      img3: img118,
      img4: img119,
      ProductId : 18
    },
    { 
      name: "Snow Cone Sorbet", 
      rev: "0 Review", 
      price: "$10.00", 
      img1: img120, 
      img2: img121,
      img3: img122,
      img4: img123,
      ProductId : 19
    },
    { 
      name: "Sorbet Street Treats", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img124, 
      img2: img125,
      img3: img126,
      ProductId : 20
    },
    { 
      name: "Sparkling Cherry Pie", 
      rev: "0 Review", 
      price: "$11.00", 
      img1: img127, 
      img2: img128,
      img3: img129,
      img4: img130,
      ProductId : 21
    },
    { 
      name: "Sunshine", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img131, 
      img2: img132,
      img3: img133,
      img4: img134,
      ProductId : 22
    },
    { 
      name: "Tahini Oat Chocolate Cookies", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img135, 
      img2: img136,
      img3: img137,
      img4: img138,
      ProductId : 23
    },
    { 
      name: "Golden Nectar", 
      rev: "1 Review", 
      price: "$10.00", 
      img1: img139, 
      img2: img140,
      img3: img141,
      img4: img142,
      ProductId : 24
    },
    { 
      name: "Zildberry Lavender", 
      rev: "0 Review", 
      price: "$13.00", 
      img1: img143, 
      img2: img144,
      img3: img145,
      img4: img146,
      ProductId : 25
    },

  ];

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
                <div className="flex m-2 gap-2 xl:flex-col">
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

export default ProductCard