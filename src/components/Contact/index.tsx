import data from "../../data";
import "./style.scss";

interface PropsInterface {
  header: string;
  email: string;
}

function Contact() {
  const { header, email }: PropsInterface = data.contact;

  return (
    <div className="contact-container">
      <h1>{header}</h1>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default Contact;
