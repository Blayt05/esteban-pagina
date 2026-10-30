import type { CvContent } from "../types";

// Fuente: content/cv-es.md, secciones "DOCENCIA (más relevantes)" y "Tesis Asesoradas".
// `highlight` proviene del párrafo académico de "¿Quién es Esteban Santamaría Hernández?".
export const teaching: CvContent["teaching"] = {
  highlight:
    "El único docente de América del Norte y Centroamérica en la Maestría en Innovación de la Organización Mundial de la Propiedad Intelectual, donde explico a representantes de varios países cómo utilizar a la propiedad intelectual como motor de desarrollo de América Latina y el Caribe.",
  courses: [
    {
      institution:
        "Universidad de San Andrés, Argentina (programa de la Organización Mundial de la Propiedad Intelectual para América Latina)",
      program: "Maestría en innovación y propiedad intelectual.",
    },
    {
      institution: "Academia de la WIPO",
      program:
        "DL302 en marcas, diseños industriales e indicaciones geográficas (profesor para los cursos en español e inglés).",
    },
    {
      institution:
        "Centro de Investigación e Innovación en Tecnologías de la Información y Comunicación (INFOTEC)",
      program: "Maestría",
    },
    { institution: "Universidad Autónoma de Morelos", program: "Maestría" },
    { institution: "Universidad Panamericana", program: "Maestría" },
    { institution: "Universidad de las Américas Puebla", program: "Licenciatura" },
  ],
  thesesAdvised: [
    "Tesis de Maestría (Centro de Investigación e Innovación en Tecnologías de la Información y Comunicación) - Análisis de implementación de una aplicación móvil para registro de obras ante el registro público del derecho de autor.",
    "Tesis de Maestría (Centro de Investigación e Innovación en Tecnologías de la Información y Comunicación) - La protección de las marcas no tradicionales en el sistema jurídico mexicano.",
    "Tesis de Maestría (Centro de Investigación e Innovación en Tecnologías de la Información y Comunicación) - Implicaciones jurídicas de la imposición de la medida provisional de aseguramiento a equipos de cómputo por presunto uso ilegal de programas de computación.",
  ],
};
