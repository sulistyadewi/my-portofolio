import React from "react";

const Project = () => {
  return (
    <div className="px-4 pb-10">
      <h1 className="mt-14 text-center text-3xl font-bold tracking-widest sm:mt-20 sm:text-4xl">
        Project
      </h1>
      <hr className="border-violet-600 border-b-8 mx-auto w-14 mt-5 rounded-md" />
      <p className="text-slate-500 mt-8 text-center leading-relaxed sm:mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        quasi nobis neque odit hic voluptas in obcaecati.
      </p>
      <div className="mt-20">
        <img
          src="./images/portofolio.png"
          alt=""
          className="max-w-sm mx-auto sm:max-w-lg"
        />
        <div className="">
          <h3 className="mt-6 text-center font-semibold text-lg sm:text-xl">
            Project 1
          </h3>
          <p className="mt-4 text-sm text-slate-500 text-center leading-relaxed sm:px-8 sm:leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus illo aperiam fugit dolore nobis expedita magnam corrupti
            error?
          </p>
          <div className="flex justify-center">
            <button className="bg-violet-400 mt-6 px-7 py-2 rounded text-white text-sm font-semibold shadow-md tracking-widest hover:bg-gradient-to-b hover:from-violet-400 hover:to-violet-600 transform transition active:translate-y-1 active:duration-300 sm:py-3 sm:px-11 sm:mt-8">
              <a href="http://127.0.0.1:5500/src/index.html">CASE STUDY</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
