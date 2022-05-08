import { ReactElement } from "react";

import data from "../../data";
import { PropsContactInterface } from "../../interfaces";

import "./style.scss";

function Contact(): ReactElement {
  const { header, email }: PropsContactInterface = data.contact;

  return (
    <div className="contact-container">
      <h1>{header}</h1>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default Contact;
