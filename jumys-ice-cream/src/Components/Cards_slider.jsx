import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import {
  FaLessThan,
  FaGreaterThan,
} from "react-icons/fa";

import item1 from "../assets/asset 20.webp";
import item2 from "../assets/asset 21.webp";
import item3 from "../assets/asset 22.jpeg";
import item4 from "../assets/asset 23.jpeg";
import item5 from "../assets/asset 24.webp";
import item6 from "../assets/asset 25.webp";
import item7 from "../assets/asset 26.webp";
import item8 from "../assets/asset 27.webp";
import item9 from "../assets/asset 28.webp";
import item10 from "../assets/asset 29.webp";
import item11 from "../assets/asset 30.webp";
import item12 from "../assets/asset 31.webp";
import item13 from "../assets/asset 32.webp";
import item14 from "../assets/asset 33.jpeg";
import item15 from "../assets/asset 34.webp";
import item16 from "../assets/asset 35.jpeg";
import ProductCard from "./Card";
import { NavLink,Outlet } from "react-router-dom";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const List_Renderingg = () => {
  const [productData] = useState([
    {
      name: "Sunshine",
      price: 1000,
      img: item1,
      img2: item2,
      re: "1 Review",
      ProductId: 22
    },
    {
      name: "Poe Apple Crisp",
      price: 1300,
      img: item3,
      img2: item4,
      re: "1 Review",
      ProductId: 16
    },
    {
      name: "Cookies In Cream",
      price: 1300,
      img: item5,
      img2: item6,
      re: "0 Review",
      ProductId: 8
    },
    {
      name: "Chocolate Mud",
      price: 1500,
      img: item7,
      img2: item8,
      re: "0 Review",
      ProductId: 6
    },
    {
      name: "Hot Toddy Sorbet",
      price: 1200,
      img: item9,
      img2: item10,
      re: "0 Review",
      ProductId: 15
    },
    {
      name: "Sorbet Street Treats",
      price: 1000,
      img: item11,
      img2: item12,
      re: "1 Review",
      ProductId: 20
    },
    {
      name: "Darkest Chocolate",
      price: 1300,
      img: item13,
      img2: item14,
      re: "1 Review",
      ProductId: 10
    },
    {
      name: "Blackout Chocolate Cake",
      price: 1200,
      img: item15,
      img2: item16,
      re: "1 Review",
      ProductId: 2
    },
  ]);

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container w-full pt-10 xl:pl-10 2xl:pl-24 overflow-hidden">
      <Button
        onClick={prevSlide}
        className="carousel-button prev-button z-20 w-14 h-14 rounded-full flex justify-center items-center ml-16"
      >
        <FaLessThan className="w-5 h-5" />
      </Button>
      <Slider ref={sliderRef} {...sliderSettings} className="carousel-slider">
        {productData.map((product) => (
            <div key={product.ProductId}>
                    <NavLink to={`/product/${product.ProductId}`} className="hover:text-black">
                        <ProductCard
                            img1={product.img}
                            img2={product.img2}
                            name={product.name}
                            review={product.re}
                            price={`$${(product.price / 100).toFixed(2)}`}
                        />
                    </NavLink>
                </div>
        ))}
      </Slider>
      <Button
        onClick={nextSlide}
        className="carousel-button next-button w-14 h-14 rounded-full flex justify-center items-center mr-16"
      >
        <FaGreaterThan className="w-5 h-5" />
      </Button>
      <Outlet/>
    </div>
  );
};

export default List_Renderingg;
