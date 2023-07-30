import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="bg-violet-300 relative w-full h-screen flex flex-col items-center justify-center sm:bg-red-300 md:bg-orange-300 lg:bg-yellow-300 xl:bg-lime-300">
      <h1 className="text-center text-4xl text-white px-3 font-bold sm:text-5xl sm:tracking-wider sm:leading-relaxed md:px-20">
        HEY, MY NAME IS SULISTYA
      </h1>
      <p className="text-center text-md text-white mt-5 px-2 sm:px-10 sm:mt-7 sm:text-lg md:px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente solutions for complex
        problems
      </p>
      <button className="bg-white mt-5 px-20 py-3 rounded tracking-wider font-semibold drop-shadow-lg hover:bg-gray-300 transform active:translate-y-1 sm:mt-10 sm:tracking-wider">
        Project
      </button>
      <ul className="absolute left-0">
        <li>
          <img
            src="./icons/github-sign.png"
            alt=""
            className="w-12 border border-t-2 border-x-2 p-2"
          />
        </li>
        <li>
          <img
            src="./icons/world-wide-web.png"
            alt=""
            className="w-12 border border-b-2 border-x-2 p-2"
          />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
