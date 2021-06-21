import data from "../../data";
import "./style.scss";

function Projects() {
  const { liveLinks, sourceLinks, titles, header } = data.projects;
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
