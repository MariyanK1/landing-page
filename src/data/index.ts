import {
  Angular,
  Node,
  HTML,
  CSS,
  React,
  Mongo,
  TypeScript,
} from "../assets/icons/";

import { DataInterface } from "../interfaces";

const data: DataInterface = {
  header: {
    skills: [Angular, Node, HTML, CSS, React, Mongo, TypeScript],
    title: "Mariyan Maksimov's Project Page",
    paragraphs: ["My stack:"],
  },
  certifications: {
    header: "Certifications:",
    titles: [
      "Programming Basics with C#",
      "JS Fundamentals",
      "JS Advanced",
      "JS Algorithms and Data Structures",
      "Responsive Web Design",
    ],
    links: [
      "https://softuni.bg/certificates/details/77208/155afb9f",
      "https://softuni.bg/certificates/details/85685/1703a398",
      "https://softuni.bg/certificates/details/90448/1f5f1938",
      "https://freecodecamp.org/certification/mariyan/javascript-algorithms-and-data-structures",
      "https://www.freecodecamp.org/certification/mariyan/responsive-web-design",
    ],
  },
  contact: {
    header: "Let's chat!",
    email: "mariyan.pickup@gmail.com",
  },
  projects: {
    header: "My Projects:",
    titles: ["Instagram Clone", "Github Finder (live)", "Crypto Market (live)"],
    sourceLinks: [
      "https://github.com/MariyanK1/full-stack-instagram-clone",
      "https://github.com/MariyanK1/Github-Finder",
      "https://github.com/MariyanK1/Crypto-Market",
    ],
  },
};

export default data;
