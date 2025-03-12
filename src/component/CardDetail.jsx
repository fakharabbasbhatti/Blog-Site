
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CardDetail = () => {
  return (
    <div className="bg-[#a9b5df]">
    <div className="mx-4 py-10">
      <h2 className="text-lg sm:text-2xl text-start font-bold mx-2 sm:w-[60%]">Fakhar Abbas Bhatti is a skilled and passionate web Developer</h2>
      <p className="mt-2 text-sx sm:text-[15px] text-gray-900 text-start mx-2 sm:w-[70%]">
        Fakhar Abbas Bhatti is an experienced web developer specializing in front-end and back-end technologies. He is passionate about creating user-friendly interfaces, optimizing performance, and solving complex problems. With a strong background in coding and design, he continuously enhances his skills to deliver high-quality, scalable, and innovative digital solutions. 
      </p>
      <img
        src="/card4.jpg"
        alt="Image"
        className="mt-4 w-full h-96 object-cover"
      />

      <div className="max-w-8xl mx-auto py-10">
        {/* Introduce Section */}
        <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
          <h2 className="text-2xl font-bold border-b-2 border-black flex items-center justify-center gap-2 group cursor-pointer">
            Introduce
            <FaArrowRight className="text-black text-[20px] font-bold cursor-pointer transition-transform duration-300 group-hover:translate-x-2" />
          </h2>

          <h2 className="text-xl sm:text-2xl font-bold max-w-md">I am Fakhar Abbas Bhatti.It's a good Boy.</h2>
        </div>

        {/* Description Section */}
        <div className="flex justify-between items-start mt-4 flex-col sm:flex-row gap-4 sm:gap-0">
          <h2 className="text-2xl font-bold cursor-pointer border-b-2 border-black flex items-center justify-center gap-2 group">
            Description
            <FaArrowRight className="text-black text-[20px] font-bold cursor-pointer  transition-transform duration-300 group-hover:translate-x-2" />
          </h2>
          <p className="text-black text-lg sm:text-[15px] max-w-md">
          Fakhar Abbas Bhatti is a dynamic and skilled professional known for his expertise in web development. Passionate about coding, problem-solving, and innovation, he continuously strives for excellence in his field.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetail;

