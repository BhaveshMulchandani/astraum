import React from "react";
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
import img from "../assets/img.png";
import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-16">
        <Slider />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-[#797f85] font-medium text-lg">
          See latest projects
        </h1>
        <i className="ri-arrow-down-long-line text-[#797f85] font-medium text-lg"></i>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-20 lg:mt-28 mx-2 sm:mx-6 gap-4 p-2">
        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={dining}
            alt="Scenario"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">Scenario</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={mandir}
            alt="theartofthesnlportrait"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘The Art of the SNL Portrait’
          </h1>
          <h1 className="p-0 text-gray-700 font-semibold tracking-tight">
            Saturday Night Live photographer Mary Ellen Matthews collects her
            iconic show bumpers in a new monograph.
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={kitchen}
            alt="loveletter"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={kitchen_2}
            alt="loveletter"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={dining_2}
            alt="loveletter"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>

        <div className="flex flex-col cursor-pointer text-base sm:text-lg font-medium text-[#4b5055] mb-8 sm:mb-12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={view_1}
            alt="loveletter"
          />
          <h1 className="mt-2 text-gray-700 font-semibold">
            ‘A Data Love Letter to the Subway’
          </h1>
        </div>
      </div>

      <div className="font-inter flex flex-col items-center justify-center bg-[#222222] py-10 relative">
        <h1 className="text-5xl font-bold text-[#bd7913]">Why Astraum?</h1>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-10">
          {/* Item 1 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img1} />
            <span className="text-[#bd7913] text-2xl font-bold mt-4">
              100% Clear
            </span>

            {/* Hover Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              We use no chemicals or preservatives in our process.
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img2} />
            <span className="text-[#bd7913] text-2xl font-bold mt-4">
              Made in small batches
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Every batch is handcrafted with care.
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img3} />
            <span className="text-[#bd7913] text-2xl font-bold mt-4">
              Rooted in Tradition
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Recipes passed down for generations.
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img} />
            <span className="text-[#bd7913] text-2xl font-bold mt-4">
              Farm Fresh
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Fresh from our farms to your home.
            </div>
          </div>
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
    </>
  );
};

export default Home;
