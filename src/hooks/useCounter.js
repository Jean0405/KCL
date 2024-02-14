import { useEffect, useState } from "react";
import { useCartContext } from "../utils/CartContext";
import { handleAddToCart } from "../utils/AddCart";

export const useCounter = (product) => {
  const { cart, setCart } = useCartContext();
  const [counter, setCounter] = useState(0);
  const productCart = cart.find((item) => item.id === product.id);

  useEffect(() => {
    if (productCart) {
      setCounter(productCart.quantity);
    } else {
      setCounter(0);
    }
  }, [cart, product, productCart]);

  const increment = () => {
    setCounter((current) => current + 1);
    handleAddToCart(product, setCart, "add");
  };

  const decrement = () => {
    if (counter === 1) {
      handleAddToCart(product, setCart, "remove");
      return;
    }
    setCounter((current) => current - 1);
    handleAddToCart(product, setCart, "remove");
  };

  return {
    counter,
    increment,
    decrement,
  };
};
