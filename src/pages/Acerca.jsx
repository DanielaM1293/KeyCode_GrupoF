import React from 'react';

export const Acerca = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Acerca de Nuestro Restaurante</h1>
      <img
        src="https://th.bing.com/th/id/OIP.k8E3ghk6OXLyl5lcTac8UAHaE8?rs=1&pid=ImgDetMain" 
        alt="Imagen del restaurante"
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">
        Bienvenido a nuestro restaurante, donde la calidad y el sabor se encuentran en cada plato. 
        Nos enorgullece ofrecer una experiencia culinaria excepcional utilizando ingredientes frescos y 
        recetas tradicionales.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Nuestra Misión</h2>
      <p className="text-lg text-gray-700 mb-4">
        Nuestra misión es brindar a nuestros clientes una experiencia gastronómica memorable, 
        donde cada bocado sea un deleite. Queremos que cada visita a nuestro restaurante sea 
        especial y única.
      </p>
      <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Ingredientes frescos y de alta calidad.</li>
        <li>Un ambiente acogedor y familiar.</li>
        <li>Un equipo apasionado por la gastronomía.</li>
      </ul>
    </div>
  );
};