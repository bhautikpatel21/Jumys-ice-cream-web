import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar, FaLessThan, FaGreaterThan } from 'react-icons/fa';

// Import images
import item1 from '../assets/asset 20.webp';
import item2 from '../assets/asset 21.webp';
import item3 from '../assets/asset 22.jpeg';
import item4 from '../assets/asset 23.jpeg';
import item5 from '../assets/asset 24.webp';
import item6 from '../assets/asset 25.webp';
import item7 from '../assets/asset 26.webp';
import item8 from '../assets/asset 27.webp';
import item9 from '../assets/asset 28.webp';
import item10 from '../assets/asset 29.webp';
import item11 from '../assets/asset 30.webp';
import item12 from '../assets/asset 31.webp';
import item13 from '../assets/asset 32.webp';
import item14 from '../assets/asset 33.jpeg';
import item15 from '../assets/asset 34.webp';
import item16 from '../assets/asset 35.jpeg';

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

// const IconMenu = () => {
//     return (
//       <>
//     <Card.Body className='z-50 -mt-[310px] ml-64 text-[20px] h-10 '>
//         <div className="flex gap-4 mt-4 z-40 flex-col">

//           <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2' >
//           <Button variant="outline-secondary">
//             <FaShoppingCart/>
//           </Button>
//           </div>

//           <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
//           <Button variant="outline-secondary">
//             <FaSearch />
//           </Button>
//           </div>

//           <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
//           <Button variant="outline-secondary">
//             <FaHeart />
//           </Button>
//           </div>

//           <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
//           <Button variant="outline-secondary">
//             <FaShareAlt />
//           </Button>
//           </div>
//         </div>
//       </Card.Body>
//       {/* <h1> Bhautik Dudhat </h1> */}
//       </>
//     )
//   }

const List_Renderingg = () => {
    const [productData] = useState([
        {
            name: 'Sunshine',
            price: 1000,
            img: item1,
            img2: item2,
            re : '1 Review'
        },
        {
            name: 'Poe Apple Crisp',
            price: 1300,
            img: item3,
            img2: item4,
            re : '1 Review'
        },
        {
            name: 'Cookies In Cream',
            price: 1300,
            img: item5,
            img2: item6,
            re : '0 Review'
        },
        {
            name: 'Chocolate Mud',
            price: 1500,
            img: item7,
            img2: item8,
            re : '0 Review'
        },
        {
            name: 'Hot Toddy Sorbet',
            price: 1200,
            img: item9,
            img2: item10,
            re : '0 Review'
        },
        {
            name: 'Sorbet Street Treats',
            price: 1000,
            img: item11,
            img2 : item12,
            re : '1 Review'
        },
        {
            name: 'Darkest Chocolate',
            price: 1300,
            img: item13,
            img2 : item14,
            re : '1 Review'
        },
        {
            name: 'Blackout Chocolate Cake',
            price: 1200,
            img: item15,
            img2 : item16,
            re : '1 Review'
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
        <div className="carousel-container w-full">
            <Button onClick={prevSlide} className="carousel-button prev-button z-20  w-14 h-14 rounded-full flex justify-center items-center ml-24"><FaLessThan className="w-5 h-5"/></Button>
            <Slider ref={sliderRef} {...sliderSettings} className="carousel-slider">
                {productData.map((product) => (
                    <div key={product.name} className="">
                        <Card className="w-[350px] rounded-md border">
                            <div className='w-[350px] h-[300px]'>
                                <img src={product.img} alt={product.name} className='w-full h-full object-cover' />
                            </div>
                            <Card.Body>
                                <Card.Title className='mt-3 font-semibold text-[25px]'>{product.name}</Card.Title>
                                <Card.Text>
                                    <div className="flex mt-2">
                                        <div className='flex'>
                                            {[...Array(5)].map((star, index) => (
                                                <FaStar key={index} color="red" />
                                            ))}
                                        </div>
                                        <div>
                                            <span className="-mt-1 ml-5 absolute">{product.re}</span>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='mt-2'>
                                    <strong>${(product.price / 100).toFixed(2)}</strong>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                ))}
            </Slider>
            <Button onClick={nextSlide} className="carousel-button next-button  w-14 h-14 rounded-full border-none flex justify-center items-center mr-24"><FaGreaterThan  className="w-5 h-5"/></Button>
        </div>
    );
}

export default List_Renderingg;
