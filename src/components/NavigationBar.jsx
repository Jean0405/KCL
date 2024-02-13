import DarkModeButton from "./DarkModeButton";
import { Badge } from "@nextui-org/react";
import Promo from "./Promo";

function NavigationBar({ setIsMenuOpen, cart }) {
  return (
    <div className="fixed w-full top-0 z-20">
      <Promo />
      <div className="bg-green-950 dark:bg-neutral-900 text-green-50 dark:text-green-100 flex justify-between items-center p-3">
        <div className="md:hidden flex items-end text-4xl">
          <span
            className="cursor-pointer group hover:scale-110 duration-500"
            onClick={() => setIsMenuOpen(true)}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">KCL</h1>
        </div>
        <div className="flex text-3xl gap-4">
          <ion-icon name="person-outline"></ion-icon>
          <Badge content={cart.length} size="md" color="success">
            <ion-icon name="cart-outline"></ion-icon>
          </Badge>
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
