import { Divider, ScrollShadow } from "@nextui-org/react";
import { CardProduct, CardButton, ProductButton } from ".";

export const Card = () => {
  return (
    <div className="w-unit-9xl p-8 fixed right-0 min-h-screen">
      <div className="flex flex-row justify-between m-8">
        <h3 className="text-3xl font-bold">Carrito </h3>
        <CardButton />
      </div>
      <Divider />
      <ScrollShadow className="w-auto h-unit-9xl">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ScrollShadow>
      <p className="text-bold text-lg text-zinc-500 mt-2">
        Los impuestos y gastos de envío se calculan en la pantalla de pago
      </p>
      <div className="flex flex-col w-full mt-3">
        <ProductButton text="Ir a Pagar . $75.000" />
      </div>
    </div>
  );
};
