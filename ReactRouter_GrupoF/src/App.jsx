import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca, Home, Productos, ProductosDetalle, Servicios } from "./pages";
import Menu from "./components/Menu";
import { useState } from "react";
import "./App.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Ajiaco", precio: 15000, img: "https://www.bing.com/images/blob?bcid=Tn8.p0SnzoYHYsFXui.DomMyMj9i.....yQ" },
    { id: 2, nombre: "Bandeja Paisa", precio: 20000, img: "https://www.bing.com/images/blob?bcid=TiyGCGaTTIYHYsFXui.DomMyMj9i.....xI" },
    { id: 3, nombre: "Arroz con Pollo", precio: 1200, img: "https://www.bing.com/images/blob?bcid=TjWvpN22PIYHYsFXui.DomMyMj9i.....4I" },
    { id: 4, nombre: "Sancocho de Gallina", precio: 20000, img: "https://cdn.theculturetrip.com/wp-content/uploads/2017/09/sancocho_de_gallina_criolla.jpg" },
    { id: 5, nombre: "Tamales", precio: 14000, img: "https://th.bing.com/th/id/R.88611189af97dc3d998c674094dc1b76?rik=bvH6haJlevMdng&riu=http%3a%2f%2fblog.redbus.co%2fwp-content%2fuploads%2f2019%2f12%2fDSC_0031-1.jpg&ehk=Q%2b%2bW5h3pNlNRUwNc87fHaO8BXhMsu5%2bep1J%2bqMEyvgU%3d&risl=&pid=ImgRaw&r=0" },
    { id: 6, nombre: "Mojarra Frita", precio: 30000, img: "https://3.bp.blogspot.com/--_UzTo__pLg/V-yT-7Bl0QI/AAAAAAAAAGo/jD6EXai2FYAXRTctzGanpPg5h4qxwi_TgCLcB/s1600/mojarra-frita.jpg" },
    { id: 7, nombre: "Sudado de Pollo", precio: 15000, img: "https://th.bing.com/th/id/R.5a3a213b021f2c4facbf1997cd571122?rik=OhJHj1vBe6nZ%2bw&pid=ImgRaw&r=0" },
    { id: 8, nombre: "Estofado de Carne", precio: 12000, img: "https://th.bing.com/th/id/R.6347628e08a3b21c47b1cd12a964355d?rik=pO2q9u5zoqd5xw&pid=ImgRaw&r=0" },
    { id: 9, nombre: "Salchipapa", precio: 22000, img: "https://th.bing.com/th/id/R.ccc2b51e3942546573b1db34d8d249e0?rik=mT7L7NBghgkrsA&pid=ImgRaw&r=0" },
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
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
