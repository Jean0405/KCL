export const handleAddToCart = (product, setCart, action) => {
  // Create a new product object with quantity set to 1
  const NewProduct = {
    ...product,
    quantity: 1,
  };

  // Retrieve the cart from local storage or initialize an empty array
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the index of the existing product in the cart
  const existingProductIndex = storedCart.findIndex(
    (item) => item.id === NewProduct.id
  );

  // If the action is to add a product
  if (action === "add") {
    // If the product already exists in the cart, update its quantity
    if (existingProductIndex !== -1) {
      const updatedCart = storedCart.map((item) =>
        item.id === NewProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the product is not in the cart, add it
      const updatedCart = [...storedCart, NewProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }
  // If the action is to remove a product
  else if (action === "remove") {
    // If the product exists in the cart
    if (existingProductIndex !== -1) {
      const updatedCart = [...storedCart];
      const existingProduct = updatedCart[existingProductIndex];
      // If the quantity is 1, remove the product from the cart
      if (existingProduct.quantity === 1) {
        updatedCart.splice(existingProductIndex, 1);
      } else {
        // If the quantity is greater than 1, decrease the quantity by 1
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }
};
