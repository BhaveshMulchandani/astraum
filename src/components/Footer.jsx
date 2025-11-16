import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white py-20">
        <div className="max-w-7xl mx-auto flex justify-between">
          {/* LEFT SIDE TEXT */}
          <span className="text-xl font-semibold">New Business Inquiries</span>

          {/* RIGHT SIDE — GRID WITH 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-x-16 text-base">
            {/* City Names */}
            <div className="flex flex-col gap-1 text-xl font-medium">
              <span>London</span>
              <span>New York</span>
              <span>Austin</span>
              <span>Berlin</span>
            </div>

            {/* Emails */}
            <div className="flex flex-col gap-1 text-xl font-medium">
              <span>london@abcd.com</span>
              <span>newyork@abcd.com</span>
              <span>austin@abcd.com</span>
              <span>berlin@abcd.com</span>
            </div>
          </div>
        </div>

        <hr className=" mt-16 border-t border-gray-50" />

        <div className="max-w-7xl mx-auto flex justify-between gap-10 mt-6">
          {/* LEFT */}
          <span className="text-xl font-semibold min-w-[120px]">About</span>

          {/* RIGHT */}
          <div className="text-lg font-medium max-w-3xl leading-relaxed">
            Pentagram is the world’s most acclaimed creative collective, where
            23 partners work independently and collaboratively to shape the
            future of design. Guided by curiosity and intellect, we create work
            that redefines ideas, shifts perceptions, and leaves an imprint
            across disciplines and industries.
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          {/* LEFT LINKS */}
          <div className="flex items-center font-plain text-gray-400 font-medium gap-6 mx-5">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">LinkedIn</span>
            <span className="cursor-pointer hover:text-white">X</span>
            <span className="cursor-pointer hover:text-white">Facebook</span>
            <Link to="/careers" className="cursor-pointer hover:text-white">Careers</Link>
          </div>

          {/* RIGHT COPYRIGHT */}
          <div className="text-gray-400 font-medium mx-5">
            © 1972 – 2025 Astrauam
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
