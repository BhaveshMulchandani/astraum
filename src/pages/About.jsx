import React from "react";
import Navbar from "../components/Navbar";
import developer from "../assets/1st_character.avif";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 mx-6 flex justify-between">
        <h1 className="font-plain text-6xl text-[#1a1a1a] font-medium leading-none">
          About Pentagram
        </h1>

        <div className="mt-3 flex flex-col max-w-[700px] leading-relaxed font-plain text-[#1a1a1a] font-[540] text-lg py-3 mr-4">
          <p>
            Pentagram is a multi-disciplinary,independently owned design studio.
          </p>
          <p className="mt-4">
            Our work encompasses graphics and identity,strategy and positioning,
            products and packaging,exhibitions and installations, websites and
            digital experiences,advertising and communications, data
            visualizations and typefaces,sound and motion.Our 24 partners are
            all practicing designers,and whether working collaboratively or
            independently,they do so in friendship.
          </p>
          <p className="mt-4">
            Our structure is unique.We are the only major design studio where
            the owners of the business are the creators of the work and serve as
            the primary contact for every client.This reflects our conviction
            that great design cannot happen without passion,intelligence
            and—above all—personal commitment,and is demonstrated by a portfolio
            that spans five decades,many industries,and clients of every size.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-28 mx-6 ">
        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>

        <div className="flex flex-col">
          <img src={developer} alt="developer" />
          <h1 className="font-plain text-[#1a1a1a] font-medium text-xl">
            Developer Name
          </h1>
          <h1 className="font-plain text-lg font-medium text-gray-500">
            Location
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
