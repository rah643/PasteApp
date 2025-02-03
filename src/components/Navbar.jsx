import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 p-4 mb-5 shadow-md">
      <div className="flex justify-center gap-4 rounded-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg px-4 py-2 rounded-md transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `text-white text-lg px-4 py-2 rounded-md transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Pastes
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
