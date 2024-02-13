import { Image } from "@nextui-org/react";
import { Content, Counter, ProductButton } from "../../components";

export const Product = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-2 p-8 lg:p-32">
      <div className="overflow-hidden rounded-xl group justify-self-center">
        <Image
          className="hover:scale-110"
          src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
          alt="product image"
        />
      </div>
      <div className="w-full p-6 text-center">
        <Content />
        <Counter />
        <div className="flex flex-col w-full gap-4 mt-10">
          <ProductButton text="Agregar al Carrito" />
          <ProductButton text="Comprar Ahora" />
        </div>
      </div>
    </div>
  );
};
