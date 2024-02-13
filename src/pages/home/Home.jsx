import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Aside from "../../components/Aside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";

function Home({isMenuOpen, setIsMenuOpen, cart, setCart}) {

  return (
    <div className="relative min-h-screen bg-green-50">
      <NavigationBar setIsMenuOpen={setIsMenuOpen} cart={cart}/>
      <Aside setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <Carousel/>
      <ProductCard cart={cart} setCart={setCart}/>
    </div>
  );
}

export default Home;
