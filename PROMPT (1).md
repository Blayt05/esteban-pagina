Construye desde cero, en este repositorio vacío, el sitio web personal de **Esteban Santamaría Hernández**: doctor en Ciencias de Gobierno, maestro en Derecho de Propiedad Intelectual (The George Washington University, becario Fulbright), fundador y Director del think tank CAIINNO, y consultor del Banco Mundial, el BID, CAF, la UNCTAD y la OMPI. Su trabajo gira en torno a la economía del conocimiento, la propiedad intelectual, la economía creativa, la innovación y la prospectiva estratégica, sobre todo en América Latina y el Caribe.

## Fuente de contenido (obligatorio)

En `content/` hay dos archivos con su CV completo:
- `content/cv-es.md`: versión en español
- `content/cv-en.md`: versión en inglés (la traducción equivalente)

**Todo el texto del sitio debe salir de esos archivos.** No inventes logros, cifras, fechas, cargos, enlaces ni datos de contacto. Si algo hace falta y no está en el CV (foto, correo, LinkedIn, enlaces a publicaciones), deja un marcador claro (`TODO:`) en un solo archivo de configuración para que yo lo complete. Usa el texto en inglés tal cual viene en `cv-en.md`; no lo vuelvas a traducir.

## Stack

- **Next.js** (última versión estable, App Router) + **TypeScript** + **Tailwind CSS**. Usa Server Components por defecto y `"use client"` solo donde haga falta interactividad (filtros de publicaciones, menú móvil, desplegables, modo oscuro).
- Sitio **100% estático**: `output: "export"` en `next.config`, sin API routes ni funciones de servidor. Usa `next/image` con `unoptimized: true` (requisito del export estático) y `next/font` para las tipografías.
- Contenido separado del diseño: pasa el CV a archivos de datos tipados (`src/data/es/*.ts` y `src/data/en/*.ts`, con tipos compartidos en `src/data/types.ts`) para experiencia, educación, publicaciones, etc. Así se puede actualizar el CV sin tocar componentes.
- **Bilingüe ES/EN** con un segmento dinámico `app/[locale]/` y `generateStaticParams` (el i18n integrado de Next no funciona con export estático). Rutas `/es` y `/en`, con `/` redirigiendo a `/es`, y un selector de idioma visible en la barra de navegación. Sin librerías de i18n pesadas: un diccionario simple basta.
- Listo para desplegar en **Vercel** sin configuración y en **GitHub Pages**. Para Pages, incluye el workflow `.github/workflows/deploy.yml` y deja `basePath` configurable por variable de entorno.

## Estructura: página única (one-page) con navegación fija y scroll suave

1. **Hero**: nombre, una línea de título profesional (p. ej. "Economía del conocimiento · Propiedad intelectual · Economía creativa"), frase central tomada de su texto ("Me apasiona convertir el conocimiento en oportunidades de desarrollo"), un espacio para foto (marcador) y botones a "Trayectoria" y "Contacto".
2. **Sobre mí**: versión resumida de la sección "¿Quién es Esteban Santamaría Hernández?" en 2 o 3 párrafos, con un enlace "Leer más" que despliega el texto completo.
3. **Cifras clave**: tarjetas con datos que ya vienen en el CV: impacto potencial en +40 millones de personas, 5 organismos multilaterales (Banco Mundial, BID, CAF, UNCTAD, OMPI), 6 iniciativas de ley impulsadas, subcampeón mundial de karate (China, 2009), entre otros. Cuenta tú mismo las cantidades en el CV; no las estimes.
4. **Organizaciones con las que ha colaborado**: franja con los nombres de las instituciones en texto estilizado (no descargues logotipos de internet).
5. **Experiencia profesional**: línea de tiempo vertical, de lo más reciente a lo más antiguo. Cada puesto muestra institución, cargo, país, periodo y viñetas desplegables. Incluye la consultoría internacional corta (OMPI, 2025).
6. **Formación académica**: doctorado, diploma de Estrasburgo, maestrías, licenciatura, con sus distinciones (Fulbright, Cum Laude, mejor tesis del país según INDAUTOR/SEP). Debajo, las **certificaciones**.
7. **Docencia**: instituciones donde enseña, destacando que es el único docente de América del Norte y Centroamérica en la Maestría en Innovación de la OMPI. Incluye las tesis asesoradas.
8. **Publicaciones**: lista filtrable por categoría (BID, académicas, CAIINNO/otras, revisor UNCTAD, artículos) y ordenada por año, con buscador simple.
9. **Asesoría legislativa**: las iniciativas de ley en tarjetas compactas.
10. **Reconocimientos y premios**.
11. **Ponencias internacionales**: instituciones y países presentados como lista o cuadrícula agrupada por país (Suiza, EE. UU., España, Uruguay, Perú, Guatemala, Argentina).
12. **Membresías profesionales**.
13. **Trayectoria deportiva (karate)**: sección con personalidad propia que conecte la disciplina del karate con su carrera, como lo hace él en su texto: cinta negra 4.º Dan, Panamericanos, Mundiales en Japón (2006) y China (2009, 2.º lugar), Universiadas.
14. **Contacto**: correo, LinkedIn y enlace a CAIINNO como marcadores `TODO:`, y un botón para descargar el CV en PDF (deja la ruta `public/cv-es.pdf` / `public/cv-en.pdf` preparada).
15. **Footer**: nombre, año y enlaces rápidos.

## Diseño

- Tono **profesional, institucional y sobrio**, propio de un experto en política pública y organismos multilaterales, pero con algo de calidez personal. Evita el aspecto de plantilla genérica.
- Paleta sugerida: azul marino profundo como color base, un acento cálido (dorado o terracota) y fondos claros. Tipografía serif elegante para títulos (p. ej. Fraunces o Playfair Display) y sans-serif legible para el texto (p. ej. Inter).
- Totalmente **responsive** (móvil primero), con modo oscuro opcional.
- Animaciones sutiles al hacer scroll (fade/slide) que respeten `prefers-reduced-motion`.
- Accesibilidad: HTML semántico, contraste AA, navegable con teclado y `alt` en las imágenes.
- SEO: la Metadata API de Next (`generateMetadata`) para `<title>`, meta descripción, Open Graph y `hreflang` ES/EN; `app/sitemap.ts` y datos estructurados JSON-LD de tipo `Person`.

## Entregables

- Proyecto funcionando con `npm install && npm run dev`, y compilación limpia con `npm run build` (sin errores de TypeScript ni de ESLint), que genere la carpeta `out/`.
- `README.md` en español que explique cómo correrlo, cómo editar el contenido (qué archivo cambiar para cada sección), cómo reemplazar los `TODO:` (foto, contacto, PDFs) y cómo desplegarlo en GitHub Pages.
- Antes de terminar, compila el sitio, revisa que las dos versiones de idioma tengan todas las secciones y que ningún texto se haya inventado o perdido respecto a los archivos de `content/`, y hazme un resumen de los `TODO:` pendientes.

Trabaja por etapas: primero la estructura y los datos, luego los componentes sección por sección y al final el pulido visual y el SEO. Haz commits descriptivos en cada etapa.
