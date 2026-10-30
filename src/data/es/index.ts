import type { CvContent } from "../types";
import { awards, legislative, memberships, organizations, talks } from "./achievements";
import { certifications, education } from "./education";
import { experience } from "./experience";
import { profile, sports } from "./profile";
import { publications } from "./publications";
import { teaching } from "./teaching";

const ownPublications = publications.filter((p) => p.category !== "unctad").length;
const talkCountries = [...new Set(talks.map((t) => t.country))];

// Cifras clave: las cantidades se cuentan a partir de los datos del CV, no se estiman.
export const es: CvContent = {
  profile,
  keyFigures: [
    {
      value: "+40 millones",
      label: "de personas con impacto potencial",
      detail: "Aportes de CAIINNO incorporados en varios planes estatales de desarrollo",
    },
    {
      value: "5",
      label: "organismos multilaterales",
      detail: "Banco Mundial, BID, CAF, UNCTAD y OMPI",
    },
    {
      value: String(legislative.initiatives.length),
      label: "iniciativas de ley impulsadas",
      detail: "A través de la think tank CAIINNO",
    },
    {
      value: String(ownPublications),
      label: "publicaciones y artículos",
      detail: "Para el BID, revistas académicas, CAIINNO y otros espacios",
    },
    {
      value: String(talkCountries.length),
      label: "países con ponencias",
      detail: talkCountries.join(" · "),
    },
    {
      value: "2.º",
      label: "lugar mundial de karate",
      detail: "Campeonato Mundial de Karate, China, 2009",
    },
  ],
  organizations,
  experience,
  education,
  certifications,
  teaching,
  publications,
  legislative,
  awards,
  talks,
  memberships,
  sports,
};
