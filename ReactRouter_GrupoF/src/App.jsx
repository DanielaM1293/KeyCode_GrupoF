import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca, Home, Productos, ProductosDetalle } from "./pages";
import Menu from "./components/Menu";
import { useState } from "react";
import "./App.css"; // Importa el archivo CSS si necesitas personalizaciones adicionales


function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Ajiaco", precio: 15000, imagen: "/assets/images/ajiaco.jpg" },
    { id: 2, nombre: "Bandeja Paisa", precio: 20000, imagen: "/assets/images/bandeja_paisa.jpg" },
    { id: 3, nombre: "Arroz con Pollo", precio: 2000, imagen: "/assets/images/arroz-pollo.jpg" },
    { id: 4, nombre: "Mondongo", precio: 10000, imagen: "/assets/images/mondongo.jpg" },
  ]);
  

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold text-center">Restaurante F</h1>
        </header>
        <Menu />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route
              path="/productos"
              element={<Productos productos={productos} />}
            />
            <Route
              path="/productos/:id"
              element={<ProductosDetalle productos={productos} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
