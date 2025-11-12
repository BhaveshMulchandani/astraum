import React from "react";
import Navbar from "../components/Navbar";
import main_image from "../assets/main_image.avif";
import speak_data from "../assets/speakdata.avif";
import unseen from "../assets/unseen.avif";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-16">
        <img src={main_image} alt="main" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-[#797f85] font-medium text-lg">
          See latest projects
        </h1>
        <i className="ri-arrow-down-long-line text-[#797f85] font-medium text-lg"></i>
      </div>

      <div className="grid grid-cols-[30%_70%] mt-16 mx-6 gap-2">
        <div className="flex flex-col items-center">
          <img
            src={speak_data}
            alt="speak data"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">'Speak Data'</h1>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={unseen}
            alt="unseen"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">'UNSEEN'</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
