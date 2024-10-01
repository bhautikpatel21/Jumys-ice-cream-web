import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import item1 from '../assets/asset 20.webp';
import item2 from '../assets/asset 21.webp';
import img1B from "../assets/asset 66.webp";
import img1A from "../assets/asset 67.webp";
import img2A from "../assets/asset 34.webp";
import img2B from "../assets/asset 35.jpeg";
import img3A from "../assets/asset 68.webp";
import img3B from "../assets/asset 69.webp";
import img4A from "../assets/asset 70.webp";
import img4B from "../assets/asset 71.webp";
import img5A from "../assets/asset 72.webp";
import img5B from "../assets/asset 73.webp";
import img6A from "../assets/asset 74.webp";
import img6B from "../assets/asset 75.webp";
import img7A from "../assets/asset 76.webp";
import img7B from "../assets/asset 77.webp";
import img8A from "../assets/asset 78.webp";
import img8B from "../assets/asset 79.webp";
import img9A from "../assets/asset 80.webp";
import img9B from "../assets/asset 81.webp";
import img10A from "../assets/asset 82.webp";
import img10B from "../assets/asset 83.jpeg";
import img11A from "../assets/asset 84.webp";
import img11B from "../assets/asset 85.webp";
import img12A from "../assets/asset 86.webp";
import img12B from "../assets/asset 87.webp";
import img13A from "../assets/asset 88.webp";
import img13B from "../assets/asset 89.webp";
import img14A from "../assets/asset 90.webp";
import img14B from "../assets/asset 91.webp";
import img15A from "../assets/asset 92.webp";
import img15B from "../assets/asset 93.webp";
import img16A from "../assets/asset 94.jpeg";
import img16B from "../assets/asset 95.jpeg";
import img17A from "../assets/asset 96.webp";
import img17B from "../assets/asset 97.webp";
import img18A from "../assets/asset 98.webp";
import img18B from "../assets/asset 99.webp";
import img19A from "../assets/asset 101.webp";
import img19B from "../assets/asset 102.jpeg";
import img20A from "../assets/asset 103.webp";
import img20B from "../assets/asset 104.webp";
import img21A from "../assets/asset 105.webp";
import img21B from "../assets/asset 106.webp";
import img22A from "../assets/asset 107.webp";
import img22B from "../assets/asset 108.webp";
import img23A from "../assets/asset 109.webp";
import img23B from "../assets/asset 110.webp";
import img24A from "../assets/asset 111.webp";
import img24B from "../assets/asset 112.webp";
import img25A from "../assets/asset 113.jpeg";
import img25B from "../assets/asset 114.jpeg";

const ShopProduct = () => {
    const [image, setImage] = useState(item1);
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);

    const Product = [
        {
            name: "Banana Cream Pudding",
            rev: "1 Review",
            price: "$12.00",
            img1: img1A,
            img2: img1B
        },
        {
            name: "Blackout Chocolate Cake",
            rev: "2 Reviews",
            price: "$12.00",
            img1: img2A,
            img2: img2B
        },
        {
            name: "Brambleberry Crisp",
            rev: "1 Review",
            price: "$10.00",
            img1: img3A,
            img2: img3B
        },
        {
            name: "Brown Sugar Cinnamon",
            rev: "0 Reviews",
            price: "$15.00",
            img1: img4A,
            img2: img4B
        },
        {
            name: "Burnt Orange Dreamsicle",
            rev: "0 Reviews",
            price: "$12.00",
            img1: img5A,
            img2: img5B
        },
        {
            name: "Chocolate Mud",
            rev: "0 Reviews",
            price: "$15.00",
            img1: img6A,
            img2: img6B
        },
        {
            name: "Cold Brew with Coconut Cream",
            rev: "0 Reviews",
            price: "$12.00",
            img1: img7A,
            img2: img7B
        },
        {
            name: "Cookies in Cream",
            rev: "0 Reviews",
            price: "$13.00",
            img1: img8A,
            img2: img8B
        },
        {
            name: "Cream Puff",
            rev: "1 Review",
            price: "$11.00",
            img1: img9A,
            img2: img9B
        },
        {
            name: "Darkest Chocolate",
            rev: "0 Reviews",
            price: "$13.00",
            img1: img10A,
            img2: img10B
        },
        {
            name: "Double Dough",
            rev: "0 Reviews",
            price: "$10.00",
            img1: img11A,
            img2: img11B
        },
        {
            name: "Frosé Sorbet",
            rev: "1 Review",
            price: "$12.00",
            img1: img12A,
            img2: img12B
        },


        {
            name: "Golden Nectar",
            rev: "1 Review",
            price: "$10.00",
            img1: img13A,
            img2: img13B
        },



        {
            name: "Green Mint Chip",
            rev: "1 Review",
            price: "$9.00",
            img1: img14A,
            img2: img14B
        },
        {
            name: "Hot Toddy Sorbet",
            rev: "0 Review",
            price: "$12.00",
            img1: img15A,
            img2: img15B
        },
        {
            name: "Pei Apple Crisp",
            rev: "1 Review",
            price: "$13.00",
            img1: img16A,
            img2: img16B
        },
        {
            name: "Powdered Jelly Donut",
            rev: "0 Review",
            price: "$9.00",
            img1: img17A,
            img2: img17B
        },
        {
            name: "Salty Caramel",
            rev: "0 Review",
            price: "$11.00",
            img1: img18A,
            img2: img18B
        },
        {
            name: "Snow Cone Sorbet",
            rev: "0 Review",
            price: "$10.00",
            img1: img19A,
            img2: img19B
        },
        {
            name: "Sorbet Street Treats",
            rev: "1 Review",
            price: "$10.00",
            img1: img20A,
            img2: img20B
        },
        {
            name: "Sparkling Cherry Pie",
            rev: "0 Review",
            price: "$11.00",
            img1: img21A,
            img2: img21B
        },
        {
            name: "Sunshine",
            rev: "1 Review",
            price: "$10.00",
            img1: img22A,
            img2: img22B
        },
        {
            name: "Tahini Oat Chocolate Cookies",
            rev: "1 Review",
            price: "$10.00",
            img1: img23A,
            img2: img23B
        },
        {
            name: "Golden Nectar",
            rev: "1 Review",
            price: "$10.00",
            img1: img24A,
            img2: img24B
        },
        {
            name: "Zildberry Lavender",
            rev: "0 Review",
            price: "$13.00",
            img1: img25A,
            img2: img25B
        },

    ];

    const IconMenu = () => {
        return (
            <Card.Body className='z-50 -mt-[360px] ml-[300px] text-[20px] h-10'>
                <div className="flex gap-6 mt-4 z-40 flex-col">
                    {[
                        { icon: <FaShoppingCart />, id: 'cart' },
                        { icon: <FaSearch />, id: 'search' },
                        { icon: <FaHeart />, id: 'heart' },
                        { icon: <FaShareAlt />, id: 'share' }
                    ].map(({ icon, id }) => (
                        <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2' key={id}>
                            <Button variant="outline-secondary" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {icon}
                            </Button>
                        </div>
                    ))}
                </div>
            </Card.Body>
        );
    };

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    const handleImageMouseEnter = () => {
        setImage(item2);
    };

    const handleImageMouseLeave = () => {
        setImage(item1);
    };

    useEffect(() => {
        setData(Product);
    })

    return (
        <div>
            {
                data.map((product) => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }}>
                                <div className='w-[380px] h-[350px] hover:opacity-90'
                                    onMouseEnter={handleImageMouseEnter}
                                    onMouseLeave={handleImageMouseLeave}>
                                    <div className='w-full h-full'
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        <Card.Img className='w-[350px] h-[350px] rounded-2xl' variant="top" src={product.img1} alt="not found" />
                                        {visible && <IconMenu />}
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title className='mt-3 font-semibold text-[25px]'>{product.name}</Card.Title>
                                    <Card.Text>
                                        <div className="flex mt-2">
                                            <div className='flex gap-1'>
                                                {[...Array(5)].map((star, index) => (
                                                    <FaStar key={index} color="red" />
                                                ))}
                                            </div>
                                            <div>
                                                <span className="-mt-1 ml-5 absolute">{product.rev}</span>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='mt-2'>
                                        <strong>{product.price}</strong>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </>
                    )

                })
            }
        </div>
    );
};

export default ShopProduct;

                // <Card style={{ width: '18rem' }}>
                //     <div className='w-[380px] h-[350px] hover:opacity-90'
                //         onMouseEnter={handleImageMouseEnter}
                //         onMouseLeave={handleImageMouseLeave}>
                //         <div className='w-full h-full'
                //             onMouseEnter={handleMouseEnter}
                //             onMouseLeave={handleMouseLeave}>
                //             <Card.Img className='w-[350px] h-[350px] rounded-2xl' variant="top" src={image} alt="not found" />
                //             {visible && <IconMenu />}
                //         </div>
                //     </div>
                //     <Card.Body>
                //         <Card.Title className='mt-3 font-semibold text-[25px]'>Bhautik</Card.Title>
                //         <Card.Text>
                //             <div className="flex mt-2">
                //                 <div className='flex gap-1'>
                //                     {[...Array(5)].map((star, index) => (
                //                         <FaStar key={index} color="red" />
                //                     ))}
                //                 </div>
                //                 <div>
                //                     <span className="-mt-1 ml-5 absolute">5 Star</span>
                //                 </div>
                //             </div>
                //         </Card.Text>
                //     </Card.Body>
                //     <ListGroup className="list-group-flush">
                //         <ListGroupItem className='mt-2'>
                //             <strong>500</strong>
                //         </ListGroupItem>
                //     </ListGroup>
                // </Card>