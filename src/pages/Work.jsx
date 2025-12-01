import React from "react";
import Navbar from "../components/Navbar";
import dining from "../assets/Dining-1.jpg";
import mandir from "../assets/Mandir.jpg";
import kitchen from "../assets/Kitchen-1.jpg";
import kitchen_2 from "../assets/Kitchen-2.jpg";
import dining_2 from "../assets/Dining-2.jpg";
import view_1 from "../assets/View-1.jpg";
import view_2 from "../assets/View-2.jpg";
// import view_3 from "../assets/View-3.jpg";
// import view_4 from "../assets/View-4.jpg";
import Footer from "../components/Footer";

const Work = () => {

  return (
    <>
      <Navbar />
      <div className="mt-8 sm:mt-16 mx-2 sm:mx-6">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">Our Successful Projects</h1>
      </div>

      <div className="mt-10 sm:mt-20 mx-2 sm:mx-6">
        <span className="font-medium text-base sm:text-lg text-gray-500 font-plain">
          category_1
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mx-2 sm:mx-6 gap-3 p-2">
        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055]">
          <img className="w-full h-auto object-cover rounded-lg" src={dining} alt="speak data" />
          <h1 className="mt-2 text-gray-500 font-medium font-plain">
            'Speak Data'
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055]">
          <img className="w-full h-auto object-cover rounded-lg" src={dining_2} alt="unseen" />
          <h1 className="mt-2 text-gray-500 font-medium font-plain">
            'UNSEEN'
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-20 lg:mt-28 mx-2 sm:mx-6 gap-4 p-2">
        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={mandir} alt="Scenario" />
          <h1 className="mt-2 text-gray-700 font-semibold">Scenario</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={kitchen} alt="theartofthesnlportrait" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘The Art of the SNL Portrait’
          </h1>
          <h1 className="p-0 text-gray-700 font-semibold tracking-tight">
            Saturday Night Live photographer Mary Ellen Matthews collects her
            iconic show bumpers in a new monograph.
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={kitchen_2} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={dining_2} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={view_1} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={view_2} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Work;
