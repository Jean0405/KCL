import Aside from "../../components/Aside";
import CardAside from "../../components/CardAside";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";

function Home({isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen}) {
  return (
    <div className="relative min-h-screen bg-green-50">
      <Aside setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <CardAside setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen}/>
      <Carousel/>
      <ProductCard/>
    </div>
  );
}

export default Home;
