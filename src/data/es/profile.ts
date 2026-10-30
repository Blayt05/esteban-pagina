import type { Profile, Sports } from "../types";

// Fuente: content/cv-es.md, sección "¿Quién es Esteban Santamaría Hernández?"
const about = [
  "Me apasiona convertir el conocimiento en oportunidades de desarrollo. Mi trabajo gira en torno a la economía del conocimiento, la propiedad intelectual, la economía creativa, la innovación y la prospectiva estratégica. Soy fundador y Director de CAIINNO, doctor en Ciencias de Gobierno y maestro en Derecho de la Propiedad Intelectual por The George Washington University, donde estudié como becario Fulbright. A lo largo de mi carrera he acompañado a gobiernos y organismos multilaterales a transformar conocimiento especializado en valor público y en políticas de desarrollo.",
  "He colaborado con el Banco Mundial, el Banco Interamericano de Desarrollo (BID), CAF, la UNCTAD y la OMPI, principalmente en América Latina y el Caribe, aunque también en otras regiones del mundo. Combino análisis jurídico, diseño de política pública, razonamiento económico, estrategia institucional y medición de impacto para traducir asuntos complejos en soluciones concretas.",
  "En el Banco Mundial participé en misiones para diseñar políticas nacionales de ciencia, tecnología e innovación, así como en la revisión y el análisis de leyes nacionales, particularmente de propiedad intelectual. También lideré el diseño de notas de política pública sobre derechos de autor, inteligencia artificial y piratería en línea, y diseñé capacitaciones para MIPYMES sobre monetización y uso de IA.",
  "En el BID lideré la primera investigación de la institución sobre los desafíos de propiedad intelectual para la economía creativa en América Latina y el Caribe, incluidos los vinculados con la inteligencia artificial. Como parte de ese trabajo, generé una de las pocas evidencias disponibles en la literatura sobre el efecto de la protección de la propiedad intelectual en la inversión extranjera directa. Además, desarrollé recomendaciones de política pública, redacté guías para emprendedores creativos y participé en el diseño del MOOC del BID sobre economía creativa, donde estuve a cargo del apartado de propiedad intelectual y de todos los casos de política pública presentados.",
  "Junto con otro exbecario Fulbright fundé CAIINNO, el primer think tank creado por exbecarios Fulbright en América Latina y el Caribe. Desde ahí he liderado estudios que gobiernos federales y locales en México han utilizado para diseñar políticas públicas en ciencia, tecnología e innovación, mujeres inventoras, automatización del empleo y habilidades para innovar, entre otros temas. Nuestros aportes se han incorporado en varios planes estatales de desarrollo, con un impacto potencial para al menos 40 millones de personas, y han impulsado iniciativas de reforma a leyes federales en materia de ciencia y tecnología, propiedad industrial, cultura y materia electoral, entre otras. Este trabajo ha trascendido fronteras, con impacto directo en países como Brasil, Colombia y Chile, y me ha valido invitaciones del Banco Mundial y de la Organización Mundial de la Propiedad Intelectual para presentar sus resultados.",
  "He publicado documentos y artículos en espacios como Oxford Academic y la Revista de la Organización Mundial de la Propiedad Intelectual (OMPI). Para la Conferencia de las Naciones Unidas sobre Comercio y Desarrollo (UNCTAD), fui revisor de los informes “Perspectivas de la Economía Creativa” en sus ediciones 2022 y 2024, así como de la publicación “Avanzando en la Medición de la Economía Creativa: Un Marco Revisado para las Industrias Creativas y el Comercio”.",
  "Gracias a estos resultados, he tenido la oportunidad de participar como ponente en países como Suiza, Estados Unidos, España y Uruguay, en espacios como la Organización de los Estados Americanos, la UNCTAD, la Asociación Latinoamericana de Integración y las Oficinas de Patentes y Marcas de los Estados Unidos y de España, entre otros.",
  // Corrección mínima respecto al CV: "mediante mi labor el único docente" → "mediante mi labor como el único docente".
  "También he consolidado un perfil académico e intelectual mediante mi labor como el único docente de América del Norte y Centroamérica en la Maestría en Innovación de la Organización Mundial de la Propiedad Intelectual, donde explico a representantes de varios países cómo utilizar a la propiedad intelectual como motor de desarrollo de América Latina y el Caribe. Mi investigación doctoral es la primera evaluación disponible en la literatura de la economía del conocimiento a nivel subnacional de México del 2006 al 2018, y es la primera propuesta de modelo ad hoc para medir la economía del conocimiento en México, con potencial de ser replicada en otros países en desarrollo. Mi tesis de Maestría fue galardonada por la Secretaría de Educación Pública y el Instituto Nacional del Derecho de Autor como la mejor del país en temas de propiedad intelectual y derechos de autor.",
  "Mucho de lo que he logrado tiene raíz en la disciplina que formé en el karate, que comencé a entrenar a los 5 años. Fui medallista nacional en torneos de gran relevancia, como las Universiadas Nacionales, y participé en dos Campeonatos Panamericanos de Karate, donde obtuve el segundo lugar en 2005, en México. Con mucho esfuerzo llegué también a dos Campeonatos Mundiales de Karate: el primero en Japón, en 2006, y el segundo en China, en 2009, donde alcancé mi mayor logro deportivo: el segundo lugar mundial.",
  "Esa combinación de esfuerzo, constancia y sacrificio me ha permitido construir una trayectoria deportiva, académica y profesional con logros nacionales e internacionales en cada una. Hoy pongo esa misma determinación al servicio de un objetivo: que el conocimiento, la creatividad y la innovación se conviertan en desarrollo para América Latina y el Caribe.",
];

export const profile: Profile = {
  name: "Esteban Santamaría Hernández",
  tagline: [
    "Economía del conocimiento",
    "Propiedad intelectual",
    "Economía creativa",
  ],
  headline: "Me apasiona convertir el conocimiento en oportunidades de desarrollo",
  aboutTitle: "¿Quién es Esteban Santamaría Hernández?",
  about,
  aboutSummaryCount: 2,
};

// Fuente: content/cv-es.md, sección "Carrera deportiva"
export const sports: Sports = {
  story: [about[8], about[9]],
  achievements: [
    "Cinta negra 4to Dan de Karate. Certificado emitido por el Sensei Javier Mantilla, entrenador del único medallista Olímpico que tiene el continente americano.",
    "Participación en dos Campeonatos Panamericanos de Karate, obteniendo un segundo lugar en el Campeonato del 2005.",
    "Participación en dos Campeonatos Mundiales de Karate, el primero en Japón, en el 2006, y el segundo en China, obteniendo como máximo logro deportivo un segundo lugar en este último.",
    "Medallista en tres Universiadas Nacionales en México.",
    "Entreno karate desde los 5 años.",
  ],
};
