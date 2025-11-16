import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/service", label: "Services" },

  ];

  return (
    <nav className="flex items-center justify-between mx-6 my-4">
      {/* Logo */}
      <h1 className="text-2xl font-medium font-serif ">Astraum</h1>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 font-sans text-lg font-normal">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <li
              className={`cursor-pointer hover:text-gray-400 transition ${location.pathname === link.to ? "underline" : ""}`}
            >
              {link.label}
            </li>
          </Link>
        ))}
        <li>
          <i className="ri-search-line text-lg hover:text-gray-400 cursor-pointer"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
