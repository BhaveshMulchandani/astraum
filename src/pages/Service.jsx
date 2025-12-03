import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Replace these with your actual images
import img1 from "../assets/View-1.jpg";
import img2 from "../assets/View-2.jpg";
import img3 from "../assets/View-3.jpg";
import img4 from "../assets/View-4.jpg";

const Service = () => {
  const services = [
    {
      title: "Design Consultation",
      desc: "We provide expert design consultation to help you shape ideas, choose materials, define style, and create a beautiful & functional environment.",
      img: img1,
    },
    {
      title: "Interior Fit-out",
      desc: "Full interior execution including carpentry, electrical, painting, lighting, flooring, and complete project implementation.",
      img: img2,
    },
    {
      title: "Commercial Interior Design",
      desc: "We design professional office spaces, retail stores, restaurants, and commercial environments that improve functionality & branding.",
      img: img3,
    },
    {
      title: "Residential Interior Design",
      desc: "From kitchens to bedrooms, modular setups to luxury décor — we craft homes that match your lifestyle and aesthetic vision.",
      img: img4,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="sm:mt-16 mx-2 sm:mx-6 flex flex-col space-y-2">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">
          Our Services
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">
          From concept to execution — we transform spaces with creativity,
          functionality, and precision.
        </p>
      </div>

      {/* Services Alternating Layout */}
      <div className="mt-20 flex flex-col gap-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={service.img}
                alt={service.title}
                className=" mx-3 w-full object-cover shadow-md"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <h2 className=" mx-3 text-3xl font-semibold text-[#1a1a1a] mb-3">
                {service.title}
              </h2>
              <p className="mx-3 text-gray-600 leading-relaxed text-[17px]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Last Section - Landscaping */}
      <div className="mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">Landscaping & Horticulture</h2>
        <p className="text-gray-600 leading-relaxed text-[17px] mt-3">
          Beautiful outdoor spaces curated with natural elements, plantation,
          garden design, and maintenance — creating refreshing environments.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Service;
