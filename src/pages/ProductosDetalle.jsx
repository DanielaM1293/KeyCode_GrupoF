import { useParams, useNavigate } from "react-router-dom";

export const ProductosDetalle = ({ productos }) => {
  const navegador = useNavigate();
  const { id } = useParams();

  const infoProducto = productos.find(
    (producto) => producto.id.toString() === id
  );

  const funcionNavegar = () => {
    navegador(-1);
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Detalle del producto:</h1>
      <h2 className="text-xl font-semibold mb-2">Producto: {infoProducto.nombre}</h2>
      <h3 className="text-lg text-gray-700 mb-4">Precio: $ {infoProducto.precio}</h3>
      
      {infoProducto.img && (
        <img
          src={infoProducto.img}
          alt={infoProducto.nombre}
          className="w-full h-auto rounded-md mb-4"
        />
      )}

      <button
        onClick={funcionNavegar}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Regresar
      </button>
    </section>
  );
};
