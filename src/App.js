import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path="/*" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
