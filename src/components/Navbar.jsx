import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/service", label: "Services" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <nav className="flex items-center justify-between mx-6 my-4 relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-medium font-serif ">Astraum</Link>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden block text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span>{menuOpen ? "\u2715" : "\u2630"}</span>
      </button>

      {/* Nav Links */}
      <ul
        className={`font-sans text-lg font-normal gap-8 md:flex items-center transition-all duration-300
          ${menuOpen ? "flex flex-col absolute top-full right-0 bg-white shadow-lg w-48 z-50" : "hidden"}
          md:static md:bg-transparent md:shadow-none md:w-auto md:flex-row md:gap-8 md:items-center md:ml-0 md:mr-0 md:block`}
      >
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            <li
              className={`cursor-pointer hover:text-gray-400 transition px-4 py-2 md:p-0 ${
                location.pathname === link.to ? "underline" : ""
              }`}
            >
              {link.label}
            </li>
          </Link>
        ))}
        <li className="px-4 py-2 md:p-0">
          <i className="ri-search-line text-lg hover:text-gray-400 cursor-pointer"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
