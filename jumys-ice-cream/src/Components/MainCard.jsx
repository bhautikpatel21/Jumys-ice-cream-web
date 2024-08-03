import React from 'react'
import item1 from '../assets/asset 20.webp'
import item2 from '../assets/asset 21.webp'
import item3 from '../assets/asset 22.jpeg'
import item4 from '../assets/asset 23.jpeg'
import item5 from '../assets/asset 24.webp'
import item6 from '../assets/asset 25.webp'
import item7 from '../assets/asset 26.webp'
import item8 from '../assets/asset 27.webp'
import item9 from '../assets/asset 28.webp'
import item10 from '../assets/asset 29.webp'
import item11 from '../assets/asset 30.webp'
import item12 from '../assets/asset 31.webp'
import item13 from '../assets/asset 32.webp'
import item14 from '../assets/asset 33.jpeg'
import item15 from '../assets/asset 34.webp'
import item16 from '../assets/asset 35.jpeg'

import { useState, useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';

const List_Rendering = () => {

    const [productData, setProductData] = useState([])

    // const [visible, setVisible] = useState(false);

    console.log('productData', productData);

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

    //   const handleMouseEnter = () => {
    //     setVisible(true);
    //   };
      
    //   const handleMouseLeave = () => {
    //     setVisible(false);
    //   };

    const Product = [
        {
            name: 'Cookies In Cream',
            price: 1000,
            img: item1,
            img2 : item2
        },
        {
            name: 'Chocolate Mud',
            price: 10000,
            img: item3,
            img2 : item4
        },
        {
            name: 'Hot Toddy Sorbet',
            price: 20000,
            img: item5,
            img2 : item6
        },
        {
            name: 'Sorbet Street Treats',
            price: 10000,
            img: item7,
            img2 : item8,
        },
        {
            name: 'Darkest Chocolate',
            price: 100000,
            img: item9,
            img2 : item10
        },
        {
            name: 'Blackout Chocolate Cake',
            price: 100000,
            img: item11,
            img2 : item12
        },
        {
            name: 'Sunshine',
            price: 100000,
            img: item13,
            img2 : item14
        },
        {
            name: 'Poe Apple Crisp',
            price: 100000,
            img: item15,
            img2 : item16
        },


    ]

    useEffect(() => {
        setProductData(Product)
    }, [])


    return (
        <div>
             <Card style={{ width: '18rem' }} className=' ml-11' ></Card>
            {/* <button onClick={data}>Click For Data</button> */}
            <div className='flex flex-wrap justify-evenly'>

                {
                    productData.map((product) => {
                        return (
                            <div className="w-[300px] rounded-md border">
                                {/* <img
                                    src={product.img }
                                    alt="Laptop"
                                    className="h-[200px] w-full rounded-t-md object-cover"
                                /> */}
                                <div className='w-[300px] h-[300px] bg-black'>
                                    <img src={product.img} alt="not found" id='list-readering-img'/>
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
                            </div>
                        )
                    })
                }
            </div>
            <Card/>

        </div>
    )
}

export default List_Rendering