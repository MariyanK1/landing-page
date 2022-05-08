import { ReactElement } from "react";

import data from "../../data";
import { PropsHeaderInterface } from "../../interfaces";
import "./style.scss";

function Header(): ReactElement {
  const { skills, title, paragraphs }: PropsHeaderInterface = data.header;

  return (
    <div className="header-container">
      <h1>{title}</h1>
      <iframe
        title="Skydiving Video"
        className="video"
        width="420"
        height="315"
        src="https://www.youtube.com/embed/Fae7sCyGYek"
      ></iframe>
      <div className="paragraphs-container">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="skills-container">
        {skills
          .sort(() => Math.random() - 0.5)
          .map((x) => {
            return <img src={x} key={x} alt="Skill icons" />;
          })}
      </div>
    </div>
  );
}

export default Header;
