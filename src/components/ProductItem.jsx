import { Image } from "@nextui-org/react";
import React from "react";

function ProductItem() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full flex justify-between items-center text-sm sm:text-lg gap-3 p-2">
      <div className="flex justify-between items-center gap-2">
        <Image
          className="w-[3.2rem] h-[3.5rem]"
          src="https://cdn.shopify.com/s/files/1/0625/6027/2577/products/ACEITEDEALMENDRAS_64x64.jpg?v=1670310178"
          alt="product item"
        />
        <span>Aceite de Almendras</span>
      </div>
      <p>$ 35.000,00</p>
    </div>
  );
}

export default ProductItem;
