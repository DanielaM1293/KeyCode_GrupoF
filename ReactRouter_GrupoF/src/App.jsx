import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca, Home, Productos, ProductosDetalle } from "./pages";
import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Ajiaco",
      precio: 15000,
    },
    {
      id: 2,
      nombre: "Bandeja Paisa",
      precio: 20000,
    },
    {
      id: 3,
      nombre: "Arroz con Pollo",
      precio: 2000,
    },
    {
      id: 4,
      nombre: "Mondongo",
      precio: 10000,
    },
  ]);

  return (
    <BrowserRouter>
      <h1>Restaurante F</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route path="/productos/:id" element={<ProductosDetalle productos={productos} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
