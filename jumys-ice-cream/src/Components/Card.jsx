import React from 'react';
import { useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import img28 from '../assets/asset 20.webp';
import img29 from '../assets/asset 21.webp';

const ProductCard = () => {

  const [image, setImage] = useState(img28);

  const [visible, setVisible] = useState(false);

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


  return (

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
