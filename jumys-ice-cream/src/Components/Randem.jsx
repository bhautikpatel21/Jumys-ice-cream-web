import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar, FaList } from 'react-icons/fa';
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
    const [data, setData] = useState([]);
    const [visibleIndices, setVisibleIndices] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState(2); // State for grid columns
    const productsPerPage = 12;

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

    useEffect(() => {
        setData(Product);
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(data.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const IconMenu = () => (
        <Card.Body className='absolute top-4 right-0 z-50 flex flex-col gap-2'>
            <div className="flex flex-col gap-4 mr-10">
                {[{ icon: <FaShoppingCart />, id: 'cart' }, { icon: <FaSearch />, id: 'search' }, { icon: <FaHeart />, id: 'heart' }, { icon: <FaShareAlt />, id: 'share' }]
                    .map(({ icon, id }) => (
                        <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center' key={id}>
                            <Button variant="outline-secondary">{icon}</Button>
                        </div>
                    ))}
            </div>
        </Card.Body>
    );

    return (
        <div>
            <div className='mt-14 gap-8 w-full h-12 flex items-center pl-5'>
                <a href=""><FaList className="text-gray-600 text-2xl hover:text-red-600" /></a>

                <div id="div4menu" onClick={() => setColumns(2)} className="cursor-pointer">
                    <div className="w-6 h-6 flex flex-col-2 flex-wrap gap-1">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                    </div>
                </div>

                <div id="div6menu" onClick={() => setColumns(3)} className="cursor-pointer">
                    <div className="w-8 h-6 flex flex-col-2 flex-wrap gap-1">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                    </div>
                </div>

                <div id="div8menu" onClick={() => setColumns(4)} className="cursor-pointer">
                    <div className="w-12 h-6 flex flex-col-2 flex-wrap gap-1">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-600"></div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-${columns}`}>
                {currentProducts.map((product, index) => {
                    return (
                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                            <div className='w-[380px] h-[350px] relative'
                                onMouseEnter={() => setVisibleIndices(prev => ({ ...prev, [index]: true }))}
                                onMouseLeave={() => setVisibleIndices(prev => ({ ...prev, [index]: false }))}
                            >
                                <Card.Img className='w-[350px] h-[350px] rounded-2xl transition-opacity duration-200'
                                    variant="top"
                                    src={product.img1}
                                    alt={product.name}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.src = product.img2;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.src = product.img1;
                                    }}
                                />
                                {visibleIndices[index] && <IconMenu />}
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
                                        <span className="-mt-1 ml-5">{product.rev}</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='mt-2'>
                                    <strong>{product.price}</strong>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 space-x-4">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border rounded-full ${currentPage === index + 1 ? "bg-[#ff0000] text-white" : "bg-white text-black"}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ShopProduct;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaEye, FaCompressAlt } from 'react-icons/fa';
// import PaymentMethodImg from "../assets/paymentMethod.png";

// // Product 1 
// import img1 from "../assets/product-1-1.webp";
// import img2 from "../assets/product-1-2.webp";
// import img3 from "../assets/product-1-3.webp";
// import img4 from "../assets/product-1-4.webp";

// // Product 2
// import img5 from "../assets/product-2-1.webp";
// import img6 from "../assets/product-2-2.jpg";
// import img7 from "../assets/product-2-3.webp";
// import img8 from "../assets/product-2-4.webp";

// // Product 3
// import img9 from "../assets/product-3-1.webp";
// import img10 from "../assets/product-3-2.webp";
// import img11 from "../assets/product-3-3.webp";
// import img12 from "../assets/product-3-4.webp";

// // product 4
// import img13 from "../assets/product-4-1.webp";
// import img14 from "../assets/product-4-2.webp";
// import img15 from "../assets/product-4-3.webp";
// import img16 from "../assets/product-4-4.webp";

// // Product 5
// import img17 from "../assets/product-5-1.webp";
// import img18 from "../assets/product-5-2.webp";
// import img19 from "../assets/product-5-3.webp";
// import img20 from "../assets/product-5-4.webp";

// // Product 6
// import img21 from "../assets/product-6-1.webp";
// import img22 from "../assets/product-6-2.webp";
// import img23 from "../assets/product-6-3.webp";
// import img24 from "../assets/product-6-4.webp";

// // Product 7
// import img25 from "../assets/product-7-1.webp";
// import img26 from "../assets/product-7-2.webp";
// import img27 from "../assets/product-7-3.webp";
// import img28 from "../assets/product-7-4.webp";

// // Product 8
// import img29 from "../assets/product-8-1.webp";
// import img30 from "../assets/product-8-2.webp";
// import img31 from "../assets/product-8-3.webp";
// import img32 from "../assets/product-8-4.webp";

// // Product 9
// import img33 from "../assets/product-9-1.webp";
// import img34 from "../assets/product-9-2.webp";
// import img35 from "../assets/product-9-3.webp";
// import img36 from "../assets/product-9-4.webp";

// // Product 10
// import img37 from "../assets/product-10-1.webp";
// import img38 from "../assets/product-10-2.jpg";
// import img39 from "../assets/product-10-3.webp";
// import img40 from "../assets/product-10-4.webp";

// // Product  11
// import img41 from "../assets/product-11-1.webp";
// import img42 from "../assets/product-11-2.webp";
// import img43 from "../assets/product-11-3.webp";
// import img44 from "../assets/product-11-4.webp";

// // Product 12
// import img45 from "../assets/product-12-1.webp";
// import img46 from "../assets/product-12-2.webp";
// import img47 from "../assets/product-12-3.webp";
// import img48 from "../assets/product-12-4.webp";
// import img49 from "../assets/product-12-5.webp";
// import img50 from "../assets/product-12-6.webp";

// // Product 13
// import img51 from "../assets/product-13-1.webp";
// import img52 from "../assets/product-13-2.webp";
// import img53 from "../assets/product-13-3.webp";
// import img54 from "../assets/product-13-4.webp";

// // Product 14
// import img55 from "../assets/product-14-1.webp";
// import img56 from "../assets/product-14-2.webp";
// import img57 from "../assets/product-14-3.webp";
// import img58 from "../assets/product-14-4.webp";

// // Product 15
// import img59 from "../assets/product-15-1.webp";
// import img60 from "../assets/product-15-2.webp";
// import img61 from "../assets/product-15-3.webp";
// import img62 from "../assets/product-15-4.webp";

// // Product 16
// import img63 from "../assets/product-16-1.jpg";
// import img64 from "../assets/product-16-2.jpg";
// import img65 from "../assets/product-16-3.jpg";
// import img66 from "../assets/product-16-4.jpg";
// import img67 from "../assets/product-16-5.jpg";
// import img68 from "../assets/product-16-6.jpg";
// import img69 from "../assets/product-16-7.jpg";
// import img70 from "../assets/product-16-8.jpg";
// import img71 from "../assets/product-16-9.jpg";
// import img72 from "../assets/product-16-10.jpg";
// import img73 from "../assets/product-16-11.jpg";
// import img74 from "../assets/product-16-12.jpg";
// import img75 from "../assets/product-16-13.jpg";
// import img76 from "../assets/product-16-14.jpg";
// import img77 from "../assets/product-16-15.jpg";
// import img78 from "../assets/product-16-16.jpg";
// import img79 from "../assets/product-16-17.jpg";
// import img80 from "../assets/product-16-18.jpg";
// import img81 from "../assets/product-16-19.jpg";
// import img82 from "../assets/product-16-21.jpg";
// import img83 from "../assets/product-16-22.jpg";
// import img84 from "../assets/product-16-23.jpg";
// import img85 from "../assets/product-16-24.jpg";
// import img86 from "../assets/product-16-25.jpg";
// import img87 from "../assets/product-16-26.jpg";
// import img88 from "../assets/product-16-27.jpg";
// import img89 from "../assets/product-16-28.jpg";
// import img90 from "../assets/product-16-29.jpg";
// import img91 from "../assets/product-16-30.jpg";
// import img92 from "../assets/product-16-31.jpg";
// import img93 from "../assets/product-16-32.jpg";
// import img94 from "../assets/product-16-33.jpg";
// import img95 from "../assets/product-16-34.jpg";
// import img96 from "../assets/product-16-35.jpg";
// import img97 from "../assets/product-16-36.jpg";
// import img98 from "../assets/product-16-37.jpg";
// import img99 from "../assets/product-16-38.jpg";
// import img100 from "../assets/product-16-39.jpg";
// import img101 from "../assets/product-16-40.jpg";
// import img102 from "../assets/product-16-41.jpg";
// import img103 from "../assets/product-16-42.jpg";
// import img104 from "../assets/product-16-43.jpg";
// import img105 from "../assets/product-16-44.jpg";
// import img106 from "../assets/product-16-45.jpg";
// import img107 from "../assets/product-16-46.jpg";
// import img108 from "../assets/product-16-47.jpg";
// import img109 from "../assets/product-16-48.jpg";
// import img110 from "../assets/product-16-49.jpg";
// import img111 from "../assets/product-16-50.jpg";

// // Product 17
// import img112 from "../assets/product-17-1.webp";
// import img113 from "../assets/product-17-2.webp";
// import img114 from "../assets/product-17-3.webp";
// import img115 from "../assets/product-17-4.webp";

// // Product 18
// import img116 from "../assets/product-18-1.webp";
// import img117 from "../assets/product-18-2.webp";
// import img118 from "../assets/product-18-3.webp";
// import img119 from "../assets/product-18-4.webp";

// // Product 19
// import img120 from "../assets/product-19-1.webp";
// import img121 from "../assets/product-19-2.webp";
// import img122 from "../assets/product-19-3.webp";
// import img123 from "../assets/product-19-4.webp";

// // Product 20
// import img124 from "../assets/product-20-1.webp";
// import img125 from "../assets/product-20-2.webp";
// import img126 from "../assets/product-20-3.webp";

// // Product 21
// import img127 from "../assets/product-21-1.webp";
// import img128 from "../assets/product-21-2.webp";
// import img129 from "../assets/product-21-3.webp";
// import img130 from "../assets/product-21-4.webp";

// // Product 22
// import img131 from "../assets/product-22-1.webp";
// import img132 from "../assets/product-22-2.webp";
// import img133 from "../assets/product-22-3.webp";
// import img134 from "../assets/product-22-4.webp";

// // Product 23
// import img135 from "../assets/product-23-1.webp";
// import img136 from "../assets/product-23-2.webp";
// import img137 from "../assets/product-23-3.webp";
// import img138 from "../assets/product-23-4.webp";

// // Product 24
// import img139 from "../assets/product-24-1.webp";
// import img140 from "../assets/product-24-2.webp";
// import img141 from "../assets/product-24-3.webp";
// import img142 from "../assets/product-24-4.webp";

// // Product 25
// import img143 from "../assets/product-25-1.jpg";
// import img144 from "../assets/product-25-2.jpg";
// import img145 from "../assets/product-25-3.jpg";
// import img146 from "../assets/product-25-4.jpg";

// const ProductCard = () => {
//   const { productId } = useParams();

//   const [product, setProduct] = useState([]);

//   const [Images, setImages] = useState([])

//   console.log(Images);


//   console.log('product', product.imageList);


//   const [activeImage, setActiveImage] = useState();

//   console.log(activeImage);

//   const [quantity, setQuantity] = useState(1);

//   const ProductSingleView = [
//     {
//       name: "Banana Cream Pudding",
//       rev: "1 Review",
//       price: "$12.00",
//       img1: img1,
//       imageList: [img1,img2,img3,img4],
//       ProductId: 1
//     },
//     {
//       name: "Blackout Chocolate Cake",
//       rev: "2 Reviews",
//       price: "$12.00",
//       img1: img5,
//       imageList : [img5,img6,img7,img8],
//       ProductId: 2
//     },
//     {
//       name: "Brambleberry Crisp",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img9,
//       imageList : [img9,img10,img11,img12],
//       ProductId: 3
//     },
//     {
//       name: "Brown Sugar Cinnamon",
//       rev: "0 Reviews",
//       price: "$15.00",
//       img1: img13,
//       imageList:[img13,img14,img15,img16],
//       ProductId: 4
//     },
//     {
//       name: "Burnt Orange Dreamsicle",
//       rev: "0 Reviews",
//       price: "$12.00",
//       img1: img17,
//       imageList:[img17,img18,img19,img20],
//       ProductId: 5
//     },
//     {
//       name: "Chocolate Mud",
//       rev: "0 Reviews",
//       price: "$15.00",
//       img1: img21,
//       imageList:[img21,img22,img23,img24],
//       ProductId: 6
//     },
//     {
//       name: "Cold Brew with Coconut Cream",
//       rev: "0 Reviews",
//       price: "$12.00",
//       img1: img25,
//       imageList:[img25,img26,img27,img28],
//       ProductId: 7
//     },
//     {
//       name: "Cookies in Cream",
//       rev: "0 Reviews",
//       price: "$13.00",
//       img1: img29,
//       imageList:[img29,img30,img31,img32],
//       ProductId: 8
//     },
//     {
//       name: "Cream Puff",
//       rev: "1 Review",
//       price: "$11.00",
//       img1: img33,
//       imageList:[img33,img34,img35,img36],
//       ProductId: 9
//     },
//     {
//       name: "Darkest Chocolate",
//       rev: "0 Reviews",
//       price: "$13.00",
//       img1: img37,
//       imageList:[img37,img38,img39,img40],
//       ProductId: 10
//     },
//     {
//       name: "Double Dough",
//       rev: "0 Reviews",
//       price: "$10.00",
//       img1: img41,
//       imageList:[img41,img42,img43,img44],
//       ProductId: 11
//     },
//     {
//       name: "Frosé Sorbet",
//       rev: "1 Review",
//       price: "$12.00",
//       img1: img45,
//       imageList: [img45,img46,img47,img48,img49,img50],
//       ProductId: 12
//     },
//     {
//       name: "Golden Nectar",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img51,
//       imageList:[img51,img52,img53,img54],
//       ProductId: 13
//     },
//     {
//       name: "Green Mint Chip",
//       rev: "1 Review",
//       price: "$9.00",
//       img1: img55,
//       imageList:[img55,img56,img57,img58],
//       ProductId: 14
//     },
//     {
//       name: "Hot Toddy Sorbet",
//       rev: "0 Review",
//       price: "$12.00",
//       img1: img59,
//       imageList:[img59,img60,img61,img62],
//       ProductId: 15
//     },
//     {
//       name: "Pei Apple Crisp",
//       rev: "1 Review",
//       price: "$13.00",
//       img1: img63,
//       imageList:[img63,img64,img65,img66,img67,img68,img69,img70,img71,img72,img73,img74,img75,img76,img77,img78,img79,img80,img81,img82,img83,img84,img85,img86,img87,img88,img89,img90,img91,img92,img93,img94,img95,img96,img97,img98,img99,img100,img101,img102,img103,img104,img105,img106,img107,img108,img109,img110,img111],
//       ProductId: 16
//     },
//     {
//       name: "Powdered Jelly Donut",
//       rev: "0 Review",
//       price: "$9.00",
//       img1: img112,
//       imageList:[img112,img113,img114,img115],
//       ProductId: 17
//     },
//     {
//       name: "Salty Caramel",
//       rev: "0 Review",
//       price: "$11.00",
//       img1: img116,
//       imageList:[img116,img117,img118,img119],
//       ProductId: 18
//     },
//     {
//       name: "Snow Cone Sorbet",
//       rev: "0 Review",
//       price: "$10.00",
//       img1: img120,
//       imageList:[img120,img121,img122,img123],
//       ProductId: 19
//     },
//     {
//       name: "Sorbet Street Treats",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img124,
//       imageList:[img124,img125,img126],
//       ProductId: 20
//     },
//     {
//       name: "Sparkling Cherry Pie",
//       rev: "0 Review",
//       price: "$11.00",
//       img1: img127,
//       imageList:[img127,img128,img129,img130],
//       ProductId: 21
//     },
//     {
//       name: "Sunshine",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img131,
//       imageList:[img131,img132,img133,img134],
//       ProductId: 22
//     },
//     {
//       name: "Tahini Oat Chocolate Cookies",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img135,
//       imageList:[img135,img136,img137,img138],
//       ProductId: 23
//     },
//     {
//       name: "Golden Nectar",
//       rev: "1 Review",
//       price: "$10.00",
//       img1: img139,
//       imageList:[img139,img140,img141,img142],
//       ProductId: 24
//     },
//     {
//       name: "Zildberry Lavender",
//       rev: "0 Review",
//       price: "$13.00",
//       img1: img143,
//       imageList:[img143,img144,img145,img146],
//       ProductId: 25
//     },

//   ];

//   useEffect(() => {
//     const foundProduct = ProductSingleView.find(p => p.ProductId === parseInt(productId));
//     setProduct(foundProduct);
//     console.log("found Product", foundProduct)
//     setActiveImage(foundProduct.img1)
//     setImages(foundProduct.imageList);
//     console.log(foundProduct.imageList);

//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   return (
//     <div className="container mx-auto max-w-[1400px] xl px-4 py-1 lg:px-0">
//       <div className="overflow-hidden">
//         <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
//           <div className="flex flex-col lg:flex-row lg:space-x-8">
//             <div className="mb-6 flex justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
//               <div className="w-full xl:flex xl:flex-row-reverse">
//                 <div className="relative w-full shrink-0 overflow-hidden rounded-md md:mb-3 xl:w-[480px] 2xl:w-[650px]">
//                   <div className="relative flex items-center justify-center">
//                     <img
//                       alt="Product gallery"
//                       src={activeImage}
//                       className="object-cover md:h-[300px] md:w-full lg:w-[675px] lg:h-[628px]"
//                       id="mainIMG"
//                     />
//                   </div>
//                   <div className="absolute inset-0 flex items-center justify-between">
//                     <button
//                       onClick={() =>  
//                         setActiveImage(
//                           Images[Math.max(Images.indexOf(activeImage) - 1, 0)]
//                         )
//                       }
//                     >
//                       <ChevronLeft className="w-8 h-8 ml-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
//                     </button>
//                     <button
//                       onClick={() =>
//                         setActiveImage(
//                           Images[
//                           Math.min(
//                             Images.indexOf(activeImage) + 1,
//                             Images.length - 1
//                           )
//                           ]
//                         )
//                       }
//                     >
//                       <ChevronRight className="w-8 h-8 mr-4 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]" />
//                     </button>
//                   </div>
//                 </div>
//                 <div id="sideImages" className="flex m-2 gap-2 xl:flex-col">
//                   {
//                     Images.map((image, index) => (
//                       <div
//                         key={image}
//                         className={`mr-4 flex w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[118px] lg:h-[118px] hover:border-gray-950 hover:border cursor-pointer items-center justify-center overflow-hidden transition ${activeImage === image ? "border-black" : ""
//                           }`}
//                         onClick={() => setActiveImage(image)}
//                       >
//                         <img
//                           alt={`Product ${index}`}
//                           src={image}
//                           className="object-cover hover:p-2"
//                         />
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex shrink-0 px-3 flex-col lg:w-[600px] xl:w-[470px] 2xl:w-[480px] lg:h-[702px]">
//               <div className="pb-2">
//                 <h2 className="text-lg pb-1 mt-4 font-sans font-semibold md:text-xl xl:text-2xl">
//                   <h2>{product.name}</h2>
//                   {/* Cold Brew with Coconut Cream */}
//                 </h2>
//                 <p className="text-2xl mb-2 font-semibold font-Kalnia">
//                   {/* $12.00 */}
//                   <p>{product.price}</p>
//                 </p>
//                 <hr />
//               </div>

//               <div className="mb-4 mt-2">
//                 <div className="flex items-center text-lg mb-4">
//                   <FaEye />
//                   <p className="ml-2 text-base text-gray-500">
//                     37 People Are Viewing This Right Now
//                   </p>
//                 </div>

//                 <p className="text-gray-400 mb-4">
//                   Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse
//                   Cillum Dolore Eu Fugiat Nulla Pariatur.
//                 </p>

//                 <div className="flex items-center space-x-2">
//                   <button
//                     className="px-4 py-2 rounded-full border text-lg hover:text-[#ff0000]"
//                     onClick={decreaseQuantity}
//                   >
//                     -
//                   </button>
//                   <span className="px-4">{quantity}</span>
//                   <button
//                     className="px-4 py-2 rounded-full border text-lg hover:text-[#ff0000]"
//                     onClick={increaseQuantity}
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button className="flex-1 bg-black w-full mt-4 py-2 text-white rounded-full hover:bg-[#ff0000]">
//                   Add to Cart
//                 </button>
//               </div>

//               <div className="flex space-x-4 mb-4">
//                 <button className="flex-1 border py-2 rounded-full text-black hover:text-white bg-white hover:bg-[#ff0000]">
//                   Buy Now
//                 </button>
//               </div>

//               {/* Icons Section */}
//               <div className="m-1 p-1 space-x-1 flex justify-center">
//                 <div className="flex flex-row">
//                   <a
//                     href="#"
//                     className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
//                   >
//                     <FaHeart />
//                   </a>
//                   <button className="py-2 px-2 rounded-full text-black">
//                     Browse Wishlist
//                   </button>
//                 </div>

//                 <div className="flex flex-row">
//                   <a
//                     href="#"
//                     className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
//                   >
//                     <FaCompressAlt />
//                   </a>
//                   <button className="py-2 px-2 rounded-full text-black">
//                     Compare
//                   </button>
//                 </div>

//                 <div className="flex flex-row">
//                   <a
//                     href="#"
//                     className="w-10 h-10 rounded-full flex border justify-center items-center text-black hover:text-white bg-white hover:bg-[#ff0000]"
//                   >
//                     <FaShareAlt />
//                   </a>
//                   <button className="py-2 px-2 rounded-full text-black">
//                     Share
//                   </button>
//                 </div>
//               </div>

//               {/* Payment & Shipping Info */}
//               <div className="mb-4 bg-gray-200 p-4">
//                 <div className="flex space-x-2 mt-2 justify-center">
//                   <img src={PaymentMethodImg} alt="payment method" />
//                 </div>
//                 <p className="text-black text-center mt-2">
//                   Guaranteed Checkout
//                 </p>
//               </div>
//               <div className="mb-4">
//                 <p className="text-gray-600">
//                   Free Worldwide Shipping On All Orders Over $100
//                 </p>
//                 <p className="text-gray-600">
//                   Delivers In: 3-7 Working Days{" "}
//                   <a
//                     href="#"
//                     className="text-black cursor-pointer underline hover:text-[#ff0000]"
//                   >
//                     Shipping & Return
//                   </a>
//                 </p>
//               </div>
//               <div className="text-gray-600 flex">
//                 Categories:
//                 <div className="space-x-1">
//                   <span className="text-black hover:text-[#ff0000] cursor-pointer">
//                     Chocolate
//                   </span>
//                   <span className="text-black hover:text-[#ff0000] cursor-pointer">
//                     Milkshakes
//                   </span>
//                   <span className="text-black hover:text-[#ff0000] cursor-pointer">
//                     Strawberry
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard
