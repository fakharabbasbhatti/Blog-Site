import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    title: "“A blog connects you in a personal way with your clients and online visitors.”",
    subTitle: "Moisés Hernández, Designer",
    description: "moises-hernandez.com/diary",
    image: "/card9.jpg",
    bgColor: "bg-[#7a4438]",
    descColor: "text-yellow-300",
  },
  {
    title: "“Squarespace’s analytics, SEO tools, and social media integrations have helped us grow from a blog with a small following to a growing global audience.”",
    subTitle: "Amyann Cadwell, Co-founder & CEO",
    description: "thegoodtrade.com/beauty",
    image: "/card10.jpg",
    bgColor: "bg-[#8c8c8f]",
    descColor: "text-green-300",
  },
  {
    title: "“I use Squarespace for my magazine and photography website because it is beautiful, easy to use, and versatile.”",
    subTitle: "Erika Astrid, Founder",
    description: "thekunstmagazine.com/blog",
    image: "/card11.jpg",
    bgColor: "bg-[#b59c81]",
    descColor: "text-blue-300",
  },
];

const CardFive = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className={`flex items-center justify-between p-10 ${data[index].bgColor} min-h-screen`}>
      {/* Left Content */}
      <div className="w-[500px] text-white">
        <h1 className="text-2xl font-bold mb-8">{data[index].title}</h1>
        <h2 className="text-[12px] font-medium uppercase ">{data[index].subTitle}</h2>
        <motion.h3
          className={`text-[12px] relative underline uppercase ${data[index].descColor}`}
        >
          {data[index].description}
          <motion.div
            className="h-1 bg-white w-0 absolute left-0 bottom-0"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>
      </div>

      {/* Right Content */}
      <div className="w-1/2 flex flex-col items-end">
        <img src={data[index].image} alt="Slider Image" className="w-[600px] h-[400px]  rounded-lg shadow-lg" />
        <div className="flex mt-4 space-x-4">
          <button onClick={handlePrev} className="p-2  text-white rounded-full shadow-lg">
            <FaArrowLeft size={24} />
          </button>
          <button onClick={handleNext} className="p-2  text-white rounded-full shadow-lg">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFive;