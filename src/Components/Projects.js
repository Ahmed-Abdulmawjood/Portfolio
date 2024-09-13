import React from "react";
import { Styles } from "../Utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import { SiNetlify, SiGithub } from "react-icons/si";

function Projects() {
  return (
    <div>
      <div
        className="flex-row items-center pl-t justify-center pt-3"
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]" />
        <div className={Styles.sectionText}>
          These projects serve as a good representation of my skills,
          highlighting my versatility, from data manipulation, to responsive
          design, to GUI development, enhancing both technical and collaborative
          skills.
        </div>
      </div>
      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map((project) => (
          <Tilt
            key={project.name} // Corrected key to project.name
            className="w-[300px] h-[500px] flex flex-col justify-between shadow-xl m-10 items-center hover:shadow-2xl hover:shadow-orange-400 shadow-orange-900 p-3 rounded-xl border-2 border-orange-400"
          >
            <div className="flex justify-center items-center mb-3">
              {/* Deploy Link Icon */}
              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-600 shadow-orange-900 flex justify-center items-center">
                <a
                  href={project.source_deploy_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiNetlify className="text-3xl font-bold text-orange-900"></SiNetlify>
                </a>
              </div>
              {/* Code Link Icon */}
              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-600 shadow-orange-900 flex justify-center items-center">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-3xl font-bold text-orange-900"></SiGithub>
                </a>
              </div>
            </div>
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="h-[200px] w-[250px] mb-3 border-2 border-orange-200 rounded-2xl"
            />
            {/* Project Name */}
            <div className="text-2xl text-orange-600 font-bold mt-2">
              {project.name}
            </div>
            {/* Project Description */}
            <div className="text-center mt-2">
              <span className="text-orange-900">{project.description}</span>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
