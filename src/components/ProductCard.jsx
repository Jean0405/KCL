import { Button, Image } from "@nextui-org/react";
import { products } from "../../data";
import { useNavigate } from "react-router";
import { useCartContext } from "../utils/CartContext";
import { handleAddToCart } from "../utils/AddCart";

function ProductCard() {
  let redirect = useNavigate();
  const { setCart } = useCartContext();

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
            className="relative flex flex-col max-w-[20rem] gap-2 cursor-pointer overflow-hidden"
            key={product.id}
          >
            {product.promo && (
              <div
                className="absolute w-[8rem] h-[2rem] justify-start items-center top-[1rem] -right-10 sm:-right-4
               flex bg-red-600 text-white z-10 px-1"
              >
                <p className="font-bold flex text-xl">
                  - {product.promo} <span>%</span>
                </p>
              </div>
            )}
            <div className="relative overflow-hidden rounded-xl group">
              <Button
                onClick={() => handleAddToCart(product, setCart, "add")}
                className="absolute w-full bottom-0 bg-black text-white font-semibold rounded-none z-10 hover:bg-green-100 hover:text-black"
              >
                Añadir
              </Button>
              <Image
                className="hover:scale-110 z-0"
                src={product.img}
                alt="product image"
                onClick={() =>
                  redirect(`/product/${product.id}`, {
                    state: {
                      productData: product,
                    },
                  })
                }
              />
            </div>
            <div className="w-full flex flex-col items-center text-sm text-black py-1">
              <h3 className="font-bold text-center">{product.name}</h3>
              <span className="font-bold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
