# Sitio web de Esteban Santamaría Hernández

Sitio personal bilingüe (español / inglés), de una sola página y 100 % estático, construido con
**Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS 4**.

- `/es/` — versión en español (la raíz `/` redirige aquí)
- `/en/` — versión en inglés

Todo el texto proviene de los CV en `content/cv-es.md` y `content/cv-en.md`.

## Requisitos

- Node.js 20.9 o superior (recomendado 22)

## Cómo correrlo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000 (abre /es/)
npm run build    # genera el sitio estático en la carpeta out/
npm run lint     # revisión con ESLint
```

Para ver la versión compilada en local, sirve la carpeta `out/` con cualquier servidor estático, por
ejemplo `npx serve out`.

## Cómo editar el contenido

El contenido está separado del diseño. Para actualizar el CV **no hace falta tocar componentes**:
edita los archivos de datos de cada idioma (`src/data/es/` y `src/data/en/`, misma estructura).

| Sección del sitio | Archivo |
| --- | --- |
| Hero (nombre, línea de título, frase central) y Sobre mí | `src/data/{es,en}/profile.ts` (`profile`) |
| Trayectoria deportiva (karate) | `src/data/{es,en}/profile.ts` (`sports`) |
| Cifras clave | `src/data/{es,en}/index.ts` (`keyFigures`; las cantidades se cuentan solas a partir de los datos) |
| Experiencia profesional (incluye la consultoría corta de la OMPI) | `src/data/{es,en}/experience.ts` |
| Formación académica y certificaciones | `src/data/{es,en}/education.ts` |
| Docencia y tesis asesoradas | `src/data/{es,en}/teaching.ts` |
| Publicaciones (con su categoría y año) | `src/data/{es,en}/publications.ts` |
| Asesoría legislativa, reconocimientos, ponencias, membresías y organizaciones | `src/data/{es,en}/achievements.ts` |
| Textos de interfaz (menú, títulos de sección, botones, meta descripción) | `src/i18n/dictionaries.ts` |
| Contacto, foto, URL del sitio, PDFs | `src/config/site.ts` |

Los tipos de todos los datos están en `src/data/types.ts`; TypeScript avisa si falta algún campo.

Notas:

- **Experiencia**: el orden en pantalla se calcula con `start` y `end` (`end: null` = actualidad), de lo
  más reciente a lo más antiguo. El campo `period` es el texto que se muestra.
- **Publicaciones**: `category` decide el filtro (`idb`, `academic`, `caiinno`, `unctad`, `articles`) y
  `year` el orden. `source` es el texto de publicación que se muestra.
- **Sobre mí**: se muestran los primeros `aboutSummaryCount` párrafos; el resto aparece con "Leer más".

## Pendientes (`TODO:`)

Todos los datos que no venían en el CV están en **un solo archivo**: `src/config/site.ts`.
Mientras un valor sea `null`, ese elemento no se muestra (en `npm run dev` aparece un aviso en la
sección de Contacto).

| Campo | Qué poner |
| --- | --- |
| `url` | URL pública definitiva (para Open Graph, hreflang, sitemap y JSON-LD). En GitHub Pages incluye la ruta del repositorio, p. ej. `https://usuario.github.io/esteban-pagina`. |
| `email` | Correo de contacto. |
| `linkedin` | URL del perfil de LinkedIn. |
| `caiinno` | URL del sitio de CAIINNO. |
| `photo` | Copia la foto en `public/` (p. ej. `public/esteban.jpg`) y escribe `"/esteban.jpg"`. Mientras sea `null` se ve un marcador con las iniciales. |
| `cvAvailable` | Copia los PDF en `public/cv-es.pdf` y `public/cv-en.pdf` y cambia a `true` para mostrar el botón "Descargar CV". |

## Despliegue

### Vercel

Importa el repositorio en Vercel; no requiere configuración. Deja `NEXT_PUBLIC_BASE_PATH` sin definir.

### GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `main`.

1. Sube el repositorio a GitHub.
2. En **Settings → Pages → Build and deployment**, elige **Source: GitHub Actions**.
3. Haz push a `main` (o ejecuta el workflow a mano desde la pestaña **Actions**).
4. Actualiza `url` en `src/config/site.ts` con la dirección final.

La ruta base (`basePath`) se toma de la variable de entorno `NEXT_PUBLIC_BASE_PATH`. El workflow la
obtiene automáticamente de GitHub Pages (p. ej. `/esteban-pagina` en un sitio de proyecto, vacía con un
dominio propio). Si necesitas forzar otro valor, crea la variable del repositorio
`NEXT_PUBLIC_BASE_PATH` en **Settings → Secrets and variables → Actions → Variables**.

Para probar la compilación con ruta base en local:

```bash
NEXT_PUBLIC_BASE_PATH=/esteban-pagina npm run build
```

## Estructura

```
content/                 CV fuente (español e inglés)
src/app/(root)/          Redirección de / a /es/
src/app/[locale]/        Layout (metadatos, fuentes, JSON-LD) y página por idioma
src/app/sitemap.ts       Sitemap con alternativas hreflang
src/components/          Una componente por sección (Server Components) y las interactivas
                         ("use client"): PublicationsExplorer, ReadMore, MobileMenu,
                         ThemeToggle, RevealObserver
src/config/site.ts       Configuración y TODO pendientes
src/data/                Datos del CV por idioma y tipos compartidos
src/i18n/dictionaries.ts Textos de interfaz ES/EN
```
