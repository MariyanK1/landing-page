export interface DataInterface {
  header: {
    skills: string[];
    title: string;
    paragraphs: string[];
  };
  certifications: {
    titles: string[];
    links: string[];
    header: string;
  };
  contact: {
    header: string;
    email: string;
  };
  projects: {
    titles: string[];
    sourceLinks: string[];
    header: string;
  };
}

export interface PropsProjectInterface {
  sourceLinks: string[];
  titles: string[];
  header: string;
}

export interface PropsCertificatesInterface {
  titles: string[];
  links: string[];
  header: string;
}

export interface PropsContactInterface {
  header: string;
  email: string;
}

export interface PropsHeaderInterface {
  skills: string[];
  paragraphs: string[];
  title: string;
}
