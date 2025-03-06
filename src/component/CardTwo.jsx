import React from "react";
import CardThree from "/card3.jpg";

const CardTwo = () => {
    return (
        <div
            className="flex pt-12 px-6 md:px-20 items-center bg-[#000000] justify-center md:h-screen overflow-hidden"

        >
            <div className="flex flex-col gap-6 md:flex-row items-center max-w-9xl  bg-opacity-70 p-10">
                <div className="w-full md:w-1/2 lg:pr-32">
                    <h2 className="text-4xl text-[#FFFFFF] lg:text-3xl text-center md:text-start font-bold">
                        Publish faster and on-brand with Squarespace AI
                    </h2>
                    <h3 className="mt-6 text-[#ffffff] md:mt-10 text-md lg:text-sx font-medium text-center md:text-start  ">
                        Each blog post has to start somewhere. Squarespace AI is your personal creative agency providing idea starter content for you to mold into the perfect post. Get started with tailored recommendations to build your website with AI.
                    </h3>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src={CardThree} alt="Hero" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default CardTwo;
