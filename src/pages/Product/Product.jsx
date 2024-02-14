import { Image } from "@nextui-org/react";
import { Content, Counter, ProductButton } from "../../components";
import { useLocation } from 'react-router-dom';
import Aside from "../../components/Aside";

const styles = {
  div: "justify-center",
  buttonLeft: "py-2 px-4 w-14 h-10",
  span: "w-14",
  buttonRight: "py-2 px-4 w-14 h-10",
};

export const Product = ({isMenuOpen, setIsMenuOpen}) => {
  const location = useLocation();
  const product = location.state.productData;

  return (
    <>
    <Aside setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-2 px-8 lg:px-32 pt-[10rem]">
      <div className="overflow-hidden rounded-xl group justify-self-center">
        <Image
          className="hover:scale-110"
          src={product.img}
          alt="product image"
        />
      </div>
      <div className="w-full p-6 text-center">
        <Content product={product}/>
        <Counter styles={styles} product={product}/>
        <div className="flex flex-col w-full gap-4 mt-10">
          <ProductButton text="Agregar al Carrito" />
          <ProductButton text="Comprar Ahora" />
        </div>
      </div>
    </div>
    </>
  );
};
