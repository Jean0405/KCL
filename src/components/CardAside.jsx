import { Divider, ScrollShadow } from "@nextui-org/react";
import { CardButton, CardProduct, ProductButton } from "./index";
import { useCartContext } from "../utils/CartContext";

export default function CardAside({ setIsCartOpen, isCartOpen }) {
  const { cart } = useCartContext();
  return (
    <div
      className={`w-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] fixed top-0 right-0 min-h-screen bg-white z-50 p-3 ${
        isCartOpen ? "scale-100" : "scale-0 hidden"
      }`}
    >
      <div className="flex flex-row justify-between m-8">
        <h3 className="text-3xl font-bold">Carrito </h3>
        <CardButton setIsCartOpen={setIsCartOpen} />
      </div>
      <Divider />
      <ScrollShadow className="w-auto flex flex-col gap-5 h-unit-9xl">
        {cart.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ScrollShadow>
      <div className="absolute bottom-4 px-2">
        <p className="text-bold text-lg text-zinc-500 mt-2">
          Los impuestos y gastos de envío se calculan en la pantalla de pago
        </p>
        <div className="flex flex-col w-full mt-3">
          <ProductButton text="Ir a Pagar . $75.000" />
        </div>
      </div>
    </div>
  );
}
