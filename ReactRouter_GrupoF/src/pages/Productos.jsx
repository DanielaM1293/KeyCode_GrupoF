import { Link } from "react-router-dom";

export const Productos = ({ productos }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Productos</h2>
      <ul className="space-y-4">
        {productos.map((producto) => (
          <li key={producto.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex items-center space-x-4">
            <img src={producto.img} alt={producto.nombre} className="w-16 h-16 object-cover rounded" />
            <Link to={`/productos/${producto.id}`} className="text-blue-600 hover:text-blue-800">
              <span className="font-semibold">{producto.nombre}</span> - <span className="text-green-600">${producto.precio}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
