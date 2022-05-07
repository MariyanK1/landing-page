import {
  Angular,
  Node,
  HTML,
  CSS,
  React,
  Mongo,
  TypeScript,
} from "../assets/icons/";

interface DataInterface {
  header: {
    skills: string[];
    title: string;
    paragraphs: string[];
  };
  certifications: {
    titles: string[];
    links: string[];
    header: string;
  };
  contact: {
    header: string;
    email: string;
  };
  projects: {
    titles: string[];
    liveLinks: string[];
    sourceLinks: string[];
    header: string;
  };
}

const data: DataInterface = {
  header: {
    skills: [Angular, Node, HTML, CSS, React, Mongo, TypeScript],
    title: "Mariyan Maksimov's Project Page",
    paragraphs: [
      "Welcome to my page! Thanks for stopping by.",
      "I'm a problem-solver with a passion for the Web.",
      "Fascinated by JavaScript and its quirks.",
      "My skills are:",
    ],
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
    header: "Contact me:",
    email: "mariyan.pickup@gmail.com",
  },
  projects: {
    header: "My Projects:",
    titles: ["Github Finder", "Crypto Market"],
    liveLinks: [
      "https://github-find3r.netlify.app/",
      "https://crypto-market-x.netlify.app/",
    ],
    sourceLinks: [
      "https://github.com/MariyanK1/Github-Finder",
      "https://github.com/MariyanK1/Crypto-Market",
    ],
  },
};

export default data;
