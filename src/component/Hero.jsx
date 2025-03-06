import React from "react";
import HeroImage from "/hero.jpg";
import HeroBg from "/herobg.jpg";

const Hero = () => {
  return (
    <div
      className="flex pt-12 px-6 md:px-20 items-center bg-green-500 justify-center md:h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-6 md:flex-row  items-center max-w-8xl  bg-opacity-70 p-10">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl text-[#FFFFFF] lg:text-5xl text-center md:text-start font-medium">
            Create a blog
          </h2>
          <h3 className="mt-6 text-[#ffffff]  md:mt-10 text-md lg:text-xl text-center md:text-start  ">
            Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your
            audience with built-in marketing tools, or transform your passion into revenue by gating access with a
            paywall.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full text-black bg-[#ffffff] sm:w-40 px-4 py-3 rounded font-base text-md border-2 border-white">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={HeroImage} alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
