import React from 'react';
import { useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';

const   ProductCard = (props) => {

  const [image, setImage] = useState(props.img1);

  const [visible, setVisible] = useState(false);

  const IconMenu = () => {
    return (
      <>
        <Card.Body className='z-50 -mt-[360px] ml-[300px] text-[20px] h-10'>
          <div className="flex gap-6 mt-4 z-40 flex-col">
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2 hover:text-red-600' >
              <Button variant="outline-secondary">
                <FaShoppingCart />
              </Button>
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2 hover:text-red-600'>
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2 hover:text-red-600'>
              <Button variant="outline-secondary">
                <FaHeart />
              </Button>
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center -mb-2 hover:text-red-600'>
              <Button variant="outline-secondary">
                <FaShareAlt />
              </Button>
            </div>
          </div>
        </Card.Body>
      </>
    )
  } 

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }} className='drop-shadow-xl'>
        <div className='w-[380px] h-[350px] hover:opacity-90' onMouseEnter={() => setImage(props.img2)} onMouseOut={() => setImage(props.img1)}>
          <div className='w-full h-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card.Img className='w-[350px] h-[350px] rounded-2xl' variant="top" src={image} alt="not found" />
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
