// import React, { useState, useEffect } from 'react';
// import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar, FaList } from 'react-icons/fa';
// import img1B from "../assets/asset 66.webp";
// import img1A from "../assets/asset 67.webp";
// import img2A from "../assets/asset 34.webp";
// import img2B from "../assets/asset 35.jpeg";
// import img3A from "../assets/asset 68.webp";
// import img3B from "../assets/asset 69.webp";
// import img4A from "../assets/asset 70.webp";
// import img4B from "../assets/asset 71.webp";
// import img5A from "../assets/asset 72.webp";
// import img5B from "../assets/asset 73.webp";
// import img6A from "../assets/asset 74.webp";
// import img6B from "../assets/asset 75.webp";
// import img7A from "../assets/asset 76.webp";
// import img7B from "../assets/asset 77.webp";
// import img8A from "../assets/asset 78.webp";
// import img8B from "../assets/asset 79.webp";
// import img9A from "../assets/asset 80.webp";
// import img9B from "../assets/asset 81.webp";
// import img10A from "../assets/asset 82.webp";
// import img10B from "../assets/asset 83.jpeg";
// import img11A from "../assets/asset 84.webp";
// import img11B from "../assets/asset 85.webp";
// import img12A from "../assets/asset 86.webp";
// import img12B from "../assets/asset 87.webp";
// import img13A from "../assets/asset 88.webp";
// import img13B from "../assets/asset 89.webp";
// import img14A from "../assets/asset 90.webp";
// import img14B from "../assets/asset 91.webp";
// import img15A from "../assets/asset 92.webp";
// import img15B from "../assets/asset 93.webp";
// import img16A from "../assets/asset 94.jpeg";
// import img16B from "../assets/asset 95.jpeg";
// import img17A from "../assets/asset 96.webp";
// import img17B from "../assets/asset 97.webp";
// import img18A from "../assets/asset 98.webp";
// import img18B from "../assets/asset 99.webp";
// import img19A from "../assets/asset 101.webp";
// import img19B from "../assets/asset 102.jpeg";
// import img20A from "../assets/asset 103.webp";
// import img20B from "../assets/asset 104.webp";
// import img21A from "../assets/asset 105.webp";
// import img21B from "../assets/asset 106.webp";
// import img22A from "../assets/asset 107.webp";
// import img22B from "../assets/asset 108.webp";
// import img23A from "../assets/asset 109.webp";
// import img23B from "../assets/asset 110.webp";
// import img24A from "../assets/asset 111.webp";
// import img24B from "../assets/asset 112.webp";
// import img25A from "../assets/asset 113.jpeg";
// import img25B from "../assets/asset 114.jpeg";

// const ShopProduct = () => {
//     const [data, setData] = useState([]);
//     const [visibleIndices, setVisibleIndices] = useState({});
//     const [currentPage, setCurrentPage] = useState(1);
//     const [columns, setColumns] = useState(2); // State for grid columns
//     const productsPerPage = 12;

//     const Product = [
//         {
//             name: "Banana Cream Pudding",
//             rev: "1 Review", 
//             price: "$12.00", 
//             img1: img1A, 
//             img2: img1B
//           },
//           { 
//             name: "Blackout Chocolate Cake", 
//             rev: "2 Reviews", 
//             price: "$12.00", 
//             img1: img2A, 
//             img2: img2B 
//           },
//           { 
//             name: "Brambleberry Crisp", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img3A, 
//             img2: img3B 
//           },
//           { 
//             name: "Brown Sugar Cinnamon", 
//             rev: "0 Reviews", 
//             price: "$15.00", 
//             img1: img4A, 
//             img2: img4B 
//           },
//           { 
//             name: "Burnt Orange Dreamsicle", 
//             rev: "0 Reviews", 
//             price: "$12.00", 
//             img1: img5A, 
//             img2: img5B 
//           },
//           { 
//             name: "Chocolate Mud", 
//             rev: "0 Reviews", 
//             price: "$15.00", 
//             img1: img6A, 
//             img2: img6B 
//           },
//           { 
//             name: "Cold Brew with Coconut Cream", 
//             rev: "0 Reviews", 
//             price: "$12.00", 
//             img1: img7A, 
//             img2: img7B 
//           },
//           {
//             name: "Cookies in Cream", 
//             rev: "0 Reviews", 
//             price: "$13.00", 
//             img1: img8A, 
//             img2: img8B 
//           },
//           { 
//             name: "Cream Puff", 
//             rev: "1 Review", 
//             price: "$11.00", 
//             img1: img9A, 
//             img2: img9B 
//           },
//           { 
//             name: "Darkest Chocolate", 
//             rev: "0 Reviews", 
//             price: "$13.00", 
//             img1: img10A, 
//             img2: img10B 
//           },
//           { 
//             name: "Double Dough", 
//             rev: "0 Reviews", 
//             price: "$10.00", 
//             img1: img11A, 
//             img2: img11B 
//           },
//           { 
//             name: "Frosé Sorbet", 
//             rev: "1 Review", 
//             price: "$12.00", 
//             img1: img12A, 
//             img2: img12B 
//           },
//           { 
//             name: "Golden Nectar", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img13A, 
//             img2: img13B 
//           },
//           { 
//             name: "Green Mint Chip", 
//             rev: "1 Review", 
//             price: "$9.00", 
//             img1: img14A, 
//             img2: img14B 
//           },
//           { 
//             name: "Hot Toddy Sorbet", 
//             rev: "0 Review", 
//             price: "$12.00", 
//             img1: img15A, 
//             img2: img15B 
//           },
//           { 
//             name: "Pei Apple Crisp", 
//             rev: "1 Review", 
//             price: "$13.00", 
//             img1: img16A, 
//             img2: img16B 
//           },
//           { 
//             name: "Powdered Jelly Donut", 
//             rev: "0 Review", 
//             price: "$9.00", 
//             img1: img17A, 
//             img2: img17B 
//           },
//           { 
//             name: "Salty Caramel", 
//             rev: "0 Review", 
//             price: "$11.00", 
//             img1: img18A, 
//             img2: img18B 
//           },
//           { 
//             name: "Snow Cone Sorbet", 
//             rev: "0 Review", 
//             price: "$10.00", 
//             img1: img19A, 
//             img2: img19B 
//           },
//           { 
//             name: "Sorbet Street Treats", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img20A, 
//             img2: img20B 
//           },
//           { 
//             name: "Sparkling Cherry Pie", 
//             rev: "0 Review", 
//             price: "$11.00", 
//             img1: img21A, 
//             img2: img21B 
//           },
//           { 
//             name: "Sunshine", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img22A, 
//             img2: img22B 
//           },
//           { 
//             name: "Tahini Oat Chocolate Cookies", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img23A, 
//             img2: img23B 
//           },
//           { 
//             name: "Golden Nectar", 
//             rev: "1 Review", 
//             price: "$10.00", 
//             img1: img24A, 
//             img2: img24B 
//           },
//           { 
//             name: "Zildberry Lavender", 
//             rev: "0 Review", 
//             price: "$13.00", 
//             img1: img25A, 
//             img2: img25B 
//           },
      
//     ];

//     useEffect(() => {
//         setData(Product);
//     }, []);

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(data.length / productsPerPage);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const IconMenu = () => (
//         <Card.Body className='absolute top-4 right-0 z-50 flex flex-col gap-2'>
//             <div className="flex flex-col gap-4 mr-10">
//                 {[{ icon: <FaShoppingCart />, id: 'cart' }, { icon: <FaSearch />, id: 'search' }, { icon: <FaHeart />, id: 'heart' }, { icon: <FaShareAlt />, id: 'share' }]
//                     .map(({ icon, id }) => (
//                         <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center' key={id}>
//                             <Button variant="outline-secondary">{icon}</Button>
//                         </div>
//                     ))}
//             </div>
//         </Card.Body>
//     );

//     return (
//         <div>
//             <div className='mt-14 gap-8 w-full h-12 flex items-center pl-5' id='menus'>
//                 <a href=""><FaList className="text-gray-600 text-2xl hover:text-red-600" /></a>

//                 <div id="div4menu" onClick={() => setColumns(2)} className="cursor-pointer">
//                     <div className="w-6 h-6 flex flex-col-2 flex-wrap gap-1">
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                     </div>
//                 </div>

//                 <div id="div6menu" onClick={() => setColumns(3)} className="cursor-pointer">
//                     <div className="w-8 h-6 flex flex-col-2 flex-wrap gap-1">
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                     </div>
//                 </div>

//                 <div id="div8menu" onClick={() => setColumns(4)} className="cursor-pointer">
//                     <div className="w-12 h-6 flex flex-col-2 flex-wrap gap-1">
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                         <div className="w-2 h-2 bg-gray-600"></div>
//                     </div>
//                 </div>
//             </div>

//             <div className={`grid grid-cols-${columns}`}>
//                 {currentProducts.map((product, index) => {
//                     return (
//                         <Card key={index} style={{ width: '18rem', margin: '10px' }}>
//                             <div className='w-[380px] h-[350px] relative'
//                                 onMouseEnter={() => setVisibleIndices(prev => ({ ...prev, [index]: true }))}
//                                 onMouseLeave={() => setVisibleIndices(prev => ({ ...prev, [index]: false }))}
//                             >
//                                 <Card.Img className='w-[350px] h-[350px] rounded-2xl transition-opacity duration-200'
//                                     variant="top"
//                                     src={product.img1}
//                                     alt={product.name}
//                                     onMouseEnter={(e) => {
//                                         e.currentTarget.src = product.img2;
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         e.currentTarget.src = product.img1;
//                                     }}
//                                 />
//                                 {visibleIndices[index] && <IconMenu />}
//                             </div>
//                             <Card.Body>
//                                 <Card.Title className='mt-3 font-semibold text-[25px]'>{product.name}</Card.Title>
//                                 <Card.Text>
//                                     <div className="flex mt-2">
//                                         <div className='flex gap-1'>
//                                             {[...Array(5)].map((star, index) => (
//                                                 <FaStar key={index} color="red" />
//                                             ))}
//                                         </div>
//                                         <span className="-mt-1 ml-5">{product.rev}</span>
//                                     </div>
//                                 </Card.Text>
//                             </Card.Body>
//                             <ListGroup className="list-group-flush">
//                                 <ListGroupItem className='mt-2'>
//                                     <strong>{product.price}</strong>
//                                 </ListGroupItem>
//                             </ListGroup>
//                         </Card>
//                     );
//                 })}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-8 space-x-4">
//                 {[...Array(totalPages)].map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={`px-4 py-2 border rounded-full ${currentPage === index + 1 ? "bg-[#ff0000] text-white" : "bg-white text-black"}`}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ShopProduct;


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
    const [columns, setColumns] = useState(2);
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

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 1000) {
                setColumns(2);
            } else {
                setColumns(4); 
            }
        };

        window.addEventListener('resize', updateColumns);
        updateColumns(); 

        return () => {
            window.removeEventListener('resize', updateColumns);
        };
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
                {/* Only show menu icons if width is greater than 1000px */}
                {window.innerWidth >= 1000 && (
                    <>
                        <div onClick={() => setColumns(2)} className="cursor-pointer">
                            <div className="w-6 h-6 flex flex-col-2 flex-wrap gap-1">
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                            </div>
                        </div>
                        <div onClick={() => setColumns(3)} className="cursor-pointer">
                            <div className="w-8 h-6 flex flex-col-2 flex-wrap gap-1">
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                                <div className="w-2 h-2 bg-gray-600"></div>
                            </div>
                        </div>
                        <div onClick={() => setColumns(4)} className="cursor-pointer">
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
                    </>
                )}
            </div>

            <div className={`grid grid-cols-${columns} gap-4`}>
                {currentProducts.map((product, index) => (
                    <Card key={index} style={{ width: '100%', maxWidth: '250px', margin: 'auto' }}>
                        <div className='relative' onMouseEnter={() => setVisibleIndices(prev => ({ ...prev, [index]: true }))} onMouseLeave={() => setVisibleIndices(prev => ({ ...prev, [index]: false }))}>
                            <Card.Img variant="top" src={product.img1} alt={product.name} />
                            {visibleIndices[index] && <IconMenu />}
                        </div>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                <div className="flex">
                                    <div className='flex gap-1'>
                                        {[...Array(5)].map((star, index) => (
                                            <FaStar key={index} color="red" />
                                        ))}
                                    </div>
                                    <span className="ml-5">{product.rev}</span>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <strong>{product.price}</strong>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-4">
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)} className={`px-4 py-2 border rounded-full ${currentPage === index + 1 ? "bg-red-600 text-white" : "bg-white text-black"}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ShopProduct;