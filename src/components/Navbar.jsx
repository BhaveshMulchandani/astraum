import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      {/* Logo */}
      <h1 className="text-lg font-semibold font-serif ">Astrumai</h1>

      {/* Nav Links */}
      <ul className="flex items-center gap-8  font-sans font-medium text-lg">
        <li className="cursor-pointer hover:text-gray-400 transition">Work</li>
        <li className="cursor-pointer hover:text-gray-400 transition">About</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Contact</li>
        <li>
          <i className="ri-search-line text-lg hover:text-gray-400 cursor-pointer"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
