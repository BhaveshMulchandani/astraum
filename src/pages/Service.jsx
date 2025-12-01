import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Service = () => {

  const services = [
  { title: "Residential Design", icon: "🛋️" },
  { title: "Commercial Design", icon: "💺" },
  { title: "Concept Development", icon: "💡" },
  { title: "Construction Design", icon: "✏️" },
  { title: "Fitout Work", icon: "🖌️" },
  { title: "Custom Joinery", icon: "🛠️" },
];

  return (
    <>
      <Navbar />
      {/* <div className="mt-8 sm:mt-16 mx-2 sm:mx-6">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">Services</h1>
      </div>

      <div className="mt-10 sm:mt-20 mx-2 sm:mx-6">
        <span className="font-medium text-base sm:text-lg text-gray-500 font-plain">
          Showing All The Services
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-20 lg:mt-28 mx-2 sm:mx-6 gap-4 p-2">
        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={scenario} alt="Scenario" />
          <h1 className="mt-2 text-gray-700 font-semibold">Scenario</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={theartofthesnlportrait} alt="theartofthesnlportrait" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘The Art of the SNL Portrait’
          </h1>
          <h1 className="p-0 text-gray-700 font-semibold tracking-tight">
            Saturday Night Live photographer Mary Ellen Matthews collects her
            iconic show bumpers in a new monograph.
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img className="w-full h-auto object-cover rounded-lg" src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>
      </div> */}


      <div className="w-[90%] mx-auto py-16">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition transform hover:scale-105"
          >
            <div className="text-5xl mb-3 text-[#b28a48]">
              {service.icon}
            </div>
            <p className="text-lg font-medium text-gray-700">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      {/* BRIEF SECTION */}
      <div className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-gray-600 leading-relaxed text-[17px]">
          We provide comprehensive interior design solutions including
          residential, commercial, concept development, construction design,
          and custom joinery services. Our experienced team ensures creativity,
          practicality, and high-quality execution at every project stage.
        </p>
      </div>

    </div>
      <Footer />
    </>
  );
};

export default Service;
