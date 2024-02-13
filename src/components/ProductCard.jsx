import { Button, Image } from "@nextui-org/react";
import { products } from "../../data";
import { useEffect } from "react";

function ProductCard({setCart}) {

  const handleAddToCart = (product) => {
    const NewProduct = {
      ...product,
      quantity:1
    }
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = storedCart.find((item) => item.id === NewProduct.id);

    if (existingProduct) {
      const updatedCart = storedCart.map(
        item => item.id === NewProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...storedCart, NewProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };


useEffect(()=>{
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(storedCart);
},[])

  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-4xl text-gray-600">
        PRODUCTOS
      </h1>
      {/* CARDS CONTAINER */}
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center md:mx-[4rem] p-2 mt-5 gap-3">
        {/* CARD */}
        {products.map((product) => (
          <div
            className="flex flex-col max-w-[20rem] gap-2 cursor-pointer"
            key={product.name + product.price}
          >
            <div className="relative overflow-hidden rounded-xl group">
              <Button
                onClick={() => handleAddToCart(product)}
                className="absolute w-full bottom-0 bg-black text-white font-semibold rounded-none z-10 hover:bg-green-100 hover:text-black"
              >
                Añadir
              </Button>
              <Image
                className="hover:scale-110 z-0"
                src={product.img}
                alt="product image"
              />
            </div>
            <div className="w-full flex flex-col items-center text-sm text-black py-1">
              <h3 className="font-bold text-center">{product.name}</h3>
              <span className="font-bold">${product.price}</span>
            </div>
          </div>
        ))}
        {/* ------------------------------------------------------------ */}
      </div>
    </div>
  );
}

export default ProductCard;
