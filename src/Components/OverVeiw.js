import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../Utils/Style";
import { technologies, services } from "../Constants";
import { motion } from "framer-motion";
import "./style.css";

function OverVeiw() {
  return (
    <div>
      <div
        className="flex-row items-center pl-t justify-center pt-3 "
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I am a thrid-year Software Engineering student at Carleton University
          enrolled in the Co-op program. In my programming journey, I've honed
          proficiency in Python, C, and React.js along with a solid grasp of
          Java, HTML and CSS through impactful projects.
        </div>
      </div>
      <div className="flex flex-wrrap justify-center">
        {services.map((service) => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={1200}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              sclae={1.05}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  className="h-[100px] w-[100px]"
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 text-orange-800">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center item-center">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-xl border-[3px] border-orange-300 hover:shadow-xl hover:shadow-orange-900 shadow-orange-400"
          >
            <img className="p-2" src={technology.icon} alt="technology.name" />
            <div className="text-orange-800 justify-center flex">
              {technology.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverVeiw;
