import { React, useState } from "react";
import Navbar from "../components/Navbar";
import dining from "../assets/Dining-1.jpg";
import mandir from "../assets/Mandir.jpg";
import kitchen from "../assets/Kitchen-1.jpg";
import kitchen_2 from "../assets/Kitchen-2.jpg";
import dining_2 from "../assets/Dining-2.jpg";
import view_1 from "../assets/View-1.jpg";
// import view_3 from "../assets/View-3.jpg";
// import view_4 from "../assets/View-4.jpg";
import Footer from "../components/Footer";

const Work = () => {
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
      <div className="mt-8 sm:mt-16 mx-2 sm:mx-6">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium">
          Our Successful Projects
        </h1>
      </div>

      <div className="mt-10 sm:mt-20 mx-2 sm:mx-6">
        <span className="font-medium text-base sm:text-lg text-gray-500 font-plain">
          category_1
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mx-2 sm:mx-6 gap-3 p-2">
        {projects.slice(0, 2).map((p, i) => (
          <div
            key={i}
            className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055]"
          >
            <img
            onClick={() => openImage(p.img)}
              className="w-full h-auto object-cover rounded-lg"
              src={p.img}
              alt="speak data"
            />
            <h1 className="mt-2 text-gray-500 font-medium font-plain">
              {p.title}
            </h1>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 mx-4 gap-6 mb-8">
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

export default Work;
