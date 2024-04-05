// import { useState, useEffect, createContext } from "react";

// export const CartContext = createContext()

// export const CartProvider = ({children}) =>{

//     const[cartItems, setCartItems] = useState([])

//     const addToCart = (item) => {
//         const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//         if (isItemInCart) {
//             setCartItems(
//               cartItems.map((cartItem) =>
//                 cartItem.id === item.id
//                   ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                   : cartItem
//               )
//             );
//           } else {
//             setCartItems([...cartItems, { ...item, quantity: 1 }]);
//           }
//         };

//         return (
//             <CartContext.Provider
//               value={{
//                 cartItems,
//                 addToCart,
//               }}
//             >
//               {children}
//             </CartContext.Provider>
//           );
//     }
