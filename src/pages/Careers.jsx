import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import view from "../assets/View-1.jpg";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="mt-8 sm:mt-16 mx-2 sm:mx-6">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">
          Working at Astraum
        </h1>
      </div>

      <div className=" mt-8 mb-16">
        <img src={view} alt="working employees" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16">
        {/* Left big text */}
        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-snug lg:w-1/2">
          We're looking for those who challenge the status quo and are ready for
          an extraordinary experience. Join us.
        </p>

        {/* Right smaller descriptive text */}
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed lg:w-1/2">
          <p>
            Every designer at Pentagram works on a team led by one of our
            partners. This means each gets the experience of working in a small,
            hands-on setting with access to the resources of a large,
            international firm.
          </p>
          <p className="mt-4">
            The design teams are augmented by project managers and
            administrators, all of whom support Pentagram's design-led ethos. If
            this way of working appeals to you, please consider joining us.
          </p>
        </div>
      </div>

      <hr className=" mt-16 border-t border-gray-500" />

      <div className=" mt-10 mb-10 p-5 flex items-center justify-between">
        <span className="text-2xl font-semibold">Open Positions</span>
        <span className="text-lg font-medium">
          There are currently no open positions at Pentagram. Check back later!
        </span>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
