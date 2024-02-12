import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Aside from "../../components/Aside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <NavigationBar setIsMenuOpen={setIsMenuOpen}/>
      <Aside isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Carousel/>
      <ProductCard/>
    </div>
  );
}

export default Home;
