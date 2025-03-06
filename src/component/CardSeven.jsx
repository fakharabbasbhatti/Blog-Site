import { FaArrowRight } from "react-icons/fa";

const CardSeven = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#8c8c8f] text-white">
      {/* Left Side */}
      <div className="flex flex-col gap-2 -mt-16">
        <h2 className="text-4xl font-bold w-[250px] ">How to create a blog</h2>
        <button className="flex items-center gap-2 mt-4 text-[15px] border-b-2 border-white w-max text-white font-medium ">
          GET STARTED <FaArrowRight size={14} />
        </button>
      </div>
      
      {/* Right Side */}
      <ol className="list-decimal list-inside text-sx font-medium w-[500px] space-y-2">
        <li>Choose a <span className="border-b-2">website template</span> to showcase your blog.</li>
        <li>Check available domains for your blog’s website or brainstorm ideas with our <span className="border-b-2">Domain Name Generator</span> .</li>
        <li>Add a Blog Page and customize the layout and design of your blog.</li>
        <li>Create, publish, and manage content with blog and <span className="border-b-2">image editing</span> tools.</li>
        <li>Market your blog using Squarespace’s suite of integrated marketing tools.</li>
        <li>Monetize your blog by adding a paywall and charging for access.</li>
      </ol>
    </div>
  );
}

export default CardSeven; 