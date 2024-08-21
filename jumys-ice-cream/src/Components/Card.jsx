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


const ProductCard = (props) => {

  const [image, setImage] = useState(props.img1);

  const [visible, setVisible] = useState(false);


  const IconMenu = () => {
    return (
      <>
        <Card.Body className='z-50 -mt-[360px] ml-[300px]  text-[20px] h-10 '>
          <div className="flex gap-6 mt-4 z-40 flex-col">
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2' >
              <Button variant="outline-secondary">
                <FaShoppingCart />
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
    <div>
      <Card style={{ width: '18rem' }} >
        <div className='w-[380px] h-[350px]' onMouseEnter={() => setImage(props.img2)} onMouseOut={() => setImage(props.img1)}>
          <div className='w-full h-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card.Img className='w-[350px] h-[350px]' variant="top" src={image} alt="Darkest Chocolate" />
            {visible && IconMenu()}
          </div>
        </div>
        <Card.Body>
          <Card.Title className='mt-3 font-semibold text-[25px]'>{props.name}</Card.Title>
          <Card.Text>
            <div className="flex mt-2">
              <div className='flex gap-1'>
                {[...Array(5)].map((star, index) => (
                  <FaStar key={index} color="red" />
                ))}
              </div>
              <div>
                <span className="-mt-1 ml-5  absolute">{props.review}</span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className='mt-2'>
            <strong>{props.price}</strong>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>

  );
};

export default ProductCard;
