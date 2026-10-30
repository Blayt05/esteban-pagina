import type { CvContent, Organization, Talk } from "../types";

// Source: content/cv-en.md, section "LEGISLATIVE ADVISORY".
export const legislative: CvContent["legislative"] = {
  intro:
    "I contributed to the motivation, lobbying, drafting, and presentation of key legislative initiatives through the CAIINNO think tank:",
  initiatives: [
    "Initiative to amend Articles 1 and 12 of the Science and Technology Law.",
    "Initiative with a draft decree to amend and add to Article 458 of the General Law of Electoral Institutions and Procedures.",
    "Initiative with a draft decree to add subsection (g) to section XII of Article 6 of Industrial Property Law.",
    "Initiative with a draft decree to amend and add various provisions to the General Law on Culture and Cultural Rights.",
    "Initiative with a draft decree to add section XXXV to Article 5 of the Federal Law on the Protection of Industrial Property.",
    "Initiative with a draft decree to add section IX to Article 2, section XXI to Article 12, and section IX to Article 13 of the Science and Technology Law.",
  ],
};

// Source: content/cv-en.md, section "Honors And Awards".
export const awards: string[] = [
  "Awarded third place in 2022 Ideaton organized by the Central American Bank for Economic Integration (CABEI), for the innovative proposal in the area of transparency and access to information.",
  "Special recognition awarded to my think tank, CAIINNO, in the 2022 National Award for Innovation and Best Practices in Data Protection, for the design and implementation of an artificial intelligence system. Granted by the Mexican National Institute for Transparency, Access to Information, and Data Protection.",
  "Winner, along with my think tank CAIINNO, of the 2019 National Award for Innovation and Best Practices in Data Protection, for the design and implementation of artificial intelligence solutions. Award granted by the Mexican National Institute for Transparency, Access to Information, and Data Protection.",
  "Selected to serve on the first-ever UNCTAD Ad Hoc Working Group on the Creative Economy, contributing to global policy discussions on creative industries.",
  "Winner of the 2017 Alumni Engagement Innovation Fund (AEIF) competition, granted by the U.S. Department of State.",
  "Recipient of the Fulbright scholarship for my Master studies in the U.S.",
  "First place in the national Mexican competition for Best Thesis on Copyright and Intellectual Property, awarded by the Mexican Copyright Office and the Ministry of Education.",
];

// Source: content/cv-en.md, section "CONFERENCE PRESENTATIONS (most relevant)".
export const talks: Talk[] = [
  { institution: "World Bank Group", country: "USA" },
  { institution: "Inter-American Development Bank", country: "USA" },
  { institution: "United Nations Conference on Trade and Development", country: "Switzerland" },
  { institution: "World Intellectual Property Organization", country: "Switzerland" },
  {
    institution: "International Union for the Protection of New Varieties of Plants",
    country: "Switzerland",
  },
  { institution: "Organization of American States", country: "USA" },
  { institution: "Latin American Integration Association", country: "Uruguay" },
  { institution: "United States Patent and Trademark Office", country: "USA" },
  { institution: "Spanish Patent and Trademark Office", country: "Spain" },
  { institution: "Government of Guatemala", country: "Guatemala" },
  { institution: "University of San Andres", country: "Argentina" },
];

// Source: content/cv-en.md, section "Professional Memberships".
export const memberships: string[] = [
  "Member of the UNCTAD´s Informal Working Group on Creative Economy.",
  "Board member of the Global Intellectual Property Alliance, and Co-leader of the Intellectual property diversity and inclusion Committee.",
  "Former Member of the Fulbright alumni Association, Washington DC Chapter.",
  "Former Board Member of the Mexican Fulbright Alumni Association (2015 – 2017).",
  "Former Board Member of the Mexican Alumni Association of the US Government (2015 – 2017).",
];

// Institutions mentioned in the CV (experience, talks, certifications and publications).
export const organizations: Organization[] = [
  { name: "World Bank" },
  { name: "Inter-American Development Bank", short: "IDB" },
  { name: "Development Bank of Latin America", short: "CAF" },
  { name: "United Nations Conference on Trade and Development", short: "UNCTAD" },
  { name: "World Intellectual Property Organization", short: "WIPO" },
  { name: "International Union for the Protection of New Varieties of Plants", short: "UPOV" },
  { name: "United States Patent and Trademark Office", short: "USPTO" },
  { name: "Organization of American States" },
  { name: "Latin American Integration Association" },
  { name: "Spanish Patent and Trademark Office" },
  { name: "British Council" },
  { name: "Global Intellectual Property Alliance" },
  { name: "The George Washington University" },
  { name: "University of San Andres" },
];
