// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Awards from './pages/Awards';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
