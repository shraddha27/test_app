import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductListing from "./components/ProductList";
import ProductDetails from "./components/ProductDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default App;
