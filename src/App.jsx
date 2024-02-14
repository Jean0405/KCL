import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Product } from "./pages/Product/Product";
import { Toaster } from "sonner";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import NavigationBar from "./components/NavigationBar";

const PHONE = import.meta.env.VITE_PHONE;
const MESSAGE = import.meta.env.VITE_MESSAGE;
const STATUS_MESSAGE = import.meta.env.VITE_STATUS_MESSAGE;
const ACCOUNT = import.meta.env.VITE_ACCOUNT;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>      
    <Toaster richColors/>
      <NavigationBar setIsMenuOpen={setIsMenuOpen} setIsCartOpen={setIsCartOpen}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>} />
          <Route path="/payment" element={<Payment isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>} />
          <Route path="/product/:productId" element={<Product isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>} />
        </Routes>                 
      </Router>
      <FloatingWhatsApp accountName={ACCOUNT} phoneNumber={PHONE} chatMessage={MESSAGE} statusMessage={STATUS_MESSAGE}/>
    </>
  );
}

export default App;
