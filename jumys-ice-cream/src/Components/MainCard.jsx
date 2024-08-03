import React from 'react'
import item1 from '../assets/asset 24.webp'
import item2 from '../assets/asset 25.webp'
import item3 from '../assets/asset 26.webp'
import item4 from '../assets/asset 27.webp'
import item5 from '../assets/asset 28.webp'
import item6 from '../assets/asset 29.webp'
import item7 from '../assets/asset 30.webp'
import item8 from '../assets/asset 31.webp'
import item9 from '../assets/asset 32.webp'
import item10 from '../assets/asset 33.jpeg'
import { useState, useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';

const List_Rendering = () => {

    const [productData, setProductData] = useState([])

    const [visible, setVisible] = useState(false);

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

      const handleMouseEnter = () => {
        setVisible(true);
      };
      
      const handleMouseLeave = () => {
        setVisible(false);
      };

    const Product = [
        {
            id: 1,
            name: 'firebolt',
            price: 1000,
            dis: '10%',
            color: 'black',
            catagories: 'watch',
            img: item1,
            img2 : item2
        },
        {
            id: 2,
            name: 'firebolt-fire',
            price: 10000,
            dis: '50%',
            color: 'black',
            catagories: 'watch',
            img: item3,
            img2 : item4
        },
        {
            id: 3,
            name: 'samsung',
            price: 20000,
            dis: '10%',
            color: 'magicgray',
            catagories: 'watch',
            img: item5,
            img2 : item6
        },
        {
            id: 4,
            name: 'xiomi',
            price: 10000,
            dis: '10%',
            color: 'white',
            catagories: 'mobile',
            img: item7,
            img2 : item8,
        },
        {
            id: 5,
            name: 'iphone15',
            price: 100000,
            dis: '10%',
            color: 'magicgreen',
            catagories: 'mobile',
            img: item9,
            img2 : item10
        },


    ]

    
    const ProductFilter = Product.filter((item) => item.catagories === 'watch')

    console.log(ProductFilter);

    useEffect(() => {
        setProductData(Product)
    }, [])


    return (
        <div>
             <Card style={{ width: '18rem' }} className=' ml-11' ></Card>
            <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>

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