import React from "react";
import Carousel from "../components/Carousel";
import 'animate.css';

export const Home = () => {
  const heroImage = "https://comidastipicasdecolombiablog.wordpress.com/wp-content/uploads/2016/08/collage-comida-colombiana1.png?w=772";
  const deliveryImages = [
    "https://blog.novasafra.com.br/wp-content/uploads/2022/01/6-dicas-de-sucesso-para-alavancar-as-vendas-do-seu-delivery-780x450.jpeg",
    "https://d1ih8jugeo2m5m.cloudfront.net/2024/09/vender-comida-a-domicilio-1024x585.jpg",
  ];
  const advisoryImages = [
    "https://montearroyo.co/wp-content/uploads/2020/04/eventos-empresariales-corporativos-sociales-afueras-de-bogota-cerca-matrimonios-bodas-sitio-campestre-montearroyo-restaurante-alto-del-vino-cundinamarca-colombia.jpg",
    "https://partners.reservandonos.com/wp-content/uploads/2022/03/cocina-abierta.png",
  ];
  const lastImage = "https://hips.hearstapps.com/hmg-prod/images/restaurante-mitiko-asiatico-madrid-elle-1-1672757933.jpeg";

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="relative mb-10">
        <img 
          src={heroImage} 
          alt="Comida Colombiana" 
          className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white z-10 animate__animated animate__fadeInDown">¡Bienvenidos a Colombian Core!</h1>
        </div>
      </div>

      {/* Sección de Domicilios */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate__animated animate__fadeInDown">Deliciosos Domicilios</h2>
        <p className="text-gray-700 mb-4 animate__animated animate__fadeIn">Disfruta de nuestros platos tradicionales en la comodidad de tu hogar.</p>
        <Carousel images={deliveryImages} />
      </div>

      {/* Sección de Eventos */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate__animated animate__fadeInDown">Eventos Especiales</h2>
        <p className="text-gray-700 mb-4 animate__animated animate__fadeIn">Celebra con nosotros tus momentos más importantes.</p>
        <Carousel images={advisoryImages} />
      </div>

      {/* Mapa de Ubicación */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate__animated animate__fadeInDown">Nuestra Ubicación</h2>
        <div className="overflow-hidden rounded-lg shadow-lg mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.734798346926!2d-74.0572506857538!3d4.6056727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99bfd2a459a9%3A0x352a5134b65e607b!2sMonserrate!5e0!3m2!1ses-419!2sco!4v1636466822891!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación de Monserrate"
          ></iframe>
        </div>
      </div>

      {/* Última Imagen */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate__animated animate__fadeInDown">Disfruta de Nuestros Platos</h2>
        <img
          src={lastImage}
          alt="Último Plato"
          className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Botones de Redes Sociales */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate__animated animate__fadeInDown">Contáctanos</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
