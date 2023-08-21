import React, { useState } from "react";

const Project = (props) => {
  const formState = {
    image: "",
    title: "",
    desc: "",
    url: "",
  };
  const [project, setProject] = useState(formState);
  const handleInputChanged = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };
  return (
    <div className="px-4 pb-12 mx-auto">
      <h1 className="mt-14 text-center text-3xl font-bold tracking-widest sm:mt-20 sm:text-4xl">
        PROJECT
      </h1>
      <hr className="border-violet-600 border-b-8 mx-auto w-14 mt-5 rounded-md" />
      <p className="text-slate-500 mt-8 text-center leading-relaxed sm:mt-10 sm:px-4 md:px-6 lg:px-36 xl:px-60">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        quasi nobis neque odit hic voluptas in obcaecati.
      </p>
      {props.projects.map((project, index) => (
        <div key={index} className="mt-16 mx-auto md:mt-20 lg:flex lg:px-4 ">
          <div className="lg:flex lg:self-center">
            <img
              src={project.image}
              alt=""
              className="max-w-sm mx-auto sm:max-w-lg md:max-w-xl xl:max-w-2xl"
            />
            <div className="lg:flex lg:flex-col lg:self-center   xl:px-12">
              <h3 className="mt-6 text-center font-semibold text-lg sm:text-xl md:text-2xl md:mt-8 lg:text-left">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-slate-500 text-center leading-relaxed sm:px-8 sm:leading-loose md:px-16 lg:text-left lg:px-0">
                {project.desc}
              </p>
              <div className="flex justify-center lg:justify-normal">
                <button className="bg-violet-400 mt-6 px-7 py-2 rounded text-white text-sm font-semibold shadow-md tracking-widest hover:bg-gradient-to-b hover:from-violet-400 hover:to-violet-600 transform transition active:translate-y-1 active:duration-300 sm:py-3 sm:px-11 sm:mt-8 xl:py-4 xl:shadow-lg">
                  <a href={project.url}>CASE STUDY</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-violet-400 mt-10 max-w-xs rounded-md px-6 py-6 mx-auto">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (
              !project.image ||
              !project.title ||
              !project.desc ||
              !project.url
            )
              return;
            props.addProject(project);
            setProject(formState);
          }}
        >
          <div className="flex flex-col">
            <label>Image</label>
            <input
              type="text"
              value={project.image}
              required={true}
              name="image"
              className="h-12 p-2 rounded mt-2 bg-white"
              onChange={handleInputChanged}
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-6">Title</label>
            <input
              type="text"
              value={project.title}
              required={true}
              name="title"
              className="h-12 p-3 rounded mt-2 bg-white"
              onChange={handleInputChanged}
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-6">Description</label>
            <input
              type="text"
              value={project.desc}
              required={true}
              name="desc"
              className="h-12 p-3 bg-white rounded mt-2"
              onChange={handleInputChanged}
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-6">URL</label>
            <input
              type="text"
              value={project.url}
              required={true}
              name="url"
              className="h-12 p-3 bg-white rounded mt-2"
              onChange={handleInputChanged}
            />
          </div>
          {/* <div>
            <label>DE</label>
          </div> */}
          <div>
            <button type="submit" className="bg-white py-2 px-5 mt-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;
