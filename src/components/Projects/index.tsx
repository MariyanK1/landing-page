import { ReactElement } from "react";

import { PropsProjectInterface } from "../../interfaces";
import data from "../../data";

import "./style.scss";

function Projects(): ReactElement {
  const { sourceLinks, titles, header }: PropsProjectInterface = data.projects;

  return (
    <div className="projects-container">
      <h1 style={{ marginBottom: "30px" }}>{header}</h1>
      {titles.map((title, idx) => {
        return (
          <div key={title} className="project-wrapper">
            <h5>{title + ":"}</h5>
            <div className="links-container">
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
