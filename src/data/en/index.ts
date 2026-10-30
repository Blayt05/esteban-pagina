import type { CvContent } from "../types";
import { awards, legislative, memberships, organizations, talks } from "./achievements";
import { certifications, education } from "./education";
import { experience } from "./experience";
import { profile, sports } from "./profile";
import { publications } from "./publications";
import { teaching } from "./teaching";

const ownPublications = publications.filter((p) => p.category !== "unctad").length;
const talkCountries = [...new Set(talks.map((t) => t.country))];

// Key figures: amounts are counted from the CV data, not estimated.
export const en: CvContent = {
  profile,
  keyFigures: [
    {
      value: "40M+",
      label: "people potentially impacted",
      detail: "CAIINNO contributions incorporated into several state development plans",
    },
    {
      value: "5",
      label: "multilateral organizations",
      detail: "World Bank, IDB, CAF, UNCTAD and WIPO",
    },
    {
      value: String(legislative.initiatives.length),
      label: "legislative initiatives",
      detail: "Through the CAIINNO think tank",
    },
    {
      value: String(ownPublications),
      label: "publications and articles",
      detail: "For the IDB, academic journals, CAIINNO and other outlets",
    },
    {
      value: String(talkCountries.length),
      label: "countries with conference presentations",
      detail: talkCountries.join(" · "),
    },
    {
      value: "2nd",
      label: "place in the world in karate",
      detail: "World Karate Championship, China, 2009",
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
