import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black pt-12 px-8 pb-20">
      <div className="flex container">
        <div>
          <h1 className="text-white tracking-wider font-semibold text-xl">
            SULISTYA
          </h1>
          <p className="text-white mt-4 text-xs pr-12 sm:leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam est
            debitis aut error temporibus!
          </p>
        </div>
        <div className="mr-auto">
          <h1 className="text-white font-semibold tracking-wider text-xl">
            SOCIAL
          </h1>
          <ul className="mt-4 flex gap-3">
            <li>
              <img
                src="./icons/github-sign.png"
                alt=""
                className="w-12 bg-white rounded-3xl"
              />
            </li>
            <li>
              <img
                src="./icons/world-wide-web.png"
                alt=""
                className="w-12 bg-white rounded-3xl"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-slate-300 mt-24" />
      <h4 className="text-white text-center text-xs font-thin mt-24">
        ©️Copyright 2023. Made by
        <a href="https://github.com/sulistyadewi" className="border-b-2">
          Sulistya
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
