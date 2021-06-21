interface DataInterface {
  header: {
    skills: string;
    image: string;
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
    skills: "HTML5, CSS/SCSS, JS, REACT",
    title: "Mariyan Maksimov's Project Page",
    image: "https://avatars.githubusercontent.com/u/58628678?v=4",
    paragraphs: [
      "Welcome to my page! Thanks for stopping by.",
      "I'm a partially self-taught developer with a passion for the Web.",
      "Fascinated by JavaScript and its quirks.",
      "Currently looking for a Jr. Frontend position or Internship.",
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
    titles: [
      "React With Typescript",
      "Github Finder",
      "Crypto Market",
      "Routing with React",
      "New Year Countdown",
      "Binary Search",
      "Meal Finder",
    ],
    liveLinks: [
      "https://react-with-typescript.netlify.app/",
      "https://github-find3r.netlify.app/",
      "https://crypto-market-x.netlify.app/",
      "https://mariyank1.github.io/my-first-react-project/",
      "https://mariyank1.github.io/new-year-countdown/",
      "https://mariyank1.github.io/binary-search/",
      "https://mariyank1.github.io/meal-finder/",
    ],
    sourceLinks: [
      "https://github.com/MariyanK1/React-With-Typescript",
      "https://github.com/MariyanK1/Github-Finder",
      "https://github.com/MariyanK1/Crypto-Market",
      "https://github.com/MariyanK1/mariyank1.github.io/tree/main/my-first-react-project",
      "https://github.com/MariyanK1/mariyank1.github.io/tree/main/new-year-countdown",
      "https://github.com/MariyanK1/mariyank1.github.io/tree/main/binary-search/",
      "https://github.com/MariyanK1/mariyank1.github.io/tree/main/meal-finder",
    ],
  },
};

export default data;
