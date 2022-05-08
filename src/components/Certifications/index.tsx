import { ReactElement } from "react";

import data from "../../data";
import { PropsCertificatesInterface } from "../../interfaces";

import "./style.scss";

function Certifications(): ReactElement {
  const { header, titles, links }: PropsCertificatesInterface =
    data.certifications;

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
