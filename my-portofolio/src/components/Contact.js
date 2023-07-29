import React from "react";

const Contact = () => {
  return (
    <div className="px-4 bg-violet-400 pb-14">
      <h1 className="pt-16 text-center text-4xl text-white font-bold tracking-wider">
        CONTACT
      </h1>
      <p className="mt-10 text-center text-white leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum
        eaque autem vitae error, nemo officia eligendi.
      </p>
      <div className="bg-white mt-14 max-w-sm px-6 py-6 rounded-lg mx-auto">
        <form className="">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="h-14 mt-3 rounded bg-slate-200"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label>Email</label>
            <input
              type="email"
              className="h-14 mt-3 p-3 rounded bg-slate-200"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label>Message</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="p-3 mt-3 rounded bg-slate-200"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <button className="bg-gray-400 mt-6 py-2 rounded w-28 hover:bg-gray-500">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
