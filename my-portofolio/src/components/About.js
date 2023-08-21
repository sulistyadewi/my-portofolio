import React from "react";

const About = (props) => {
  return (
    <div className="bg-slate-50 w-full px-3 pb-20 sm:px-4 lg:pt-6">
      <h1 className="pt-20 text-3xl text-center font-semibold sm:tracking-wider sm:text-4xl">
        ABOUT ME
      </h1>
      <hr className="border-violet-600 border-b-8 mx-auto w-14 mt-5 rounded-md lg:mt-8" />
      <p className="mt-6 text-center text-slate-600 sm:mt-10 md:tracking-wider md:px-6 lg:px-24 xl:px-48">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in
        blanditiis consequatur facilis ipsam itaque molestias veritatis!
      </p>
      <div className="lg:flex lg:justify-center lg-flex-row lg-py-20 lg:px-5 lg:mt-20">
        <div className="lg:flex lg:items-start lg:basis-1/2">
          <div className="px-2">
            <h3 className="mt-16 font-bold text-xl sm:mt-20 md:text-2xl lg:mt-0">
              GET TO KNOW ME
            </h3>
            <p className="mt-5 text-slate-600 sm:leading-loose sm:mt-7 lg:mt-7">
              Hey! it's <span className="font-semibold">Sulistya</span> and i'm
              <span className="font-semibold"> Fronted Web Developer </span>
              located in Indonesia. I am a student.
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
        <div className="px-3 mt-20 lg:mt-0 lg:basis-1/2 lg:pl-24 xl:mx-auto">
          <h3 className="mt-7 text-xl font-bold md:mt-16 md:text-2xl lg:mt-0">
            My Skills
          </h3>
          <div className="flex flex-wrap mt-3">
            {props.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-neutral-300 text-neutral-800 font-medium text-sm rounded mt-5 px-6 text-center mr-3 py-4 hover:bg-neutral-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
