import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  },[])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);
export { CartProvider, useCartContext };
