import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const PHONE = import.meta.env.VITE_PHONE;
const MESSAGE = import.meta.env.VITE_MESSAGE;
const STATUS_MESSAGE = import.meta.env.VITE_STATUS_MESSAGE;
const ACCOUNT = import.meta.env.VITE_ACCOUNT;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cart={cart} setCart={setCart}/>} />
          <Route path="/payment" element={<Payment isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
      <FloatingWhatsApp accountName={ACCOUNT} phoneNumber={PHONE} chatMessage={MESSAGE} statusMessage={STATUS_MESSAGE}/>
    </>
  );
}

export default App;
