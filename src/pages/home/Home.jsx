import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Aside from "../../components/Aside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="relative min-h-screen bg-white">
      <NavigationBar setIsMenuOpen={setIsMenuOpen} cart={cart}/>
      <Aside setIsMenuOpen={setIsMenuOpen}/>
      <Carousel/>
      <ProductCard cart={cart} setCart={setCart}/>
    </div>
  );
}

export default Home;
