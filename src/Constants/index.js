import htmlcss from "../Assets/html&CSS.png";
import reactJS from "../Assets/react.png";
import JS from "../Assets/JS.png";
import python from "../Assets/python.png";
import Java from "../Assets/java.png";
import git from "../Assets/git.png";
import C from "../Assets/C.png";
import FrontEnd from "../Assets/FrontEnd.PNG";
import BackEnd from "../Assets/BackEnd.PNG";
import service3 from "../Assets/service3.PNG";
import project1 from "../Assets/project1.PNG";
import project2 from "../Assets/project2.PNG";
import project3 from "../Assets/project3.PNG";

const services = [
  {
    title: "Front End",
    icon: FrontEnd,
  },
  {
    title: "Back End",
    icon: BackEnd,
  },
  {
    title: "Service 3",
    icon: service3,
  },
];

const technologies = [
  {
    title: "HTML & CSS",
    icon: htmlcss,
  },
  {
    title: "C",
    icon: C,
  },
  {
    title: "git",
    icon: git,
  },
  {
    title: "Java",
    icon: Java,
  },
  {
    title: "JavaScript",
    icon: JS,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "React JS",
    icon: reactJS,
  },
];

const projects = [
  {
    name: "Project1",
    description: "This is my project 1 and this is a description",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com",
    source_deploy_link: "https://code.visualstudio.com/",
  },
  {
    name: "Project2",
    description: "This is my project 2 and this is a description",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com",
    source_deploy_link: "https://code.visualstudio.com/",
  },
  {
    name: "Project3",
    description: "This is my project 3 and this is a description",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com",
    source_deploy_link: "https://code.visualstudio.com/",
  },
];
export { services, technologies, projects };
