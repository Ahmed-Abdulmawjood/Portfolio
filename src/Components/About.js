import Profile from "../Assets/profile.png";
import Resume from "../Assets/Ahmed_Abdulmawjood_Resume.pdf";
import { Styles } from "../Utils/Style";
import { FaDownload } from "react-icons/fa6";
import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center md:mt-10 px-10 pt-10 pb-0 md:pb-10 md:gap-x-10"
      id="About"
    >
      <div className="flex-1 py-4">
        <p className={Styles.heroHeadText}>Hello, I am</p>
        <p className={Styles.heroHeadText + " text-orange-600"}>Ahmed.A</p>
        <br />
        <span className={Styles.heroSubText}>
          I am a 3rd year Carleton University student studying
          <br />
          Software Engineering
        </span>
        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-800 flex justify-center border-2 shadow-xl border-orange-800 hover:shadow-xl hover:shadow-orange-400 shadow-orange-800">
              <FaDownload className="text-lg mr-3 mt-1 text-orange-500"></FaDownload>{" "}
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src={Profile}
          alt="profile"
          className="element object-contain w-11/12 md:w-[500px] h-11/12 md:h-[500px] p-0 mt-10 md:mt-0"
        />
      </div>
    </div>
  );
}

export default About;
