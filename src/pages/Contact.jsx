import React from "react";
import Navbar from "../components/Navbar";
import office_image from "../assets/contactpage_image.avif";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="mt-8 sm:mt-16 mx-2 sm:mx-6">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-10 mx-2 sm:mx-6 gap-4">
        <div>
          <img className="w-full h-auto object-cover rounded-lg" src={office_image} alt="office_image" />

          {/* City + Time */}
          <div className="mt-4">
            <h2 className="text-2xl sm:text-5xl font-medium">New York</h2>
            <p className="text-xl sm:text-4xl text-gray-500">4:24 am</p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-6 mt-6">
            {/* Left side info */}
            <div className="flex flex-col text-base sm:text-lg leading-relaxed">
              <a
                className="underline text-[#1a1a1a]"
                href="mailto:test@test.com"
              >
                test@test.com
              </a>
              <span className="">+1234567890</span>

              <div className="mt-6">
                <p>250 Park Avenue South</p>
                <p>New York, NY 10003</p>
                <p>United States</p>
                <a href="#" className="underline">
                  Get directions
                </a>
              </div>
            </div>

            {/* Right side description */}
            <p className="text-base sm:text-lg leading-relaxed max-w-full sm:max-w-[380px]">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p>
          </div>
        </div>

        <div>
          <img className="w-full h-auto object-cover rounded-lg" src={office_image} alt="office_image" />

          {/* City + Time */}
          <div className="mt-4">
            <h2 className="text-2xl sm:text-5xl font-medium">New York</h2>
            <p className="text-xl sm:text-4xl text-gray-500">4:24 am</p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-6 mt-6">
            {/* Left side info */}
            <div className="flex flex-col text-base sm:text-lg leading-relaxed">
              <a
                className="underline text-[#1a1a1a]"
                href="mailto:test@test.com"
              >
                test@test.com
              </a>
              <span className="">+1234567890</span>

              <div className="mt-6">
                <p>250 Park Avenue South</p>
                <p>New York, NY 10003</p>
                <p>United States</p>
                <a href="#" className="underline">
                  Get directions
                </a>
              </div>
            </div>

            {/* Right side description */}
            <p className="text-base sm:text-lg leading-relaxed max-w-full sm:max-w-[380px]">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Contact;
