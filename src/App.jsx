import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import NavigationBar from "./components/NavigationBar";
import { Product } from "./pages/Product/Product";

const PHONE = import.meta.env.VITE_PHONE;
const MESSAGE = import.meta.env.VITE_MESSAGE;
const STATUS_MESSAGE = import.meta.env.VITE_STATUS_MESSAGE;
const ACCOUNT = import.meta.env.VITE_ACCOUNT;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavigationBar setIsMenuOpen={setIsMenuOpen}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>} />
          <Route path="/payment" element={<Payment isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/product/:productId" element={<Product isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>} />
        </Routes>
      </Router>
      <FloatingWhatsApp accountName={ACCOUNT} phoneNumber={PHONE} chatMessage={MESSAGE} statusMessage={STATUS_MESSAGE}/>
    </>
  );
}

export default App;
