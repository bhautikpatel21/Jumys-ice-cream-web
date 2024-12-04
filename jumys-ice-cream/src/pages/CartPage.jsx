// import React, { useState, useEffect } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import HomeFooter from "../Components/Footer2";
// import ScrollToTopButton from "../Components/TopButton";
// import { NavLink } from "react-router-dom";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Function to remove a specific item
//   const removeItem = (index) => {
//     const updatedCart = cartItems.filter((item, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Function to clear all items
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.setItem("cart", JSON.stringify([]));
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="container mx-auto px-4 py-6 lg:px-0 lg:py-8 max-w-screen-lg">
//         <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-lg md:text-xl text-gray-600">Your cart is empty</p>
//         ) : (
//           <div>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center border-b-2 border-gray-400 py-4 space-x-4 md:space-x-6"
//               >
//                 {/* NavLink added for item redirection */}
//                 <NavLink to={`/product/${item.productId}`} className="flex items-center w-full">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded-md sm:w-24 sm:h-24 md:w-32 md:h-32"
//                   />
//                   <div className="ml-4">
//                     <h3 className="font-semibold text-lg md:text-xl">{item.name}</h3>
//                     <p className="text-sm text-gray-600">Price: <span> $</span> {item.price}</p>
//                     <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                     {item.selectedSize && (
//                       <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
//                     )}
//                   </div>
//                 </NavLink>

//                 <button
//                   onClick={() => removeItem(index)}
//                   className="ml-auto text-black p-3 rounded-xl hover:scale-110 hover:duration-300 font-semibold bg-blue-300"
                  
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Clear Cart Button */}
//         {cartItems.length > 0 && (
//           <div className="mt-8">
//             <button
//               onClick={clearCart}
//               className="text-red-00 hover:scale-110 hover:duration-300 font-semibold bg-red-500  p-3 rounded-xl"
//             >
//               Clear Cart
//             </button>
//           </div>
//         )}

//         <div className="mt-8">
//           <NavLink to="/shop" className="flex items-center text-blue-500 hover:text-blue-700">
//             <FaArrowLeft className="mr-2" /> Continue Shopping
//           </NavLink>
//         </div>
//       </div>

//       {/* Footer */}
//       <HomeFooter />

//       {/* Scroll to Top Button */}
//       <ScrollToTopButton />
//     </div>
//   );
// };

// export default CartPage;

////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import HomeFooter from '../Components/Footer2';
import ScrollToTopButton from '../Components/TopButton';
import { NavLink,Outlet } from 'react-router-dom';
const CartPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        <h1 className='mb-72'>This is cart page</h1>
      </div>
      <HomeFooter />
      <ScrollToTopButton/>
    </>
  );
};
export default CartPage;
