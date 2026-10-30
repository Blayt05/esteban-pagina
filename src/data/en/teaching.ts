import type { CvContent } from "../types";

// Source: content/cv-en.md, sections "COURSES TAUGHT (most relevant)" and "Theses Advised".
// `highlight` comes from the academic paragraph of "Who is Esteban Santamaría-Hernández?".
export const teaching: CvContent["teaching"] = {
  highlight:
    "The only professor from North and Central America in the World Intellectual Property Organization's Master's in Innovation, where I teach representatives from several countries how to use intellectual property as a driver of development in Latin America and the Caribbean.",
  courses: [
    {
      institution:
        "University of San Andres (Argentina)",
      program:
        "Master in Intellectual Property and Innovation (program administrated by the World Intellectual Property Organization).",
    },
    {
      institution: "World Intellectual Property Organization Academy",
      program:
        "DL302 on Trademarks, Industrial Designs and Geographical Indications (professor for both courses, in spanish and english); DL201S26S1 on Copyrights and Related Rights.",
    },
    { institution: "Universidad Panamericana (Mexico)", program: "Master in Intellectual Property." },
    {
      institution:
        "Center for Research and Innovation in Information and Communication Technologies (Mexico)",
      program: "Master",
    },
    { institution: "Universidad de las Américas Puebla (Mexico)", program: "Law school." },
  ],
  thesesAdvised: [
    "Master's Thesis (Center for Research and Innovation in Information and Communication Technologies) - Analysis of the implementation of a mobile application for registering works with the public copyright registry.",
    "Master's Thesis (Center for Research and Innovation in Information and Communication Technologies) - The protection of non-traditional trademarks in the Mexican legal system.",
    "Master's Thesis (Center for Research and Innovation in Information and Communication Technologies) - Legal implications of imposing a provisional seizure measure on computer equipment for alleged illegal use of software.",
  ],
};
