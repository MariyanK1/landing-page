import data from "../../data";
import "./style.scss";

interface PropsInterface {
  titles: string[];
  links: string[];
  header: string;
}

function Certifications() {
  const { header, titles, links }: PropsInterface = data.certifications;

  return (
    <div className="certifications-container">
      <h1>{header}</h1>
      {links.map((link, idx) => {
        return (
          <div key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              {titles[idx]}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Certifications;
