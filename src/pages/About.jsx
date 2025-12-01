import React from "react";
import Navbar from "../components/Navbar";
import dining from "../assets/Dining-1.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-8 sm:mt-16 mx-2 sm:mx-6 flex flex-col sm:flex-row sm:justify-between">
        <h1 className="font-plain text-3xl sm:text-6xl text-[#1a1a1a] font-medium leading-none">
          About Astraum
        </h1>

        <div className="mt-3 flex flex-col max-w-full sm:max-w-[700px] leading-relaxed font-plain text-[#1a1a1a] font-[540] text-base sm:text-lg py-3 sm:mr-4">
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

      <div className="mt-20 space-y-20 mb-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-2 sm:mx-6">
          <img
            src={dining}
            alt="dining area"
            className="w-full h-[320px] sm:h-[420px] object-cover shadow-md"
          />

          <section className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-4">
              How We Work
            </h1>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Our process blends creativity with technical precision. We begin
              by understanding your needs, preferences, and lifestyle. Our team
              develops mood boards and early concepts to define the direction.
              <br />
              <br />
              We refine the layout, material palette, color schemes, and
              lighting plan while ensuring functionality and aesthetic harmony.
              With experienced craftsmen and trusted vendors, we bring designs
              to life with precision, transparency, and timely delivery.
              <br />
              <br />
              Finally, we complete the project with decor, furniture placement,
              and personalized styling to create a space that feels uniquely
              yours.
            </p>
          </section>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-2 sm:mx-6">

          <section className="flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-4">
              Our Projects
            </h1>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Our residential, commercial, and hospitality projects are crafted
              with an emphasis on detail, functionality, and timeless design.
              <br />
              <br />
              Whether creating a warm home interior or a modern workspace, each
              project reflects our commitment to quality craftsmanship and
              thoughtful execution.
              <br />
              <br />
              Every design is tailored to meet client preferences and elevate
              the experience of the space.
            </p>
          </section>
          <img
            src={dining}
            alt="project sample"
            className="w-full h-[320px] sm:h-[420px] object-cover shadow-md order-1 md:order-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
