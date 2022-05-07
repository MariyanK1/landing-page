import data from "../../data";
import "./style.scss";

interface PropsInterface {
  skills: string[];
  paragraphs: string[];
  title: string;
}

function Header() {
  const { skills, title, paragraphs }: PropsInterface = data.header;

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
        {skills.map((x) => {
          return <img src={x} key={x} alt="Skill icons" />;
        })}
      </div>
    </div>
  );
}

export default Header;
