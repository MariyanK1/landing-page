import data from "../../data";
import "./style.scss";

interface PropsInterface {
  skills: string;
  paragraphs: string[];
  image: string;
  title: string;
}

function Header() {
  const { skills, image, title, paragraphs }: PropsInterface = data.header;

  return (
    <div className="header-container">
      <h1>{title}</h1>
      <img src={image} alt="" />
      {paragraphs.map((x) => (
        <p key={x}>{x}</p>
      ))}
      <b>{skills}</b>
    </div>
  );
}

export default Header;
