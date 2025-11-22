import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white py-10 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0 px-4">
          {/* LEFT SIDE TEXT */}
          <span className="text-lg sm:text-xl font-semibold mb-6 sm:mb-0">New Business Inquiries</span>

          {/* RIGHT SIDE — GRID WITH 2 COLUMNS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 text-base w-full sm:w-auto">
            {/* City Names */}
            <div className="flex flex-col gap-1 text-base sm:text-xl font-medium">
              <span>London</span>
              <span>New York</span>
              <span>Austin</span>
              <span>Berlin</span>
            </div>

            {/* Emails */}
            <div className="flex flex-col gap-1 text-base sm:text-xl font-medium">
              <span>london@abcd.com</span>
              <span>newyork@abcd.com</span>
              <span>austin@abcd.com</span>
              <span>berlin@abcd.com</span>
            </div>
          </div>
        </div>

        <hr className="mt-8 sm:mt-16 border-t border-gray-50" />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-6 sm:gap-10 mt-6 px-4">
          {/* LEFT */}
          <span className="text-lg sm:text-xl font-semibold min-w-[120px] mb-4 sm:mb-0">About</span>

          {/* RIGHT */}
          <div className="text-base sm:text-lg font-medium max-w-full sm:max-w-3xl leading-relaxed">
            Pentagram is the world’s most acclaimed creative collective, where
            23 partners work independently and collaboratively to shape the
            future of design. Guided by curiosity and intellect, we create work
            that redefines ideas, shifts perceptions, and leaves an imprint
            across disciplines and industries.
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          {/* LEFT LINKS */}
          <div className="flex flex-wrap items-center font-plain text-gray-400 font-medium gap-4 sm:gap-6">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">LinkedIn</span>
            <span className="cursor-pointer hover:text-white">Youtube</span>
            <span className="cursor-pointer hover:text-white">Facebook</span>
            <Link to="/careers" className="cursor-pointer hover:text-white">Careers</Link>
          </div>

          {/* RIGHT COPYRIGHT */}
          <div className="text-gray-400 font-medium">
            © 1972 – 2025 Astraum
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
