import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-6 my-4">
      {/* Logo */}
      <h1 className="text-2xl font-medium font-serif ">Astraum</h1>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 font-sans text-lg font-normal">
        <Link to="/work"><li className="cursor-pointer hover:text-gray-400 transition">Work</li></Link>
        <Link to="/about"><li className="cursor-pointer hover:text-gray-400 transition">About</li></Link>
        <Link to="/contact"><li className="cursor-pointer hover:text-gray-400 transition">Contact</li></Link>
        <li>
          <i className="ri-search-line text-lg hover:text-gray-400 cursor-pointer"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
