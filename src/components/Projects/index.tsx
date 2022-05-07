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
      <h1 style={{ marginBottom: "30px" }}>{header}</h1>
      {titles.map((title, idx) => {
        return (
          <div key={title} className="project-wrapper">
            <h5>{title + ":"}</h5>
            <div className="links-container">
              <a
                href={liveLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href={sourceLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
