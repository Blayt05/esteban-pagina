import type { Profile, Sports } from "../types";

// Source: content/cv-en.md, section "Who is Esteban Santamaría-Hernández?"
const about = [
  "I am passionate about turning knowledge into development opportunities. My work focuses on the knowledge economy, intellectual property, the creative economy, innovation, and strategic foresight. I am the founder and Director of CAIINNO, and I hold a PhD in Government Sciences and a Master of Laws in Intellectual Property Law from The George Washington University, where I studied as a Fulbright scholar. Throughout my career, I have supported governments and multilateral organizations in transforming specialized knowledge into public value and development policies.",
  "I have worked with the World Bank, the Inter-American Development Bank (IDB), CAF, UNCTAD, and WIPO, mainly in Latin America and the Caribbean, but also in other regions of the world. I combine legal analysis, public policy design, economic reasoning, institutional strategy, and impact measurement to translate complex issues into concrete solutions.",
  "At the World Bank, I took part in missions to design national science, technology, and innovation policies, as well as in the review and analysis of national laws, particularly in intellectual property. I also led the design of policy notes on copyright, artificial intelligence, and online piracy, and designed training programs for MSMEs on monetization and the use of AI.",
  "At the IDB, I led the institution's first research on intellectual property challenges for the creative economy in Latin America and the Caribbean, including those related to artificial intelligence. As part of that work, I generated some of the limited evidence available in the literature on the effect of intellectual property protection on foreign direct investment. In addition, I developed public policy recommendations, wrote guides for creative entrepreneurs, and contributed to the design of the IDB's MOOC on the creative economy, where I was responsible for the intellectual property section and all the public policy cases presented.",
  "Together with another Fulbright alumnus, I founded CAIINNO, the first think tank created by Fulbright alumni in Latin America and the Caribbean. There, I have led studies that federal and local governments in Mexico have used to design public policies on science, technology, and innovation, women inventors, job automation, and innovation skills, among other topics. Our contributions have been incorporated into several state development plans, with a potential impact on at least 40 million people, and have driven initiatives to reform federal laws on science and technology, industrial property, culture, and electoral matters, among others. This work has transcended borders, with direct impact in countries such as Brazil, Colombia, and Chile, and has earned me invitations from the World Bank and the World Intellectual Property Organization to present its results.",
  "I have published documents and articles in outlets such as Oxford Academic and the WIPO Magazine of the World Intellectual Property Organization. For the United Nations Conference on Trade and Development (UNCTAD), I served as a reviewer of the 2022 and 2024 editions of the “Creative Economy Outlook” reports, as well as of the publication “Advancing the Measurement of the Creative Economy: A Revised Framework for Creative Industries and Trade.”",
  "Thanks to these results, I have had the opportunity to speak in countries such as Switzerland, the United States, Spain, and Uruguay, at forums including the Organization of American States, UNCTAD, the Latin American Integration Association, and the United States and Spanish Patent and Trademark Offices, among others.",
  "I have also built an academic and intellectual profile through my work as the only professor from North and Central America in the World Intellectual Property Organization's Master's in Innovation, where I teach representatives from several countries how to use intellectual property as a driver of development in Latin America and the Caribbean. My doctoral research is the first evaluation available in the literature of the knowledge economy at the subnational level in Mexico from 2006 to 2018, and the first proposal of an ad hoc model to measure the knowledge economy in Mexico, with the potential to be replicated in other developing countries. My master's thesis was recognized by the Ministry of Public Education and the National Copyright Institute as the best in the country on intellectual property and copyright.",
  "Much of what I have achieved is rooted in the discipline I developed through karate, which I began training at the age of 5. I was a national medalist in major tournaments, such as the National Universiades, and competed in two Pan American Karate Championships, winning second place in 2005 in Mexico. Through hard work, I also reached two World Karate Championships: the first in Japan in 2006, and the second in China in 2009, where I achieved my greatest athletic accomplishment: second place in the world.",
  "This combination of effort, perseverance, and sacrifice has allowed me to build an athletic, academic, and professional career with national and international achievements in each. Today, I bring that same determination to a single goal: turning knowledge, creativity, and innovation into development for Latin America and the Caribbean.",
];

export const profile: Profile = {
  name: "Esteban Santamaría-Hernández",
  tagline: ["Knowledge economy", "Intellectual property", "Creative economy"],
  headline: "I am passionate about turning knowledge into development opportunities",
  aboutTitle: "Who is Esteban Santamaría-Hernández?",
  about,
  aboutSummaryCount: 2,
};

// Source: content/cv-en.md, section "Athletic Career"
export const sports: Sports = {
  story: [about[8], about[9]],
  achievements: [
    "4th Dan Black Belt in Karate. Certificate issued by Sensei Javier Mantilla, coach of the only Olympic medalist from the Americas.",
    "Competed in two Pan American Karate Championships, winning second place at the 2005 Championship.",
    "Competed in two World Karate Championships, the first in Japan in 2006 and the second in China, where I achieved my greatest athletic accomplishment: second place.",
    "Medalist at three National Universiadas in Mexico.",
    "I have trained in karate since the age of 5.",
  ],
};
