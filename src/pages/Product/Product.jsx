import { Image, Link } from "@nextui-org/react";
import { Content, Counter, ProductButton } from "../../components";
import { useLocation } from 'react-router-dom';
import Aside from "../../components/Aside";
import CardAside from "../../components/CardAside";
import Testimony from "../../components/Testimony";

const styles = {
  div: "justify-center",
  buttonLeft: "py-2 px-4 w-14 h-10",
  span: "w-14",
  buttonRight: "py-2 px-4 w-14 h-10",
};

export const Product = ({isMenuOpen, setIsMenuOpen , isCartOpen, setIsCartOpen}) => {
  const location = useLocation();
  const product = location.state.productData;

  return (
    <>
    <Aside setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
    <CardAside setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen}/>
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-center gap-2 px-2 py-10 lg:px-32 pt-[10rem]">
      <div className="overflow-hidden rounded-xl group justify-self-center">
        <Image
        className="w-[40rem]"
          src={product.img}
          alt="product image"
        />
        <div className="flex justify-center gap-2 md:gap-5 py-3">
        <Image
          className="w-[100px] cursor-pointer"
          src={product.img}
          alt="product image"
        />
        <Image
          className="w-[100px] cursor-pointer"
          src={product.img}
          alt="product image"
        />
        <Image
          className="w-[100px] cursor-pointer"
          src={product.img}
          alt="product image"
        />
        <Image
          className="w-[100px] cursor-pointer"
          src={product.img}
          alt="product image"
        />
        </div>
      </div>
      <div className="w-full p-6 text-center">
        <Content product={product}/>
        <Counter styles={styles} product={product}/>
        <div className="flex flex-col w-full gap-4 mt-10">
          <ProductButton text="Agregar al Carrito" />
          <Link href="/payment" className="w-full"><ProductButton text="Comprar Ahora" /></Link>
        </div>
        <Testimony/>
      </div>
    </div>
    </>
  );
};
