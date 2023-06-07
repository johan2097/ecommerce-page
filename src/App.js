import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './modulos/Home';
import Footer from './componentes/Footer';
import { Routes, Route } from 'react-router-dom';
import Producto from './modulos/Producto';
import Productos from './modulos/Productos';
import Carro from './modulos/Carro';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:id" element={<Producto/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="Carro" element={<Carro/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
