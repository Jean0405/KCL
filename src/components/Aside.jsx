import React from 'react'
import { Link } from "@nextui-org/react";

function Aside({isMenuOpen, setIsMenuOpen}) {
  return (
    <aside className={`fixed top-0 bg-green-100 dark:bg-neutral-900 w-[75%] ${isMenuOpen ? "scale-100 flex": "scale-0 hidden"} min-h-screen z-50 md:hidden`}>
        <div className="w-full min-h-screen flex flex-col justify-between">
          <div className='dark:text-green-100'>
            <div className="text-5xl mt-1">
              <span className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}><ion-icon name="close-outline"></ion-icon></span>
            </div>
            <div className="flex flex-col gap-4 mt-5 p-3">
              <Link className="text-black dark:text-green-100 cursor-pointer text-xl">
                Inicio
              </Link>
              <Link className="text-black dark:text-green-100 cursor-pointer text-xl">
                Productos
              </Link>
              <Link className="text-black dark:text-green-100 cursor-pointer text-xl">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="dark:text-green-100 flex flex-col gap-2 p-3">
            <div className='text-xl'>Redes sociales</div>
            <div className='flex text-4xl gap-4'>
            <span className="hover:text-blue-700 cursor-pointer"><ion-icon name="logo-facebook"></ion-icon></span>
            <span className="hover:text-rose-600 cursor-pointer"><ion-icon name="logo-instagram"></ion-icon></span>
            <span className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-whatsapp"></ion-icon></span>
            </div>
          </div>
        </div>
      </aside>
  )
}

export default Aside