import type { Certification, Education } from "../types";

// Fuente: content/cv-es.md, sección "Estudios".
export const education: Education[] = [
  {
    institution: "Benemérita Universidad Autónoma de Puebla",
    country: "México",
    degree: "Doctorado en Ciencias de Gobierno y Política",
    period: "2019 - 2024",
    thesis:
      "Evaluación de la economía del conocimiento en México del 2006 al 2018, y una propuesta para su medición.",
    honors: [],
  },
  {
    institution: "Universidad de Estrasburgo",
    country: "Francia",
    unit: "Centro de Estudios Internacionales de Propiedad Intelectual.",
    degree: "Diploma Universitario en Inteligencia Artificial y Propiedad Intelectual",
    period: "2020 - 2021",
    honors: [],
  },
  {
    institution: "The George Washington University Law School",
    country: "EE. UU.",
    degree: "Maestría en Derecho de Propiedad Intelectual",
    period: "2013 - 2014",
    honors: ["Galardonado con la beca Fulbright"],
  },
  {
    institution: "Benemérita Universidad Autónoma de Puebla",
    country: "México",
    degree: "Maestría en Derecho Económico",
    period: "2009 - 2011",
    honors: [
      "Graduado con máxima distinción Cum Laude",
      "Tesis de Maestría galardonada como la mejor en México en propiedad intelectual y derechos de autor por el INDAUTOR y la SEP federal.",
    ],
  },
  {
    institution: "Benemérita Universidad Autónoma de Puebla",
    country: "México",
    degree: "Licenciatura en Derecho",
    period: "2003 - 2008",
    honors: [],
  },
];

// Fuente: content/cv-es.md, sección "CERTIFICACIONES (más relevantes)".
// Corrección mínima: en el CV aparece "Obtenciones Vegetales y y Oficina" (palabra duplicada).
export const certifications: Certification[] = [
  {
    institution:
      "Unión Internacional para la Protección de las Obtenciones Vegetales y Oficina de Patentes y Marcas de los Estados Unidos",
    country: "Suiza",
    year: "2024",
    title:
      "Programa ejecutivo de la UPOV sobre la protección de las variedades vegetales para el desarrollo de la agricultura.",
    note: "Único seleccionado para representar a Centroamérica.",
  },
  {
    institution:
      "Unión Internacional para la Protección de las Obtenciones Vegetales y Oficina de Patentes y Marcas de los Estados Unidos",
    country: "Suiza",
    year: "2016",
    title: "Entrenamiento de entrenadores sobre protección de variedades vegetales",
    note: "Único seleccionado para representar a América Latina.",
  },
  {
    institution:
      "Organización Mundial de la Propiedad Intelectual y la Oficina de Patentes y Marcas de Estados Unidos",
    country: "EE. UU.",
    year: "2011",
    title: "Certificado de la escuela de verano, 1 de 34 seleccionados del mundo.",
  },
  {
    institution:
      "Organización Mundial de la Propiedad Intelectual y el Instituto Mexicano de la Propiedad Industrial",
    country: "México",
    year: "2010",
    title: "Certificado de la escuela de verano, 1 de 24 seleccionados en América Latina",
  },
];
