import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import dining from "../assets/Dining-1.jpg";
import mandir from "../assets/Mandir.jpg";
import kitchen from "../assets/Kitchen-1.jpg";
import kitchen_2 from "../assets/Kitchen-2.jpg";
import dining_2 from "../assets/Dining-2.jpg";
import view_1 from "../assets/View-1.jpg";
import view_2 from "../assets/View-2.jpg";
import view_3 from "../assets/View-3.jpg";
import view_4 from "../assets/View-4.jpg";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import img1 from "../assets/img_1.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  const projects = [
    { img: dining, title: "Scenario" },
    {
      img: mandir,
      title: "‘The Art of the SNL Portrait’",
      desc: "Saturday Night Live photographer Mary Ellen Matthews collects her iconic show bumpers in a new monograph.",
    },
    { img: kitchen, title: "‘A Data Love Letter to the Subway’" },
    { img: kitchen_2, title: "‘A Data Love Letter to the Subway’" },
    { img: dining_2, title: "‘A Data Love Letter to the Subway’" },
    { img: view_1, title: "‘A Data Love Letter to the Subway’" },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-6 mb-9 h-[40vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center">
        <Slider />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-[#797f85] font-medium text-lg">
          See latest projects
        </h1>
        <i className="ri-arrow-down-long-line text-[#797f85] font-medium text-lg"></i>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 mx-4 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col text-base sm:text-lg font-medium text-[#4b5055] cursor-pointer"
          >
            <img
              onClick={() => openImage(p.img)}
              className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition"
              src={p.img}
              alt={p.title}
            />

            <h1 className="mt-2 text-gray-700 font-semibold">{p.title}</h1>

            {p.desc && (
              <p className="text-gray-700 text-sm sm:text-base tracking-tight">
                {p.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* WHY ASTRAUM SECTION */}
      <div className="font-plain flex flex-col items-center justify-center py-16">
        <h1 className="text-center text-[34px] sm:text-[42px] text-[#1f1f1f] tracking-tight">
          Why Astraum?
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-20 mt-12">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="relative group flex flex-col items-center cursor-pointer"
            >
              <img src={img1} className="w-20 h-20 bg-black rounded-full" />

              <span className="text-[#5a5a5a] mt-4 text-lg tracking-tight">
                100% Clear
              </span>

              {/* Hover circle */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                opacity-0 group-hover:opacity-100 transition-all duration-300
                bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex 
                items-center justify-center rounded-full shadow-lg"
              >
                We use no chemicals or preservatives in our process.
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#222222] mt-8 sm:mt-12">
        <div className="relative px-2 sm:px-4 pt-8 sm:pt-16">
          <h1 className="text-white font-plain text-3xl sm:text-6xl font-medium leading-tight">
            Projects:category_showing
          </h1>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 overflow-hidden">
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              project_name
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={view_1}
              alt="marquee_effect_image"
            />
          </div>
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              project_name
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={view_2}
              alt="marquee_effect_image"
            />
          </div>
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              project_name
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={view_3}
              alt="marquee_effect_image"
            />
          </div>
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              project_name
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={view_4}
              alt="marquee_effect_image"
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-16 flex items-center justify-center">
          <div className="flex items-center justify-center gap-1 bg-[#3d3d3d] hover:bg-black px-4 sm:px-5 py-1 cursor-pointer rounded-md">
            <h1 className="font-plain text-base sm:text-lg text-white font-medium">
              Show more
            </h1>
            <i className="ri-add-line font-plain text-base sm:text-lg text-white font-medium"></i>
          </div>
        </div>

        <hr className="mt-8 sm:mt-16 border-t border-gray-50" />

        <div className="leading-loose px-2 sm:pl-[530px] sm:p-16 mb-8 sm:mb-16">
          <p className="mt-8 sm:mt-10 text-white font-medium font-plain text-2xl sm:text-4xl text-balance tracking-tight">
            "Pentagram is very much like a co-op. We constantly shape the
            culture, the work and the spirit of the place together."
          </p>
          <p className="py-2 text-white font-medium font-plain text-base sm:text-lg tracking-tight">
            Marina Willer
          </p>
        </div>
      </div>

      <Footer />

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] object-contain shadow-xl"
          />
        </div>
      )}
    </>
  );
};

export default Home;
