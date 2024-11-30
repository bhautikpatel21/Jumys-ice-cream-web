// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import HomeFooter from '../Components/Footer2';
// import ScrollToTopButton from '../Components/TopButton';
// import { NavLink,Outlet } from 'react-router-dom';

// const CartPage = () => {
//   const [isPageLoaded, setIsPageLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageLoaded(true);
//     }, 100); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div>

//       </div>
//       <HomeFooter />
//       <ScrollToTopButton/>
//     </>
//   );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import HomeFooter from "../Components/Footer2";
import ScrollToTopButton from "../Components/TopButton";
import { NavLink,Outlet } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      <div className="container mx-auto max-w-[1400px] xl px-4 py-1 lg:px-0">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="border-b py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8">
          <NavLink to="/shop" className="flex items-center text-blue-500">
            <FaArrowLeft className="mr-2" /> Continue Shopping
          </NavLink>
        </div>
      </div>
      <HomeFooter />
      <ScrollToTopButton />
    </div>
  );
};

export default CartPage;
