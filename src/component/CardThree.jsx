import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardFour from "/card4.jpg";
import CardFive from "/card5.jpg";

const CardThree = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4 bg-[#60777c]">
      
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-white max-w-3xl">
        Turn your content into income
      </h2>

      {/* Additional Heading */}
      <p className="text-lg text-white font-medium max-w-xl mt-6">
        Monetize your blog by adding a paywall and charging for access. Squarespace gives you everything you need to create, promote, and sell digital content and memberships.
      </p>

      {/* Call to Action with Hover Effect */}
      <a href="#" className="mt-6 text-sm border-b-2 font-medium text-white flex items-center gap-2 group">
        LEARN MORE
        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
      </a>

      {/* Card 1 */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-12 bg-opacity-70 p-10 gap-8">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl text-white lg:text-3xl font-semibold text-center md:text-left">
            Sell premium content
          </h2>
          <p className="mt-4 text-white text-md lg:text-lg font-medium text-center md:text-left">
            Whether you’re a chef selling recipes and cooking videos, or a financial planner sharing courses and newsletters, Squarespace has the tools you need to sell exclusive content on your website.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={CardFour} alt="CardFour" className="rounded-lg shadow-lg w-full max-w-sm" />
        </div>

      </div>

      {/* Card 2 */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-12 bg-opacity-70 p-10 gap-8">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={CardFive} alt="CardFive" className="rounded-lg shadow-lg w-full max-w-sm" />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl text-white lg:text-3xl font-semibold text-center md:text-left">
            Create a paid newsletter
          </h2>
          <p className="mt-4 text-white text-md lg:text-lg font-medium text-center md:text-left">
            Use Squarespace to grow and manage your mailing lists, send newsletters, and connect with your audience—all from one place.
          </p>
        </div>

      </div>

    </div>
  );
};

export default CardThree;
