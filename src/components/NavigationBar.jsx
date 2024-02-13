import React from 'react'

function NavigationBar({setIsMenuOpen}) {
  return (
    <div className='bg-green-100 flex justify-between items-center p-3'>
        <div className='md:hidden flex items-end text-4xl'>
            <span className='cursor-pointer group hover:scale-110 duration-500' onClick={()=>setIsMenuOpen(true)}><ion-icon name="menu-outline"></ion-icon></span>
        </div>
        <div>
            <h1 className='text-4xl md:text-5xl font-bold'>KCL</h1>
        </div>
        <div className='flex text-3xl gap-3'>
        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="cart-outline"></ion-icon>
        </div>
    </div>
  )
}

export default NavigationBar