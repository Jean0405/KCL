import DarkModeButton from "./DarkModeButton";
import { Badge, Image, Link } from "@nextui-org/react";
import { useCartContext } from "../utils/CartContext";
import Horizontal_light_logo from "../../public/horizontalLightLogo.png"
import Promo from "./Promo";

function NavigationBar({ setIsMenuOpen, setIsCartOpen }) {
  const { cart } = useCartContext();
  
  const handleOpenAside = (aside)=>{
    if (aside === "menu") {
      setIsMenuOpen(true);
      setIsCartOpen(false);
    }else{
      console.log("cart");
      setIsMenuOpen(false);
      setIsCartOpen(true);
    }
  }

  return (
    <div className="fixed w-full top-0 z-20">
      <Promo />
      <div className="bg-green-950 dark:bg-neutral-900 text-green-50 dark:text-green-100 flex justify-between items-center p-3">
        <div className="md:hidden flex items-end text-4xl">
          <span
            className="cursor-pointer group hover:scale-110 duration-500"
            onClick={() => handleOpenAside("menu")}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>
        <div className="flex items-center">
          <Link href="/" className="text-4xl md:text-5xl text-green-100 font-bold">
            <Image className="w-[11rem]" src={Horizontal_light_logo}/>
          </Link>
        </div>
        <div className="flex text-3xl gap-4">
          <ion-icon name="person-outline"></ion-icon>
          <Badge content={cart.length} size="md" color="success">
            <span className="cursor-pointer flex items-end" onClick={()=>handleOpenAside("cart")} ><ion-icon name="cart-outline"></ion-icon></span>
          </Badge>
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
