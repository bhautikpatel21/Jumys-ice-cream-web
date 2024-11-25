import React, { useState, useEffect } from 'react';
import f1 from '../assets/f1.webp';
import f2 from '../assets/f2.webp';
import f3 from '../assets/f3.webp';

const categories = [
  { name: "Canned Ice Cream", count: 3, subcategories: [] },
  { name: "Frozen Yogurt", count: 5, subcategories: [{ name: "Flavored", count: 2 }, { name: "Organic", count: 2 }, { name: "Sugar Free", count: 2 }] },
  { name: "Ice Cream Cakes", count: 3, subcategories: [] },
  { name: "Milkshakes", count: 6, subcategories: [{ name: "Chocolate", count: 2 }, { name: "Strawberry", count: 2 }] },
  { name: "Popsicles", count: 4, subcategories: [] },
  { name: "Sundaes", count: 5, subcategories: [] },
];

const CategoryItem = ({ category, isOpen, toggleOpen }) => (
  <li className="mb-1">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <label htmlFor={category.name} className="text-gray-700">{category.name}</label>
      </div>
      {category.subcategories.length > 0 && (
        <button onClick={toggleOpen} className="text-lg">{isOpen ? '-' : '+'}</button>
      )}
    </div>
    {isOpen && category.subcategories.length > 0 && (
      <ul className="pl-6 mt-1">
        {category.subcategories.map((subcategory, index) => (
          <li key={index} className="flex items-center mb-1">
            <label htmlFor={subcategory.name} className="text-gray-700">{subcategory.name}</label>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const FilterComponent = ({ onColorSelect, onPriceChange, onSizeSelect, onProductSelect }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [minPrice, setMinPrice] = useState(9);
  const [maxPrice, setMaxPrice] = useState(45);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleProductSelect = (productId) => {
    onProductSelect(productId);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const toggleOpen = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const colors = [
    { name: "Click Here", count: " All " },
    { name: "Black", count: 1, hex: "#000000" },
    { name: "Blue", count: 1, hex: "#ADD8E6" },
    { name: "Brick", count: 4, hex: "#A52A2A" },
    { name: "Green", count: 1, hex: "#008000" },
    { name: "Pink", count: 4, hex: "#FFC0CB" },
    { name: "Red", count: 1, hex: "#FF0000" },
    { name: "White", count: 4, hex: "#FFFFFF" },
    { name: "Yellow", count: 7, hex: "#FFFF00" },
    { name: "Purple", count: 1, hex: "#b862a8" },
    { name: "Lilac", count: 1, hex: "#C8A2C8" },
  ];

  const handleColorClick = (color) => {
    onColorSelect(color === "Click Here" ? null : color); 
  };

  useEffect(() => {
    onPriceChange(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  return (
    <div className="p-4 rounded-lg w-full max-w-xs mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Available Ice-Cream</h3>
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

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="9"
          max="45"
          value={maxPrice}
          onChange={handleMaxChange}
          className='w-full'
        />
        <p className="">Range: ${minPrice}.00 - ${maxPrice}.00</p>
      </div>

      <div className="mb-4 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <ul className="flex flex-col">
          {colors.map((color, index) => (
            <li key={index} className="flex items-center mr-2 mb-2 w-28 cursor-pointer" onClick={() => handleColorClick(color.name)}>
              {color.hex && (
                <span
                  className="block w-7 h-7 rounded-full mr-2 border border-gray-400 hover:border-gray-950"
                  style={{ backgroundColor: color.hex }}
                ></span>
              )}
              <span>{color.name} ({color.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <ul>
          <li className="flex items-center mb-1">
            <input
              type='radio'
              name="size"
              id="all"
              className="mr-2"
              onChange={() => handleSizeChange(null)} 
            />
            <label htmlFor="all" className="text-gray-700">All</label>
          </li>
          {["L", "M", "S", "XL"].map((size, index) => (
            <li key={index} className="flex items-center mb-1">
              <input
                type='radio'
                name="size"
                id={size}
                className="mr-2"
                onChange={() => handleSizeChange(size)} 
              />
              <label htmlFor={size} className="text-gray-700">{size}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Featured Products</h3>
        <ul>
          {[{ name: "Green Mint Chip", sleshPrice: "$32.00", price: "$28.00", ProductId: 14, image: f1 }, 
            { name: "Salty Caramel", sleshPrice: "$38.00", price: "$29.00", ProductId: 18, image: f2 }, 
            { name: "Wedding Cake", sleshPrice: "$29.00", price: "$22.00", ProductId: 24, image: f3 }].map((product, index) => (
            <li key={index} className="flex items-center mb-2" onClick={() => handleProductSelect(product.ProductId)}>
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-2" />
              <div className="flex flex-col">
                <div className="text-gray-600 hover:text-[#ff0000] cursor-pointer duration-500">{product.name}</div>
                <div className="flex gap-x-5">
                  <div className="text-gray-500"><del>{product.sleshPrice}</del></div>
                  <div className="text-gray-950 font-semibold">{product.price}</div>
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
