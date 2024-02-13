import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Aside from "../../components/Aside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      <NavigationBar setIsMenuOpen={setIsMenuOpen}/>
      <Aside setIsMenuOpen={setIsMenuOpen}/>
      <Carousel/>
      <ProductCard/>
    </div>
  );
}

export default Home;
