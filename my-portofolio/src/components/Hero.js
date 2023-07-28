import React from "react";

const Hero = () => {
  return (
    <div className="bg-violet-300 relative w-full h-screen flex flex-col items-center justify-center sm:bg-red-300 md:bg-orange-300 lg:bg-yellow-300 xl:bg-lime-300">
      <h1 className="text-center text-4xl text-white px-3 font-bold">
        HEY, MY NAME IS SULISTYA
      </h1>
      <p className="text-center text-md text-white mt-5 px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente solutions for complex
        problems
      </p>
      <button className="bg-white mt-5 px-20 py-3 rounded tracking-wider font-semibold drop-shadow-lg hover:bg-gray-300 transform active:translate-y-1">
        Project
      </button>
    </div>
  );
};

export default Hero;
