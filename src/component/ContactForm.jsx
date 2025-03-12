import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-[#788673]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center text-white">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto">
          Want to contact us? Choose an option below and we'll be happy to show you how we can transform your company's web experience.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold text-white">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 text-white">
            Have something to say? We are here to help. Fill up the form or send an email or call us.
          </p>
          {/* Location */}
          <div className="flex items-center mt-8 space-x-2 text-white">
            <LuMapPin size={20} className="text-white" /> 
            <span>Dilawar Colony Street #4, Bahawalpur</span>
          </div>
          {/* Email */}
          <div className="flex items-center mt-2 space-x-2 text-white">
            <CiMail size={20} className="text-white" />
            <a href="mailto:fakharbhatti333@gmail.com">fakharabbasbhatti333@gmail.com</a>
          </div>
          {/* Phone */}
          <div className="flex items-center mt-2 space-x-2 text-white">
            <LuPhone size={20} className="text-white" />
            <a href="tel:+923086046246">+92 308 6046246</a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md text-black outline-none bg-gray-100 border-gray-300 focus:border-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md text-black outline-none bg-gray-100 border-gray-300 focus:border-gray-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md outline-none h-36 text-black bg-gray-100 border-gray-300 focus:border-gray-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-black text-lg focus:outline-none w-full py-4 font-semibold uppercase rounded-lg border-2 border-white bg-white shadow-[3px_3px_0px_0px_#000] transition active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
