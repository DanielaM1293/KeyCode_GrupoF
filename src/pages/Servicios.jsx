import React from "react";
import Carousel from "../components/Carousel";
import { FaTruck, FaCalendarAlt } from "react-icons/fa";

export const Servicios = () => {
  const deliveryImages = [
    "https://blog.novasafra.com.br/wp-content/uploads/2022/01/6-dicas-de-sucesso-para-alavancar-as-vendas-do-seu-delivery-780x450.jpeg",
    "https://d1ih8jugeo2m5m.cloudfront.net/2024/09/vender-comida-a-domicilio-1024x585.jpg",
  ];

  const advisoryImages = [
    "https://montearroyo.co/wp-content/uploads/2020/04/eventos-empresariales-corporativos-sociales-afueras-de-bogota-cerca-matrimonios-bodas-sitio-campestre-montearroyo-restaurante-alto-del-vino-cundinamarca-colombia.jpg",
    "https://partners.reservandonos.com/wp-content/uploads/2022/03/cocina-abierta.png",
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Nuestros Servicios</h1>
      
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-center mb-4 flex items-center justify-center">
          <FaTruck className="mr-2 text-blue-600" /> Domicilios
        </h2>
        <Carousel images={deliveryImages} />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-4 flex items-center justify-center">
          <FaCalendarAlt className="mr-2 text-blue-600" /> Eventos
        </h2>
        <Carousel images={advisoryImages} />
      </div>
    </div>
  );
};

export default Servicios;
