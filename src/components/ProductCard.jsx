import { Image } from "@nextui-org/react";
import React from "react";

function ProductCard() {
  return (
    <div className="mt-10">
        <h1 className="text-center font-bold text-4xl text-gray-600">PRODUCTOS</h1>
        {/* CARDS CONTAINER */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:mx-[10rem] p-2 gap-3">
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
        {/* CARD */}
        <div className="flex flex-col max-w-[20rem] gap-2 cursor-pointer">
          <div className="overflow-hidden rounded-xl group">
          <Image
            className="hover:scale-110"
            src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=600"
            alt="product image"
          />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center">Aceite de almendras</h3>
            <span className="text-gray-500 font-bold">$17.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
