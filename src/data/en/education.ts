import type { Certification, Education } from "../types";

// Source: content/cv-en.md, section "Education".
export const education: Education[] = [
  {
    institution: "Meritorious Autonomous University of Puebla",
    country: "Mexico",
    degree: "PhD in Government Sciences and Politics",
    period: "2019 - 2024",
    thesis:
      "The evaluation of the Knowledge Economy in Mexico from 2006 to 2018, and a proposal for its measurement.",
    honors: [],
  },
  {
    institution: "University of Strasbourg",
    country: "France",
    unit: "Center for International Intellectual Property Studies",
    degree: "University Diploma in Artificial Intelligence and Intellectual Property",
    period: "2020 - 2021",
    honors: [],
  },
  {
    institution: "The George Washington University Law School",
    country: "USA",
    degree: "LLM in Intellectual Property Law",
    period: "2013 - 2014",
    honors: ["Awarded with the Fulbright Scholarship"],
  },
  {
    institution: "Meritorious Autonomous University of Puebla",
    country: "Mexico",
    degree: "Master in Economic Law",
    period: "2009 - 2011",
    honors: [
      "With highest recognition Cum Laude honors",
      "Graduation first in class",
      "Master's dissertation was awarded as the best in Mexico on intellectual property by the Mexican Copyright Office and the Ministry of Education.",
    ],
  },
  {
    institution: "Meritorious Autonomous University of Puebla",
    country: "Mexico",
    degree: "Law Degree (LLB)",
    period: "2003 - 2008",
    honors: [],
  },
];

// Source: content/cv-en.md, section "CERTIFICATIONS (most relevant)".
export const certifications: Certification[] = [
  {
    institution:
      "International Union for the Protection of New Varieties of Plant and United States Patent and Trademark Office",
    country: "Switzerland",
    year: "2024",
    title: "UPOV Executive Program on plant variety protection for the development of agriculture.",
    note: "The only one selected to represent Central America.",
  },
  {
    institution:
      "International Union for the Protection of New Varieties of Plant and United States Patent and Trademark Office",
    country: "Switzerland",
    year: "2016",
    title: "Train-the-trainer course on plant variety protection under the UPOV Convention.",
    note: "The only one selected to represent Latin America.",
  },
  {
    institution: "World Intellectual Property Organization and United States Patent and Trademark Office",
    country: "USA",
    year: "2011",
    title: "Certificate of WIPO summer school, 1 of 34 selected from the world.",
  },
  {
    institution: "World Intellectual Property Organization and Mexican Industrial Property Office",
    country: "Mexico",
    year: "2010",
    title: "Certificate of WIPO summer school, 1 of 34 selected from Latin America.",
  },
];
