import type { Publication } from "../types";

// Fuente: content/cv-es.md. Categorías:
// idb = "Publicaciones preparadas para el BID", academic = "Publicaciones académicas",
// caiinno = "Publicaciones", unctad = "Revisor de publicaciones de la UNCTAD", articles = "Artículos".
export const publications: Publication[] = [
  // Publicaciones preparadas para el Banco Interamericano de Desarrollo
  {
    category: "idb",
    title:
      "Derechos de propiedad intelectual y políticas públicas para la economía creativa: recomendaciones para América Latina y el Caribe",
    source: "Publicado en 2022.",
    year: 2022,
  },
  {
    category: "idb",
    title: "Guía sobre propiedad intelectual para los emprendedores creativos hondureños",
    source: "Publicado en 2023.",
    year: 2023,
  },
  {
    category: "idb",
    title: "Guía básica de elementos a considerar para iniciar un negocio en la economía creativa",
    source: "Publicado en 2020.",
    year: 2020,
  },

  // Publicaciones académicas
  {
    category: "academic",
    title:
      "Mexican Federal Law for the Protection of Cultural Heritage of Indigenous and Afro-Mexican Peoples and Communities",
    source:
      "GRUR International Journal of European and International IP Law, Volume 72, Issue 4, 2023.",
    year: 2023,
  },
  {
    category: "academic",
    title:
      "Tesis de Doctorado - Evaluación de la economía del conocimiento en México del 2006 al 2018, y una propuesta para su medición.",
  },
  {
    category: "academic",
    title: "Índice Nacional de Ciencia, Tecnología e Innovación 2015",
    source:
      "21° Encuentro Nacional sobre Desarrollo Regional en México, 2016, Asociación Mexicana de Ciencias para el Desarrollo Regional A.C.",
    year: 2016,
  },

  // Publicaciones
  {
    category: "caiinno",
    title: "Índice Nacional de Ciencia, Tecnología e Innovación 2025",
    source: "Publicado por CAIINNO en 2025.",
    year: 2025,
  },
  {
    category: "caiinno",
    title:
      "Propuestas para reformar legislaciones mexicanas a fin de promover las patentes verdes en el país",
    source: "Publicado por CAIINNO en 2025.",
    year: 2025,
  },
  {
    category: "caiinno",
    title:
      "Patentes verdes en México del 2017 al 2022 y su identificación por género: propiedad intelectual, desarrollo sustentable y economía circular",
    source: "Publicado por CAIINNO en 2024.",
    year: 2024,
  },
  {
    category: "caiinno",
    title: "Mujeres inventoras: América Latina construyendo el futuro: Brasil, Colombia, Chile y México",
    source: "Publicado por CAIINNO y Global Intellectual Property Alliance en 2023.",
    year: 2023,
  },
  {
    category: "caiinno",
    title:
      "Probabilidad y efecto del COVID-19 en la automatización de empleos en la economía creativa de México",
    source: "Publicado por CAIINNO en 2023.",
    year: 2023,
  },
  {
    category: "caiinno",
    title:
      "The emerald handbook of entrepreneurship in Latin America, Unleashing a millennial potential",
    source: "Publicado por Editorial Emerald Publishing Limited en 2022.",
    year: 2022,
    notes: ["Capítulo. The institutional change of intellectual property commercialization."],
  },
  {
    category: "caiinno",
    title:
      "Economía del conocimiento y economía creativa como herramientas para salir de crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico",
    source:
      "Publicado por CAIINNO en 2022 con financiamiento del Banco Interamericano de Desarrollo.",
    year: 2022,
    notes: [
      "Uno de los 10 proyectos seleccionados de entre más de 200 aplicaciones de todo el mundo.",
    ],
  },
  {
    category: "caiinno",
    title:
      "Economía creativa en México y su impacto en la economía nacional. Desempeño de las industrias basadas en el derecho de autor: cálculo del 2004 al 2019",
    source: "Publicado por CAIINNO en 2022.",
    year: 2022,
  },
  {
    category: "caiinno",
    title: "Mujeres inventoras patentando en México: resultados del 2017 al 2020",
    source: "Publicado por CAIINNO en 2022",
    year: 2022,
  },
  {
    category: "caiinno",
    title: "Índice Nacional de Ciencia, Tecnología e Innovación 2018",
    source: "Publicado en diciembre 2018.",
    year: 2018,
  },
  {
    category: "caiinno",
    title: "Mujeres inventoras patentando en México ¿cómo vamos?",
    source: "Publicado por CAIINNO en 2018.",
    year: 2018,
  },
  {
    category: "caiinno",
    title: "Transferencia de Tecnología y Derecho",
    source: "Publicado por Tirant México en 2017.",
    year: 2017,
    notes: ["Capítulo. Negociación de acuerdos de transferencia de tecnología."],
  },
  {
    category: "caiinno",
    title: "Emprendimiento y género en México",
    source: "Publicado por CAIINNO y GC Genera en 2017.",
    year: 2017,
  },
  {
    category: "caiinno",
    title: "Formación cívica y ética en México",
    source: "Publicado por CAIINNO en 2017.",
    year: 2017,
  },
  {
    category: "caiinno",
    title:
      "Propiedad intelectual, creatividad e innovación para el desarrollo de México: ideas y propuestas desde la sociedad civil organizada",
    source: "Publicado por CAIINNO en 2017.",
    year: 2017,
  },
  {
    category: "caiinno",
    title: "Observatorio Electoral de Ciencia y Tecnología Ramo 38: proceso electoral 2016 - 2017",
    source: "Publicado por CAIINNO en 2017.",
    year: 2017,
  },
  {
    category: "caiinno",
    title: "Habilidades para la innovación",
    source: "Publicado por el British Council en 2016.",
    year: 2016,
  },
  {
    category: "caiinno",
    title: "Observatorio electoral de ciencia y tecnología ramo 38: proceso electoral 2014 – 2015",
    source: "Publicado por CAIINNO en 2016.",
    year: 2016,
  },
  {
    category: "caiinno",
    title: "Índice Nacional de Ciencia, Tecnología e Innovación 2015",
    source: "Publicado por CAIINNO en 2015.",
    year: 2015,
  },

  // Revisor de publicaciones de la UNCTAD
  {
    category: "unctad",
    title:
      "Advancing the measurement of the creative economy: a revised framework for creative industries and trade",
    source: "Publicado en 2024.",
    year: 2024,
  },
  {
    category: "unctad",
    title: "Creative Economy Outlook 2024",
    source: "Publicado en 2024.",
    year: 2024,
  },
  {
    category: "unctad",
    title: "Creative Economy Outlook 2022",
    source: "Publicado en 2022.",
    year: 2022,
  },

  // Artículos (más relevantes)
  {
    category: "articles",
    title: "Closing the Gender gap in patents across Latin America",
    source: "Publicado en WIPO Magazine.",
  },
  {
    category: "articles",
    title: "Herramientas para usar la propiedad intelectual como motor de la economía creativa",
    source: "Publicado en Blog del Banco Interamericano de Desarrollo.",
  },
  {
    category: "articles",
    title: "Using intellectual property as a driver of the creative economy",
    source: "Publicado en Blog del Banco Interamericano de Desarrollo.",
  },
  {
    category: "articles",
    title: "Nollywood: el país africano que llegó a producir más películas que Hollywood",
    source: "Publicado en El País.",
  },
  {
    category: "articles",
    title: "Piratas a la vista",
    source: "Publicado en Blog del Banco Interamericano de Desarrollo.",
  },
  {
    category: "articles",
    title: "No es cuento: el cine impulsa la economía",
    source: "Publicado en Blog del Banco Interamericano de Desarrollo.",
  },
  {
    category: "articles",
    title:
      "La educación en la transformación digital en México: consideraciones en relación con la economía del conocimiento",
    source: "Publicado por el Instituto Federal de Telecomunicaciones.",
  },
];
