import { NavLink } from "react-router-dom";
import React from 'react';

const Menu = () => {
  return (
    <nav className="flex justify-center space-x-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      <NavLink
        className={({ isActive }) =>
          `text-white hover:text-yellow-400 transition duration-300 ${isActive ? 'font-bold underline' : ''}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-white hover:text-yellow-400 transition duration-300 ${isActive ? 'font-bold underline' : ''}`
        }
        to={"/acerca"}
      >
        Acerca
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-white hover:text-yellow-400 transition duration-300 ${isActive ? 'font-bold underline' : ''}`
        }
        to={"/productos"}
      >
        Productos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-white hover:text-yellow-400 transition duration-300 ${isActive ? 'font-bold underline' : ''}`
        }
        to={"/servicios"}
      >
        Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;
