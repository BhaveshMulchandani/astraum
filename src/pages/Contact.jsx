import React from "react";
import view from "../assets/4.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <>

    <Navbar/>

      {/* TOP IMAGE */}
      {/* TOP IMAGE WITH TEXT */}
      <div className="relative h-[400px] w-full">
        {/* IMAGE */}
        <img src={view} alt="view" className="w-full h-full object-cover" />

        {/* OVERLAY (optional but recommended for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl font-semibold tracking-wide">
          Contact
        </h1>
      </div>

      {/* CONTACT INFO SECTION */}
      <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 text-center bg-gray-100 p-6 w-full">
        {/* Contact Address */}
        <div className="flex flex-col items-center">
          <div className="bg-[#b00230] p-4 rounded">
            <i className="ri-map-pin-line text-white text-3xl"></i>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Contact Address</h3>
          <p className="mt-2 text-gray-700">
            Warehouse No. 19, RKM Compound,
            <br />
            Al Quoz Dubai UAE
          </p>
        </div>

        {/* Call Section */}
        <div className="flex flex-col items-center">
          <div className="bg-[#b00230] p-4 rounded">
            <i className="ri-phone-line text-white text-3xl"></i>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Let's Talk</h3>
          <p className="mt-2 text-gray-700">+971 52 447 4455</p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center">
          <div className="bg-[#b00230] p-4 rounded">
            <i className="ri-mail-line text-white text-3xl"></i>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Email Us</h3>
          <p className="mt-2 text-gray-700">info@appellointeriors.com</p>
        </div>
      </div>

      {/* SECOND SECTION — Vendors & Careers */}
      <div className="max-w-4xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-center px-4 mb-4">
        {/* Vendor Box */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">
            Are you vendor or supplier?
          </h2>
          <p className="text-gray-600 mb-5">Visit vendors section</p>
          <button className="bg-[#b00230] text-white py-2 px-8 rounded text-lg font-medium hover:bg-[#910125] transition">
            Vendors
          </button>
        </div>

        {/* Careers Box */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">
            Do you want to partner with us?
          </h2>
          <p className="text-gray-600 mb-5">
            Visit our partener with us section
          </p>
          <button className="bg-[#b00230] text-white py-2 px-8 rounded text-lg font-medium hover:bg-[#910125] transition">
            Partner with us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
