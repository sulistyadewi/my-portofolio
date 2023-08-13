import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { useState } from "react";

const App = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GIT",
    "Design",
    "Communication",
  ];
  const dataprojects = [
    {
      image: "./images/portofolio.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus illo aperiam fugit dolore nobis expedita magnam corrupti error?",
      title: "Portofolio",
      url: "http://127.0.0.1:5500/src/index.html",
    },
    {
      image: "./images/e-commers.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus illo aperiam fugit dolore nobis expedita magnam corrupti error?",
      title: "e-Commers",
      url: "http://127.0.0.1:5502/products.html",
    },
    {
      image: "./images/Bio-School.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus illo aperiam fugit dolore nobis expedita magnam corrupti error?",
      title: "Bio-School",
      url: "https://bio-school.sulistyakumala.repl.co",
    },
  ];
  const [projects, setProjects] = useState(dataprojects);
  const addProject = (project) => {
    setProjects([...projects, project]);
  };
  return (
    <div className="font-roboto-slab">
      <Header />
      <Hero />
      <About skills={skills} />
      <Project projects={projects} addProject={addProject} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
