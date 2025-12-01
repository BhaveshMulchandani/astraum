import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/astrum_logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/service", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <nav className="flex items-center justify-between mx-6 my-4 relative">
      {/* Logo */}
      <Link to="/">
        <img className="h-8 md:h-16 object-contain" src={logo} alt="logo" />
      </Link>

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
          ${
            menuOpen
              ? "flex flex-col absolute top-full right-0 bg-white shadow-lg w-48 z-50"
              : "hidden"
          }
          md:static md:bg-transparent md:shadow-none md:w-auto md:flex-row md:gap-8 md:items-center md:ml-0 md:mr-0 md:block`}
      >
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            <li
              className={`cursor-pointer text-[#bd7913] hover:text-[#3e2009] transition px-4 py-2 md:p-0 ${
                location.pathname === link.to ? "underline" : ""
              }`}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
