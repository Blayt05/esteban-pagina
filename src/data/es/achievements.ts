import type { CvContent, Organization, Talk } from "../types";

// Fuente: content/cv-es.md, sección "Asesoría Legislativa".
export const legislative: CvContent["legislative"] = {
  intro:
    "Participación en la motivación, cabildeo, redacción y presentación de las siguientes iniciativas de ley a través de la think tank CAIINNO.",
  initiatives: [
    "Iniciativa que reforma los artículos 1 y 12 de la Ley de Ciencia y Tecnología.",
    "Iniciativa con proyecto de Decreto que reforma y adiciona el artículo 458 de la Ley General de Instituciones y Procedimientos Electorales.",
    "Iniciativa con proyecto de decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6º de la Ley de la Propiedad Industrial.",
    "Iniciativa con proyecto de decreto por el que se reforman y adicionan diversas disposiciones de la Ley General de Cultura y Derechos Culturales.",
    "Iniciativa con proyecto de decreto por el que se adiciona la fracción XXXV al artículo 5 de la Ley Federal de Protección a la Propiedad Industrial.",
    "Iniciativa con proyecto de decreto por el que se adicionan la fracción IX al artículo 2, la fracción XXI al artículo 12, y la fracción IX al artículo 13, de la Ley de Ciencia y Tecnología.",
  ],
};

// Fuente: content/cv-es.md, sección "RECONOCIMIENTOS Y PREMIOS (más importantes)".
export const awards: string[] = [
  "Tercer lugar del Ideaton organizado y realizado por el Banco Centroamericano de Integración Económica, en el 2022, por una propuesta novedosa en materia de transparencia y acceso a la información.",
  "Mención especial con la think tank CAIINNO del Premio Nacional de Innovación y Buenas Prácticas en la Protección de Datos Personales 2022, otorgado por el Instituto Nacional de Acceso a la Información, por el diseño e implementación de una inteligencia artificial.",
  "Ganador con la think tank CAIINNO del Premio Nacional de Innovación y Buenas Prácticas en la Protección de Datos Personales 2019, otorgado por el Instituto Nacional de Acceso a la Información, por el diseño e implementación de una inteligencia artificial.",
  "Ganador de una de las cinco categorías del concurso mundial denominado “Alumni Engagement Innovation Fund competition” en su edición 2017, organizado por el Departamento de Estado de los Estados Unidos de América.",
  "Receptor de la Beca Fulbright – García Robles para mi Maestría en los Estados Unidos.",
  "Tesis de Maestría galardonada como la mejor de México en materia de Derechos de Autor y Propiedad Intelectual en 2012. Premio otorgado por el Instituto Nacional del Derecho de Autor y la Secretaría de Educación Pública Federal.",
];

// Fuente: content/cv-es.md, sección "PONENCIAS (más relevantes)".
export const talks: Talk[] = [
  { institution: "Banco Mundial", country: "EE. UU." },
  { institution: "Banco Interamericano de Desarrollo", country: "EE. UU." },
  { institution: "Conferencia de las Naciones Unidas sobre Comercio y Desarrollo", country: "Suiza" },
  { institution: "Organización Mundial de la Propiedad Intelectual", country: "Suiza" },
  { institution: "Unión Internacional para la Protección de las Obtenciones Vegetales", country: "Suiza" },
  { institution: "Organización de los Estados Americanos", country: "EE. UU." },
  { institution: "Asociación Latinoamericana de Integración", country: "Uruguay" },
  { institution: "Oficina de Patentes y Marcas de los Estados Unidos", country: "EE. UU." },
  { institution: "Oficina Española de Patentes y Marcas", country: "España" },
  {
    institution:
      "Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual",
    country: "Perú",
  },
  { institution: "Ministerio de Agricultura de Guatemala", country: "Guatemala" },
  { institution: "Universidad de San Andrés", country: "Argentina" },
];

// Fuente: content/cv-es.md, sección "Membresías Profesionales".
export const memberships: string[] = [
  "Miembro del Grupo de Trabajo Informal sobre Economía Creativa de la UNCTAD.",
  "Miembro de la Junta Directiva de la Alianza Global de Propiedad Intelectual y colíder del Comité de Diversidad e Inclusión en Propiedad Intelectual.",
  "Exmiembro de la Asociación de Exalumnos Fulbright, Capítulo de Washington D. C.",
  "Exmiembro de la Junta Directiva de la Asociación Mexicana de Exalumnos Fulbright (2015-2017).",
  "Exmiembro de la Junta Directiva de la Asociación Mexicana de Exalumnos del Gobierno de Estados Unidos (2015-2017).",
];

// Instituciones mencionadas en el CV (experiencia, ponencias, certificaciones y publicaciones).
export const organizations: Organization[] = [
  { name: "Banco Mundial" },
  { name: "Banco Interamericano de Desarrollo", short: "BID" },
  { name: "Banco de Desarrollo de América Latina", short: "CAF" },
  { name: "Conferencia de las Naciones Unidas sobre Comercio y Desarrollo", short: "UNCTAD" },
  { name: "Organización Mundial de la Propiedad Intelectual", short: "OMPI" },
  { name: "Unión Internacional para la Protección de las Obtenciones Vegetales", short: "UPOV" },
  { name: "Oficina de Patentes y Marcas de Estados Unidos", short: "USPTO" },
  { name: "Organización de los Estados Americanos" },
  { name: "Asociación Latinoamericana de Integración" },
  { name: "Oficina Española de Patentes y Marcas" },
  { name: "British Council" },
  { name: "Global Intellectual Property Alliance" },
  { name: "The George Washington University" },
  { name: "Universidad de San Andrés" },
];
