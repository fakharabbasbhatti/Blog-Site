import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Stanton from "/stanton.jpg";
import FillMore from "/fillmore.jpg";
import PalaMera from "/palmera.jpg";
import Souto from "/souto.jpg";
import Brower from "/brower.jpg";

const images = [
  { src: Stanton, name: "STANTON" },
  { src: FillMore, name: "FILLMORE" },
  { src: PalaMera, name: "PALMERA" },
  { src: Souto, name: "SOUTO" },
  { src: Brower, name: "BROWER" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-gray-100">
      {/* Header Section */}
      <div className="w-full max-w-4xl flex flex-row items-start gap-[80px]">
  <h2 className="text-4xl font-bold hover:underline cursor-pointer w-[250px] ">
    Pick your starting point
  </h2>
  <div className="flex flex-col gap-2">
  <p className="text-1xl text-gray-900 text-start font-medium w-[300px] ">
    Explore the various website template options to create a blog that best represents your brand.
  </p>
  <a href="#" className="font-medium  flex items-center gap-2 group">
    Browse Templates
    <FaArrowRight className="ml-2 font-base group-hover:translate-x-1 transition-transform" />
  </a>
</div>
</div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl mt-8 flex justify-center items-center overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((image, index) => (
      <div key={index} className="w-full flex-shrink-0 flex flex-col  items-center">
        <img
          src={image.src}
          alt={`Template - ${image.name}`}
          className="w-[800px] h-[300px] rounded-lg shadow-lg object-cover"
        />
        <p className="mt-2 text-lg font-medium text-center w-full ">{image.name}</p>
      </div>
    ))}
  </div>
</div>



      {/* Navigation Arrows */}
      <div className="flex justify-end w-full max-w-6xl mt-4 gap-4">
        <button onClick={prevSlide} className="bg-gray-300 p-3 rounded-full hover:bg-gray-400">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="bg-gray-300 p-3 rounded-full hover:bg-gray-400">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;