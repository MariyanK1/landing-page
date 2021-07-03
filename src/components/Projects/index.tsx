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
      {titles.map((title, idx) => {
        return (
          <div key={title}>
            <p>{title}:</p>
            {title === "Vanilla JS NodeJS API (WIP)" ? (
              <a
                href={sourceLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            ) : (
              <>
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
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
