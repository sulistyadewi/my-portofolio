import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="bg-violet-600 relative w-full h-screen flex flex-col items-center justify-center sm:bg-red-300 md:bg-orange-600 lg:bg-yellow-600 xl:bg-lime-600 2xl:bg-teal-600">
      <h1 className="text-center text-4xl text-white px-3 font-bold sm:text-5xl sm:tracking-wider sm:leading-relaxed md:px-20 lg:text-6xl lg:px-28">
        HEY, MY NAME IS SULISTYA
      </h1>
      <p className="text-center text-md text-white mt-5 px-2 sm:px-10 sm:mt-7 sm:text-lg lg:px-[12.2rem] xl:px-52">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente solutions for complex
        problems
      </p>
      <button className="bg-white mt-5 px-20 py-3 rounded tracking-wider font-semibold drop-shadow-lg hover:bg-gray-300 transform active:translate-y-1 sm:mt-10 sm:tracking-wider lg:px-[5.5rem] lg:text-lg lg:mt-12">
        PROJECT
      </button>
      <ul className="absolute left-0 hidden lg:flex flex-col lg:pt-8">
        <li>
          <img
            src="./icons/github-sign.png"
            alt=""
            className="w-14 h-14 border border-t-2 border-x-2 p-2 border-white"
          />
        </li>
        <li>
          <img
            src="./icons/world-wide-web.png"
            alt=""
            className="w-14 h-14 border border-b-2 border-x-2 p-2 border-white"
          />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
