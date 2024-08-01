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
    <Card.Body className='z-50'>
        <div className="flex gap-4 mt-4 z-40">
          <Button variant="outline-secondary" className="mb-2">
            <FaShoppingCart />
          </Button>
          <Button variant="outline-secondary" className="mb-2">
            <FaSearch />
          </Button>
          <Button variant="outline-secondary" className="mb-2">
            <FaHeart />
          </Button>
          <Button variant="outline-secondary">
            <FaShareAlt />
          </Button>
        </div>
      </Card.Body>
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
      <div onMouseEnter={() => setImage(img29,handleMouseEnter)} onMouseOut={() => setImage(img28,handleMouseLeave)}>
      <Card.Img variant="top" src={image } alt="Darkest Chocolate" />
      {visible && IconMenu()}
      </div>
      <Card.Body>
        <Card.Title className='mt-3'>Sunshine</Card.Title>
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
        <Card.Body>
        <div className="flex gap-4 mt-4">
          <Button className="mb-2">
            <FaShoppingCart />
          </Button>
          <Button className="mb-2">
            <FaSearch />
          </Button>
          <Button className="mb-2">
            <FaHeart />
          </Button>
          <Button className="mb-2">
            <FaShareAlt />
          </Button>
        </div>
      </Card.Body>
      </ListGroup>
    </Card>
  );
};

export default ProductCard;