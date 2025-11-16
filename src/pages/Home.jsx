import React from "react";
import Navbar from "../components/Navbar";
import scenario from "../assets/scenario.avif";
import theartofthesnlportrait from "../assets/theartofthesnlportrait.avif";
import loveletter from "../assets/adatalovelettertothesubway.avif";
import marquee_effect_image from "../assets/marquee_effect_image.avif";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* i want to use here slider code  */}
      <div className="mb-16">
        <Slider/>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-[#797f85] font-medium text-lg">
          See latest projects
        </h1>
        <i className="ri-arrow-down-long-line text-[#797f85] font-medium text-lg"></i>
      </div>

      {/* <div className="grid grid-cols-[30%_70%] mt-16 mx-6 gap-2 p-2">
        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={speak_data} alt="speak data" />
          <h1 className="mt-2 text-gray-700 font-semibold">'Speak Data'</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={unseen} alt="unseen" />
          <h1 className="mt-2 text-gray-700 font-semibold">'UNSEEN'</h1>
        </div>
      </div> */}

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
      </div>

      <div className="w-full bg-[#222222] mt-8 sm:mt-12">
        <div className="relative px-2 sm:px-4 pt-8 sm:pt-16">
          <h1 className="text-white font-plain text-3xl sm:text-6xl font-medium leading-tight">
            Retrospective: Saturday Night Live
          </h1>
          <span className="absolute top-8 sm:top-20 right-2 sm:right-4 text-white font-plain text-base sm:text-lg font-medium">
            (8)
          </span>
          <div className="max-w-full sm:max-w-2xl">
            <p className="mt-4 sm:mt-6 text-[#919a9e] text-base sm:text-lg font-medium tracking-tight">
              When a scruffy after-hours comedy show debuted in NBC’s Studio 8H
              on October 11, 1975, no one could have known that the
              entertainment world was about to be changed forever. Over the next
              half century, Saturday Night Live would launch the careers of
              countless global stars, create indelible catch phrases, and
              consolidate the reputations of musical acts from Talking Heads to
              Kendrick Lamar. Since 1994, Pentagram partner Emily Oberman has
              been the steward of SNL’s graphic image, from the show’s iconic
              opening titles, to books celebrating its legacy. With each
              project, she meets the challenge of acknowledging the franchise’s
              extraordinary legacy while keeping its profile fresh, surprising,
              and funny.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 overflow-hidden">
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              marquee_effect_text
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={marquee_effect_image}
              alt="marquee_effect_image"
            />
          </div>
          <div className="marquee flex flex-col gap-2 w-full sm:w-auto">
            <h1 className="text-[#919a9e] text-base sm:text-lg font-medium">
              marquee_effect_text
            </h1>
            <img
              className="w-full sm:h-[300px] sm:w-[533.33px] object-contain"
              src={marquee_effect_image}
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
          <p className="py-2 text-white font-medium font-plain text-base sm:text-lg tracking-tight">Marina Willer</p>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-[#797f85] font-medium text-lg">
          <span className="text-black font-medium text-lg">8</span> latest projects
        </h1>
        <i className="ri-arrow-down-long-line text-[#797f85] font-medium text-lg"></i>
      </div>

      <div className="grid grid-cols-[70%_30%] mt-16 mx-6 gap-2 p-2">
        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={main_image} alt="speak data" />
          <h1 className="mt-2 text-gray-700 font-semibold">'Speak Data'</h1>
        </div>

        <div className="flex flex-col cursor-pointer text-lg font-medium text-[#4b5055]">
          <img src={unseen} alt="unseen" />
          <h1 className="mt-2 text-gray-700 font-semibold">'UNSEEN'</h1>
        </div>
      </div> */}

      <Footer/>
    </>
  );
};

export default Home;
