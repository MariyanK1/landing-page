import data from "../../data";
import "./style.scss";

interface PropsInterface {
  liveLinks: string[];
  sourceLinks: string[];
  titles: string[];
  header: string;
}

function Projects() {
  const { liveLinks, sourceLinks, titles, header }: PropsInterface =
    data.projects;

  return (
    <div className="projects-container">
      <h1>{header}</h1>
      {titles.map((x, i) => {
        return (
          <div key={x}>
            <p>{x}:</p>
            <a href={liveLinks[i]} target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href={sourceLinks[i]} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
