import React, { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const toogleMenu = () => {
    setisOpen(!isOpen);
  };
  console.log(toogleMenu, "tes");
  return (
    <header className="bg-white z-50 fixed w-full flex items-center justify-between">
      <div className="flex w-full h-full items-center px-2 py-3 justify-between relative top-0 shadow-2xl">
        <div className="flex items-center gap-3 xl:ml-3">
          <img
            className="w-8 h-8 rounded-full ml-2 md:w-10 md:h-10 md:ml-3 xl:w-10 xl:h-10"
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1 className="items-center font-semibold tracking-wider">
            Sulistya
          </h1>
        </div>
        <button id="menuBar" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="hidden md:block md:py-3">
          <ul className="flex gap-12 md:px-4">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Project</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
        <div
          id="menumobile"
          // isOpen={isOpen}
          onClick={() => toogleMenu()}
          className="absolute h-48 w-full bg-blue-500 top-14 left-0 pl-5"
        >
          <ul className="flex flex-col gap-5 pt-4">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
