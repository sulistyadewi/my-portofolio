import React from "react";

const About = () => {
  return (
    <div className="bg-slate-50 w-full px-3 pb-20 sm:px-4">
      <h1 className="pt-20 text-3xl text-center font-semibold sm:tracking-wider">
        ABOUT ME
      </h1>
      <hr className="border-violet-600 border-b-8 mx-auto w-14 mt-5 rounded-md" />
      <p className="mt-6 text-center text-slate-600 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in
        blanditiis consequatur facilis ipsam itaque molestias veritatis!
      </p>
      <div>
        <div>
          <div className="px-2">
            <h3 className="mt-16  font-bold text-xl sm:mt-20">
              GET TO KNOW ME
            </h3>
            <p className="mt-5 text-slate-600 sm:leading-loose sm:mt-7">
              Hey! it's <span className="font-semibold">Sulistya</span> and i'm
              <span className="font-semibold">Fronted Web Developer</span>
              located in Indonesia.
            </p>
            <p className="mt-3 text-slate-600 sm:leading-loose">
              I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals. Feel free to{" "}
              <span className="font-semibold">contact</span> me here
            </p>
            <button className="bg-violet-400 text-white font-medium mt-10 px-7 py-3 rounded tracking-wider shadow-lg hover:bg-gradient-to-b hover:from-violet-400 hover:to-violet-600 transform transition active:translate-y-1 active:duration-75 ease-in-out sm:px-12">
              Contact
            </button>
          </div>
        </div>
        <div className="px-3 mt-20">
          <h3 className="mt-7 text-xl font-bold">My Skills</h3>
          <div className="flex flex-wrap mt-3">
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              HTML
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              CSS
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              JavaScript
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              React
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              GIT
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-20 text-center mr-3 py-4 hover:bg-neutral-400">
              Design
            </div>
            <div className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 w-32 text-center mr-3 py-4 hover:bg-neutral-400">
              Communication
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
