import React from "react";
import Navbar from "../components/Navbar";
import main_image from "../assets/main_image.avif";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <img src={main_image} alt="main" />
      </div>

      <div className="flex flex-col items-center justify-center mt-8 space-y-2">
        <h1 className="text-gray-500 text-base font-semibold">See latest projects</h1>
        <i className="ri-arrow-down-long-line text-gray-500 text-base font-semibold"></i>
      </div>
    </>
  );
};

export default Home;
