import React, { useState } from "react";
import Aside from "../../components/Aside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";

function Home({isMenuOpen, setIsMenuOpen}) {
  return (
    <div className="relative min-h-screen bg-green-50">
      <Aside setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <Carousel/>
      <ProductCard/>
    </div>
  );
}

export default Home;
