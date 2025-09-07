import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-green-700 text-white flex flex-col transition-all duration-300`}
    >
      <button
        className="p-2 bg-green-900 hover:bg-green-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "<<" : ">>"}
      </button>

      <nav className="flex flex-col gap-4 p-4">
        <Link to="/" className="hover:text-gray-200">🏠 {isOpen && "Home"}</Link>
        <Link to="/services" className="hover:text-gray-200">🛠️ {isOpen && "Services"}</Link>
        <Link to="/doctors" className="hover:text-gray-200">👨‍⚕️ {isOpen && "Doctors"}</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
