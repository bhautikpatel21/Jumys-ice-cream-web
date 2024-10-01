import React from 'react'
import item1 from '../assets/activa_c.jfif'
import item2 from '../assets/Audemars_Piguet_Royal_Oak_Offshore_c.jfif'
import item3 from '../assets/Audemars_Piguet_Royal_Oak_Offshore2_c.jfif'
import item4 from '../assets/firebolt_c.jfif'
import item5 from '../assets/hublot_c.jfif'
import item6 from '../assets/hublot2_c.webp'
import item7 from '../assets/rolex_r.jfif'
import item8 from '../assets/samsung_c.jfif'
import item9 from '../assets/samsung2_c.jfif'
import item10 from '../assets/samsung3_c.jfif'
import { useState , useEffect } from 'react'
import { useState } from 'react'

const List_rendaring = () => {

    const [productData, setProductData] = useState([]);

    console.log('productData', productData);

    const Product = [
        {
            id : 1,
            name : 'Activa',
            price : 250,
            discount : '20%',
            color : Black,
            category : 'Watch',
            img : item1
        },
        {
            id : 2,
            name : 'Firebolt',
            price : 2500,
            discount : '15%',
            color : Black,
            category : 'Watch',
            img : item2
        },
        {
            id : 3,
            name : 'OffShore',
            price : 170099,
            discount : '17%',
            color : Black,
            category : 'Watch',
            img : item3
        },
        {
            id : 4,
            name : 'OffShore',
            price : 285090,
            discount : '20%',
            color : gold,
            category : 'Watch',
            img : item4
        },
        {
            id : 5,
            name : 'hublot',
            price : 25000,
            discount : '28%',
            color : Black,
            category : 'Watch',
            img : item5
        },
        {
            id : 6,
            name : 'hublot',
            price : 37000,
            color : Black,
            category : 'Watch',
            img : item6
        },
        {
            id : 7,
            name : 'rolex',
            price : 45990,
            discount : '5%',
            color : Black,
            category : 'Watch',
            img : item7
        },
        {
            id : 8,
            name : 'samsung',
            price : 6700,
            discount : '10%',
            color : Black,
            category : 'Watch',
            img : item8
        },
        {
            id : 9,
            name : 'samsung',
            price : 12000,
            discount : '14%',
            color : purpal,
            category : 'Watch',
            img : item9
        },
        {
            id : 10,
            name : 'samsung',
            price : 78890,
            discount : '80%',
            color : green,
            category : 'Watch',
            img : item10
        },
    ]

    const ProductFilter = Product.filter((item) => item.category === 'Watch');

    console.log(ProductFilter);

    useEffect(() => {
        setProductData(Product)
    },[]);
  return (
    <div>
    <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>

    {/* <button onClick={data}>Click For Data</button> */}
  <div className='flex flex-wrap justify-between'>

    {
      productData.map((product) => {
        return (
            <div className="w-[300px] rounded-md border" key={product.id}>
              <img
                src={product.img}
                alt="not found"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.name} &nbsp; <ArrowUpRight className="h-4 w-4" />
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                  Rs.{product.price}
                </p>
                <div className="mt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Macbook
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Apple
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Laptop
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button>
              </div>
            </div>
        )
      })
    }
  </div>

  </div>
  )
}

export default List_rendaring