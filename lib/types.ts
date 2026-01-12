import { StaticImageData } from "next/dist/shared/lib/image-external";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export type Patent = {
  title: string;
  inventors: string;
  appNo: string;
  filedDate?: string;
  issueDate?: string;
};

export type Faculty = {
  name: string;
  role: string;
  positions: string[];
  email: string;
  web: string;
  image: StaticImageData;
};

export type Student = {
  name: string;
  program?: string;
  image?: StaticImageData;
};

export type Position = {
  title: string;
  status: "open" | "closed";
  description: string;
  link?: string;
  linkText?: string;
};

export type Project = {
  title: string;
  pi: string;
  duration: string;
  agency: string;
  coPi?: string;
  investigator?: string;
};

export type Publication = {
  id: string;
  authors: string;
  title: string;
  venue: string;
  abstract: string;
  link: string;
  award?: string;
};
