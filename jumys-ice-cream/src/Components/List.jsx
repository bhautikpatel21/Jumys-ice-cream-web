import React, { useState, useEffect } from 'react';
import item1 from '../assets/activa_c.jfif';
import item1_hover from '../assets/activa_c_hover.jfif'; // new hover image
import item2 from '../assets/Audemars_Piguet_Royal_Oak_Offshore_c.jfif';
import item2_hover from '../assets/Audemars_Piguet_Royal_Oak_Offshore_c_hover.jfif'; // new hover image
// ... and so on for each product

const List_rendaring = () => {
  const [productData, setProductData] = useState([]);

  const Product = [
    {
      id: 1,
      name: 'Activa',
      price: 250,
      discount: '20%',
      color: 'Black',
      category: 'Watch',
      img: item1,
      hoverImg: item1_hover, // new hover image property
    },
    {
      id: 2,
      name: 'Firebolt',
      price: 2500,
      discount: '15%',
      color: 'Black',
      category: 'Watch',
      img: item2,
      hoverImg: item2_hover, // new hover image property
    },
    // ... and so on for each product
  ];

  useEffect(() => {
    setProductData(Product);
  }, []);

  return (
    <div>
      <h1 className="text-center bg-purple-600 p-2">This is List-Rendering in React</h1>

      <div className="flex flex-wrap justify-between">
        {productData.map((product) => {
          return (
            <div
              className="w-[300px] rounded-md border"
              key={product.id}
              onMouseEnter={(e) => {
                e.target.querySelector('img').src = product.hoverImg;
              }}
              onMouseLeave={(e) => {
                e.target.querySelector('img').src = product.img;
              }}
            >
              <img
                src={product.img}
                alt="not found"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              {/* rest of the code remains the same */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List_rendaring;