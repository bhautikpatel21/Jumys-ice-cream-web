import React, { useState } from 'react';
import f1 from '../assets/f1.webp';
import f2 from '../assets/f2.webp';
import f3 from '../assets/f3.webp';

const categories = [
  {
    name: "Canned Ice Cream",
    count: 3,
    subcategories: [],
  },
  {
    name: "Frozen Yogurt",
    count: 5,
    subcategories: [
      { name: "Flavored", count: 2 },
      { name: "Organic", count: 2 },
      { name: "Sugar Free", count: 2 },
    ],
  },
  {
    name: "Ice Cream Cakes",
    count: 3,
    subcategories: [],
  },
  {
    name: "Milkshakes",
    count: 6,
    subcategories: [
      { name: "Chocolate", count: 2 },
      { name: "Strawberry", count: 2 },
    ],
  },
  {
    name: "Popsicles",
    count: 4,
    subcategories: [],
  },
  {
    name: "Sundaes",
    count: 5,
    subcategories: [],
  },
];

const CategoryItem = ({ category, isOpen, toggleOpen }) => (
  <li className="mb-1">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" id={category.name} className="mr-2" />
        <label htmlFor={category.name} className="text-gray-700">
          {category.name} ({category.count})
        </label>
      </div>
      {category.subcategories.length > 0 && (
        <button onClick={toggleOpen}>
          {isOpen ? '-' : '+'}
        </button>
      )}
    </div>
    {isOpen && category.subcategories.length > 0 && (
      <ul className="pl-6 mt-1">
        {category.subcategories.map((subcategory, index) => (
          <li key={index} className="flex items-center mb-1">
            <input type="checkbox" id={subcategory.name} className="mr-2" />
            <label htmlFor={subcategory.name} className="text-gray-700">
              {subcategory.name} ({subcategory.count})
            </label>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const FilterComponent = () => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleOpen = (categoryName) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryName]: !prevOpenCategories[categoryName],
    }));
  };

  const colors = [
    { name: "Black", count: 2, hex: "#000000" },
    { name: "Blue", count: 1, hex: "#ADD8E6" },
    { name: "Brick", count: 2, hex: "#A52A2A" },
    { name: "Green", count: 2, hex: "#008000" },
    { name: "Pink", count: 4, hex: "#FFC0CB" },
    { name: "Red", count: 1, hex: "#FF0000" },
    { name: "White", count: 3, hex: "#FFFFFF" },
    { name: "Yellow", count: 4, hex: "#FFFF00" },
  ];

  return (
    <div className="p-4 rounded-lg w-96">
      {/* Categories Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              isOpen={!!openCategories[category.name]}
              toggleOpen={() => toggleOpen(category.name)}
            />
          ))}
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input type="range" min="0" max="100" className="w-full" />
        <div className="text-gray-700 mt-2">Range: $0.00 - $100.00</div>
      </div>

      {/* Color Section */}
      <div className="mb-4 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <ul className="flex flex-wrap flex-col">
          {colors.map((color, index) => (
            <li key={index} className="flex items-center mr-2 mb-2">
              <span
                className="block w-7 h-7 rounded-full mr-2 border border-gray-400 hover:border-gray-950"
                style={{ backgroundColor: color.hex }}
              ></span>
              <span>
                {color.name} ({color.count})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <ul>
          {["L", "M", "S", "XS"].map((size, index) => (
            <li key={index} className="flex items-center mb-1">
              <input type="checkbox" id={size} className="mr-2" />
              <label htmlFor={size} className="text-gray-700">
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Products Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Featured Product</h3>
        <ul>
          {[
            {
              name: "Green Mint Chip",
              sleshPrice: "$12.00",
              price: "$9.00",
              image: f1,
            },
            {
              name: "Salty Caramel",
              sleshPrice: "$13.00",
              price: "$11.00",
              image: f2,
            },
            {
              name: "Wedding Cake",
              sleshPrice: "$13.00",
              price: "$12.00",
              image: f3,
            },
          ].map((product, index) => (
            <li key={index} className="flex items-center mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover mr-2"
              />
              <div className="flex flex-col">
                <div className="text-gray-600 hover:text-[#ff0000] cursor-pointer duration-500">
                  {product.name}
                </div>
                <div className="flex gap-x-5">
                  <div className="text-gray-500">
                    <del>{product.sleshPrice}</del>
                  </div>
                  <div className="text-gray-950 font-semibold">
                    {product.price}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;