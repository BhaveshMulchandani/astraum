import React from "react";
import Navbar from "../components/Navbar";
import speak_data from "../assets/speakdata.avif";
import unseen from "../assets/unseen.avif";
import scenario from "../assets/scenario.avif";
import theartofthesnlportrait from "../assets/theartofthesnlportrait.avif";
import loveletter from "../assets/adatalovelettertothesubway.avif";

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 mx-6">
        <h1 className="font-plain text-6xl text-[#1a1a1a] font-medium">Work</h1>
      </div>

      <div className="mt-20 mx-6">
        <span className="font-medium text-lg text-gray-500 font-plain">
          Showing the latest 5 projects
        </span>
      </div>

      <div className="grid grid-cols-[30%_70%] mt-5 mx-6 gap-3 p-2">
        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={speak_data} alt="speak data" />
          <h1 className="mt-2 text-gray-500 font-medium font-plain">
            'Speak Data'
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={unseen} alt="unseen" />
          <h1 className="mt-2 text-gray-500 font-medium font-plain">
            'UNSEEN'
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-28 mx-6 gap-4 p-2">
        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={scenario} alt="Scenario" />
          <h1 className="mt-2 text-gray-700 font-semibold">Scenario</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={theartofthesnlportrait} alt="theartofthesnlportrait" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘The Art of the SNL Portrait’
          </h1>
          <h1 className="p-0 text-gray-700 font-semibold tracking-tight">
            Saturday Night Live photographer Mary Ellen Matthews collects her
            iconic show bumpers in a new monograph.
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055] mb-12">
          <img src={loveletter} alt="loveletter" />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>
      </div>
    </>
  );
};

export default Work;
