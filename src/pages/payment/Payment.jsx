import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Aside from "../../components/Aside";

import { Checkbox, Divider } from "@nextui-org/react";
import ProductItem from "../../components/ProductItem";

const departamentosColombia = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];

function Payment({isMenuOpen, setIsMenuOpen, cart, setCart}) {
  const [isOpenPurchaseSummary, setIsOpenPurchaseSummary] = useState(false);

  const handleOpenPurchaseSummary = () => {
    setIsOpenPurchaseSummary(!isOpenPurchaseSummary);
  };

  return (
    <div className="min-h-screen bg-white mt-[9rem]">
      <NavigationBar setIsMenuOpen={setIsMenuOpen} cart={cart}/>
      <Aside isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="w-full sm:w-[30rem] md:w-[40rem] flex flex-col items-center justify-center text-sm sm:text-lg m-auto px-5">
        <div className="w-full flex flex-wrap justify-between gap-2 p-2">
          <p
            className="flex items-center text-green-500 gap-1 cursor-pointer"
            onClick={() => handleOpenPurchaseSummary()}
          >
            {!isOpenPurchaseSummary ? (
              <>
                Mostrar resumen del pedido
                <ion-icon name="chevron-down-outline"></ion-icon>
              </>
            ) : (
              <>
                Ocultar resumen del pedido
                <ion-icon name="chevron-up-outline"></ion-icon>
              </>
            )}
          </p>
          <p className="font-bold text-gray-800">$ 118.000,00</p>
        </div>
        <div
          className={`w-full ${
            isOpenPurchaseSummary
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          } duration-700`}
        >
          {isOpenPurchaseSummary && (
            <>
              <div className="w-full flex justify-center">
                <div className="w-full flex flex-col gap-2">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </div>
              {/* Purchase datails */}
              <div className="w-full flex flex-col text-sm font-light bg-gray-100 rounded-xl gap-2 mt-3 p-3">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-semibold">105.000,00 $</p>
                </div>
                <div className="flex justify-between">
                  <p>Métodos de envío</p>
                  <p className="font-light">13.000,00 $</p>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <p>Total</p>
                  <p>
                    <span className="font-light text-[0.8rem]">COP</span>{" "}
                    118.000,00 $
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <form className="w-full flex flex-col items-center my-5">
        {/* <------- Contact Section -------> */}
        <div className="px-5 w-full sm:w-[30rem] md:w-[40rem] flex flex-col items-center my-3">
          <div className="w-full flex flex-col items-start gap-2">
            <h1 className="font-bold text-xl text-gray-600">
              Número de Whatsapp
            </h1>
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-lg border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Número de Whatsapp"
              maxLength={10}
              minLength={10}
            />
            <Checkbox className="text-sm" defaultSelected color="success">
              Enviarme novedades y ofertas por Whatsapp
            </Checkbox>
          </div>
        </div>
        {/*  <------ Delivery Section ------> */}
        <div className="w-full flex flex-col items-center">
          <div className="px-5 w-full sm:w-[30rem] md:w-[40rem] flex flex-col items-start my-3 gap-3">
            <h1 className="font-bold text-xl text-gray-600">Entrega</h1>
            <div className="relative w-full">
              <span className="absolute top-[14px] right-1">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
              <select className="w-full appearance-none bg-gray-100 outline-none border-none rounded-xl border-2 border-transparent focus:border-green-500 p-3">
                {departamentosColombia.map((departamento) => (
                  <option key={departamento} value={departamento}>
                    {departamento}
                  </option>
                ))}
              </select>
            </div>
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-xl border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Ciudad"
              maxLength={50}
            />
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-xl border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Código postal"
              maxLength={6}
              minLength={6}
            />
          </div>
        </div>
        {/*  <------ Personal Info Section ------> */}
        <div className="w-full flex flex-col items-center">
          <div className="px-5 w-full sm:w-[30rem] md:w-[40rem] flex flex-col items-start my-3 gap-3">
            <h1 className="font-bold text-xl text-gray-600">
              Información personal
            </h1>
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-xl border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Nombre"
              maxLength={50}
            />
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-xl border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Apellidos"
              maxLength={50}
            />
            <input
              required
              className="w-full bg-gray-100 outline-none rounded-xl border-2 border-transparent focus:border-green-500 p-3"
              type="text"
              placeholder="Cédula"
              maxLength={10}
            />
            <Checkbox className="text-sm" color="success">
              Guardar mi información y consultar más rápidamente la próxima vez
            </Checkbox>
          </div>
        </div>
        <div className="px-3 w-full sm:w-[30rem] md:w-[40rem]">
          <button
            type="submit"
            className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-full rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold"
          >
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
            <p className="z-10">Pedir ahora</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
