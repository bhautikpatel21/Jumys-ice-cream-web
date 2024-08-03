import React from 'react';
import { useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import img20 from '../assets/asset 20.webp';
import img21 from '../assets/asset 21.webp';
// import imgp20 from '../assets/asset 20.webp';
// import imgp20 from '../assets/asset 21.webp';
import img22 from '../assets/asset 22.jpeg';
import img23 from '../assets/asset 23.jpeg';
import img24 from '../assets/asset 24.webp';
import img25 from '../assets/asset 25.webp';
import img26 from '../assets/asset 26.webp';
import img27 from '../assets/asset 27.webp';
import img28 from '../assets/asset 28.webp';
import img29 from '../assets/asset 29.webp';
import img30 from '../assets/asset 30.webp';
import img31 from '../assets/asset 31.webp';
import img32 from '../assets/asset 32.webp';
import img33 from '../assets/asset 33.jpeg';
import img34 from '../assets/asset 34.webp';
import img35 from '../assets/asset 35.jpeg';


const ProductCard = () => {

  const [image, setImage] = useState(img20);

  const [visible, setVisible] = useState(false);

  // const [productData, setProductData] = useState([]);

  // const Product = () => [
  //   {
  //     img : img20,
  //     img2 : img21,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img22,
  //     img2 : img23,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img24,
  //     img2 : img25,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img26,
  //     img2 : img27,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img28,
  //     img2 : img29,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img30,
  //     img : img31,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },
  //   {
  //     img : img32,
  //     img2 : img33,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },

  //   {
  //     img : img34,
  //     img2 : img35,
  //     name : 'Sunshine',
  //     review : '1 Review',
  //     price : '$10.00'
  //   },

  // ]

  const IconMenu = () => {
    return (
      <>
    <Card.Body className='z-50 -mt-[310px] ml-64 text-[20px] h-10 '>
        <div className="flex gap-4 mt-4 z-40 flex-col">

          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2' >
          <Button variant="outline-secondary">
            <FaShoppingCart/>
          </Button>
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
          <Button variant="outline-secondary">
            <FaSearch />
          </Button>
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
          <Button variant="outline-secondary">
            <FaHeart />
          </Button>
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2'>
          <Button variant="outline-secondary">
            <FaShareAlt />
          </Button>
          </div>
        </div>
      </Card.Body>
      {/* <h1> Bhautik Dudhat </h1> */}
      </>
    )
  }

  // Set Icon 

  const handleMouseEnter = () => {
    setVisible(true);
  };
  
  const handleMouseLeave = () => {
    setVisible(false);
  };

  // const ProductFilter  = Product.filter((item) => item.review === '1 Review')

  // console.log(ProductFilter);

  // useEffect(() => {
  //   setProductData(Product)
  // } , [])


  return (
    // <div>
    //   {
    //     productData.map((product) => {
    //       return (
            
    //   <Card style={{ width: '18rem' }} className=' ml-11' >
    //   <div className='w-[300px] h-[300px]' onMouseEnter={() => setProductData(product.img2)} onMouseOut={() => setProductData(product.img)}>
    //   <div className='w-full h-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    //   <Card.Img className='w-[300px] h-[300px]' variant="top" src={product.img} alt="Darkest Chocolate" />
    //   {visible && IconMenu()}
    //   </div>
    //   </div>
    //   <Card.Body>
    //     <Card.Title className='mt-3 font-semibold text-[25px]'>{product.name}</Card.Title>
    //     <Card.Text>
    //       <div className="flex mt-2">
    //         <div className='flex'>
    //           {[...Array(5)].map((star, index) => (
    //             <FaStar key={index} color="red" />
    //           ))}
    //         </div>
    //         <div>
    //           <span className="-mt-1 ml-5  absolute">{product.review}</span>
    //         </div>
    //       </div>
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //   <ListGroupItem className='mt-2'>
    //   <strong>{product.price}</strong>
    //   </ListGroupItem>
    //   </ListGroup>
    //   </Card>
    //       )
    //     })
    //   }
    // </div>
    <Card style={{ width: '18rem' }} className=' ml-11' >
    <div className='w-[300px] h-[300px]' onMouseEnter={() => setImage(img29)} onMouseOut={() => setImage(img28)}>
      <div className='w-full h-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Card.Img className='w-[300px] h-[300px]' variant="top" src={image} alt="Darkest Chocolate" />
    {visible && IconMenu()}
    </div>
    </div>
    <Card.Body>
      <Card.Title className='mt-3 font-semibold text-[25px]'>Sunshine</Card.Title>
      <Card.Text>
        <div className="flex mt-2">
          <div className='flex'>
            {[...Array(5)].map((star, index) => (
              <FaStar key={index} color="red" />
            ))}
          </div>
          <div>
            <span className="-mt-1 ml-5  absolute">1 Reviews</span>
          </div>
        </div>
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem className='mt-2'>
        <strong>$13.00</strong>
      </ListGroupItem>
    </ListGroup>
  </Card>

  );
};

export default ProductCard;
