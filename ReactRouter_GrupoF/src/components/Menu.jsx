import { NavLink } from "react-router-dom";
import React from 'react';
import { FaHome, FaInfoCircle, FaUtensils, FaServicestack } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="flex justify-center space-x-8 bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-lg shadow-lg">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
        }
      >
        <FaHome className="mr-1" /> Home
      </NavLink>
      <NavLink 
        to="/acerca" 
        className={({ isActive }) => 
          `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
        }
      >
        <FaInfoCircle className="mr-1" /> Acerca
      </NavLink>
      <NavLink 
        to="/productos" 
        className={({ isActive }) => 
          `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
        }
      >
        <FaUtensils className="mr-1" /> Productos
      </NavLink>
      <NavLink 
        to="/servicios" 
        className={({ isActive }) => 
          `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
        }
      >
        <FaServicestack className="mr-1" /> Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;
